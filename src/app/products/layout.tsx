export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: '10px' }}>
        <h1>Product Layout</h1>
      </header>
      {children}
    </div>
  );
}
