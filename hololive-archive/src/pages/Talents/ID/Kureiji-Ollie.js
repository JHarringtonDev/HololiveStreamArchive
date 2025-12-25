import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsID2.js";

const resultsArr = videoList.Ollie;

class Ollie extends React.Component{
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

export default Ollie