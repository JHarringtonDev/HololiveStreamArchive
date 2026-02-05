import React, { useRef } from "react";
import Header from "../../header.js";
import Footer from "../../footer.js";
import StreamDisplay from "../../streamDisplay.jsx";
import { videoList } from "../../VideoResults/videoResultsID1.js";

const resultsArr = videoList.Iofifteen;

class Iofi extends React.Component{
    render(){
    
      return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}

				{/* Main */}
                <StreamDisplay talentName="Airani Iofifteen" results={resultsArr} />


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Iofi