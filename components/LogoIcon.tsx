import Image from 'next/image';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = '', size = 128 }: LogoIconProps) {
  return (
    <Image
      src="/coulsycode-logo-icon.svg"
      alt="Coulsy Code"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
