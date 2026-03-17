interface IconProps {
  className?: string;
  size?: number;
}

const defaults: IconProps = { size: 48 };

export function IconRelationship({ size = defaults.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="18" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconEnemy({ size = defaults.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <line x1="24" y1="4" x2="24" y2="8" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="24" x2="8" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconCulture({ size = defaults.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 24C8 24 12 16 18 16C24 16 24 32 30 32C36 32 40 24 40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 20C8 20 12 12 18 12C24 12 24 28 30 28C36 28 40 20 40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M8 28C8 28 12 20 18 20C24 20 24 36 30 36C36 36 40 28 40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IconWinning({ size = defaults.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <line x1="24" y1="40" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polyline points="14,18 24,8 34,18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IconMovement({ size = defaults.size, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    </svg>
  );
}
