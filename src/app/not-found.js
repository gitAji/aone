import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div>
      <Header />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  );
}