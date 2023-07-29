import styles from "./styles.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>NavBar on about layout</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
