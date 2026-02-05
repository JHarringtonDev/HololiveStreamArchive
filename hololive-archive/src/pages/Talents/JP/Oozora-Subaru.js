import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen2.js";

const resultsArr = videoList.Subaru;

class Subaru extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Oozora Subaru" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Subaru