// import React, useState, and firebase database
import React, { useState } from 'react';
import { firebaseConfig } from '../../lib/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

  return (
    <div>
      <header>
        <h1>How have you been feeling recently?</h1>
        <p>Describe your recent pain level to track your progress.</p>
        <p>Rate your pain level on a scale from 1-5, describe the area of pain and feel free to add more context.</p>
      </header>

      {submissionStatus && <p>{submissionStatus}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Pain Description:
          <input
            type="text"
            name="painDescription"
            value={painDescription}
            onChange={(e) => setPainDescription(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
