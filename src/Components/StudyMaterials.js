import React, { useState, useEffect } from 'react';
import '../Styles/StudyMaterials.css';

const StudyMaterials = () => {
  const [subjects, setSubjects] = useState([]);

  // Dummy data with sample URLs
  const dummySubjects = [
    {
      id: 1,
      name: 'Mathematics',
      materials: [
        { id: 1, title: 'Calculus Textbook', link: 'https://openstax.org/details/books/calculus-volume-1', type: 'textbook' },
        { id: 2, title: 'Linear Algebra Article', link: 'https://www.math.ucdavis.edu/~linear/linear-guest.pdf', type: 'article' },
        { id: 3, title: 'Geometry Video Lecture', link: 'https://www.youtube.com/watch?v=49_-wRrWU_k', type: 'video' },
      ],
    },
    {
      id: 2,
      name: 'Physics',
      materials: [
        { id: 4, title: 'Classical Mechanics Textbook', link: 'https://openstax.org/details/books/university-physics-volume-1', type: 'textbook' },
        { id: 5, title: 'Quantum Mechanics Article', link: 'https://arxiv.org/abs/quant-ph/0609163', type: 'article' },
        { id: 6, title: 'Electromagnetism Video Lecture', link: 'https://www.youtube.com/watch?v=x1-SibwIPM4', type: 'video' },
      ],
    },
  ];

  useEffect(() => {
    // Replace fetching data from API with setting dummy data
    setSubjects(dummySubjects);
  }, []);

  return (
    <div className="study-materials">
      <h2>Study Materials</h2>
      {subjects.map((subject) => (
        <div key={subject.id} className="subject">
          <h3>{subject.name}</h3>
          <ul>
            {subject.materials.map((material) => (
              <li key={material.id}>
                <a href={material.link} target="_blank" rel="noopener noreferrer">
                  {material.title}
                </a>
                {material.type === 'video' && <span> (Video Lecture)</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudyMaterials;
