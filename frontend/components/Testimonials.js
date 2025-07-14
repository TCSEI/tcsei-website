export default function Testimonials() {
  const testimonials = [
    { name: 'John Doe', text: 'TCSEI helped me ace my SSC exam!', role: 'Student', division: 'TCS Coaching' },
    { name: 'Jane Smith', text: 'Teaching at Sarvoday Gurukulam is a joy.', role: 'Teacher', division: 'Sarvoday Gurukulam' },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center font-poppins animate-fade-in">Testimonials</h2>
      <div className="scrapbook-item grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2 hover:elevation-3 transition-transform duration-200">
            <p className="text-gray-600 dark:text-gray-300">"{t.text}"</p>
            <p className="mt-4 font-bold">{t.name} - {t.role} ({t.division})</p>
          </div>
        ))}
      </div>
    </section>
  );
}