import Link from 'next/link';

export default function About() {
  return (
    <div>
      Home
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/login">Login</Link>
      <br />
      <Link href="/complex-dashboard">complex dashboard</Link>
    </div>
  );
}
