import { Code, Cpu, Lightbulb, Trophy, Zap, CircuitBoard, Wrench, Microchip } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Programming Contests",
      description: "Master embedded programming, microcontroller coding, and IoT development challenges."
    },
    {
      icon: CircuitBoard,
      title: "Electronics Workshops",
      description: "Hands-on PCB design, circuit analysis, and electronic component workshops."
    },
    {
      icon: Microchip,
      title: "Hardware Innovation",
      description: "Design and prototype innovative electronic devices and smart systems."
    },
    {
      icon: Zap,
      title: "Power Electronics",
      description: "Explore power systems, renewable energy, and electrical engineering solutions."
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
            Techtronica is the Electronics Department's flagship technical festival at GLA University, 
            bringing together electronics enthusiasts, programmers, and innovators for three days of 
            cutting-edge technology, circuit design competitions, and hands-on learning experiences 
            in the world of electronics and embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
                {/* Add LED indicators for electronics theme */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-electric-blue rounded-full animate-led-blink" />
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
              <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CircuitBoard className="h-8 w-8 text-electric-blue animate-pulse" />
                Why Join Techtronica?
                <Zap className="h-6 w-6 text-cyber-pink animate-led-blink" />
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-electric-blue mr-3 text-xl">⚡</span>
                  Learn cutting-edge electronics and embedded system technologies
                </li>
                <li className="flex items-start">
                  <span className="text-neon-purple mr-3 text-xl">🔧</span>
                  Hands-on experience with PCB design and circuit prototyping
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-pink mr-3 text-xl">💡</span>
                  Network with electronics professionals and industry experts
                </li>
                <li className="flex items-start">
                  <span className="text-tech-green mr-3 text-xl">🏆</span>
                  Compete in microcontroller programming and hardware design
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-3 text-xl">🔌</span>
                  Explore IoT, robotics, and automation technologies
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border border-border relative overflow-hidden">
                <div className="circuit-trace absolute top-0 left-0 animate-circuit-flow" />
                <div className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                  3 <Zap className="h-6 w-6 animate-pulse" />
                </div>
                <div className="text-sm text-muted-foreground">Days of Electronics Innovation</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 border border-border relative">
                <div className="absolute top-2 right-2 led-indicator animate-led-blink" />
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Electronics & Programming Events</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6 border border-border relative">
                <div className="absolute top-2 right-2 microchip w-4 h-3 animate-chip-pulse" />
                <div className="text-3xl font-bold text-accent mb-2">₹5L+</div>
                <div className="text-sm text-muted-foreground">Prize Money & Components</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;