
import ServerLayout from './layout/server-layout';
import ClientLayout from './layout/client-layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerLayout>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ServerLayout>
  );
}
