import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import "./styles/style.scss";

export default function Home() {
  return (
    <>
      <h1 className={styles.sitetitle}>ともすた</h1>
      <Image src="/favicon.ico" width={150} height={150} alt="next.js" />
      <p>
        <Link href={"/about"}>ポートフォリオ</Link>
      </p>
    </>
  );
}
