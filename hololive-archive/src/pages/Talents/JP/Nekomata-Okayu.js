
import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
// import GameHeader from "../../gameHeader.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { Link } from "react-router";
import { videoList } from "../../VideoResults/videoResultsGamers.js";

const resultsArr = videoList.Okayu;
        
        class Okayu extends React.Component{
            render(){
                // fillResults()
    return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Nekomata Okayu" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Okayu