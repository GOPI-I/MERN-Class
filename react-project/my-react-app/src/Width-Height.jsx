import React, { useState, useEffect } from "react";

function Display() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        };
    }, []); // Empty dependency array to ensure this runs only once when the component mounts

    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
}

export default Display;
