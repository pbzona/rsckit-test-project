"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const timelineEvents = [
  { year: 2020, event: "Started my journey in web development" },
  { year: 2021, event: "Landed my first job as a junior developer" },
  { year: 2022, event: "Promoted to mid-level developer" },
  { year: 2023, event: "Started freelancing and working on personal projects" },
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Career Timeline</h2>
      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setSelectedEvent(selectedEvent === index ? null : index)
            }
          >
            <div className="w-24 font-bold">{event.year}</div>
            <div className="flex-grow border-t border-gray-300 mx-4" />
            <div>{event.event}</div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-gray-100 rounded"
          >
            <p>
              More details about the {timelineEvents[selectedEvent].year}{" "}
              event...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
