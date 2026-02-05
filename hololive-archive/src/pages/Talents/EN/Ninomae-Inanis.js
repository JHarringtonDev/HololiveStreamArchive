import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsMyth.js";

const resultsArr = videoList.Inanis;

class Ina extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Ninomae Ina'nis" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Ina