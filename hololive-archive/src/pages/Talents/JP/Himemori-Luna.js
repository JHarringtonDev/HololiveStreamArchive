import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsGen4.js";

const resultsArr = videoList.Luna;

class Luna extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Himemori Luna" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Luna