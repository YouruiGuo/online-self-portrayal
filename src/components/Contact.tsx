
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
            <MailIcon className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
          </div>
          <Card className="w-full max-w-lg">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full gap-2">
                  <LinkedinIcon size={20} />
                  Connect on LinkedIn
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <GithubIcon size={20} />
                  Follow on GitHub
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <MailIcon size={20} />
                  contact@example.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
