import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen4.js";

const resultsArr = videoList.Watame;

class Watame extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Tsunomaki Watame" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Watame