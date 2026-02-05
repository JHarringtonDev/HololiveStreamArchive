import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsJustice.js";

const resultsArr = videoList.Raora;

class Raora extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

        {/* Header */}
        <Header />

        {/* Menu */}

        {/* Main */}
                <StreamDisplay talentName="Raora Panthera" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Raora