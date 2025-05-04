export default function ServiceCard({ service }) {
  return (
    <div className="border rounded p-4">
      <img src={service.imageUrl} alt={service.title} className="h-32 w-full object-cover" />
      <h3 className="mt-2 font-semibold">{service.title}</h3>
      <p className="text-sm">{service.description}</p>
      <span className="block mt-1 font-bold">${service.price}</span>
    </div>
  );
}
