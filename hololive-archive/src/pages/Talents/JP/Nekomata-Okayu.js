import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGamers.js";

const resultsArr = videoList.Okayu;
        
        class Okayu extends React.Component{
            render(){
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