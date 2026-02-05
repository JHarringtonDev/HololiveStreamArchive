import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsFlowGlow.js";

const resultsArr = videoList.Vivi;

class Vivi extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

        {/* Header */}
        <Header />

        {/* Menu */}

        {/* Main */}
                <StreamDisplay talentName="Kikirara Vivi" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Vivi