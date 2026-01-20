import Link from "next/link"
export default function HomePage() {
  return <>
  <h1>Welcome to the Home Page</h1>
  <div>
    <Link href='/blog'>Blog</Link>
    <Link href='/products'>Products</Link>
  </div>
  </>
}