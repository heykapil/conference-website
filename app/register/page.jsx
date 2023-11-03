import React from "react";
import { lazy, Suspense } from "react";
import { checkDate } from "@/lib/hooks/checkDate";
import { siteMetadata } from "@/lib/data/siteMetadata";
const ClientForm = lazy(() => import("@/components/form/Form"));
export default function Form() {
  const lastdate = new Date(siteMetadata.regFormLastDate);
  return (
    <section className="flex flex-col">
      <div className="">
        <h1 className="text-2xl leading-tight font-heading text-center ">
          Registration form
        </h1>
        <h3 className="mt-6 mb-8 text-gray-500 leading-relaxed text-center">
          ...
        </h3>
      </div>
      {checkDate(lastdate) === true ? (
        <div>
          <Suspense>
            <ClientForm />
          </Suspense>
        </div>
      ) : (
        <p>
          Sorry, Last date for registration is over!
          <br />
          We are not accepting late submission.
        </p>
      )}
    </section>
  );
}
