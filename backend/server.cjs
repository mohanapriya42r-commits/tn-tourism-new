const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// User Schema & Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "traveler"
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

// Saved Trip Schema & Model
const savedTripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  userName: { type: String, required: true, trim: true },
  userEmail: { type: String, required: true, trim: true, lowercase: true },
  source: { type: String, required: true, trim: true }, // Starting District
  destination: { type: String, required: true, trim: true }, // Formatted Destination label
  destinations: { type: [String], default: [] }, // Multi-selected destination districts
  travelers: { type: Number, default: 2, min: 1 },
  days: { type: Number, default: 3, min: 1 },
  startDate: { type: String, default: "" },
  budget: { type: Number, default: 7500 },
  budgetLevel: { type: String, default: "low" },
  travelType: { type: String, default: "family" },
  accommodationPref: { type: String, default: "budget" },
  foodPref: { type: String, default: "local_mess" },
  categories: { type: [String], default: [] },
  transportMode: { type: String, default: "Local Sightseeing & District Transfers" },
  totalEstimatedCost: { type: String, default: "₹7,500" },
  costs: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  itinerary: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },
  places: {
    type: [String],
    default: []
  },
  hotels: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },
  suggestions: {
    type: [String],
    default: []
  },
  generatedPlan: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  status: {
    type: String,
    enum: ["Generated", "Confirmed", "In Progress", "Completed", "Cancelled"],
    default: "Generated"
  }
}, {
  timestamps: true
});

const SavedTrip = mongoose.model("SavedTrip", savedTripSchema);

// Submitted Hotel Schema & Model
const submittedHotelSchema = new mongoose.Schema({
  hotelName: { type: String, required: true, trim: true },
  ownerName: { type: String, required: true, trim: true },
  userConnection: { type: String, enum: ["Owner", "Recommendation"], default: "Owner" },
  mobile: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  cityDistrict: { type: String, required: true, trim: true },
  googleMapsUrl: { type: String, default: "" },
  description: { type: String, required: true, trim: true },
  category: { type: String, required: true, default: "Budget Stay" },
  priceRange: { type: String, required: true, default: "₹1,500 - ₹3,000 / night" },
  amenities: { type: [String], default: [] },
  imageUrls: { type: [String], default: [] },
  websiteUrl: { type: String, default: "" },
  status: { type: String, enum: ["Pending Approval", "Approved", "Rejected"], default: "Pending Approval" }
}, {
  timestamps: true
});

const SubmittedHotel = mongoose.model("SubmittedHotel", submittedHotelSchema);

// Test API Endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Tamil Nadu Tourism Backend API is Running!",
    status: "online"
  });
});

// --- JWT & TOKEN AUTHENTICATION HELPERS ---
const JWT_SECRET = process.env.JWT_SECRET || "tn_tourism_secure_secret_key_2026_tamil_nadu";

function generateAuthToken(user) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    id: user._id ? user._id.toString() : user.id,
    email: user.email,
    name: user.name,
    role: user.role || "traveler",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (14 * 24 * 60 * 60) // 14 days valid
  })).toString("base64url");
  const signature = crypto.createHmac("sha256", JWT_SECRET).update(`${header}.${payload}`).digest("base64url");
  return `${header}.${payload}.${signature}`;
}

function verifyAuthToken(token) {
  try {
    if (!token) return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const expectedSig = crypto.createHmac("sha256", JWT_SECRET).update(`${header}.${payload}`).digest("base64url");
    if (signature !== expectedSig) return null;
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return decoded;
  } catch (err) {
    return null;
  }
}

// Registration API Endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, mobile, password, confirmPassword, role } = req.body;

    // 1. Validate required fields
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields (Full Name, Email, Mobile Number, Password) are required."
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const cleanMobile = mobile.toString().replace(/[^0-9]/g, "");

    // Validate Name Length
    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Full Name must be at least 2 characters long."
      });
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address (e.g. name@example.com)."
      });
    }

    // Validate Mobile Number (min 10 digits)
    if (cleanMobile.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number."
      });
    }

    // Validate Password Length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long."
      });
    }

    // Validate Confirm Password if supplied
    if (confirmPassword !== undefined && confirmPassword !== password) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match. Please verify both password fields."
      });
    }

    // 2. Check whether email already exists (prevent duplicate registration)
    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email address is already registered. Please log in instead."
      });
    }

    // 3. Hash password using bcryptjs
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 4. Create & save new user in MongoDB
    const newUser = await User.create({
      name: trimmedName,
      email: trimmedEmail,
      mobile: cleanMobile,
      password: hashedPassword,
      role: role || "traveler"
    });

    const userPayload = {
      id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      mobile: newUser.mobile,
      role: newUser.role
    };

    const token = generateAuthToken(userPayload);

    // 5. Return success JSON response
    res.status(201).json({
      success: true,
      message: "Registration successful! Welcome to Tamil Nadu Tourism.",
      user: userPayload,
      token
    });

  } catch (error) {
    console.error("Registration Server Error:", error);
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "An account with this email already exists."
      });
    }
    res.status(500).json({
      success: false,
      message: "Registration failed due to server error: " + error.message
    });
  }
});

