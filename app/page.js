"use client"

import AnnouncementCard from "@/components/UI/announcement_card";
import ImageSlideShow from "@/components/UI/image_slide_show";
import { useEffect, useState } from "react";

const IMAGES = [
  {
    src: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fd1QTjZhp%2F89998956-2599539480301340-8857950519889494016-n.jpg&w=828&q=75",
    alt: "Basketball court",
  },
  {
    src: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBbfsNJ53%2FDSC-0020.jpg&w=828&q=75",
    alt: "Lab",
  },
  {
    src: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzXXpkynK%2FDSC09197.jpg&w=828&q=75",
    alt: "Auditorium",
  },
];

const ANNOUNCEMENTS = [
  {
    title: "Workshop on AI",
    description:
      "A workshop on Artificial Intelligence will be conducted on 20th December in Room 101.",
  },
  {
    title: "Exam Schedule Released",
    description:
      "The end-semester exam schedule has been released. Check the official website for details.",
  },
  {
    title: "Holiday Notice",
    description:
      "The institute will remain closed on 25th December for Christmas.",
  },
];

export default function Home() {

  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/getAllAnnouncements");
        const data = await response.json();
        setAnnouncements(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="w-full px-4 flex flex-col items-center justify-center">
      <div className="w-5/6 text-center my-8">
        <h1 className="text-2xl md:text-3xl">Welcome To</h1>
        <h1 className="text-3xl md:text-4xl">
          National Institute of Technology Patna
        </h1>
      </div>

      <div className="w-full md:w-2/3 h-[60vh] rounded-md relative">
        <ImageSlideShow images={IMAGES} delay={5000} />
      </div>

      {
        loading?<p className="text-lg font-semibold text-center py-4">Loading Announcements...</p>:
      <div className="w-full md:w-2/3 mt-8">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            title={announcement.title}
            description={announcement.description}
            date={announcement.date}
          />
        ))}
      </div>
      }
    </div>
  );
}
