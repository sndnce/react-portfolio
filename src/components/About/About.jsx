import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.projects} id="projects">
        <p className={styles.header}>Recent Projects</p>
        <div className={styles.container}>
            <div className={styles.fortnite}>
                <a href="https://ellawhite28.wixsite.com/my-site-1" target="_blank">
                    <img className={styles.fnimage} src="bb.png" />
                <p className={styles.fortnitegames}>Fortnite Games</p> </a>
                <p className={styles.fortnitesum}>Founded independent gaming studio to craft and deliver custom fornite experiences to a global playerbase.</p>
                <p className={styles.fortnitedescr}>Game UI/UX Design, Game Design, 3D Modeling, Social Media Marketing, Verse </p>
            </div>
            <div className={styles.art}>
                <a href="https://www.ellajwhite.com" target="_blank">
                    <img className={styles.artimage} src="flag.png"/>
                    <p className={styles.artexhibit}>Art Exhibit</p>
                </a>
                
                <p className={styles.artsum}>Created Sterling Memorial Library's first-ever solo-exhibit in the Stacks featuring my own original artwork.</p>
                <p className={styles.artdescr}>Graphic Design, Web Development, Printmaking, Advertisement</p>
            </div>
            <div className={styles.more}>
                <div classame={styles.imgdiv}>
                    <a href="https://drive.google.com/drive/folders/1AjHBzAjm8E3w2ly8nn9FocMDosyqqEp8?usp=share_link" target="_blank">
                        <img className={styles.moreimage} src="gdriveicon.png"/>
                        <p className={styles.morework}>More Work</p>
                    </a>
                </div>
                <p className={styles.moreworksum}>Persues a wide variety of personal projects ranging from engineering modeling to animation.</p>
                <p className={styles.moredescr}>Technical & Artistic Modeling, Graphic Design, Illustration</p>
            </div>
        </div>

    </section>;
    
};