import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsID1.js";

const resultsArr = videoList.Moona;

class Moona extends React.Component{
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

export default Moona