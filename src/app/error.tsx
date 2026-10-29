'use client';

export default function ErrorBoundary({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="py-32 text-center">
      <h1 className="!text-4xl">Something went wrong</h1>
      <p className="sub">We could not load this page. Please try again.</p>
      <button className="btn btn-primary" onClick={reset}>Try again</button>
    </main>
  );
}
