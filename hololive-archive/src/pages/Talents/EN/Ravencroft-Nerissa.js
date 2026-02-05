import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsAdvent.js";

const resultsArr = videoList.Nerissa;

class Nerissa extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Ravencroft Nerissa" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Nerissa