import React from 'react';

interface EasySolutionsLogoProps {
  variant?: 'stacked' | 'horizontal' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  onClick?: () => void;
}

export const EasySolutionsLogo: React.FC<EasySolutionsLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  onClick,
}) => {
  // 4U Circular Badge component
  const Badge4U = ({ badgeSize = 'md' }: { badgeSize?: 'sm' | 'md' | 'lg' | 'hero' }) => {
    const sizeClasses = {
      sm: 'w-7 h-7 text-[11px]',
      md: 'w-9 h-9 text-xs',
      lg: 'w-12 h-12 text-base',
      hero: 'w-20 h-20 text-2xl',
    }[badgeSize];

    const ringPadding = {
      sm: 'p-[2.5px]',
      md: 'p-[3px]',
      lg: 'p-[4px]',
      hero: 'p-[6px]',
    }[badgeSize];

    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-full bg-sky-400 ${ringPadding} shadow-sm shrink-0 select-none ${sizeClasses}`}
      >
        <div className="w-full h-full rounded-full bg-blue-700 flex items-center justify-center text-white font-extrabold tracking-tight">
          4U
        </div>
      </div>
    );
  };

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center ${className}`} onClick={onClick}>
        <Badge4U badgeSize={size} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div
        className={`inline-flex flex-col items-center select-none ${className}`}
        onClick={onClick}
      >
        <div className="relative inline-block text-center">
          <span
            className={`block font-extrabold text-slate-900 tracking-tight leading-none ${
              size === 'hero' ? 'text-4xl sm:text-5xl' : size === 'lg' ? 'text-2xl' : 'text-lg'
            }`}
          >
            Easy Solutions
          </span>
          <div
            className={`w-full bg-slate-900 rounded-full mt-1.5 ${
              size === 'hero' ? 'h-1.5' : size === 'lg' ? 'h-1' : 'h-0.5'
            }`}
          />
        </div>
        <div className="mt-2.5">
          <Badge4U badgeSize={size} />
        </div>
      </div>
    );
  }

  // Horizontal variant (default, optimized for Navbars and Headers)
  return (
    <div
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <Badge4U badgeSize={size} />
      <div className="flex flex-col">
        <div className="relative inline-block">
          <span
            className={`font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base font-bold'
            }`}
          >
            Easy Solutions
          </span>
          <div className="w-full h-[2px] bg-slate-900 mt-1 rounded-full group-hover:bg-blue-700 transition-colors" />
        </div>
      </div>
    </div>
  );
};