// Login API Endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Both email address and password are required."
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // 2. Find user in MongoDB by email
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address or password. Please verify your credentials."
      });
    }

    // 3. Compare password with bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address or password. Please verify your credentials."
      });
    }

    const userPayload = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      role: user.role
    };

    const token = generateAuthToken(userPayload);

    // 4. Return success JSON response
    res.status(200).json({
      success: true,
      message: "Login successful! Welcome back.",
      user: userPayload,
      token
    });

  } catch (error) {
    console.error("Login Server Error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed due to server error: " + error.message
    });
  }
});

// Verify Active Session Endpoint
app.get("/api/auth/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const decoded = verifyAuthToken(token);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid or expired session token" });
    }
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User account not found" });
    }
    res.status(200).json({
      success: true,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Forgot Password API Endpoint
app.post("/api/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Please provide your registered email address." });
    }
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res.status(404).json({ success: false, message: "No account found with this email address. Please register for a new account." });
    }
    res.status(200).json({
      success: true,
      message: `Password reset verification sent for ${user.email}. You can now proceed to set a new password.`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Reset Password API Endpoint
app.post("/api/reset-password", async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ success: false, message: "Email and new password are required." });
    }
    if (confirmPassword && newPassword !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match." });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ success: false, message: "New password must be at least 6 characters long." });
    }
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res.status(404).json({ success: false, message: "User account not found." });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Your password has been successfully reset! You can now log in with your new credentials."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- HOTEL SUBMISSION & APPROVAL ENDPOINTS ---

// 1. Submit a New Hotel (Public - Status default: "Pending Approval")
app.post("/api/hotels/submit", async (req, res) => {
  try {
    const {
      hotelName,
      ownerName,
      userConnection,
      mobile,
      email,
      address,
      cityDistrict,
      googleMapsUrl,
      description,
      category,
      priceRange,
      amenities,
      imageUrls,
      websiteUrl
    } = req.body;

    if (!hotelName || !ownerName || !mobile || !email || !address || !cityDistrict || !description) {
      return res.status(400).json({
        message: "Please complete all required fields."
      });
    }

    // Prevent duplicate entries
    const existing = await SubmittedHotel.findOne({
      hotelName: new RegExp(`^${hotelName.trim()}$`, "i"),
      cityDistrict: new RegExp(`^${cityDistrict.trim()}$`, "i")
    });
    if (existing) {
      return res.status(400).json({
        message: "This business may already be listed. Please check the existing listings before submitting."
      });
    }

    const newHotel = await SubmittedHotel.create({
      hotelName,
      ownerName,
      userConnection: userConnection === "Recommendation" ? "Recommendation" : "Owner",
      mobile,
      email,
      address,
      cityDistrict,
      googleMapsUrl: googleMapsUrl || "",
      description,
      category: category || "Budget Stay",
      priceRange: priceRange || "₹1,500 - ₹3,000 / night",
      amenities: Array.isArray(amenities) ? amenities : (amenities ? amenities.split(",").map(a => a.trim()) : []),
      imageUrls: Array.isArray(imageUrls) ? imageUrls : (imageUrls ? [imageUrls] : []),
      websiteUrl: websiteUrl || "",
      status: "Pending Approval"
    });

    res.status(201).json({
      message: "Hotel submitted successfully! It will be reviewed by our manager team before being published.",
      hotel: newHotel
    });
  } catch (error) {
    console.error("Submit Hotel Error:", error);
    res.status(500).json({
      message: "Failed to submit hotel: " + error.message
    });
  }
});

// 2. Get Publicly Approved Hotels (Public)
app.get("/api/hotels/approved", async (req, res) => {
  try {
    const approvedHotels = await SubmittedHotel.find({ status: "Approved" }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: approvedHotels.length,
      hotels: approvedHotels
    });
  } catch (error) {
    console.error("Fetch Approved Hotels Error:", error);
    res.status(500).json({
      message: "Failed to fetch approved hotels: " + error.message
    });
  }
});

// 3. Get All Submitted Hotels (For Manager Portal)
app.get("/api/hotels/all", async (req, res) => {
  try {
    const allSubmitted = await SubmittedHotel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: allSubmitted.length,
      hotels: allSubmitted
    });
  } catch (error) {
    console.error("Fetch All Submitted Hotels Error:", error);
    res.status(500).json({
      message: "Failed to fetch submitted hotels: " + error.message
    });
  }
});

