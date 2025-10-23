"use client";

import { forwardRef } from "react";

interface HeroButtonProps {
  text: string;
}

// Usamos forwardRef para poder recibir un ref desde el padre
const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ text }, ref) => {
    return (
      <button
        ref={ref}
        className="w-40 mt-8 px-6 py-3 bg-white text-black border-2 rounded-lg font-semibold hover:bg-black hover:text-cyan-50 transition-colors duration-300"
      >
        {text}
      </button>
    );
  }
);

HeroButton.displayName = "HeroButton";

export default HeroButton;
