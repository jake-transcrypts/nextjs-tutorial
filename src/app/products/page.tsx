import Link from 'next/link';

export default function Products() {
  const productId = 100;

  return (
    <div>
      <h1>Product List</h1>
      <h3>
        <Link href="products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="products/2">Product 2</Link>
      </h3>
      <h3>
        {/* Replaces the current history stack with the new one */}
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h3>
      <h3>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h3>

      <Link href="/">Home</Link>
    </div>
  );
}
