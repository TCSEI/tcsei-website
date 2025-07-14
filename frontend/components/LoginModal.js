import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password, role);
      onClose();
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg elevation-3 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 font-poppins">Login</h2>
        <div className="login-tab flex space-x-2 mb-6">
          {['student', 'teacher', 'admin'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 px-4 py-2 rounded-lg ${role === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setRole(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            aria-label="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            aria-label="Password"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform duration-200"
          >
            Login
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 dark:text-gray-300 hover:text-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}