import React from 'react';

const extracurriculars = [
  {
    title: "COS (Computer Science) Council",
    role: "Academic Chair",
    description: "Spearhead initiatives to improve students' academic experiences."
  },
  {
    title: "Chinese Language Association",
    role: "President and Senior Advisor",
    description: "Expanded club by 200% and onboarded current board members."
  },
  {
    title: "Koko Pops Dance Company",
    role: "Production Team - Lighting Operator",
    description: "Controlled the lighting system for a dance performance with 100+ attendees."
  },
  {
    title: "Association of Computing Machinery (ACM)",
    role: "Member",
    description: "Regularly practiced competitive programming skills and enhanced data structures and algorithms knowledge."
  },
  {
    title: "BSE Interactor",
    role: "Student Advisor",
    description: "Advised 10+ freshmen on the engineering track regarding courses and academic life."
  },
  {
    title: "Community Action Freshman Orientation",
    role: "Orientation Leader",
    description: "Guided freshmen through orientation and provided tips about campus life and beyond."
  }
];

export default function Extracurriculars() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Extracurricular Activities</h1>
      {extracurriculars.map((activity, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">{activity.title}</h2>
          <h3 className="text-xl text-gray-600">{activity.role}</h3>
          <p className="mt-2">{activity.description}</p>
        </div>
      ))}
    </div>
  );
}