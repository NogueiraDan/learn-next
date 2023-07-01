import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Main page</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/users">Go to Users</Link>
    </main>
  );
}
