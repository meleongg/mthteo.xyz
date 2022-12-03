import styles from "../styles/layout.module.css";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";

export default function Layout({
  children,
  main,
}: {
  children: React.ReactNode;
  main?: boolean;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${styles.container}`}>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      {!main && (
        <div className={styles.backToPosts}>
          <Link href="/posts">← Back to posts</Link>
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
