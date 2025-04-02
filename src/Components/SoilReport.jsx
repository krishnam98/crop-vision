import { useNavigate } from "react-router";
import styles from "./SoilReport.module.css";
import { SlClose } from "react-icons/sl";
import Meter from "./Meter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { soilSliceActions } from "../store/SoilSlice";
import report from "../store/SampleReport";
const SoilReport = () => {
    // const [report, getReport] = useState([]);
    const arr = useSelector((cvStore) => cvStore.reportReducer);
    const dispatch = useDispatch();
    console.log(arr);

    //    Fetching Report
    useEffect(() => {

        // const fetchReport = async () => {
        //     const response = await fetch("http://localhost:8080/soilReport");
        //     const fetchedObj = await response.json();
        //     const resultArr = Object.entries(fetchedObj).map(([key, val]) => ({ name: key, value: val }));

        //     dispatch(soilSliceActions.SetReport({ reportArr: resultArr }))

        // }
        // try {
        //     fetchReport();

        // } catch (error) {
        //     Console.log();

        // }
    }, [])

    const navigate = useNavigate();
    return (
        <div className={styles["report_div"]}>
            <div className={styles["report_container"]}>
                <div className={styles["heading"]}>Soil Report</div>
                <div className={styles["grid_container"]}>

                    {/* Items excluding ph and Zinc */}
                    {arr.map(item =>
                    (<div className={styles["report_item"]}>
                        <div className={styles["value"]}>{item.value} {item.name != "phValue" ? item.name == "Zinc" ? <span className={styles["unit_zinc"]}>ppm</span> : <span className={styles["unit_zinc"]}>kg/ha</span> : ""}</div>
                        <div className={styles["name"]}>{item.name}</div>
                    </div>
                    )

                    )}
                    {/* for ph and zinc
                    {arr.map(item =>
                        (item.name == "ph" || item.name == "zinc") && (<div className={styles["report_item"]}>
                            <div className={styles["value"]}>{item.value} {item.name == "zinc" && <span className={styles["unit_zinc"]}>ppm</span>}</div>
                            <div className={styles["name"]}>{item.name}</div>
                        </div>
                        )

                    )} */}




                </div>
            </div>
            <button className={styles["report_closebtn"]} onClick={() => { navigate("/") }}><SlClose /></button>

        </div>
    );
}
export default SoilReport;