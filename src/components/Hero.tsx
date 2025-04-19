
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 animate-fade-in">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-[700px] mx-auto animate-fade-in">
              Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
          </div>
          <div className="flex gap-4 animate-fade-in">
            <Button variant="outline" size="lg" className="gap-2">
              <LinkedinIcon size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <GithubIcon size={20} />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <MailIcon size={20} />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
