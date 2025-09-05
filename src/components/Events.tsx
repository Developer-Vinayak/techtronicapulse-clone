import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Clock, Cpu, CircuitBoard, Zap } from "lucide-react";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events" },
    { id: "embedded", name: "Embedded Systems" },
    { id: "circuit", name: "Circuit Design" },
    { id: "iot", name: "IoT & Automation" },
    { id: "programming", name: "Programming" },
    { id: "workshops", name: "Workshops" }
  ];

  const events = [
    {
      id: 1,
      title: "Microcontroller Mastery",
      category: "embedded",
      date: "March 15",
      time: "10:00 AM",
      venue: "Electronics Lab 1",
      participants: "Individual",
      prize: "₹50,000",
      description: "Program microcontrollers and design embedded systems for real-world applications",
      registrations: 156,
      maxRegistrations: 200,
      difficulty: "Advanced"
    },
    {
      id: 2,
      title: "Circuit Craft Challenge",
      category: "circuit",
      date: "March 16",
      time: "2:00 PM",
      venue: "PCB Design Lab",
      participants: "Team (2-3)",
      prize: "₹75,000",
      description: "Design and build innovative electronic circuits from scratch",
      registrations: 89,
      maxRegistrations: 120,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "IoT Innovation Hub",
      category: "iot",
      date: "March 15",
      time: "11:00 AM",
      venue: "Smart Systems Lab",
      participants: "Team (3-4)",
      prize: "₹60,000",
      description: "Create smart IoT solutions for modern automation challenges",
      registrations: 134,
      maxRegistrations: 150,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Embedded Programming Sprint",
      category: "programming",
      date: "March 17",
      time: "9:00 AM",
      venue: "Programming Lab",
      participants: "Individual",
      prize: "₹40,000",
      description: "Speed programming challenge for embedded systems and firmware",
      registrations: 98,
      maxRegistrations: 180,
      difficulty: "Beginner"
    },
    {
      id: 5,
      title: "PCB Design Workshop",
      category: "workshops",
      date: "March 16",
      time: "3:00 PM",
      venue: "Design Studio",
      participants: "Individual",
      prize: "Certificate + Kit",
      description: "Learn professional PCB design and layout techniques",
      registrations: 67,
      maxRegistrations: 100,
      difficulty: "Beginner"
    },
    {
      id: 6,
      title: "Electronics Hackathon",
      category: "circuit",
      date: "March 15-16",
      time: "6:00 PM",
      venue: "Main Electronics Lab",
      participants: "Team (3-5)",
      prize: "₹1,00,000",
      description: "36-hour hardware hackathon to solve electronics engineering problems",
      registrations: 78,
      maxRegistrations: 100,
      difficulty: "Advanced"
    }
  ];

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-tech-green/20 text-tech-green";
      case "Intermediate": return "bg-electric-blue/20 text-electric-blue";
      case "Advanced": return "bg-cyber-pink/20 text-cyber-pink";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            <CircuitBoard className="h-10 w-10 text-electric-blue animate-pulse" />
            Electronics <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
            <Zap className="h-8 w-8 text-cyber-pink animate-led-blink" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in 25+ electronics competitions, embedded systems challenges, and hands-on workshops
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Electronics-themed decorative elements */}
              <div className="absolute top-2 right-2 led-indicator animate-led-blink" style={{ animationDelay: `${event.id * 0.3}s` }} />
              <div className="absolute bottom-2 left-2 circuit-trace w-8 opacity-30" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <Badge className={getDifficultyColor(event.difficulty)}>
                  {event.difficulty}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">
                {event.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.participants}</span>
                </div>
                <div className="flex items-center text-sm text-foreground font-semibold">
                  <Trophy className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.prize}</span>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Registrations</span>
                  <span className="text-foreground font-medium">
                    {event.registrations}/{event.maxRegistrations}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.registrations / event.maxRegistrations) * 100}%` }}
                  />
                </div>
              </div>

              <Button variant="tech" className="w-full">
                Register Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;