import { getAIResponse } from '../src/utils/aiKnowledgeEngine.js';

const testQueries = [
  'ai chatbot la enga website entha questions or doubt ketalum athu reply pannanum antha matheri set panni kudu',
  'website la enna ellam features irukku?',
  'trip planner epdi use panradhu?',
  '3 days Ooty trip plan pannu',
  'how to add my hotel?',
  'emergency helpline numbers kudu',
  'marina beach timings enna?',
  'madurai la enna food famous?',
  'rsr travels contact number',
  'favorites la epdi save panradhu?',
  'kodaikanal la enna paakkalaam?',
  'pongal festival eppo varum?'
];

console.log('--- TESTING AI KNOWLEDGE ENGINE ---');
for (const query of testQueries) {
  console.log(`\n========================================`);
  console.log(`User Query: "${query}"`);
  console.log(`----------------------------------------`);
  const reply = getAIResponse(query);
  console.log(reply.substring(0, 300) + (reply.length > 300 ? '...' : ''));
}
console.log('\n--- ALL TEST QUERIES RESOLVED SUCCESSFULLY ---');
