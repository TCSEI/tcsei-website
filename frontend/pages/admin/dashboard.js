import Link from 'next/link';
import DashboardCard from '../../components/DashboardCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">Admin Dashboard</h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link href="/admin/userManagement">
          <a><DashboardCard title="User Management" value="Manage" icon="fa-users-cog" color="blue-600" /></a>
        </Link>
        <Link href="/admin/contentManagement">
          <a><DashboardCard title="Content Management" value="Manage" icon="fa-book-open" color="green-600" /></a>
        </Link>
        <Link href="/admin/financeDashboard">
          <a><DashboardCard title="Finance Dashboard" value="View" icon="fa-dollar-sign" color="purple-600" /></a>
        </Link>
        <Link href="/admin/analytics">
          <a><DashboardCard title="Analytics" value="View" icon="fa-chart-bar" color="orange-600" /></a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}