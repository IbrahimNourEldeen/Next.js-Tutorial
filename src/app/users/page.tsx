import { getUser } from "@/utils/get-user";

export default async function Page() {
  const data = await getUser();
  
  return <div> First Name : {data.users[0].firstName}</div>;
}