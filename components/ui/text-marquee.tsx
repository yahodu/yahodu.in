import React from 'react';
import Component from '@/components/ui/marquee';

interface TextMarqueeProps {
  firstText: string;
  secondText: string;
  delay?: number;
  baseVelocity?: number;
  className?: string;
}

function TextMarquee({ 
  firstText, 
  secondText, 
  delay = 500, 
  baseVelocity = 3,
  className = 'font-bold tracking-[-0.07em]'
}: TextMarqueeProps) {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <Component
          delay={delay}
          baseVelocity={-baseVelocity}
          clasname={className}
        >
          {firstText}
        </Component>
        <Component
          delay={delay}
          baseVelocity={baseVelocity}
          clasname={`${className} leading`}
        >
          {secondText}
        </Component>
      </div>
    </>
  );
}

export { TextMarquee };
