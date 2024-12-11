// components/RequestItem.js
export default function ResourceRequestCard({ request }) {
  return (
    <div className="bg-white p-6 mb-6 shadow-xl rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">
      <h3 className="font-semibold text-xl text-gray-800">{request.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{request.contactEmail}</p>
      <p className="mt-4 text-gray-700">{request.purpose}</p>
      
      {request.specialRequests && (
        <div className="m-4 bg-gray-100 p-4 rounded-lg shadow-sm">
          <h4 className="font-medium text-gray-800">Special Requests</h4>
          <p className="text-gray-600">{request.specialRequests}</p>
        </div>
      )}
      
      <p className="absolute bottom-2 right-6 text-sm text-gray-500 italic">{new Date(request.date).toLocaleDateString()}</p>
    </div>
  );
}
