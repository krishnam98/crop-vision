import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimatedText.module.css";
import gsap from "gsap";

const Typewriter = () => {
    const cursorRef = useRef(null);
    const [text, setText] = useState("");
    const words = ["Sense", "Generate", "Recommend"];

    useEffect(() => {
        let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        words.forEach((word) => {
            let textObj = { length: 0 };

            // Faster Typing Effect (Ensures last letter comes smoothly)
            tl.to(textObj, {
                length: word.length,
                duration: 0.8,
                onUpdate: function () {
                    setText(word.substring(0, Math.round(textObj.length)));
                },
                ease: "power2.out"
            })
                .to({}, { duration: 1 }) // Hold text before erasing
                // Faster Erasing Effect
                .to(textObj, {
                    length: 0,
                    duration: 0.6,
                    onUpdate: function () {
                        setText(word.substring(0, Math.round(textObj.length)));
                    },
                    ease: "power2.inOut"
                });
        });

        // Blinking Cursor Animation
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5
        });

    }, []);

    return (
        <div className={`flex justify-center items-center h-screen  text-black text-3xl ${styles["bigText"]}`} >
            <span>{text}</span>
            <span ref={cursorRef}>|</span>
        </div>
    );
};

export default Typewriter;
