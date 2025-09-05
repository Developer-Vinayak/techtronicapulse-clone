import { Zap, Cpu, CircuitBoard, Lightbulb } from "lucide-react";

const ElectronicsFloatingElements = () => {
  return (
    <>
      {/* LED Indicators */}
      <div className="absolute top-20 left-20 flex space-x-2">
        <div className="led-indicator animate-led-blink" style={{ animationDelay: '0s' }} />
        <div className="led-indicator animate-led-blink" style={{ animationDelay: '0.5s' }} />
        <div className="led-indicator animate-led-blink" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute bottom-32 right-16 flex space-x-2">
        <div className="led-indicator animate-led-blink" style={{ animationDelay: '0.3s' }} />
        <div className="led-indicator animate-led-blink" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Floating Microchips */}
      <div className="absolute top-1/3 left-10">
        <div className="microchip w-8 h-6 animate-float animate-chip-pulse" style={{ animationDelay: '1s' }}>
          <div className="absolute -left-1 top-1 w-1 h-1 bg-border" />
          <div className="absolute -left-1 top-3 w-1 h-1 bg-border" />
          <div className="absolute -right-1 top-1 w-1 h-1 bg-border" />
          <div className="absolute -right-1 top-3 w-1 h-1 bg-border" />
        </div>
      </div>

      <div className="absolute bottom-1/4 right-8">
        <div className="microchip w-10 h-8 animate-float animate-chip-pulse" style={{ animationDelay: '2s' }}>
          <div className="absolute -left-1 top-1 w-1 h-1 bg-border" />
          <div className="absolute -left-1 top-3 w-1 h-1 bg-border" />
          <div className="absolute -left-1 top-5 w-1 h-1 bg-border" />
          <div className="absolute -right-1 top-1 w-1 h-1 bg-border" />
          <div className="absolute -right-1 top-3 w-1 h-1 bg-border" />
          <div className="absolute -right-1 top-5 w-1 h-1 bg-border" />
        </div>
      </div>

      {/* Circuit Traces */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden">
        <div className="circuit-trace animate-circuit-flow" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-1/2 left-0 w-full overflow-hidden" style={{ top: '55%' }}>
        <div className="circuit-trace animate-circuit-flow" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-1/2 left-0 w-full overflow-hidden" style={{ top: '45%' }}>
        <div className="circuit-trace animate-circuit-flow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Electronics Icons */}
      <div className="absolute top-40 right-20 text-electric-blue animate-float" style={{ animationDelay: '1.5s' }}>
        <Zap className="h-6 w-6 animate-pulse" />
      </div>

      <div className="absolute bottom-40 left-32 text-neon-purple animate-float" style={{ animationDelay: '0.5s' }}>
        <Cpu className="h-8 w-8 animate-chip-pulse" />
      </div>

      <div className="absolute top-1/4 right-1/4 text-cyber-pink animate-float" style={{ animationDelay: '2.5s' }}>
        <CircuitBoard className="h-7 w-7 animate-pulse" />
      </div>

      <div className="absolute bottom-1/3 left-1/3 text-tech-green animate-float" style={{ animationDelay: '1.8s' }}>
        <Lightbulb className="h-6 w-6 animate-led-blink" />
      </div>
    </>
  );
};

export default ElectronicsFloatingElements;