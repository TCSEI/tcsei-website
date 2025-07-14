import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function UserManagement() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: 'student',
    adminType: '',
    division: 'tcs-coaching',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        alert('User created successfully!');
        setUserData({ email: '', password: '', role: 'student', adminType: '', division: 'tcs-coaching' });
      } else {
        alert('Failed to create user.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">User Management</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2">
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
          aria-label="Email"
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
          aria-label="Password"
        />
        <select
          value={userData.role}
          onChange={(e) => setUserData({ ...userData, role: e.target.value, adminType: e.target.value === 'admin' ? 'super' : '' })}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Role"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        {userData.role === 'admin' && (
          <select
            value={userData.adminType}
            onChange={(e) => setUserData({ ...userData, adminType: e.target.value })}
            className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Admin Type"
          >
            <option value="super">Super-Admin</option>
            <option value="user">User-Admin</option>
            <option value="content">Content-Admin</option>
            <option value="finance">Finance-Admin</option>
          </select>
        )}
        <select
          value={userData.division}
          onChange={(e) => setUserData({ ...userData, division: e.target.value })}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Division"
        >
          <option value="tcs-coaching">TCS Coaching</option>
          <option value="sarvoday-gurukulam">Sarvoday Gurukulam</option>
        </select>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform duration-200"
        >
          Create User
        </button>
      </form>
      <Footer />
    </div>
  );
}