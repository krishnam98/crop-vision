import { useNavigate } from "react-router";
import crops from "../store/SampleCrops";
import styles from "./Crops.module.css";
import { SlClose } from "react-icons/sl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cropSliceAction } from "../store/CropsSlice";

const Crops = () => {

    const cropsArr = useSelector((cvStore) => cvStore.cropReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(cropsArr);

    useEffect(() => {
        dispatch(cropSliceAction.setCrops({ crops: crops }));

        // const fetchCrops=async()=>{
        //     const response= await fetch("http://localhost:8080/soilReport");
        //     const respObj= await response.json();
        //     // few manipulation in respObj according to json obj

        //     // dispatch(cropSliceAction.setCrops({ crops: crops})};
        // }
        // try {
        //     fetchCrops();

        // } catch (error) {
        //     console.log(error);
        // }

    }, [])

    return (
        <div className={styles["Crops_div"]} >
            <button className={styles["report_closebtn"]} onClick={() => { navigate("/") }}><SlClose /></button>
            <div className={styles["crops_div_container"]}>
                {/* Heading */}
                <div className={styles["heading"]}>Recommended Crops</div>

                {/* List */}
                <div className={styles["list_Cont"]}>

                    {cropsArr.map(item => <div className={styles["list_item"]}>
                        {/* img */}
                        <img src={item.img} alt="" />
                        {/* description */}
                        <div className={styles["list_desc"]}>
                            <span className={styles["item_name"]}>{item.name}</span>
                            <span className={styles["item_details_npk"]}> <span className={styles["item_details_heading"]}>nitrogen</span>: {item.npk.nitrogen}, <span className={styles["item_details_heading"]}>phosphorus</span>: {item.npk.phosphorus}, <span className={styles["item_details_heading"]}>potassium</span>: {item.npk.potassium}</span>
                            <span className={styles["item_details_pmz"]}><span className={styles["item_details_heading"]}>pH</span>: {item.soilPH}, <span className={styles["item_details_heading"]}>moisture</span>: {item.moisture}, <span className={styles["item_details_heading"]}>zinc</span>: {item.zinc}</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )

}

export default Crops;