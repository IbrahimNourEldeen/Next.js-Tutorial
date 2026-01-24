export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      hello world
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div className=" ">{users}</div>
          <div className="">{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}
