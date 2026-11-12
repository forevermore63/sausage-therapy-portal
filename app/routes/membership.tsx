import { Link } from "@remix-run/react";

export default function Membership() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-forest text-cream px-6 py-4">
        <Link to="/" className="text-xl">← Sausage Therapy</Link>
      </nav>
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-5xl font-serif mb-6">Therapy Sausages Inner Circle</h1>
        <p className="text-2xl mb-12">Monthly membership that compounds healing + wealth.</p>
        
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg mx-auto">
          <div className="text-6xl font-bold text-gold mb-2">AUD $47</div>
          <div className="text-xl mb-8">/ month</div>
          <ul className="text-left space-y-4 mb-10 text-lg">
            <li>✓ Live monthly dachshund wisdom sessions</li>
            <li>✓ Full resource library & course discounts</li>
            <li>✓ Priority booking for sessions & events</li>
            <li>✓ Impact dashboard access</li>
            <li>✓ Community of conscious practitioners</li>
            <li>✓ 10% of every membership fuels dog rescues & NDIS access</li>
          </ul>
          <button className="bg-forest text-cream px-10 py-4 rounded-full text-xl font-bold w-full">Start Membership</button>
          <p className="mt-4 text-sm">Cancel anytime. Conscious giving built-in.</p>
        </div>
      </div>
    </div>
  );
}