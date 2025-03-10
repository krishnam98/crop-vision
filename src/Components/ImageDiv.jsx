import styles from "./ImageDiv.module.css";
const ImageDiv = () => {
    return (
        <div className={styles["imgDiv"]} >

            <div className={styles["imgDiv_solid"]}>
            </div>

            <div className={styles["imgDiv_img"]}>
                <img src="istockphoto-2182656245-612x612.jpg"></img>
            </div>

            <div className={styles["imgDiv_img"]}>
                <img src="photo-1498408040764-ab6eb772a145.jpg"></img>
            </div>

            <div className={styles["imgDiv_solid"]}>
            </div>

            <div className={styles["imgDiv_solid"]}>
            </div>

            <div className={styles["imgDiv_img"]}>
                <img src="photo-1518994603110-1912b3272afd.jpg"></img>
            </div>


        </div>
    );
}

export default ImageDiv;