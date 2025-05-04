import dayjs from 'dayjs';
import { useState } from 'react';

export default function BookingForm({ services, onBook }) {
  const [serviceId, setServiceId] = useState(services[0]?._id || '');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const submit = e => {
    e.preventDefault();
    onBook({ service: serviceId, date });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <select value={serviceId} onChange={e => setServiceId(e.target.value)} className="w-full p-2 border">
        {services.map(s => <option key={s._id} value={s._id}>{s.title}</option>)}
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border" />
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Book Now</button>
    </form>
  );
}
