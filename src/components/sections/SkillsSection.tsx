import React from 'react';
import SkillCard from '../ui/SkillCard';

export default function SkillsSection() {
  return (
    <section id="kompetenser" className="py-24">
      <div className="container-section">
        <h2 className="section-title">Mina kompetenser</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard 
            title="Frontend"
            skills={["HTML/CSS", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"]}
          />
          <SkillCard 
            title="Backend"
            skills={["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL"]}
          />
          <SkillCard 
            title="Verktyg"
            skills={["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman", "Photoshop"]}
          />
          <SkillCard 
            title="Övrigt"
            skills={["Responsive Design", "UI/UX", "Jest", "C#"]}
          />
        </div>
      </div>
    </section>
  );
}