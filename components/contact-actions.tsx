"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { email } from "@/lib/site";
export function CopyEmail() {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        className="copy-email"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus("Email address copied.");
          } catch {
            setStatus("Select the email address above to copy it.");
          }
        }}
      >
        {status.startsWith("Email") ? <Check size={15} /> : <Copy size={15} />}
        Copy email address
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </>
  );
}
