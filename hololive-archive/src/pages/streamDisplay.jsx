import React from 'react';
import GameHeader from "./gameHeader.js";

    function displayResults(gameString , results)
    {
        let resultsArr = results
        let videoDisplay
        let partNo = 1
        videoDisplay = document.querySelector("#results")
        videoDisplay.innerHTML = ""
        resultsArr.forEach((arrayElement) => 
            {
                    if(arrayElement.title.includes(gameString))
                    {
                    videoDisplay.innerHTML +=
                       `<article class="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=${arrayElement.videoId}" target="_blank">
										<span classe="image">
											<img src="${arrayElement.thumbnail}" alt="Doom Eternal Part 1" class="videoImg"/>
										</span>
											<h2>【Part #${partNo}】</h2>
										</a>
									</article>`

                        partNo++
                    }

                // }
            } )
        }

class StreamDisplay extends React.Component {

  render() {
    return (
      <div id="main">
						<div className="inner">
							<GameHeader />
							<section id="talentBox">
							<img src="assets/images/games/re1.png" alt="Resident Evil HD" className="iconSelect" onClick={() => {displayResults("biohazard HD REMASTER", this.props.results)}}/>
							<img src="assets/images/games/re2.png" alt="Resident Evil 2" className="iconSelect" onClick={() => {displayResults("biohazard RE:2", this.props.results)}}/>
							</section>
							<section id="videoList">
								{/* Talent Sections and video articles inside */}
								<section id="moriCalliope" className="partContainer">
								<h2 className="talentName">{this.props.talentName}</h2>
								<section id="results" className="tiles parts">
									
								</section>
									</section>
							</section>
						</div>
					</div>
          )
  }
}

export default StreamDisplay;