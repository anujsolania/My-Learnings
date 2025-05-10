"use client"

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";



export default function Home() {
  const session = useSession();

  return (
    <div>
      {JSON.stringify(session.data)}
    </div>
  );
}
