'use client';
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
  return (
    <>
    <h1>OrderProduct page</h1>
    <button onClick={handleClick} className="bg-blue-500 text-white text-bold p-2 rounded   ">back to home</button>
    </>
  )
}
