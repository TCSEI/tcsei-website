export default function DashboardCard({ title, value, icon, color = 'blue-600' }) {
  return (
    <div className="dashboard-card p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2 hover:elevation-3 transition-transform duration-200">
      <i className={`fas ${icon} text-3xl text-${color}`}></i>
      <h3 className="text-xl font-bold mt-2 font-poppins">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
}