// 4. Manager Action: Update Hotel Status (Approve / Reject)
app.patch("/api/hotels/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Approved", "Rejected", "Pending Approval"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value. Must be 'Approved', 'Rejected', or 'Pending Approval'."
      });
    }

    const updatedHotel = await SubmittedHotel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ message: "Submitted hotel record not found." });
    }

    res.status(200).json({
      message: `Hotel status updated to ${status} successfully.`,
      hotel: updatedHotel
    });
  } catch (error) {
    console.error("Update Hotel Status Error:", error);
    res.status(500).json({
      message: "Failed to update status: " + error.message
    });
  }
});

// --- TRAVEL SERVICES SCHEMA & ENDPOINTS ---

const travelServiceSchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  ownerName: { type: String, required: true, trim: true },
  userConnection: { type: String, enum: ["Owner", "Recommendation"], default: "Owner" },
  mobile: { type: String, required: true, trim: true },
  email: { type: String, default: "" },
  district: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  transportType: { type: String, required: true, enum: ["Bus", "Van", "Taxi"], default: "Taxi" },
  description: { type: String, required: true, trim: true },
  services: { type: [String], default: [] },
  priceRange: { type: String, default: "₹15 - ₹25 / km" },
  location: { type: String, default: "" },
  website: { type: String, default: "" },
  images: { type: [String], default: [] },
  rating: { type: Number, default: 4.7 },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
}, {
  timestamps: true
});

const TravelService = mongoose.model("TravelService", travelServiceSchema);

