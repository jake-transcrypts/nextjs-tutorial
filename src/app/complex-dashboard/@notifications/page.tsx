import Card from '@/app/components/card';
import Link from 'next/link';

export default function NotificationsPage() {
  return (
    <>
      <Card>
        Notifications
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
}
