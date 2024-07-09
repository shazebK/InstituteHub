const DUMMY_EVENTS = [
    {
      id:1,
      title: "Eminem Rap",
      location: "K.D. Singh Stadium, Lucknow, Uttar Pradesh",
      date: "06-30-24",
      registrationRequired: false,
      description:
        "An mindblowing event where eminem will be raping non-stop to diss all the haters and enjoy your life. Jingalala hu jingalala hu, hu hu.",
    },
    {
      id:2,
      title: "Raftaar Rocking",
      location: "University Stadium, Lucknow, Uttar Pradesh",
      date: "06-30-24",
      registrationRequired: false,
      description:
        "An mindblowing event where eminem will be raping non-stop to diss all the haters and enjoy your life. Jingalala hu jingalala hu, hu hu.",
    },
  ];
  
  export default function Events() {
    return (
      <div className="px-4">
        <h1>Events</h1>
        {DUMMY_EVENTS.map((event) => <EventCard key={event.id} event={event}></EventCard>)}
      </div>
    );
  }
  
  const EventCard = ({ event }) => {
    return (
      <div className="my-4">
        <h1>{event.title}</h1>
        <h3>{event.date}</h3>
        <h3>{event.location}</h3>
      </div>
    );
  };