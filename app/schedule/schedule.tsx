"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schedule } from "@/lib/data/schedule";
export default function Schedule() {
  return (
    <main className="max-w-3xl mx-auto">
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
            <TabsList key={day.day}>
              <TabsTrigger value={day.day}>{day.day}</TabsTrigger>
            </TabsList>
          ))}
          {schedule.map((day) => (
            <TabsContent key={day.day} value={day.day}>
              <ul className="py-1 flex flex-col">
                {day.events.map((event) => (
                  <li
                    key={event.id}
                    className="group py-3 border-y px-2 sm:px-5 flex items-center"
                  >
                    {/* :::time container */}
                    <div className="flex-shrink-0 mr-3 sm:mr-12 px-2 flex flex-col bg-accent">
                      <span className="text-sm sm:text-base text-foreground font-bold">
                        {event.time}
                      </span>
                    </div>
                    {/* :::details container */}
                    <div className="col-span-7 sm:col-span-6 px-3">
                      <p className="text-base font-bold uppercase">
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
          ))}
        </Tabs>
      </div>
    </main>
  );
}
