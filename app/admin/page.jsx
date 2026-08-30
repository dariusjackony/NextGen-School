"use client";

import { useState } from "react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("admissions");

  return (
    <section className="px-4 mt-20">
      <h2>Admin</h2>
    </section>
  );
}