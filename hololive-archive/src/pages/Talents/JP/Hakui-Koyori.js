import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsHoloX.js";

const resultsArr = videoList.Koyori;

class Koyori extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Hakui Koyori" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Koyori