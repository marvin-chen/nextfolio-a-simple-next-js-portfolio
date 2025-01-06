import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

const projects = [
  {
    title: "Signable",
    description: "ASL flashcard app with side-by-side comparison feature.",
    techStack: "HTML, CSS, Javascript, Bootstrap, Flask, Jinja2, Docker",
    github: "https://github.com/ep1401/Signable"
  },
  {
    title: "Pokémon Classifier",
    description: "Novel multimodal neural network to classify Pokémon using image and numerical data.",
    techStack: "Matplotlib, Scikit-learn, Python, TensorFlow",
    github: "https://github.com/marvin-chen/cos-independent-work"
  },
  {
    title: "TigerRetail",
    description: "User-friendly interface for peer-to-peer commerce on campus.",
    techStack: "Svelte, Typescript",
    github: "https://github.com/tigerappsorg/tigerretail-2"
  },
  {
    title: "Hoagie Mail",
    description: "Official email distribution system for clubs and organizations, serving 5000+ students.",
    techStack: "Typescript, Go",
    github: "https://github.com/HoagieClub/mail"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded shadow p-4">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <p className="text-blue-600 mb-2">Tech Stack: {project.techStack}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}