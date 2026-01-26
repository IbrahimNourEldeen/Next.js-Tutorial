import Link from "next/link";

export default function F4() {
  return (
    <>
      <div>f1 page</div>
      <Link href="/f1/f2" className="bg-amber-400">f2 Page</Link>
    </>
  )
}
