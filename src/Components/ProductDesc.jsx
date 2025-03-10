import styles from "./ProductDesc.module.css"

const ProductDesc = () => {
    return (
        <span className={styles["staticText"]}>Crop Recommendation System for Farmers
            is an AI-driven, IoT-enabled system that helps farmers make smart crop selection decisions based on real-time soil and weather data. By integrating sensor technology, MQTT communication, and machine learning, we provide accurate crop recommendations tailored to soil conditions.
        </span>
    );
}

export default ProductDesc;