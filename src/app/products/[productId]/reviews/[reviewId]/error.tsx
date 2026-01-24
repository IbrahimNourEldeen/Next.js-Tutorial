"use client";
export default function ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button className="btn ms-3 border rounded bg-cyan-500 text-white p-1" onClick={reset}>
        try again
      </button>
    </div>
  );
}
