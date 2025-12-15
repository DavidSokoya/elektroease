
'use client';

import { Award, PackageCheck, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  ariaLabel: string;
}

const statsData: StatItem[] = [
  {
    icon: Award,
    value: '8+',
    label: 'Years of Experience',
    ariaLabel: 'Over 8 years of combined experience',
  },
  {
    icon: PackageCheck,
    value: '50+',
    label: 'Projects Completed',
    ariaLabel: 'Over 50 projects completed',
  },
  {
    icon: Smile,
    value: '100+',
    label: 'Happy Clients',
    ariaLabel: 'Over 100 happy clients',
  },
];

const AnimatedNumber: React.FC<{ valueString: string; duration?: number }> = ({ valueString, duration = 1500 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  const numericPart = parseInt(valueString.replace(/\D/g, ''), 10);
  const suffix = valueString.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isNaN(numericPart)) {
      // Fallback for non-numeric values, though not expected for current data
      // Potentially display valueString directly or 0
      setCurrentValue(0); // Or handle as an error/log
      return;
    }

    let startTimestamp: number | null = null;
    const animationStep = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      const nextDisplayValue = Math.floor(percentage * numericPart);

      setCurrentValue(nextDisplayValue);

      if (percentage < 1) {
        requestAnimationFrame(animationStep);
      }
    };

    // Ensure animation starts from 0 on mount
    setCurrentValue(0);
    requestAnimationFrame(animationStep);

    return () => {
      // Cleanup if component unmounts during animation
      startTimestamp = null; 
    };
  }, [numericPart, duration]); // Rerun if numericPart or duration changes

  return (
    <>
      {currentValue}
      {currentValue === numericPart && suffix}
    </>
  );
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-12">
          My Impact by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {statsData.map((stat) => (
            <Card
              key={stat.label}
              className="text-center shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card"
              aria-label={stat.ariaLabel}
            >
              <CardHeader className="flex flex-col items-center justify-center pb-2">
                <stat.icon className="w-12 h-12 text-primary mb-3" strokeWidth={1.5} />
                <CardTitle className="text-4xl font-extrabold text-primary">
                  <AnimatedNumber valueString={stat.value} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
