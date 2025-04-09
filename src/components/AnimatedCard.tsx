
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: 'lift' | 'scale' | 'border' | 'glow' | 'none';
}

export const AnimatedCard = ({ 
  className, 
  children, 
  hoverEffect = 'lift'
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getHoverClasses = () => {
    switch(hoverEffect) {
      case 'lift':
        return 'hover:-translate-y-2 hover:shadow-lg';
      case 'scale':
        return 'hover:scale-105';
      case 'border':
        return 'hover:border-khodiyar-light-blue hover:border-2';
      case 'glow':
        return 'hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]';
      case 'none':
      default:
        return '';
    }
  };
  
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300',
        getHoverClasses(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
