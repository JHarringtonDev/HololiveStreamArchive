import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsJustice.js";

const resultsArr = videoList.Cecilia;

class Cecilia extends React.Component{
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

export default Cecilia