import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function ContentManagement() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    division: 'tcs-coaching',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/create-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });
      if (res.ok) {
        alert('Course created successfully!');
        setCourseData({ title: '', description: '', division: 'tcs-coaching' });
      } else {
        alert('Failed to create course.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-8 font-poppins">Content Management</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2">
        <input
          type="text"
          value={courseData.title}
          onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
          placeholder="Course Title"
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
          aria-label="Course Title"
        />
        <textarea
          value={courseData.description}
          onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
          placeholder="Course Description"
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
          aria-label="Course Description"
        ></textarea>
        <select
          value={courseData.division}
          onChange={(e) => setCourseData({ ...courseData, division: e.target.value })}
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
          Create Course
        </button>
      </form>
      <Footer />
    </div>
  );
}