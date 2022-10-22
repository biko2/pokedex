import { Icon } from "components/Icon";
import { Height } from "components/Icon/icons/Height";
import { Weight } from "components/Icon/icons/Weight";
import { Tag } from "components/Tag";
import styles from "./PokemonCard.module.css";

type CardProps = {
  index: number;
  name: string;
  imageUrl: string;
  types: string[];
  weight: number;
  height: number;
  description: string;
};

export const PokemonCard: React.FC<CardProps> = ({
  index,
  name,
  imageUrl,
  types,
  weight,
  height,
  description,
}) => {
  const formattedIndex = `#${index.toString().padStart(3, "0")}`;

  return (
    <div
      className={styles.cardWrapper}
      style={{
        backgroundColor: `var(--type-${types[0]}`,
      }}
    >
      <div className={styles.header}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.index}>{formattedIndex}</p>
      </div>

      <div className={styles.content}>
        <img className={styles.image} src={imageUrl} alt={name} />
        <div className={styles.information}>
          <div className={styles.types}>
            {types.map((type: string, tagIndex: number) => (
              <Tag key={`card-type-${tagIndex}`} color={type}>
                {type}
              </Tag>
            ))}
          </div>
          <div className={styles.measures}>
            <div className={styles.measure}>
              <div className={styles.measureData}>
                <Icon icon={Weight} />
                <p>{weight} kg</p>
              </div>
              <p className={styles.measureName}>Weight</p>
            </div>

            <div className={styles.measure}>
              <div className={styles.measureData}>
                <Icon icon={Height} />
                <p>{height} m</p>
              </div>
              <p className={styles.measureName}>Height</p>
            </div>
          </div>

          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
