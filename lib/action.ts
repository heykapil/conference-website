"use server";
import { headers } from "next/headers";

import { queryBuilder } from "@/lib/db";
import { revalidatePath } from "next/cache";
export async function saveForm(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const firstname = formData.get("firstname")?.toString() || "";
  const lastname = formData.get("lastname")?.toString() || "";
  const name = title + " " + firstname + " " + lastname;
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const address = formData.get("address")?.toString() || "";
  const affiliation = formData.get("affiliation")?.toString() || "";
  const university = formData.get("university")?.toString() || "";
  const tranXno = formData.get("tranXno")?.toString() || "";
  const tranXdate = formData.get("tranXdate") || "";
  const tranXproof = formData.get("tranXproof")?.toString();
  const paper = formData.get("paper")?.toString();
  await queryBuilder
    .insertInto("registration")
    .values({
      // @ts-ignore
      name,
      email,
      phone,
      address,
      affiliation,
      university,
      tranXdate,
      tranXproof,
      tranXno,
      paper,
    })
    .execute();
  revalidatePath(`/register`);
}

export async function sendEmail(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const firstname = formData.get("firstname")?.toString() || "";
  const lastname = formData.get("lastname")?.toString() || "";
  const name = title + " " + firstname + " " + lastname;
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const address = formData.get("address")?.toString() || "";
  const affiliation = formData.get("affiliation")?.toString() || "";
  const university = formData.get("university")?.toString() || "";
  const tranXno = formData.get("tranXno")?.toString() || "";
  const tranXdate = formData.get("tranXdate") || "";
  const tranXproof = formData.get("tranXproof")?.toString();
  const paper = formData.get("paper")?.toString();
  const emaildata = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "no-reply@heykapil.in",
      to: "contact@heykapil.in",
      cc: `${email}`,
      subject: "New Registration",
      html: `<html><head><link rel="stylesheet" href="https://cdn1.netlify.app/resources.css" /></head><body>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
        <p>phone: ${phone}</p>
        <p>address: ${address}</p>
        <p>affiliation: ${affiliation}</p>
        <p>university: ${university}</p>
        <p>tranXno: ${tranXno}</p>
        <p>tranXdate: ${tranXdate}</p>
        <p>tranXproof: ${tranXproof}</p>
        <p>paper: ${paper}</p>
        </body>
        </html>
      `,
    }),
  });
  const response = await emaildata.json();
  console.log("Email Sent", response);
}

export async function sendtoGoogle(formData: FormData) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const title = formData.get("title")?.toString() || "";
  const firstname = formData.get("firstname")?.toString() || "";
  const lastname = formData.get("lastname")?.toString() || "";
  const name = title + " " + firstname + " " + lastname;
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const RegDate = formData.get("RegDate")?.toString() || "";
  const address =
    formData.get("address")?.toString().replace(/\n|\r/g, " ") || "";
  const affiliation = formData.get("affiliation")?.toString() || "";
  const university = formData.get("university")?.toString() || "";
  const tranXno = formData.get("tranXno")?.toString() || "";
  const tranXdate = formData.get("tranXdate") || "";
  const tranXproof = formData.get("tranXproof")?.toString();
  const paper = formData.get("paper")?.toString();
  let res = await fetch(`${protocal}://${host}/api/google-sheet-submit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      RegDate,
      name,
      email,
      phone,
      address,
      affiliation,
      university,
      tranXno,
      tranXdate,
      tranXproof,
      paper,
    }),
  });
  const content = await res.json();
  console.log(content);
}
