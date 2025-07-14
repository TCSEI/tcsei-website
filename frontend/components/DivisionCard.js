import Link from 'next/link';

export default function DivisionCard({ title, description, link, image }) {
  return (
    <div className="division-card p-6 bg-white dark:bg-gray-800 rounded-lg elevation-2 hover:elevation-3 transition-transform duration-300 transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-bold font-poppins text-primary">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <Link href={link}>
        <a className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Explore</a>
      </Link>
    </div>
  );
}