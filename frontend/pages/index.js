import HeroSection from '../components/HeroSection';
import DivisionCard from '../components/DivisionCard';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-poppins animate-slide-up">Our Divisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <DivisionCard
            title="TCS Coaching"
            description="Prepare for SSC, GD, Bank, Railway, TET, and more."
            link="/tcs-coaching"
            image="/images/tcs-coaching.jpg"
          />
          <DivisionCard
            title="Sarvoday Gurukulam"
            description="Holistic education from playschool to Class 8."
            link="/sarvoday-gurukulam"
            image="/images/sarvoday-gurukulam.jpg"
          />
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}