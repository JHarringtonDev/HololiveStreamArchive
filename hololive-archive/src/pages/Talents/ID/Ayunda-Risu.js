import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsID1.js";

const resultsArr = videoList.Risu;

class Risu extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Ayunda Risu" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Risu