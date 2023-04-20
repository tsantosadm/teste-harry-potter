import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CharactersSection.module.scss";

type Character = {
    id: string;
    name: string;
    actor: string;
    ancestry: string;
    dateOfBirth: string;
    eyeColour: string;
    gender: string;
    hairColour: string;
    hogwartsStaff: boolean;
    hogwartsStudent: boolean;
    image: string;
    species: string;
    house: string;
    patronus: string;
    wizard: boolean;
    wand: {
        wood: string;
        core: string;
        length: string;
    };
};

type Props = {
    data: Character[];
};

const CharactersSection = ({ data }: Props) => {
    const charactersShowed = data.slice(0, 4);
    return (
        <div className={styles.sectionWrapper}>
            <h1 className={styles.sectionTitle}>
                Conheça os personagens inesquecíveis de Escola de Magia e Bruxaria de Hogwarts
            </h1>
            <div className={styles.charactersContainer}>
                {charactersShowed.map((element) => (
                    <Link
                        key={element.id}
                        href={element.id}
                        className={styles.characterBox}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                alt={element.name}
                                className={styles.image}
                                src={element.image}
                                fill
                            />
                        </div>
                        <h1 className={styles.characterName}>
                            <span>{element.name}</span>
                        </h1>
                    </Link>
                ))}
            </div>
            <p className={styles.moreText}>
                <Link href="/characters">
                    {" "}
                    <span className={styles.moreLink}>
                        E muito mais personagens
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default CharactersSection;
