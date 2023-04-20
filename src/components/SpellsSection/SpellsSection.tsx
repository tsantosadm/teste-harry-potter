import Image from "next/image";
import Link from "next/link";
import React from "react";
import spellsImg from "../../assets/spells.jpg";
import SpellCard from "../SpellCard/SpellCard";
import styles from "./SpellsSection.module.scss";

const spells = [
    {
        id: "1",
        name: "AVADA KEDAVRA",
        description:
            "Também conhecido como The Killing Curse, o feitiço mais maligno do Mundo Mágico; uma das três Maldições Imperdoáveis; Harry Potter é a única bruxa ou bruxo conhecido que sobreviveu",
    },
    {
        id: "2",
        name: "WINGARDIUM LEVIOSA",
        description:
        "Faz um objeto levitar; mas lembre-se do que Hermione disse: \"É Wing-gar-dium Levi-o-sa, faça o 'gar' bonito e comprido.\"",
    },
    {
        id: "3",
        name: "STUPEFY",
        description:
        "O feitiço Stunning congela objetos e deixa os alvos vivos inconscientes",
    },
    {
        id: "4",
        name: "EXPELLIARMUS",
        description:
        "Força o adversário a largar o que estiver em sua posse",
    },
];

const SpellsSection = () => {
    return (
        <div className={styles.container}>
            <Image
                alt="Spells Section Background Image"
                fill
                src={spellsImg}
                className={styles.backgroundImage}
            ></Image>
            <div className={styles.wrapper}>
                <Link href="/spells" className={styles.spellsContainer}>
                    {spells.map((element) => (
                        <SpellCard
                            isTransparent
                            key={element.id}
                            data={element}
                        />
                    ))}
                </Link>
                <div className={styles.headingContainer}>
                    <h1 className={styles.sectionTitle}>
                        Domine a arte de lançar feitiços: Aprenda os feitiços mais icônicos do mundo mágico
                    </h1>
                    <h2 className={styles.sectionDescription}>
                        De Wingardium Leviosa a Expelliarmus, explore os feitiços que cativaram fãs por gerações e aproveite o poder da magia como nunca antes. Clique nos feitiços para saber mais.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SpellsSection;
