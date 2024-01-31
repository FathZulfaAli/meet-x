import SidebarDash from '@/components/SidebarDash';
import '../globals.css';
export default function DashboardLayout({ children }) {
  return (
    <section>
      <SidebarDash />
      {children}
    </section>
  );
}
