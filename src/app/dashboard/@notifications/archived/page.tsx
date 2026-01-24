import Card from "@/components/card";
import Link from "next/link";
export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href='/dashboard' className="btn text-blue-600">Back</Link>
    </Card>
  );
}
  