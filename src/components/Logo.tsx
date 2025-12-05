import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
  };

  return (
    <img 
      src={logoImage} 
      alt="Merry Christmas 2026" 
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  );
};
