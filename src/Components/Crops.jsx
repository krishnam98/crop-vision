import { useNavigate } from "react-router";
import crops from "../store/SampleCrops";
import styles from "./Crops.module.css";
import { SlClose } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cropSliceAction } from "../store/CropsSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import SciFiLoader from "./SciFiLoader";

const Crops = () => {
    const [fetching, setFetching] = useState(false);

    let cropsArr = useSelector((cvStore) => cvStore.cropReducer);
    const reportArr = useSelector((store) => store.reportReducer);
    const formattedSoilConditions = reportArr
        .map(item => `- ${item.name}: ${item.value}`)
        .join("\n");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(cropsArr);

    useEffect(() => {
        dispatch(cropSliceAction.setCrops({ crops: crops }));



        const fetchList = async () => {
            setFetching(true);
            try {
                const genAI = new GoogleGenerativeAI("AIzaSyDnBSxfDexdvh-BxNwx2rvc2Cm7nUsNXDM");
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const prompt = `Given the following soil conditions:
${formattedSoilConditions}

Suggest exactly 10 crops that are compatible with these conditions. 
For each crop, provide the suggested soil pH range, nitrogen (N), phosphorus (P), potassium (K) requirements,

Format the response as a JSON array of objects with the following keys:
- "name": The crop name
- "soilPH": The suggested soil pH range (e.g., "5.5 - 6.8")
- "npk": An object containing:
    - "nitrogen": The nitrogen requirement range (e.g., "50-100 ppm")
    - "phosphorus": The phosphorus requirement range (e.g., "30-60 ppm")
    - "potassium": The potassium requirement range (e.g., "40-80 ppm")

Example JSON format:
[
  {
    "name": "Tomato",
    "soilPH": "5.5 - 6.8",
    "npk": {
      "nitrogen": "50-100 ppm",
      "phosphorus": "30-60 ppm",
      "potassium": "40-80 ppm"
    }
  },
  {
    "name": "Potato",
    "soilPH": "5.0 - 6.5",
    "npk": {
      "nitrogen": "40-90 ppm",
      "phosphorus": "20-50 ppm",
      "potassium": "30-70 ppm"
    },
  }
]

Ensure the response is valid JSON without any extra characters.`;

                const result = await model.generateContent(prompt);
                let responseText = await result.response.text();
                console.log("Raw API Response:", responseText);

                // Cleaning responseText to extract JSON
                responseText = responseText.trim(); // Remove extra spaces
                responseText = responseText.replace(/```json|```/g, ""); // Remove markdown-like formatting

                const cropsArray = JSON.parse(responseText);
                console.log("Parsed JSON:", cropsArray);
                dispatch(cropSliceAction.setCrops({ crops: cropsArray }));
                setFetching(false)


            } catch (error) {
                console.log(error);
            }
        }

        fetchList();

    }, [])

    return (
        <div className={styles["Crops_div"]} >
            <button className={styles["report_closebtn"]} onClick={() => { navigate("/") }}><SlClose /></button>
            <div className={styles["crops_div_container"]}>
                {/* Heading */}
                <div className={styles["heading"]}>Recommended Crops</div>

                {/* List */}
                <div className={styles["list_Cont"]}>

                    {fetching ? <SciFiLoader /> : cropsArr.map(item => <div className={styles["list_item"]}>
                        {/* description */}
                        <div className={styles["list_desc"]}>
                            <span className={styles["item_name"]}>{item.name}</span>
                            <span className={styles["item_details_npk"]}> <span className={styles["item_details_heading"]}>nitrogen</span>: {item.npk.nitrogen}, <span className={styles["item_details_heading"]}>phosphorus</span>: {item.npk.phosphorus}, <span className={styles["item_details_heading"]}>potassium</span>: {item.npk.potassium}</span>
                            <span className={styles["item_details_pmz"]}><span className={styles["item_details_heading"]}>pH</span>: {item.soilPH}</span>
                        </div>
                    </div>)}


                </div>
            </div>
        </div>
    )

}

export default Crops;