// Seed Default Travel Services if empty
const seedTravelServices = async () => {
  try {
    const count = await TravelService.countDocuments();
    if (count === 0) {
      const sampleTravelServices = [
        {
          companyName: "SETC Express Transport",
          ownerName: "State Transport Board",
          mobile: "044-24794707",
          email: "support@tnstc.in",
          district: "Chennai",
          address: "Kilambakkam Bus Terminus, Chennai - 600127",
          transportType: "Bus",
          description: "Official government express bus service offering AC Sleeper and Ultra Deluxe connectivity across all 38 districts of Tamil Nadu.",
          services: ["AC Sleeper", "Non-AC Seater", "Ultra Deluxe", "24/7 Service"],
          priceRange: "₹350 - ₹1,200",
          location: "https://maps.google.com/?q=Kilambakkam+Bus+Terminus",
          website: "https://www.tnstc.in",
          images: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"],
          rating: 4.6,
          status: "Approved"
        },
        {
          companyName: "Madurai Meenakshi Cabs & Travels",
          ownerName: "R. Sundaram",
          mobile: "0452-2345678",
          email: "info@meenakshicabs.in",
          district: "Madurai",
          address: "West Tower Street, Near Temple Gate, Madurai - 625001",
          transportType: "Taxi",
          description: "24x7 local and outstation taxi service in Madurai. Specializing in temple circuit tours to Rameswaram, Kodaikanal, and Kanyakumari.",
          services: ["Outstation Cabs", "Temple Tour Packages", "Airport Transfers", "AC Sedans & SUVs"],
          priceRange: "₹14 - ₹18 / km",
          location: "https://maps.google.com/?q=Meenakshi+Temple+Madurai",
          website: "https://www.meenakshicabs.in",
          images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"],
          rating: 4.8,
          status: "Approved"
        },
        {
          companyName: "Madurai Horizon Tempo & Vans",
          ownerName: "M. Saravanan",
          mobile: "0452-2987654",
          email: "booking@horizonvan.in",
          district: "Madurai",
          address: "Ellis Nagar Bus Stand Road, Madurai - 625016",
          transportType: "Van",
          description: "Luxury 12 to 16 seater AC Tempo Travellers for group tours, family pilgrimages, and outstation trips.",
          services: ["12 Seater Tempo Traveller", "16 Seater Luxury Van", "Pushback Seats", "Hill Station Trips"],
          priceRange: "₹3,500 - ₹5,500 / day",
          location: "https://maps.google.com/?q=Ellis+Nagar+Madurai",
          website: "https://www.horizonvan.in",
          images: ["https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"],
          rating: 4.7,
          status: "Approved"
        },
        {
          companyName: "Nilgiri Mountain Cabs",
          ownerName: "K. Boopathy",
          mobile: "0423-2445566",
          email: "ooty@nilgiricabs.com",
          district: "The Nilgiris",
          address: "Commercial Road, Near Charing Cross, Ooty - 643001",
          transportType: "Taxi",
          description: "Experienced mountain drivers for Ooty, Coonoor, Kotagiri sightseeing, Doddabetta peak, and Mudumalai safari trips.",
          services: ["Hill Drivers", "Sightseeing Cab", "Estate Tours", "Coimbatore Pickup"],
          priceRange: "₹2,200 - ₹3,800 / day",
          location: "https://maps.google.com/?q=Charing+Cross+Ooty",
          website: "https://www.nilgiricabs.com",
          images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"],
          rating: 4.9,
          status: "Approved"
        },
        {
          companyName: "Kongu Express Tourist Bus",
          ownerName: "P. Shanmugam",
          mobile: "0422-2567890",
          email: "contact@kongutravels.in",
          district: "Coimbatore",
          address: "Gandhipuram Bus Stand Road, Coimbatore - 641012",
          transportType: "Bus",
          description: "Daily AC Sleeper and Deluxe bus connectivity between Coimbatore, Chennai, Bangalore, and Ooty.",
          services: ["Volvo AC Sleeper", "Daily Intercity Bus", "GPS Tracking", "Onboard Charging"],
          priceRange: "₹500 - ₹1,400",
          location: "https://maps.google.com/?q=Gandhipuram+Coimbatore",
          website: "https://www.kongutravels.in",
          images: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"],
          rating: 4.7,
          status: "Approved"
        },
        {
          companyName: "Coimbatore City Cabs & Vans",
          ownerName: "V. Prakash",
          mobile: "0422-4399999",
          email: "citycabs@coimbatore.in",
          district: "Coimbatore",
          address: "Railway Station Road, Coimbatore - 641018",
          transportType: "Van",
          description: "Spacious AC Vans and Tempo Travellers for Marudhamalai, Siruvani Waterfalls, and Valparai hill trips.",
          services: ["Tempo Traveller", "Airport Pick & Drop", "Outstation Packages", "24/7 Support"],
          priceRange: "₹3,800 - ₹6,000 / day",
          location: "https://maps.google.com/?q=Coimbatore+Railway+Station",
          website: "https://www.coimbatorecitycabs.in",
          images: ["https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"],
          rating: 4.6,
          status: "Approved"
        },
        {
          companyName: "Kanyakumari Ocean View Taxi",
          ownerName: "T. Arumugam",
          mobile: "04652-246800",
          email: "oceanview@kanyakumaritravels.in",
          district: "Kanyakumari",
          address: "Beach Road, Near Sunset Point, Kanyakumari - 629702",
          transportType: "Taxi",
          description: "Reliable cabs for Trivandrum Airport transfer, Padmanabhapuram Palace, Suchindram Temple, and Kovalam trips.",
          services: ["Coastal Sightseeing", "Airport Pickups", "Sunrise & Sunset Packages"],
          priceRange: "₹1,800 - ₹3,200 / day",
          location: "https://maps.google.com/?q=Kanyakumari+Beach",
          website: "https://www.kanyakumaritravels.in",
          images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"],
          rating: 4.8,
          status: "Approved"
        },
        {
          companyName: "Trichy Rockfort Travels & Vans",
          ownerName: "S. Manikandan",
          mobile: "0431-2701122",
          email: "info@rockforttravels.com",
          district: "Tiruchirappalli",
          address: "Central Bus Stand Road, Trichy - 620001",
          transportType: "Van",
          description: "AC Tempo Travellers and mini buses for Srirangam, Samayapuram, Thanjavur Big Temple, and Kumbakonam pilgrimage circuits.",
          services: ["Temple Circuit Bus", "Group Vans", "AC Seater", "Local Sightseeing"],
          priceRange: "₹3,200 - ₹5,000 / day",
          location: "https://maps.google.com/?q=Trichy+Central+Bus+Stand",
          website: "https://www.rockforttravels.com",
          images: ["https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"],
          rating: 4.7,
          status: "Approved"
        },
        {
          companyName: "Thanjavur Chola Heritage Cabs",
          ownerName: "K. Rajendran",
          mobile: "04362-230987",
          email: "cholacabs@thanjavur.in",
          district: "Thanjavur",
          address: "South Main Street, Near Big Temple, Thanjavur - 613001",
          transportType: "Taxi",
          description: "Heritage tourism taxis covering UNESCO Great Living Chola Temples in Thanjavur, Gangaikonda Cholapuram, and Darasuram.",
          services: ["UNESCO Heritage Tour", "AC Cab Service", "Guide Included Options"],
          priceRange: "₹15 / km",
          location: "https://maps.google.com/?q=Brihadeeswarar+Temple+Thanjavur",
          website: "https://www.cholacabs.in",
          images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"],
          rating: 4.9,
          status: "Approved"
        },
        {
          companyName: "Salem Steel City Express Bus",
          ownerName: "M. Dhanapal",
          mobile: "0427-2415500",
          email: "salemexpress@bus.in",
          district: "Salem",
          address: "New Bus Stand, Salem - 636004",
          transportType: "Bus",
          description: "Frequent bus services between Salem, Yercaud hill station, Namakkal, Erode, and Chennai.",
          services: ["Yercaud Hill Bus", "Intercity Express", "AC & Non-AC"],
          priceRange: "₹250 - ₹850",
          location: "https://maps.google.com/?q=Salem+New+Bus+Stand",
          website: "https://www.salemexpress.in",
          images: ["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"],
          rating: 4.5,
          status: "Approved"
        }
      ];

      await TravelService.insertMany(sampleTravelServices);
      console.log("🌱 Default Travel Services seeded successfully in MongoDB!");
    }
  } catch (err) {
    console.error("Travel Services Seeding Error:", err.message);
  }
};

