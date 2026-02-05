import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen5.js";

const resultsArr = videoList.Polka;

class Polka extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Omaru Polka" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Polka