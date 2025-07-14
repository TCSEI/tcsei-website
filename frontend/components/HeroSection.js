import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
      <h1 className="text-5xl font-bold font-poppins animate-fade-in">Welcome to TCSEI</h1>
      <p className="text-xl mt-4 animate-slide-up">Empowering Education for a Brighter Future</p>
      <div className="mt-8 space-x-4">
        <Link href="/tcs-coaching">
          <a className="btn-primary px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg elevation-2">Explore TCS Coaching</a>
        </Link>
        <Link href="/sarvoday-gurukulam">
          <a className="btn-secondary px-6 py-3 border border-white hover:bg-white hover:text-blue-700 rounded-lg">Explore Sarvoday Gurukulam</a>
        </Link>
      </div>
    </section>
  );
}