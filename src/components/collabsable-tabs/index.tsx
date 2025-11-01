"use client";

import { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Tab = "chart" | "info";

export function CollapsableTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("chart");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.pairInfo}>
          <Image
            src="/icons/btc.svg"
            alt="Bitcoin"
            width={24}
            height={24}
            className={styles.coinIcon}
          />
          <span className={styles.pairName}>BTCUSDT</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={styles.coin_dropdown_triangle}
          />
        </div>
        <div className={styles.priceInfo}>
          <span className={styles.price}>113,659.8</span>
          <span className={styles.price}>+1.77%</span>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "chart" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("chart")}
          >
            Chart
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "info" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${styles.collapseButton} ${
            isCollapsed ? styles.collapsed : ""
          }`}
        />
      </div>
      {isCollapsed && (
        <div className={styles.content}>
          {activeTab === "chart" ? (
            <div className={styles.chartContent}>
              {/* Chart content will go here */}
              Chart Content
            </div>
          ) : (
            <div className={styles.infoContent}>
              {/* Info content will go here */}
              Info Content
            </div>
          )}
        </div>
      )}
    </div>
  );
}
