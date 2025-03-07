import React from 'react';

export default function Fun() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Fun Facts About Me</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>I can speak three languages fluently: English, Mandarin, and Cantonese! 
          I love learning languages and am currently learning Korean, Japanese, and 
          thinking on starting Spanish. </li>
        <li>My (arguably) favorite Pokémon is Dragonite, which inspired my Pokémon Classifier project.</li>
        <li>I'm an avid hiker and have climbed several mountains in South Korea. 
          I have also been to South Korea two summers in a row! </li>
        <li>In my free time, I enjoy reading tech blog posts about the latest trends in AI 
          and machine learning. I got to see Dr. Fei-Fei Li in person at a tech talk, who inspired my interest in AI 
          after reading her book "The Worlds I See". </li>
      </ul>
    </div>
  );
}