const data = [
  {
    speaker: "Speaker 1",
    photo:
      "https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75",
    title: "Title",
    time: "24 Jan, 9:00 AM",
    link: "#",
  },
  {
    speaker: "Speaker 2",
    photo:
      "https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75",
    title: "Title",
    time: "24 Jan, 9:00 AM",
    link: "#",
  },
  {
    speaker: "Speaker 3",
    photo:
      "https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75",
    title: "Title",
    time: "24 Jan, 9:00 AM",
    link: "#",
  },
  {
    speaker: "Speaker 4",
    photo:
      "https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75",
    title: "Title",
    time: "24 Jan, 9:00 AM",
    link: "#",
  },
  {
    speaker: "Speaker 5",
    photo:
      "https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75",
    title: "Title",
    time: "24 Jan, 9:00 AM",
    link: "#",
  },
];
export default function SpeakerPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full bg-white p-2">
        {data.map((speaker) => (
          <div
            key={speaker.speaker}
            className="p-2 md:p-4 rounded-xl bg-blue-50"
          >
            <div className="inline-flex rounded-full p-1">
              <img className="rounded" src={speaker.photo} alt="" />
            </div>

            <h3 className="mt-4 text-sm font-bold md:text-base  text-gray-800">
              {speaker.speaker}
            </h3>
            <p className="mt-4 text-sm md:text-sm text-gray-600">
              {speaker.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
