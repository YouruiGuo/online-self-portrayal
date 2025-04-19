
import { CodeIcon } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "TailwindCSS", "GraphQL", "PostgreSQL", "AWS",
  "Git", "Docker", "Jest", "CI/CD"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
            <CodeIcon className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold tracking-tighter">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow
                         border border-slate-200 text-center"
              >
                <span className="text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
