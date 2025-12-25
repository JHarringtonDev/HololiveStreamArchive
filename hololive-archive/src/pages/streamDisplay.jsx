import React from 'react';
import GameHeader from "./gameHeader.js";

// let selectionList = document.getElementById("dropdownList")
    function displayGames(results)
    {
      document.getElementById("selectionButton").style.display = "none"
      let streamTitles = []
      results.forEach((arrayElement) =>{
        let indexStart = arrayElement.title.indexOf("【")
        let indexEnd = arrayElement.title.indexOf("】")
        if((indexStart !== -1 && indexEnd !== -1) && streamTitles.includes(arrayElement.title.substring(indexStart+1, indexEnd)) === false){
        streamTitles.push(arrayElement.title.substring(indexStart+1, indexEnd))
      }
      })

      // pass the full results array so click handlers can access it
      fillSelections(streamTitles, results)
      }

      function fillSelections(titles, fullResults){
      let selectionList = document.querySelector(".webkit-scrollbar")
      // clear existing items
      selectionList.innerHTML = ""
      titles.forEach((title) =>{
        // create element instead of using innerHTML strings so event handlers and closures work correctly
        const li = document.createElement('li')
        li.className = "listitem primary"
        li.dataset.title = title

        const article = document.createElement('article')
        article.className = "article"
        article.textContent = title

        li.appendChild(article)

        li.addEventListener('click', () => {
          displayResults(title, fullResults)
        })
        selectionList.appendChild(li)
    })
    }

    //     <li class="listitem" role="listitem">
    //   <article class="article">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
    //     sunt tempora recusandae dolorum.
    //   </article>
    // </li>

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
										<span class="image">
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
              <button id='selectionButton' className="primary" onClick={() => {displayGames(this.props.results)}}>Load Selection</button>
							{/* <section id="talentBox">
							<img src="assets/images/games/re1.png" alt="Resident Evil HD" className="iconSelect" onClick={() => {displayResults("biohazard HD REMASTER", this.props.results)}}/>
							<img src="assets/images/games/re2.png" alt="Resident Evil 2" className="iconSelect" onClick={() => {displayResults("biohazard RE:2", this.props.results)}}/>
							</section> */}
              <div class="dropdown">
  <input
    hidden=""
    class="sr-only"
    name="state-dropdown"
    id="state-dropdown"
    type="checkbox"
  />
  <label
    aria-label="dropdown scrollbar"
    for="state-dropdown"
    class="trigger"
  ></label>

  <ul class="list webkit-scrollbar" role="list" dir="auto">

  </ul>
</div>


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