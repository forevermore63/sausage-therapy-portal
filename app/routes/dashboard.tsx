import { Link } from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-forest text-cream px-6 py-4">
        <Link to="/" className="text-xl">← Sausage Therapy</Link>
      </nav>
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-serif mb-8">Impact & Wealth Dashboard</h1>
        <p className="text-xl mb-12">Live view of how the empire is compounding while serving life.</p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-gold">$12,480</div>
            <div>This Month Revenue</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-gold">47</div>
            <div>Active Members</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-gold">23</div>
            <div>Sessions Delivered</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-gold">$1,248</div>
            <div>Giving Allocated</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">Conscious Giving Streams</h2>
          <ul className="space-y-2 text-lg">
            <li>• 10% of memberships → dog rescues & Forevermore Farm recovery</li>
            <li>• Course profits fund NDIS access expansions</li>
            <li>• Session revenue supports Therapy Sausages training & placements</li>
          </ul>
          <p className="mt-6 italic">Money is pouring. The dachshunds are healing. The empire rises.</p>
        </div>
      </div>
    </div>
  );
}