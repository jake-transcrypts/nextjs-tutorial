import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <h1>Product List</h1>
      <h3>Product 1</h3>
      <h3>Product 2</h3>
      <h3>Product 3</h3>

      <Link href="/">Home</Link>
    </div>
  );
}
