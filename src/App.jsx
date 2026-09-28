import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyModal from './components/EmergencyModal';
import AIFloatingWidget from './components/AIFloatingWidget';

import Home from './pages/Home';
import Places from './pages/Places';
import PlaceDetails from './pages/PlaceDetails';
import Districts from './pages/Districts';
import Categories from './pages/Categories';
import TripPlanner from './pages/TripPlanner';
import FestivalCalendar from './pages/FestivalCalendar';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import BusTransport from './pages/BusTransport';
import TrainTransport from './pages/TrainTransport';
import TaxiTransport from './pages/TaxiTransport';
import Emergency from './pages/Emergency';
import AIAssistantPage from './pages/AIAssistantPage';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ManagerDashboard from './pages/ManagerDashboard';

import ProtectedRoute from './components/ProtectedRoute';
import { apiPath } from './utils/api';

export function App() {
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  useEffect(() => {
    fetch(apiPath(''))
      .then((response) => response.json())
      .then((data) => {
        console.log('Backend connected:', data);
      })
      .catch((error) => {
        console.error('Backend connection failed:', error);
      });
  }, []);
  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritesProvider>
          <Router>
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar onOpenEmergency={() => setEmergencyOpen(true)} />

              <div style={{ flex: 1 }}>
                <Routes>
                  {/* Public Landing Home */}
                  <Route path="/" element={<Home />} />

                  {/* Public Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* Protected Tourism Modules */}
                  <Route path="/places" element={<ProtectedRoute><Places /></ProtectedRoute>} />
                  <Route path="/places/:id" element={<ProtectedRoute><PlaceDetails /></ProtectedRoute>} />
                  <Route path="/districts" element={<ProtectedRoute><Districts /></ProtectedRoute>} />
                  <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                  <Route path="/trip-planner" element={<ProtectedRoute><TripPlanner /></ProtectedRoute>} />
                  <Route path="/festival-calendar" element={<ProtectedRoute><FestivalCalendar /></ProtectedRoute>} />
                  <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
                  <Route path="/restaurants" element={<ProtectedRoute><Restaurants /></ProtectedRoute>} />
                  <Route path="/transport/bus" element={<ProtectedRoute><BusTransport /></ProtectedRoute>} />
                  <Route path="/transport/train" element={<ProtectedRoute><TrainTransport /></ProtectedRoute>} />
                  <Route path="/transport/taxi" element={<ProtectedRoute><TaxiTransport /></ProtectedRoute>} />
                  <Route path="/emergency" element={<ProtectedRoute><Emergency /></ProtectedRoute>} />
                  <Route path="/ai-assistant" element={<ProtectedRoute><AIAssistantPage /></ProtectedRoute>} />
                  <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/manager-dashboard" element={<ProtectedRoute><ManagerDashboard /></ProtectedRoute>} />

                  {/* Fallback to Home */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </div>

              <Footer />

              <AIFloatingWidget />
              <EmergencyModal
                isOpen={emergencyOpen}
                onClose={() => setEmergencyOpen(false)}
                onOpen={() => setEmergencyOpen(true)}
              />
            </div>
          </Router>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
