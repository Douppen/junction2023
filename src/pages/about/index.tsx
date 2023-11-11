import { AnimateUp } from '@/components/AnimateUp';
import React from 'react';

const About = () => {
  return (
    <AnimateUp className="max-w-[120ch] mx-auto">
      <h1 className="font-bold text-6xl mb-5 leading-snug">
        Chronic Pain Relief, <br /> One Insight at a Time.
      </h1>
      <p className="text-2xl mb-6">
        Restorative is a platform dedicated to helping you manage and understand your chronic pain through alternative
        treatments. We believe in the power of data and insights to transform the way you approach pain relief.
      </p>
      <p className="text-2xl mb-6">
        Chronic pain is as unique as you are. Take charge of your well-being as our platform becomes your AI-driven
        companion in understanding and managing your pain. Track your pain levels while trying alternative treatments,
        and uncover invaluable insights into what truly works best for you.
      </p>
      <p className="text-2xl mb-6">
        Whether you're exploring mindfulness, physical therapy or other holistic approaches, Restorative is here to
        support your journey. Our user-friendly interface makes it easy to log your experiences, identify patterns, and
        discover effective strategies for chronic pain relief.
      </p>
    </AnimateUp>
  );
};

export default About;
