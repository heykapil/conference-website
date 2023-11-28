import React from "react";
import { data } from "@/lib/data/organizers";
import Image from "next/image";
export default function Organizer() {
  return (
    <div className="container mx-auto mt-10 overflow-scroll">
      <table className="table-auto lg:w-full mx-auto w-screen text-left text-sm z-0 border-collapse p-2">
        {/* head */}
        <thead className="text-lg align-center">
          <tr>
            <th>Person</th>
            <th>Role</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.email} className="">
              <td className="py-2  border-t border-muted">
                <div className="flex items-center self-center gap-3">
                  <Image
                    src="https://heykapil.in/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F101615305%3Fv%3D4&w=64&q=75"
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-primary">
                      {item.name}
                    </div>
                    <div className="text-sm text-secondary-foreground">
                      {item.role}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-secondary-foreground  border-t border-muted">
                {item.role}
              </td>
              {item.phone ? (
                <td className="text-primary underline  border-t border-muted">
                  <a
                    href={`tel:${item.phone}`}
                    className="flex flex-inline align-center self-center gap-1"
                  >
                    {item.phone} <br /> {item.email}
                  </a>
                </td>
              ) : (
                ""
              )}
              <th className="underline text-primary"></th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
