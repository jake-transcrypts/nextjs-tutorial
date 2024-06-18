import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'Blog', // Will become `Blog | Template`, due to `app/layout.tsx` title
  title: {
    absolute: 'Blog', // Will ignore the template, and use this as the title
  },
};

export default function Blog() {
  return (
    <div>
      Blog
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
