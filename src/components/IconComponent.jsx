import React from "react";
import styles from "./Icon.module.scss";
import clsx from "clsx";

export default function Icon({ icon, hoverIcon = null, size = 16, className }) {
  return (
    <span
      className={clsx(styles.iconWrapper, className, { [styles.hoverable]: hoverIcon })}
      style={{ width: size, height: size }}
    >
      {/* Default Icon */}
      <span className={styles.icon}>{icon}</span>

      {/* Hover Icon (if passed) */}
      {hoverIcon && <span className={styles.iconHover}>{hoverIcon}</span>}
    </span>
  );
}
