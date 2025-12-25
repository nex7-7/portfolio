import React from "react";

export const ParticleDetectorDiagram = () => {
  return (
    <div className="flex items-center justify-center h-[200svh]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-300 -300 600 400" // Adjusting viewBox to center elements
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <g transform="translate(0, 0)"> {/* Center-align all components */}
          {/* Warm Plate */}
          <rect x="-170" y="-230" width="340" height="10" fill="hsl(var(--plate))" />
          {/* Chamber */}
          <rect x="-150" y="-220" width="300" height="160" fill="hsl(var(--chamber))" />
          {/* Sponge */}
          <rect x="-50" y="-220" width="100" height="20" fill="hsl(var(--accent))" />
          {/* Alcohol Cloud */}
          <rect x="-150" y="-60" width="300" height="40" fill="hsl(var(--cloud))" />
          {/* Cold Plate */}
          <rect x="-170" y="-20" width="340" height="20" fill="hsl(var(--plate))" />
          {/* Cooling Mechanism */}
          <rect x="-170" y="0" width="340" height="40" fill="hsl(var(--cool))" />
          {/* Alpha Particle Path */}
          <line
            x1="-200"
            y1="-150"
            x2="0"
            y2="-50"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="-200" cy="-150" r="20" fill="hsl(var(--foreground))" />
          <text
            x="-207"
            y="-145"
            fontSize="16"
            fill="hsl(var(--primary-foreground))"
            fontWeight="bold"
          >
            α
          </text>
        </g>
        {/* Arrowhead Marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--foreground))" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};