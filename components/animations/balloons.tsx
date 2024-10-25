"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Balloon {
  id: number;
  x: number;
  delay: number;
  scale: number;
  duration: number;
  color: string;
}

export function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-400',
      'bg-purple-400',
      'bg-blue-400',
      'bg-yellow-400',
      'bg-green-400',
    ];

    const newBalloons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      scale: 0.5 + Math.random() * 0.5,
      duration: 10 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute bottom-0"
          initial={{ 
            x: `${balloon.x}vw`, 
            y: '100vh',
            scale: balloon.scale,
          }}
          animate={{ 
            y: '-120vh',
            x: [
              `${balloon.x}vw`,
              `${balloon.x + (Math.random() * 10 - 5)}vw`,
              `${balloon.x + (Math.random() * 10 - 5)}vw`,
              `${balloon.x}vw`,
            ],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            ease: "linear",
            repeat: Infinity,
            x: {
              duration: balloon.duration / 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            transformOrigin: 'center bottom',
          }}
        >
          {/* Balloon */}
          <div 
            className={`relative ${balloon.color} w-12 h-14 rounded-[50%] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-full before:h-full before:rounded-[50%] before:-translate-x-1/2 before:transform before:scale-x-[0.8]`}
          >
            {/* Balloon knot */}
            <div className={`absolute -bottom-1 left-1/2 w-3 h-3 ${balloon.color} rounded-full -translate-x-1/2`} />
            
            {/* String */}
            <div className="absolute top-full left-1/2 w-[1px] h-16 bg-gray-400/50 -translate-x-1/2 origin-top" 
              style={{
                transform: 'translateX(-50%) rotate(0deg)',
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}