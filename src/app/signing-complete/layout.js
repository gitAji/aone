// page.js is a client component -- metadata must come from a sibling
// layout.js. Already disallowed in robots.txt.
export const metadata = {
  title: 'Signing Complete | Aone',
  robots: { index: false, follow: false },
};

export default function SigningCompleteLayout({ children }) {
  return <>{children}</>;
}
