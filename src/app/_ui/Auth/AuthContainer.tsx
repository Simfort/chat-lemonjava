"use client";
import LogIn from "./LogIn";

export default function AuthContainer() {
  return (
    <main>
      <section className="h-[500px] flex justify-center p-10 min-w-[500px] bg-(--accent-color) rounded-2xl">
        <LogIn />
      </section>
    </main>
  );
}
