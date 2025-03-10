import AnimatedText from "./AnimatedText";
import ButtonsComp from "./ButtonsComp";
import styles from "./Hero.module.css";
import ImageDiv from "./ImageDiv";
import ProductDesc from "./ProductDesc";
const Hero = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["hero"]}>
                <AnimatedText />
                <ProductDesc />
                <ButtonsComp />

            </div>
            <ImageDiv />
        </div>
    );
}

export default Hero;