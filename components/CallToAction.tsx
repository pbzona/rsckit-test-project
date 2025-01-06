"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-4">
        Subscribe to my newsletter for the latest updates and projects.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
}
