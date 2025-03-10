import { useState } from "react";
import styles from "./Header.module.css";
import { MdMenu } from "react-icons/md";
const Header = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    // console.log(clicked);

    return (
        <>
            <div className={`container `}>
                <header className={styles["Header_container"]}>
                    <div className={`col-md-3 mb-2 mb-md-0 ${styles["Header_label"]}`}>
                        Crop Vision
                    </div>

                    <ul className={` ${styles["Header_ul"]}`} >
                        <li className={` ${styles["Header_li"]}`}>Language</li>
                        <li className={` ${styles["Header_li"]}`}>About us</li>
                        <li className={` ${styles["Header_li"]}`}>Contact Us</li>
                    </ul>
                    <div className={`${styles["list_div"]}`}>
                        <ul className={` ${styles["Hidden_ul"]} ${clicked ? styles["open"] : ""}`} >
                            <li className={` ${styles["Hidden_li"]}`}>Language</li>
                            <li className={` ${styles["Hidden_li"]}`}>About us</li>
                            <li className={` ${styles["Hidden_li"]}`}>Contact Us</li>
                        </ul>
                        <button className={styles["Header_btn"]} onClick={handleClick}><MdMenu /></button>
                    </div>

                    <div className={styles["Header_empty"]}>
                    </div>
                </header >
            </div >

        </>
    );

}

export default Header;