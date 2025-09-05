import { Code, Cpu, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Coding Competitions",
      description: "Test your programming skills in various coding challenges and hackathons."
    },
    {
      icon: Cpu,
      title: "Tech Workshops",
      description: "Learn from industry experts through hands-on workshops and seminars."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Showcase your innovative projects and connect with like-minded individuals."
    },
    {
      icon: Trophy,
      title: "Win Big",
      description: "Compete for amazing prizes and recognition in the tech community."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Techtronica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Techtronica is GLA University's premier technical festival, bringing together the brightest minds 
            in technology for three days of innovation, competition, and learning. Join us for an unforgettable 
            experience that will shape the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Why Participate in Techtronica?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Network with industry professionals and fellow tech enthusiasts
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Gain hands-on experience with cutting-edge technologies
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Showcase your skills and win exciting prizes
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Get mentorship from industry experts and successful entrepreneurs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  Build lasting connections that can accelerate your career
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Days of Innovation</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Technical Events</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="text-3xl font-bold text-accent mb-2">₹5L+</div>
                <div className="text-sm text-muted-foreground">Prize Money</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;