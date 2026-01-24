import Card from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href='/dashboard/archived' className="btn text-blue-600">Archived</Link>
    </Card>
  );
}
  