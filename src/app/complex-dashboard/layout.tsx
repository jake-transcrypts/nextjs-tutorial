import Link from 'next/link';

export default function ComplexDashboardLayout({
  children,

  // These are automatically passed by `slots`, the `@folder` naming convention
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      <Link href="/">Home</Link>
    </div>
  ) : (
    <div>{login}</div>
  );
}
