"use client"

import RippleGrid from "@/components/ui/ripple-grid";
import { TextMarquee } from "@/components/ui/text-marquee";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to dark theme colors during SSR/mounting
  const gridColor = mounted ? (resolvedTheme === 'dark' ? '#FFA500' : '#FF4500') : '#ffffff'

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">

      {/* Theme Toggle Button - Top Right */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor={gridColor}
          rippleIntensity={0.14}
          gridSize={10}
          gridThickness={25}
          vignetteStrength={2.8}
          glowIntensity={1}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.5}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <TextMarquee firstText="We are Ready" secondText="We are coming soon" />
      </div>

    </div>
  );
}
