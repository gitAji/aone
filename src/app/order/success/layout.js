// page.js is a client component -- metadata must come from a sibling
// layout.js, same pattern used across this app's other client-component
// routes. Already covered by robots.txt's "Disallow: /order" prefix rule.
export const metadata = {
  title: 'Order Confirmed | Aone',
  robots: { index: false, follow: false },
};

export default function OrderSuccessLayout({ children }) {
  return <>{children}</>;
}
