import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page",
  description: "Page of about",
};

export default function About() {
  return (
    <main>
      <h1>About page</h1>
      <Link href="/">Go to Homepage</Link>
    </main>
  );
}
