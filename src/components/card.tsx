export default function card({ children }: { children: React.ReactNode }) {
  return <div className="p-24 m-2.5 border border-gray-300 shadow-2xl flex justify-center align-middle">
    {children}
  </div>;
}
