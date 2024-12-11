export default function AnnouncementCard({ title, description, date }) {
  return (
    <div className="relative border border-gray-300 rounded-md p-8 shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="absolute bottom-2 right-2 text-gray-500 text-sm">{date}</div>
    </div>
  );
}
