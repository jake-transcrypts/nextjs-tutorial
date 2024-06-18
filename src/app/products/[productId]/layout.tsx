export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: '10px' }}>
        <h1>Featured Products</h1>
      </header>
      {children}
    </div>
  );
}
