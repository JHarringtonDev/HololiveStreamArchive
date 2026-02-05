import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen0.js";

const resultsArr = videoList.Roboco;

class Roboco extends React.Component{
    render(){
    
   return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Roboco san" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Roboco