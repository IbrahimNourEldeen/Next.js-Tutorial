import { Metadata } from "next";
import Link from "next/link";
const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  }
};
export { metadata };
export default function Blog() {
  return <>
    <Link href='\'>back to home</Link>
    <h1>blog page</h1>;
  </>
}