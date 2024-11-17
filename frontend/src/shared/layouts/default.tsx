import { SidebarProvider } from '@/shared/components/ui/sidebar';
import AppSidebar from '../components/nav/app-sidebar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="size-full">
        {children}
      </main>
    </SidebarProvider>
  );
}
