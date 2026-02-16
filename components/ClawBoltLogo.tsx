"use client";

interface ClawBoltLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function ClawBoltLogo({ size = "md", showText = true }: ClawBoltLogoProps) {
  const sizeClasses = {
    sm: { container: "w-6 h-6", icon: "w-3.5 h-3.5", text: "text-base" },
    md: { container: "w-8 h-8", icon: "w-5 h-5", text: "text-xl" },
    lg: { container: "w-10 h-10", icon: "w-6 h-6", text: "text-2xl" },
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex items-center gap-2">
      {/* Logo mark - Lightning claw */}
      <div
        className={`${classes.container} bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`${classes.icon} text-white`}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Claw/lightning hybrid */}
          <path d="M14 2L4 14h8l-2 8 10-12h-8l2-8z" />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <span className={`${classes.text} font-bold text-text-primary tracking-tight`}>
          Claw
          <span className="text-accent">Bolt</span>
        </span>
      )}
    </div>
  );
}
