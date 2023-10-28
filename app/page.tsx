import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
        <h1>Remind Me</h1>
        <p>Remind Me is a simple app that allows you to set reminders for yourself.</p>
        <p>It is built with Next.js, TypeScript, and Clerk.</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
