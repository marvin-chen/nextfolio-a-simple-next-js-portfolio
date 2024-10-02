import React from 'react';

export default function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1n8N75ERAceBj_ZuXHF6Jeaur0aIvRXkg/view?usp=sharing";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <p className="mb-4">Click the button below to view or download my resume:</p>
      <a 
        href={resumeLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Resume
      </a>
    </div>
  );
}