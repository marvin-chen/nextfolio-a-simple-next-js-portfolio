import React from 'react';

const experiences = [
  {
    title: "Computer Science Undergraduate Course Assistant",
    company: "Princeton University",
    date: "Ongoing",
    description: "Grade and provide feedback for CS courses, including Intro CS and Advanced Programming Techniques.",
    techStack: "Java, Python, HTML/CSS, JavaScript"
  },
  {
    title: "Trading System Development Intern",
    company: "Mirae Asset Securities",
    date: "June 2024 - August 2024",
    description: "Enhanced trading platform performance and improved end-to-end critical path latency.",
    techStack: "C++"
  },
  {
    title: "Business Fellow",
    company: "Alariss Global",
    date: "Winter 2023",
    description: "Performed research and data analysis, compiled salary benchmark reports using Tableau/Excel.",
    techStack: "Tableau, Excel"
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow">
          <h2 className="text-2xl font-semibold">{exp.title}</h2>
          <h3 className="text-xl text-gray-600">{exp.company}</h3>
          <p className="text-gray-500">{exp.date}</p>
          <p className="mt-2">{exp.description}</p>
          <p className="mt-2 text-blue-600">Tech Stack: {exp.techStack}</p>
        </div>
      ))}
    </div>
  );
}