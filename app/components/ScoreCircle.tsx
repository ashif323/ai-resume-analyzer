import React from "react";

interface ScoreCircleProps {
  score: number;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score = 75 }) => {
  // Ensure score stays between 0 and 100
  const safeScore = Math.max(0, Math.min(score, 100));

  const radius = 40;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const progress = safeScore / 100;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative w-25 h-25">
      {" "}
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        className="-rotate-90"
      >
        {/* Background circle */}{" "}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Gradient */}
        <defs>
          <linearGradient id="scoreGradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF97AD" />
            <stop offset="100%" stopColor="#5171FF" />
          </linearGradient>
        </defs>
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="url(#scoreGradient)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Score Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-semibold text-sm">{safeScore}/100</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
