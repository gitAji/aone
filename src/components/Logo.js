import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logo-container relative z-[1001]">
      <Link href="/" className="cursor-pointer transition-all hover:opacity-80 block">
        <Image
          src="/images/logo.png"
          alt="Aone Logo"
          className="logo-img"
          height={120}
          width={200}
          style={{
            height: '120px',
            width: 'auto',
            display: 'block'
          }}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
