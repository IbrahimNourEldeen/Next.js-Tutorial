export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
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
  ) : (
    login
  );
}
