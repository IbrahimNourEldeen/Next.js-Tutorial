import { getUser } from "@/utils/get-user";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const users = await getUser();
  return <div><h1>Users Numbers : {users.users.length}</h1>{children}</div>;
}
