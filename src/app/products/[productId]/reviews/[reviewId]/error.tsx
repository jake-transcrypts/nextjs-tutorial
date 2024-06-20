'use client';

export default function ErrorBoundry({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <div>An error occurred: {error.message}</div>
      <br />
      <button onClick={reset}>Try again</button>
    </div>
  );
}
