export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'Motorex Expo 2025 – Opening Ceremony',
      date: 'August 5, 2025',
      location: 'Damascus International Fairgrounds',
      description: 'Join the grand opening of the first international automotive expo in Syria in over a decade.',
      image: '/events/opening.jpg',
    },
    {
      id: 2,
      title: 'Automotive Innovation Day',
      date: 'August 7, 2025',
      location: 'Innovation Hall, Motorex Expo',
      description: 'A day dedicated to showcasing the latest in automotive tech and future mobility trends.',
      image: '/events/innovation.jpg',
    },
    {
      id: 3,
      title: 'Classic Car Parade',
      date: 'August 9, 2025',
      location: 'Damascus City Tour – Start at Exhibition Center',
      description: 'Celebrate automotive history with a showcase of rare and classic vehicles from across the region.',
      image: '/events/classics.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
          Upcoming Motorex Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="text-red-700 hover:text-red-900 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium transition">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
