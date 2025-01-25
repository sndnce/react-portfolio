import React from "react"
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container1} id="about">
        <div className={styles.welcome}>
            <p className={styles.intro}>¡Mucho gusto!<br />
                 はじめまして。<br />
                 enchanté! 
            </p>
            <p className={styles.niceto}>
                <span className={styles.black}> Nice to meet you! <br /> I'm </span>
                <span className={styles.ellapurple}> Ella.</span> 

            </p>
        </div>
        <div className={styles.container}>
            <img className={styles.favi} src={getImageUrl("Favicon.png")}></img>
            <div className={styles.aboutbox}>
                <p className={styles.aboutme}>About Me</p>
                <p className={styles.more} style={{ color: "#717171"}} >I’m a sophomore Computer Science & Economics student at Yale University with a passion for software engineering, art, and game design. </p>
            </div>
        </div>
    </section>
};
