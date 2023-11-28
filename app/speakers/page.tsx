import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { data } from "@/lib/data/speakers";
import { Clock2Icon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
export default function SpeakerPage() {
  return (
    <main className="mx-auto max-w-6xl">
      <section className="pt-14 cards-conatiner">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-2xl leading-tight font-heading text-center ">
            Speakers
          </h1>
          <h3 className="mt-6 mb-8 text-gray-500 leading-relaxed text-center">
            This is list of speakers arranged in the manner of the date of the
            talk.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full bg-background p-2 h-full">
          {data.map((speaker) => (
            <Card
              key={speaker.speaker}
              className={
                "mx-auto border bg-card border-muted shadow-sm p-6 rounded-md w-full min-w-md max-w-md hover:bg-card-hovered hover:-translate-y-0.5 ease-in-out duration-200 transition"
              }
            >
              <div className="flex items-center space-x-4">
                <Avatar className="w-14 h-14">
                  {speaker.photo ? (
                    <>
                      <AvatarImage alt={speaker.speaker} src={speaker.photo} />
                      <AvatarFallback>{speaker.fallback}</AvatarFallback>
                    </>
                  ) : (
                    <AvatarFallback>
                      {speaker.fallback ? speaker.fallback : `NA`}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-lg font-semibold">
                    {speaker.speaker}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {speaker.affiliation}
                  </CardDescription>
                </div>
              </div>
              <CardContent className="mt-4">
                <ul className="space-y-2">
                  <li className="text-sm flex flex-row gap-1 text-forground/50">
                    {speaker.title}
                  </li>
                  <li className="text-muted-foreground flex flex-row gap-1 text-sm items-center">
                    <Clock2Icon className="w-5 h-5" /> {speaker.time}
                  </li>
                  <li className="flex flex-row gap-1 items-center">
                    <ExternalLinkIcon className="w-5 h-5 text-muted-foreground" />
                    <Link
                      href={speaker.link}
                      target="_blank"
                      className="underline text-[#0000ff] cursor-pointer dark:text-cyan-400"
                    >
                      Click to join
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
