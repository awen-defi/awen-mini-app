import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/icons/logo-big.svg"
          alt="Logo"
          width={0}
          height={0}
          className={styles.logo}
        />
      </Link>
      <div className={styles.header_right}>
        <Image
          src="/icons/globe.svg"
          alt="Globe"
          width={0}
          height={0}
          className={styles.icon}
        />
        <Image
          src="/icons/settings.svg"
          alt="Settings"
          width={0}
          height={0}
          className={styles.icon}
        />
        <Image
          src="/icons/wallet.svg"
          alt="Wallet"
          width={0}
          height={0}
          className={styles.icon}
        />
      </div>
    </header>
  );
}
