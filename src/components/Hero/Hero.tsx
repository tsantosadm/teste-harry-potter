import Image from "next/image";
import React from "react";
import hogwarts from "src/assets/hogwarts.jpg";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.imagewrapper}>
                <Image
                    src={hogwarts}
                    fill
                    priority
                    alt="Hero Section Background Image"
                ></Image>
            </div>
            <div className={styles.herogradient}>
                <div className={styles.herotext}>
                    <h1 className={styles.heroh1}>
                        Entre no mundo mágico: libere seu herói interior com
                        Harry Potter
                    </h1>
                    <p className={styles.herop}>
                       Descubra seu potencial mágico e embarque em uma aventura inesquecível
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
