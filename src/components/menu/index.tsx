import { MAIN_MENU } from "@/constants";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export function Menu() {
  return (
    <div className={styles.menu}>
      {MAIN_MENU.map((item) => (
        <Link key={item.label} href={item.href} className={styles.menu_item}>
          <Image
            src={item.icon}
            alt={item.label}
            width={0}
            height={0}
            className={styles.icon}
          />
          <p className={styles.label}>{item.label}</p>
        </Link>
      ))}
    </div>
  );
}
