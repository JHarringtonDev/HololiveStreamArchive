import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsID3.js";

const resultsArr = videoList.Zeta;

class Zeta extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Vestia Zeta" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Zeta