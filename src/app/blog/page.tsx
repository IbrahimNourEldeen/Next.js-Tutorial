import { Metadata } from "next";
import Link from "next/link";
const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  }
};
export { metadata };
export default async function Blog() {
  await new Promise(r => setTimeout(r, 2000));
  return <>
    <Link href='\'>back to home</Link>
    <h1>blog page</h1>
  </>
}