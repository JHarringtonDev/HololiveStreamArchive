import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsPromise.js";

const resultsArr = videoList.Kronii;

class Kronii extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Ouro Kronii" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Kronii