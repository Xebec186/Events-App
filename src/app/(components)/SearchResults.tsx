import { useHits } from "react-instantsearch";
import React from "react";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";
import Event from "../Types/Event";

function SearchResults() {
  const { items } = useHits();
  const router = useRouter();

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {items?.map((item) => (
        <EventCard
          key={item.objectID || item.id}
          event={
            {
              ...item,
              id: item.id || item.objectID, // Ensure id is present for EventCard
            } as Event
          }
          onClick={handleEventClick}
        />
      ))}
    </div>
  );
}

export default SearchResults;
