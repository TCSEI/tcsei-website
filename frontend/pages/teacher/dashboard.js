import { useAuth } from '../../hooks/useAuth';
import DashboardCard from '../../components/DashboardCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const isCoaching = user?.division === 'tcs-coaching';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">
        {isCoaching ? 'TCS Coaching' : 'Sarvoday Gurukulam'} Teacher Dashboard
      </h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Classes Assigned"
          value={isCoaching ? '10' : '8'}
          icon="fa-chalkboard"
          color="blue-600"
        />
        <DashboardCard
          title="Students"
          value={isCoaching ? '50' : '30'}
          icon="fa-users"
          color="green-600"
        />
        <DashboardCard
          title="Assignments"
          value={isCoaching ? '8' : '5'}
          icon="fa-tasks"
          color="purple-600"
        />
      </div>
      <section className="mt-8 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold font-poppins">Class Schedule</h2>
        <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg">
          <p>{isCoaching ? 'SSC Prep Class - Tomorrow 11 AM' : 'Science Class - Today 3 PM'}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}