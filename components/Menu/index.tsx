"use client";

import * as React from "react";
import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { checkDate } from "@/lib/hooks/checkDate";
import { siteMetadata } from "@/lib/data/siteMetadata";
import { usePathname } from "next/navigation";
const lastdate = new Date(siteMetadata.regFormLastDate);
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Abstract submission",
    href: "/authors",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Presentations",
    href: "/presentations",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Journals",
    href: "/journals",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Lectures",
    href: "/lectures",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuHeader() {
  const pathname = usePathname();
  // @ts-ignore
  const activepath = pathname.split("/")[1];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          className={cn({
            ["font-bold bg-accent rounded-md text-cyan-500"]: "" === activepath,
          })}
        >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={cn({
            ["font-bold bg-accent rounded-md text-cyan-500"]:
              "speakers" === activepath,
          })}
        >
          <Link href="/speakers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Speakers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={cn({
            ["font-bold bg-accent rounded-md text-cyan-500"]:
              "schedule" === activepath,
          })}
        >
          <Link href="/schedule" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Schedule
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Attending ?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <CalendarDaysIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Registration
                    </div>
                    {checkDate(lastdate) === true ? (
                      <p className="text-sm leading-tight text-red-500">
                        ends on <br />
                        {siteMetadata.regFormLastDate}.
                      </p>
                    ) : (
                      <p className="text-sm leading-tight text-red-500">
                        Last date is over!
                      </p>
                    )}
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/register" title="Register Now!">
                for attending the {siteMetadata.title}.
              </ListItem>
              <ListItem href="/fees" title="Fee payment">
                for payment of registration, accomodation etc.
              </ListItem>
              <ListItem href="/contact" title="Reach us!">
                for queries, issues, suggestions, feedbacks etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>General info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
