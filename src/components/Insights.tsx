// PersonalInsights.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Location {
  latitude: number;
  longitude: number;
}

const PersonalInsights: React.FC<{ userId: string; location: Location; }> = ({ userId, location }) => {
  const [insights, setInsights] = useState<string[]>([]);

  useEffect(() => {
    const fetchAIRecommendation = async () => {
      // Replace this with your actual OpenAI API call for recommendations
      const mockData = ['try some swimming'];

      setInsights(mockData);
    };

    fetchAIRecommendation();
  }, [userId]);

  useEffect(() => {
    const fetchPointsOfInterest = async () => {
      try {
        const aiRecommendation = insights[0]; // Use the first recommendation for simplicity
        const radius = 500; // Set your desired radius

        console.log(`Overpass API Request: Location - ${location.latitude},${location.longitude}, Radius - ${radius}, Activity - ${aiRecommendation}`);
      } catch (error) {
            console.error('Error fetching points of interest:', error);
        }
    };

    // Fetch points of interest when AI recommendations change
    if (insights.length > 0) {
      fetchPointsOfInterest();
    }
  }, [insights, location]);

  return (
    <div>
      <h3>Personal Insights</h3>
      <ul>
        {insights.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInsights;
