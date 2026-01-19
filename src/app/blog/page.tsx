import { Metadata } from "next";
const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  }
};
export { metadata };
export default function Blog() {
  return <h1>blog page</h1>;
}