import Image from 'next/image';

import MarginfiLogo from '@/images/logos/marginfi-logo.png';

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image 
      src={MarginfiLogo}
      width={100}
      height={100}
      alt="Marginfi Logo"
    />
  )
}
