import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen3.js";

const resultsArr = videoList.Noel;

class Noel extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Shirogane Noel" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Noel