// 1. Submit New Travel Service (Public - Default Status: "Pending")
app.post("/api/travel-services", async (req, res) => {
  try {
    const {
      companyName,
      ownerName,
      userConnection,
      mobile,
      email,
      district,
      address,
      transportType,
      description,
      services,
      priceRange,
      location,
      website,
      images
    } = req.body;

    if (!companyName || !ownerName || !mobile || !district || !address || !transportType || !description) {
      return res.status(400).json({
        message: "Please complete all required fields."
      });
    }

    // Check duplicate entries
    const existing = await TravelService.findOne({
      companyName: new RegExp(`^${companyName.trim()}$`, "i"),
      district: new RegExp(`^${district.trim()}$`, "i")
    });
    if (existing) {
      return res.status(400).json({
        message: "This business may already be listed. Please check the existing listings before submitting."
      });
    }

    const newService = await TravelService.create({
      companyName,
      ownerName,
      userConnection: userConnection === "Recommendation" ? "Recommendation" : "Owner",
      mobile,
      email: email || "",
      district,
      address,
      transportType: ["Bus", "Van", "Taxi"].includes(transportType) ? transportType : "Taxi",
      description,
      services: Array.isArray(services) ? services : (services ? services.split(",").map(s => s.trim()) : []),
      priceRange: priceRange || "₹15 - ₹25 / km",
      location: location || "",
      website: website || "",
      images: Array.isArray(images) ? images : (images ? [images] : []),
      rating: 4.7,
      status: "Pending"
    });

    res.status(201).json({
      success: true,
      message: "Travel service submitted successfully! It will be reviewed by our manager before being published.",
      travelService: newService
    });
  } catch (error) {
    console.error("Submit Travel Service Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit travel service: " + error.message
    });
  }
});

// 2. Get Publicly Approved Travel Services (Public with optional district & transportType filters)
app.get("/api/travel-services", async (req, res) => {
  try {
    const { district, transportType } = req.query;
    const filter = { status: "Approved" };

    if (district && district.trim() !== "" && district !== "All") {
      filter.district = new RegExp(`^${district.trim()}$`, "i");
    }

    if (transportType && transportType.trim() !== "" && transportType !== "All") {
      filter.transportType = new RegExp(`^${transportType.trim()}$`, "i");
    }

    const services = await TravelService.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      travelServices: services
    });
  } catch (error) {
    console.error("Fetch Approved Travel Services Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch travel services: " + error.message
    });
  }
});

// 3. Get All Travel Services (Manager Portal)
app.get("/api/travel-services/all", async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};

    if (status && ["Pending", "Approved", "Rejected"].includes(status)) {
      filter.status = status;
    }

    const services = await TravelService.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      travelServices: services
    });
  } catch (error) {
    console.error("Fetch All Travel Services Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch travel services: " + error.message
    });
  }
});

