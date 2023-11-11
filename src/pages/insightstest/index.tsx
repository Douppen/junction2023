import React from 'react';
import PersonalInsights from '../../components/Insights'; // Adjust the path based on your actual file structure

const App: React.FC = () => {
  const userId = 'yourUserId'; // Replace with the actual user ID
  const userLocation = { latitude: 40.7128, longitude: -74.0060 }; // Replace with the actual user's location

  return (
    <div>
      <h1>Your App</h1>
      <PersonalInsights userId={userId} location={userLocation} />
    </div>
  );
};

export default App;