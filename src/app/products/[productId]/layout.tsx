function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  const randomNumber = getRandomInt(0, 5);

  // if (randomNumber % 2 === 0) {
  //   throw new Error('Error loading product');
  // }

  return (
    <div>
      <header style={{ padding: '10px' }}>
        <h1>Featured Products</h1>
      </header>
      {children}
    </div>
  );
}
