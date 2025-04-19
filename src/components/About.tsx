
import { UserIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
            <UserIcon className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          </div>
          <Card className="w-full max-w-3xl">
            <CardContent className="p-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate developer with 5 years of experience in web development. 
                I specialize in building modern web applications using React, TypeScript, and Node.js. 
                When I'm not coding, you can find me exploring new technologies, writing tech blogs, 
                or contributing to open-source projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
