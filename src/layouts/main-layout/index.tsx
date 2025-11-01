import { CollapsableTabs, Header, Menu } from "@/components";
import styles from "./index.module.css";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

export function MainLayout({ children }: IMainLayoutProps) {
  return (
    <main className="main">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <CollapsableTabs />
        </div>
        <Menu />
      </div>
    </main>
  );
}
