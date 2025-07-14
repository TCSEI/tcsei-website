import { useAuth } from '../../hooks/useAuth';
import DashboardCard from '../../components/DashboardCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function StudentDashboard() {
  const { user } = useAuth();
  const isCoaching = user?.division === 'tcs-coaching';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">
        {isCoaching ? 'TCS Coaching' : 'Sarvoday Gurukulam'} Student Dashboard
      </h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Courses Enrolled"
          value={isCoaching ? '5' : '3'}
          icon="fa-book"
          color="blue-600"
        />
        <DashboardCard
          title="Progress"
          value={isCoaching ? '75%' : '80%'}
          icon="fa-chart-line"
          color="green-600"
        />
        <DashboardCard
          title={isCoaching ? 'Upcoming Tests' : 'Homework Due'}
          value={isCoaching ? '3' : '2'}
          icon={isCoaching ? 'fa-calendar' : 'fa-tasks'}
          color="purple-600"
        />
      </div>
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold font-poppins">Your Schedule</h2>
        <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg">
          <p>{isCoaching ? 'SSC Mock Test - Tomorrow 10 AM' : 'Math Class - Today 2 PM'}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}