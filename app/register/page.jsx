import React from "react";
import ClientForm from "@/components/form/Form";
import { checkDate } from "@/lib/hooks/checkDate";

export default function Form() {
  const enddate = new Date("October 26, 2023");
  return (
    <>
      {checkDate(enddate) === true ? (
        <>
          <ClientForm />
        </>
      ) : (
        <p>Submissions are closed!</p>
      )}
      {checkDate(enddate)}
    </>
  );
}
