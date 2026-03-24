import { motion, useMotionValue, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  mouseX: number;
  mouseY: number;
}

export function BentoCard({ children, className = '', mouseX, mouseY }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate 3D tilt based on mouse position
  const rotateX = useTransform(
    useMotionValue(mouseY),
    [0, 1],
    [5, -5]
  );
  
  const rotateY = useTransform(
    useMotionValue(mouseX),
    [0, 1],
    [-5, 5]
  );

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-3xl overflow-hidden h-full ${className}`}
      style={{
        rotateX: `${(mouseY - 0.5) * 8}deg`,
        rotateY: `${(mouseX - 0.5) * 8}deg`,
        transformStyle: 'preserve-3d',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Glassmorphic background with deep blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-[35px]" />
      
      {/* Subtle border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full w-full">
        {children}
      </div>
      
      {/* Animated gradient on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-3xl"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}