// 4. Get Single Travel Service Details
app.get("/api/travel-services/:id", async (req, res) => {
  try {
    const service = await TravelService.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ success: false, message: "Travel service not found." });
    }
    res.status(200).json({ success: true, travelService: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 5. Update Travel Service Details (Manager Edit)
app.put("/api/travel-services/:id", async (req, res) => {
  try {
    const updated = await TravelService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ success: false, message: "Travel service not found." });
    }
    res.status(200).json({
      success: true,
      message: "Travel service updated successfully.",
      travelService: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 6. Update Status (Manager Action: Approve / Reject)
app.put("/api/travel-services/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value. Must be 'Pending', 'Approved', or 'Rejected'."
      });
    }

    const updated = await TravelService.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Travel service not found." });
    }

    res.status(200).json({
      success: true,
      message: `Travel service status updated to ${status}.`,
      travelService: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH status alias for flexibility
app.patch("/api/travel-services/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await TravelService.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, travelService: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 7. Delete Travel Service
app.delete("/api/travel-services/:id", async (req, res) => {
  try {
    const deleted = await TravelService.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Travel service not found." });
    }
    res.status(200).json({ success: true, message: "Travel service deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- ADMIN PORTAL ENDPOINTS ---

// Serve Admin Portal static files at /admin
app.use('/admin', express.static(path.join(__dirname, '../admin-portal')));

// 1. Admin Login API
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Admin email and password are required.' });
    }

    // Default Super Admin credentials or database admin
    const isAdminCredentials = (email.toLowerCase() === 'admin@tourism.com' && password === 'admin123');

    // Also check if User collection has an admin user
    let userAdmin = null;
    if (!isAdminCredentials) {
      userAdmin = await User.findOne({ email: email.toLowerCase(), role: 'admin' });
      if (userAdmin) {
        const isValid = await bcrypt.compare(password, userAdmin.password);
        if (!isValid) userAdmin = null;
      }
    }

    if (!isAdminCredentials && !userAdmin) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials or unauthorized access.' });
    }

    res.status(200).json({
      success: true,
      message: 'Admin login successful!',
      admin: {
        name: userAdmin ? userAdmin.name : 'State Tourism Administrator',
        email: email.toLowerCase(),
        role: 'Super Admin'
      },
      token: 'admin-auth-token-tn-tourism'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Admin login error: ' + error.message });
  }
});

// 2. Admin Change Password API
app.post('/api/admin/change-password', async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters long.' });
    }

    // If user exists in User collection as admin
    const adminUser = await User.findOne({ email: email ? email.toLowerCase() : 'admin@tourism.com' });
    if (adminUser) {
      const salt = await bcrypt.genSalt(10);
      adminUser.password = await bcrypt.hash(newPassword, salt);
      await adminUser.save();
    }

    res.status(200).json({ success: true, message: 'Admin password updated successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. Admin Dashboard Summary Statistics API
app.get('/api/admin/dashboard-stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: { $ne: 'admin' } });
    const totalTrips = await SavedTrip.countDocuments();
    
    const totalHotels = await SubmittedHotel.countDocuments();
    const pendingHotels = await SubmittedHotel.countDocuments({ status: 'Pending Approval' });
    const approvedHotels = await SubmittedHotel.countDocuments({ status: 'Approved' });
    const rejectedHotels = await SubmittedHotel.countDocuments({ status: 'Rejected' });

    const totalTravels = await TravelService.countDocuments();
    const pendingTravels = await TravelService.countDocuments({ status: 'Pending' });
    const approvedTravels = await TravelService.countDocuments({ status: 'Approved' });
    const rejectedTravels = await TravelService.countDocuments({ status: 'Rejected' });

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalTrips,
        totalHotels,
        pendingHotels,
        approvedHotels,
        rejectedHotels,
        totalTravels,
        pendingTravels,
        approvedTravels,
        rejectedTravels
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 4. USER MANAGEMENT APIs
// Get all registered users (PASSWORDS ARE EXCLUDED)
app.get('/api/admin/users', async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } }).select('-password').sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: users.length, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Toggle User Active/Inactive Status
app.patch('/api/admin/users/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['Active', 'Inactive'].includes(status)) {
      return res.status(400).json({ success: false, message: "Status must be 'Active' or 'Inactive'." });
    }
    const updated = await User.findByIdAndUpdate(req.params.id, { status }, { new: true }).select('-password');
    if (!updated) return res.status(404).json({ success: false, message: 'User not found.' });
    res.status(200).json({ success: true, message: `User marked as ${status}.`, user: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete Registered User
app.delete('/api/admin/users/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'User not found.' });
    res.status(200).json({ success: true, message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 5. TRIP PLANNER MANAGEMENT APIs

// Helper to extract authenticated user from Authorization header
const getAuthUserFromReq = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    return verifyAuthToken(token);
  }
  return null;
};

// Save a User Generated Trip Plan
app.post('/api/trips', async (req, res) => {
  try {
    const authUser = getAuthUserFromReq(req);
    const {
      userId,
      userName,
      userEmail,
      source,
      destination,
      destinations,
      travelers,
      days,
      startDate,
      budget,
      budgetLevel,
      travelType,
      accommodationPref,
      foodPref,
      categories,
      transportMode,
      totalEstimatedCost,
      costs,
      itinerary,
      places,
      hotels,
      suggestions,
      generatedPlan,
      status
    } = req.body;

    // Resolve user credentials: Bearer token takes priority, then request body
    const resolvedUserId = (authUser && authUser.id) || userId || null;
    const resolvedUserName = (authUser && authUser.name) || userName;
    const resolvedUserEmail = (authUser && authUser.email) || userEmail;

    if (!resolvedUserName || !resolvedUserEmail) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Please log in to generate and save your trip plan.'
      });
    }

    if (!source || !source.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Starting District is required to generate a trip plan.'
      });
    }

    const destList = Array.isArray(destinations) && destinations.length > 0 
      ? destinations 
      : (destination ? [destination] : []);

    if (destList.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one Destination District is required.'
      });
    }

    // Extract places and hotels from itinerary if not explicitly passed
    let extractedPlaces = Array.isArray(places) && places.length > 0 ? places : [];
    let extractedHotels = Array.isArray(hotels) && hotels.length > 0 ? hotels : [];
    let extractedSuggestions = Array.isArray(suggestions) && suggestions.length > 0 ? suggestions : [];

    if (Array.isArray(itinerary) && itinerary.length > 0) {
      if (extractedPlaces.length === 0) {
        const placeNames = [];
        itinerary.forEach(day => {
          if (day.schedule?.morning?.placeName) placeNames.push(day.schedule.morning.placeName);
          if (day.schedule?.afternoon?.placeName) placeNames.push(day.schedule.afternoon.placeName);
          if (day.schedule?.evening?.placeName) placeNames.push(day.schedule.evening.placeName);
        });
        extractedPlaces = [...new Set(placeNames)];
      }

      if (extractedHotels.length === 0) {
        const hotelList = [];
        itinerary.forEach(day => {
          if (day.schedule?.night?.hotelName) {
            hotelList.push({
              day: day.dayNumber,
              district: day.district,
              name: day.schedule.night.hotelName,
              rate: day.schedule.night.hotelRate || ''
            });
          }
        });
        extractedHotels = hotelList;
      }
    }

    if (costs?.budgetTips && extractedSuggestions.length === 0) {
      extractedSuggestions = costs.budgetTips;
    }

    const calculatedTotalCost = totalEstimatedCost || (costs?.total ? `₹${costs.total.toLocaleString()}` : '₹7,500');

    // Create & save new Trip Plan to MongoDB
    const trip = await SavedTrip.create({
      userId: resolvedUserId && mongoose.Types.ObjectId.isValid(resolvedUserId) ? resolvedUserId : undefined,
      userName: resolvedUserName.trim(),
      userEmail: resolvedUserEmail.trim().toLowerCase(),
      source: source.trim(),
      destination: destination || destList.join(' • '),
      destinations: destList,
      travelers: Number(travelers) || 2,
      days: Number(days) || 3,
      startDate: startDate || new Date().toISOString().split('T')[0],
      budget: Number(budget) || 7500,
      budgetLevel: budgetLevel || 'low',
      travelType: travelType || 'family',
      accommodationPref: accommodationPref || 'budget',
      foodPref: foodPref || 'local_mess',
      categories: Array.isArray(categories) ? categories : [],
      transportMode: transportMode || 'Local Sightseeing & District Transfers',
      totalEstimatedCost: calculatedTotalCost,
      costs: costs || {},
      itinerary: Array.isArray(itinerary) ? itinerary : [],
      places: extractedPlaces,
      hotels: extractedHotels,
      suggestions: extractedSuggestions,
      generatedPlan: generatedPlan || {},
      status: status || 'Generated'
    });

    res.status(201).json({
      success: true,
      message: 'Trip plan generated and saved to database successfully!',
      trip
    });
  } catch (error) {
    console.error('Save Trip Server Error:', error);
    res.status(500).json({ success: false, message: 'Database save failed: ' + error.message });
  }
});

// Get all saved trip plans for admin
app.get('/api/admin/trips', async (req, res) => {
  try {
    const trips = await SavedTrip.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: trips.length, trips });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Fetch Logged-in User's Trip Plans (Must precede :id route to prevent route collision)
app.get('/api/trips/my-trips', async (req, res) => {
  try {
    const authUser = getAuthUserFromReq(req);
    const emailQuery = req.query.email || (authUser && authUser.email);
    const userIdQuery = req.query.userId || (authUser && authUser.id);

    if (!emailQuery && !userIdQuery) {
      return res.status(400).json({ success: false, message: 'User identification required to fetch trip history.' });
    }

    const queryConditions = [];
    if (emailQuery) {
      queryConditions.push({ userEmail: emailQuery.toLowerCase() });
    }
    if (userIdQuery && mongoose.Types.ObjectId.isValid(userIdQuery)) {
      queryConditions.push({ userId: userIdQuery });
    }

    const trips = await SavedTrip.find({ $or: queryConditions }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: trips.length, trips });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Fetch Individual Trip Details by ID (Admin & User)
app.get(['/api/admin/trips/:id', '/api/trips/:id'], async (req, res) => {
  try {
    const trip = await SavedTrip.findById(req.params.id);
    if (!trip) {
      return res.status(404).json({ success: false, message: 'Trip plan not found.' });
    }
    res.status(200).json({ success: true, trip });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update Trip Status (Admin & Manager)
app.patch(['/api/admin/trips/:id/status', '/api/trips/:id/status'], async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['Generated', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${validStatuses.join(', ')}`
      });
    }

    const updated = await SavedTrip.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Trip plan not found.' });
    }

    res.status(200).json({
      success: true,
      message: `Trip status updated to ${status}.`,
      trip: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete a saved trip plan (Admin)
app.delete('/api/admin/trips/:id', async (req, res) => {
  try {
    const deleted = await SavedTrip.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Trip plan not found.' });
    res.status(200).json({ success: true, message: 'Trip plan deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 6. HOTEL MANAGEMENT APIs (Admin Direct Add/Edit/Delete)
app.post('/api/admin/hotels', async (req, res) => {
  try {
    const newHotel = await SubmittedHotel.create({
      ...req.body,
      status: req.body.status || 'Approved'
    });
    res.status(201).json({ success: true, message: 'Hotel listing created successfully!', hotel: newHotel });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.put('/api/admin/hotels/:id', async (req, res) => {
  try {
    const updated = await SubmittedHotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Hotel not found.' });
    res.status(200).json({ success: true, message: 'Hotel updated successfully.', hotel: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete('/api/admin/hotels/:id', async (req, res) => {
  try {
    const deleted = await SubmittedHotel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Hotel not found.' });
    res.status(200).json({ success: true, message: 'Hotel deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 7. TRAVEL MANAGEMENT APIs (Admin Direct Add/Edit/Delete)
app.post('/api/admin/travel-services', async (req, res) => {
  try {
    const newService = await TravelService.create({
      ...req.body,
      status: req.body.status || 'Approved'
    });
    res.status(201).json({ success: true, message: 'Travel service created successfully!', travelService: newService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Seed Sample Data for Users and Saved Trips if empty
const seedAdminData = async () => {
  try {
    const tripCount = await SavedTrip.countDocuments();
    if (tripCount === 0) {
      await SavedTrip.insertMany([
        { userName: 'Ramesh Kumar', userEmail: 'ramesh@gmail.com', source: 'Chennai', destination: 'Madurai', travelers: 3, days: 4, startDate: '2026-10-05', travelType: 'Temple Tour', transportMode: 'Cab / Taxi', totalEstimatedCost: '₹18,500' },
        { userName: 'Priya Sharma', userEmail: 'priya@outlook.com', source: 'Coimbatore', destination: 'The Nilgiris', travelers: 2, days: 3, startDate: '2026-10-12', travelType: 'Hill Station / Nature', transportMode: 'Cab / Taxi', totalEstimatedCost: '₹14,200' },
        { userName: 'Karthik Raja', userEmail: 'karthik@yahoo.com', source: 'Madurai', destination: 'Ramanathapuram', travelers: 4, days: 2, startDate: '2026-10-20', travelType: 'Pilgrimage', transportMode: 'Bus', totalEstimatedCost: '₹8,900' }
      ]);
      console.log('🌱 Sample Saved Trips seeded successfully!');
    }
  } catch (err) {
    console.log('Seeding error:', err.message);
  }
};

// MongoDB Connection & Server Launch
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tn_tourism";
const LOCAL_MONGODB_URI = "mongodb://127.0.0.1:27017/tn_tourism";

async function startServer() {
  let connected = false;

  // Try Atlas / Configured URI first
  try {
    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ Connected to MongoDB Atlas successfully!");
    connected = true;
  } catch (atlasErr) {
    console.warn("⚠️ Atlas MongoDB connection failed (IP whitelist or network):", atlasErr.message);
    // Fallback to local MongoDB
    try {
      console.log("🔄 Attempting fallback to local MongoDB (mongodb://127.0.0.1:27017/tn_tourism)...");
      await mongoose.connect(LOCAL_MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
      console.log("✅ Connected to local MongoDB successfully!");
      connected = true;
    } catch (localErr) {
      console.error("❌ Local MongoDB connection failed:", localErr.message);
      console.log("💡 Tip: Ensure MongoDB service is running locally or IP is whitelisted on MongoDB Atlas (0.0.0.0/0).");
    }
  }

  if (connected) {
    await seedTravelServices();
    await seedAdminData();
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🛡️ Admin Portal accessible at http://localhost:${PORT}/admin`);
  });
}

startServer();