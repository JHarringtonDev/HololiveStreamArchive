import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsJustice.js";

const resultsArr = videoList.Gigi;

class Gigi extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Gigi Murin" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Gigi