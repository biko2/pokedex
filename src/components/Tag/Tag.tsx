import styles from "./Tag.module.css";

type TagProps = {
  color: string;
  children: string;
};

export const Tag: React.FC<TagProps> = ({ color, children }) => {
  return (
    <span
      className={styles.tagWrapper}
      style={{
        backgroundColor: `var(--type-${color})`,
      }}
    >
      {children}
    </span>
  );
};
