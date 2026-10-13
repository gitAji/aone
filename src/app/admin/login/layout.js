// admin/login/page.js is a client component ('use client'), which can't
// export metadata directly -- same pattern as the other client-component
// routes in this app (see privacy-policy/layout.js etc).
export const metadata = {
  title: 'Admin Login | Aone',
  robots: { index: false, follow: false },
};

export default function AdminLoginLayout({ children }) {
  return <>{children}</>;
}
