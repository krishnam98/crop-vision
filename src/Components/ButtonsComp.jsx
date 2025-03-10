import { useNavigate } from "react-router";
import styles from "./ButtonsComp.module.css";
import { TbReportAnalytics } from "react-icons/tb";
import { GiPlantsAndAnimals } from "react-icons/gi";

const ButtonsComp = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["buttonsComp"]}>
            <button className={styles["reportBtn"]} onClick={() => { navigate("/Report") }}>
                <span className={styles["Btn_icn"]}><TbReportAnalytics /></span>
                Crop report
            </button>
            <button className={styles["cropBtn"]} onClick={() => { navigate("/Crops") }}>
                <span className={styles["Btn_icn"]}><GiPlantsAndAnimals /></span>
                Recommend Crop
            </button>

        </div>
    );
}

export default ButtonsComp;