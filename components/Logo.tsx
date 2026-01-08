import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  href?: string;
  variant?: 'default' | 'light' | 'dark';
}

export default function Logo({ className = '', href = '/', variant = 'default' }: LogoProps) {
  // Use the actual brand pack files
  // 'light' variant = light logo on dark background (footer)
  // 'default' variant = dark logo on light background (header)
  const logoSrc = variant === 'light' 
    ? '/coulsycode_brand_pack_dark/coulsycode-logo-full-darkbg.svg' 
    : '/coulsycode-logo-full.svg';
  
  const logoContent = (
    <Image
      src={logoSrc}
      alt="Coulsy Code"
      width={420}
      height={120}
      className={className}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
