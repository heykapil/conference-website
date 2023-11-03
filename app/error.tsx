"use client";
import { siteMetadata } from "@/lib/data/siteMetadata";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error;
  // reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
      <div className="w-full mx-auto lg:w-1/3">
        <p className="mt-5 mb-3 text-xl font-bold text-red-500 md:text-2xl">
          Error Occured !
        </p>
        <p className="mb-3 text-base font-medium text-secondary-foreground">
          Oh no! Something went wrong, please refresh the page and try again! If
          issue persists, We may or may not know about this issue so feel free
          to report it at{" "}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="underline text-cyan-500"
          >
            {siteMetadata.email}.
          </a>{" "}
          <br />
          We'll fix it soon, Thanks for understanding!
        </p>
      </div>
    </section>
  );
}
