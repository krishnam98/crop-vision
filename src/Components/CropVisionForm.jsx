import React, { useState, useEffect } from 'react';
import styles from './CropVisionForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { soilSliceActions } from '../store/SoilSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CropVisionForm = () => {
    const arr = useSelector((cvStore) => cvStore.reportReducer);
    console.log(arr);

    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState([
        { value: "", name: "Nitrogen" },
        { value: "", name: "Potassium" },
        { value: "", name: "Phosphorus" },
        { value: "", name: "phValue" },
    ]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) =>
            prevFormData.map((field) =>
                field.name.toLowerCase() === name.toLowerCase()
                    ? { ...field, value: value }
                    : field
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        console.log("Toast Triggered");

        toast.success("Report Added! 🎉", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });

        setTimeout(() => {
            dispatch(soilSliceActions.SetReport({ reportArr: formData }));
        }, 3000);
    };

    return (
        <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
            <ToastContainer />
            <div className={styles.formCard}>
                <h1 className={styles.heading}>Crop Vision</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nitrogen" className={styles.label}>Nitrogen</label>
                        <input
                            type="number"
                            id="nitrogen"
                            name="Nitrogen"
                            value={formData.find(field => field.name === "Nitrogen")?.value || ""}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Enter nitrogen value"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phosphorus" className={styles.label}>Phosphorus</label>
                        <input
                            type="number"
                            id="phosphorus"
                            name="Phosphorus"
                            value={formData.find(field => field.name === "Phosphorus")?.value || ""}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Enter phosphorus value"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="potassium" className={styles.label}>Potassium</label>
                        <input
                            type="number"
                            id="potassium"
                            name="Potassium"
                            value={formData.find(field => field.name === "Potassium")?.value || ""}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Enter potassium value"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phValue" className={styles.label}>pH Value</label>
                        <input
                            type="number"
                            id="phValue"
                            name="phValue"
                            value={formData.find(field => field.name === "phValue")?.value || ""}
                            onChange={handleChange}
                            className={styles.input}
                            step="0.1"
                            placeholder="Enter pH value"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CropVisionForm;
