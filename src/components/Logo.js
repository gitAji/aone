import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ responsive = false }) => {
  return (
    <div className="logo-container relative z-[1001]">
      <Link href="/" className="cursor-pointer transition-all hover:opacity-80 block">
        <Image
          src="/images/logo.png"
          alt="Aone Logo"
          height={120}
          width={200}
          priority
          {...(responsive
            ? {
                className: 'logo-img h-14 sm:h-16 md:h-[120px] block',
                // Next's dev-mode aspect-ratio check reads the element's
                // inline style, not the computed value a CSS class like
                // Tailwind's w-auto resolves to (getComputedStyle never
                // returns the literal string "auto") -- an explicit style
                // prop is required for it to recognize width as unset.
                style: { width: 'auto' },
              }
            : {
                className: 'logo-img',
                style: { height: '120px', width: 'auto', display: 'block' },
              })}
        />
      </Link>
    </div>
  );
};

export default Logo;
