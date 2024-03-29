import React, { useEffect, useState } from "react";



// Home component responsible for rendering the home page
const Home = () => {
const [showImage, setShowImage] = useState(true); // State to manage whether to show the image or not


// useEffect hook to control the visibility of the image based on the current pathname
useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
        setShowImage(true);
    } else {
        setShowImage(false);
    }
}, []);


    return (
        <div>
    {showImage && (
        <img className="sharing-image" src="sharing.png" alt="sharing" />
      )}
    </div>
    );
};




export default Home;