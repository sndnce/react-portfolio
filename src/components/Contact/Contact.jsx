import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div  className={styles.contact}>
            <p className={styles.fig}>Contact</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="li.png"/>
                <a href="https://www.linkedin.com/in/ella-white-707012243" target="_blank">Let's Connect ;D</a>
            </li >
            <li className={styles.link}>
                <img src="git.png"/>
                <a href="https://www.github.com/sndnce" target="_blank">Github @sndnce</a>
            </li>
            <li className={styles.link}>
                <img src="webicons.png"/>
                <a href="https://docs.google.com/document/d/1EVP4Zwe6eRP2qRNy-MMrW4n1Te6s2WipWxhMSALzA2Q/edit?usp=sharing" target="_blank">View Resume</a>
            </li>
            <li className={styles.link}>
                <img src="insta.png"/>
                <a href="https://www.instagram.com/_e.whitey/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">Check out Instagram</a>
            </li>
            <li className={styles.link}>
                <img src="mail.png"/>
                <a href="mailto:ella.white@yale.edu" target="_blank">Email</a>
            </li>
        </ul>
    </footer>;
};