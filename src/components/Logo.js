import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ responsive = false }) => {
  return (
    <div className="logo-container relative z-[1001]">
      <Link href="/" className="cursor-pointer transition-all hover:opacity-80 block">
        <Image
          src="/images/logo.png"
          alt="Aone Logo"
          // The real file is a square 500x500 PNG -- these props exist only
          // to describe its intrinsic aspect ratio for Next's layout math,
          // not the displayed size (CSS does that below). They used to say
          // 200x120, which doesn't match the actual file; Next's dev-mode
          // warning compares the final *rendered* pixel size against these
          // props, and that mismatched ratio only showed up as a false
          // "width or height modified but not the other" warning at the one
          // breakpoint (md:h-[120px]) where the rendered height happened to
          // equal the declared height exactly, making the now-wrong width
          // the outlier.
          height={120}
          width={120}
          priority
          {...(responsive
            ? {
                className: 'logo-img h-14 sm:h-16 md:h-[120px] w-auto block',
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
