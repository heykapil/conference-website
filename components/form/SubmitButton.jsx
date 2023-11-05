"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
export function FormSubmitButton({ children, pendingState, ...props }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} {...props}>
      {pending ? pendingState : children}
    </Button>
  );
}
