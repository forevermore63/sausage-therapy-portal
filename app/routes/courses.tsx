import { Link } from "@remix-run/react";

export default function Courses() {
  const courses = [
    {
      title: "Sausage Therapy Animal-Assisted Healing Foundations",
      price: "AUD $497",
      modules: 8,
      description: "Ethical integration of dachshunds and companion animals into healing work. Perfect for therapists, coaches, NDIS providers, and wellness professionals.",
    },
    {
      title: "Therapy Dog Handler Certification Pathway",
      price: "AUD $897",
      modules: 12,
      description: "Complete handler training for Therapy Sausages placements — emotional support, trauma-informed practice, and public access standards.",
    },
    {
      title: "Conscious Wealth & Impact for Animal-Assisted Practitioners",
      price: "AUD $297",
      modules: 6,
      description: "Build the business systems that fund your mission. Aligns with the Ruthless Wealth Empire Blueprint.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-forest text-cream px-6 py-4">
        <Link to="/" className="text-xl">← Sausage Therapy</Link>
      </nav>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-serif mb-4">Online Courses</h1>
        <p className="text-xl mb-12">Self-paced digital products that scale the dream. Instant access after purchase.</p>
        <div className="space-y-8">
          {courses.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{c.title}</h2>
                <p className="text-lg mb-2">{c.description}</p>
                <p className="text-gold font-bold">{c.modules} modules • Lifetime access</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-forest mb-4">{c.price}</div>
                <button className="bg-gold text-forest px-6 py-3 rounded-full font-bold">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}