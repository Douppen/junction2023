import React from 'react';

const About = () => {
  // Styles
  const headerStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '50px',
    fontWeight: 'bold',
  };

  const subHeaderStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  return (
    <div className="font-sans mx-20 my-20">
      <h1 className="font-bold text-6xl mb-5">Chronic Pain Relief,</h1>
      <h1 className="font-bold text-6xl mb-10">One Insight at a Time.</h1>
      <p className="text-2xl mb-6">
        Restorative is a platform dedicated to helping you manage and understand your chronic pain through alternative treatments. We believe in the power of data and insights to transform the way you approach pain relief.
      </p>
      <p className="text-2xl mb-6">
        Chronic pain is as unique as you are. Take charge of your well-being as our platform becomes your AI-driven companion in understanding and managing your pain. Track your pain levels while trying alternative treatments, and uncover invaluable insights into what truly works best for you.
      </p>
      <p className="text-2xl mb-6">
        Whether you're exploring mindfulness, physical therapy or other holistic approaches, Restorative is here to support your journey. Our user-friendly interface makes it easy to log your experiences, identify patterns, and discover effective strategies for chronic pain relief.
      </p>
    </div>
  );
};

export default About;
