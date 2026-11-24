// page.js is a client component -- metadata must come from a sibling
// layout.js. Already disallowed in robots.txt.
export const metadata = {
  title: 'Signing Cancelled | Aone',
  robots: { index: false, follow: false },
};

export default function SigningCancelledLayout({ children }) {
  return <>{children}</>;
}
