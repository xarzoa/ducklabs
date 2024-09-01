import React from "react";
import styles from "./spinner.module.css";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div className={`${styles.spinner} ${className}`} aria-label="Loading">
      <div className={styles.spinnerInner} />
    </div>
  );
}
