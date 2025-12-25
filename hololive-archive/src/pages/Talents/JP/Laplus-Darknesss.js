import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsHoloX.js";

const resultsArr = videoList.Laplus;

class Laplus extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Inugami Korone" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Laplus