import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const schedule = [
  {
    day: "Thursday 28th",
    events: [
      {
        id: 1,
        name: "Registration",
        href: "#link",
        time: "09:00 AM",
        details: "",
        member: "Alice Doe",
      },
      {
        id: 2,
        name: "Introduction",
        href: "#link",
        time: "10:30 AM",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        member: "John Doe",
      },
      {
        id: 3,
        name: "Financial Meeting",
        href: "#link",
        time: "14:00 PM",
        details:
          "Accusantium atque tempore dolore ratione unde sunt dignissimos recusandae saepe provident architecto.",
        member: "John Doe",
      },
    ],
  },
  {
    day: "Friday 29th",
    events: [
      {
        id: 1,
        name: "Content Marketing",
        href: "#link",
        time: "12:00 AM",
        details:
          "Consectetur harum porro quam, facere necessitatibus quos veritatis.",
        member: "John Doe",
      },
      {
        id: 2,
        name: "Social Media",
        href: "#link",
        time: "15:50 PM",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        member: "Alice Doe",
      },
    ],
  },
  {
    day: "Saturday 30th",
    events: [
      {
        id: 1,
        name: "Content Marketing",
        href: "#link",
        time: "12:00 AM",
        details:
          "Consectetur harum porro quam, facere necessitatibus quos veritatis.",
        member: "John Doe",
      },
      {
        id: 2,
        name: "Social Media",
        href: "#link",
        time: "15:50 PM",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        member: "Alice Doe",
      },
    ],
  },
];
export default function Schedule() {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="py-12 px-4 text-center">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-2xl leading-tight font-heading ">Schedule</h1>
            <h3 className="mt-6 mb-8 text-gray-500 leading-relaxed">
              The event is scheduled for 3 days.
            </h3>
          </div>
        </section>
        <Tabs defaultValue="Thursday 28th" className="w-full">
          {schedule.map((day) => (
            <>
              <TabsList key={day.day}>
                <TabsTrigger value={day.day}>{day.day}</TabsTrigger>
              </TabsList>
            </>
          ))}
          {schedule.map((day) => (
            <>
              <TabsContent value={day.day}>
                <ul className="py-1 flex flex-col">
                  {day.events.map((event) => (
                    <li
                      key={event.id}
                      className="group py-3 border-b px-2 sm:px-5 flex items-center"
                    >
                      {/* :::time container */}
                      <div className="flex-shrink-0 mr-3 sm:mr-12 px-2 flex flex-col bg-purple-50">
                        <span className="text-sm sm:text-base text-purple-500 font-bold">
                          {event.time}
                        </span>
                      </div>
                      {/* :::details container */}
                      <div className="col-span-7 sm:col-span-6 px-3">
                        <p className="text-base text-gray-700 font-bold uppercase">
                          {event.name}
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-gray-500">
                          {event.details}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </>
          ))}
        </Tabs>
      </div>
    </>
  );
}
