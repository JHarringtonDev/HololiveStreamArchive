import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsAdvent.js";

const resultsArr = videoList.FUWAMOCO;

class FUWAMOCO extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="FUWAMOCO" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default FUWAMOCO