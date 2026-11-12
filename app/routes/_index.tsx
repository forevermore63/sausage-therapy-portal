import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sausage Therapy | Animal-Assisted Healing & Therapy Sausages" },
    { name: "description", content: "Premium online portal for Sausage Therapy — dachshund-powered animal-assisted healing, courses, memberships, and NDIS-friendly sessions. Grow the dream from true to tremendous." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <nav className="bg-forest text-cream px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">SAUSAGE THERAPY</div>
        <div className="space-x-6">
          <Link to="/courses" className="hover:text-gold">Courses</Link>
          <Link to="/membership" className="hover:text-gold">Membership</Link>
          <Link to="/bookings" className="hover:text-gold">Book Session</Link>
          <Link to="/dashboard" className="hover:text-gold">Impact Dashboard</Link>
        </div>
      </nav>

      <section className="relative h-[70vh] bg-cover bg-center bg-forest flex items-center justify-center">
        <div className="text-center text-cream px-6">
          <h1 className="text-6xl font-serif mb-4">From True to Tremendous</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">Animal-assisted healing powered by Therapy Sausages — dachshunds trained for emotional support, trauma recovery, and conscious wellness.</p>
          <Link to="/membership" className="bg-gold text-forest px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition">Join the Inner Circle</Link>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">New Online Elements Live</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Foundations Course</h3>
            <p>Complete self-paced Animal-Assisted Healing certification pathway. From ethics to practical facilitation.</p>
            <Link to="/courses" className="text-gold font-bold mt-4 inline-block">Explore →</Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Inner Circle Membership</h3>
            <p>Monthly access to live sessions, dachshund wisdom, resource library, and priority booking.</p>
            <Link to="/membership" className="text-gold font-bold mt-4 inline-block">Join →</Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Session Bookings</h3>
            <p>Request corporate events, NDIS sessions, or private Therapy Sausages experiences.</p>
            <Link to="/bookings" className="text-gold font-bold mt-4 inline-block">Book →</Link>
          </div>
        </div>
      </section>

      <footer className="bg-forest text-cream text-center py-8">
        <p>© 2026 Sausage Therapy / Forevermore Farm / Noosa Dachshunds. Every purchase fuels dog therapy and conscious giving.</p>
      </footer>
    </div>
  );
}