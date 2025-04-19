
import { GalleryHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features",
    tech: ["Next.js", "TypeScript", "GraphQL"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and TailwindCSS",
    tech: ["React", "TailwindCSS", "Vite"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
            <GalleryHorizontalIcon className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
