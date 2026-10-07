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
            ? { className: 'logo-img h-9 sm:h-11 md:h-[120px] w-auto block' }
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
