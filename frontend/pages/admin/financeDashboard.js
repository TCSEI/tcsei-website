import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function FinanceDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">Finance Dashboard</h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2">
          <h2 className="text-xl font-bold font-poppins">Payment Records</h2>
          <p className="mt-2">Total Payments: $10,000</p>
          <p>Pending Payments: $1,500</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2">
          <h2 className="text-xl font-bold font-poppins">Reports</h2>
          <p className="mt-2">Monthly Revenue: $2,000</p>
          <p>Division Breakdown: TCS ($1,200), Gurukulam ($800)</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}