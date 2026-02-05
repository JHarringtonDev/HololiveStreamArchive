import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsRegloss.js";

const resultsArr = videoList.Kanade;

class Kanade extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Otonose Kanade" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Kanade