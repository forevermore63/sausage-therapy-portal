import { Form, Link } from "@remix-run/react";

export default function Bookings() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-forest text-cream px-6 py-4">
        <Link to="/" className="text-xl">← Sausage Therapy</Link>
      </nav>
      <div className="max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-serif mb-6">Book a Session</h1>
        <p className="text-xl mb-8">Corporate events, NDIS participants, private Therapy Sausages experiences, or mobile Coaster visits.</p>
        
        <Form method="post" className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block font-bold mb-2">Name</label>
            <input name="name" required className="w-full border rounded-lg px-4 py-3" />
          </div>
          <div>
            <label className="block font-bold mb-2">Email</label>
            <input name="email" type="email" required className="w-full border rounded-lg px-4 py-3" />
          </div>
          <div>
            <label className="block font-bold mb-2">Session Type</label>
            <select name="type" className="w-full border rounded-lg px-4 py-3">
              <option>Private Therapy Session</option>
              <option>Corporate Wellness Event</option>
              <option>NDIS Participant Support</option>
              <option>Mobile Coaster Visit</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block font-bold mb-2">Preferred Dates / Notes</label>
            <textarea name="notes" rows={4} className="w-full border rounded-lg px-4 py-3" />
          </div>
          <button type="submit" className="bg-gold text-forest px-8 py-4 rounded-full font-bold text-lg w-full">Request Booking</button>
        </Form>
        <p className="mt-6 text-center text-sm">We'll respond within 24 hours. Every session supports the dachshund family and conscious impact.</p>
      </div>
    </div>
  );
}