import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsHoloX.js";

const resultsArr = videoList.Lui;

class Lui extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Takane Lui" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Lui