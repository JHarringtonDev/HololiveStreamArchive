import React from 'react';
import GameHeader from "./gameHeader.js";
import Fuse from 'fuse.js'

const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// ignoreDiacritics: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	threshold: 0.3,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title"
	]
};

function searchStreams(results, pattern){
  const fuse = new Fuse(results, fuseOptions);
  let resultsArr = results
  let videoDisplay
  let partNo = 1
  videoDisplay = document.querySelector("#results")
  videoDisplay.innerHTML = ""

  const searchResults = fuse.search(pattern);

  searchResults.sort((a, b) => (a.item.publishedAt > b.item.publishedAt) ? 1 : -1 );

  if(searchResults.length === 0){
    videoDisplay.innerHTML = "<h3>No results found</h3>"
    return
  }else{
    console.log(searchResults) 
    searchResults.forEach((arrayElement) => {
      videoDisplay.innerHTML +=
      `<article class="style1 videoItem">
      <a href="https://www.youtube.com/watch?v=${arrayElement.item.videoId}" target="_blank">
      <span class="image">
											<img src="${arrayElement.item.thumbnail}" alt="Doom Eternal Part 1" class="videoImg"/>
										</span>
											<h2>【Part #${partNo}】</h2>
										</a>
                    </article>`
                    
                    partNo++
                  });
                  
                }
}

// let selectionList = document.getElementById("dropdownList")
    function displayGames(results)
    {
      // document.getElementById("selectionButton").style.display = "none"
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

// const searchButton = document.querySelector('.search__button')
document.addEventListener('keyup', function(e) {
  e.preventDefault()
  if (e.key === "Enter") {
    document.querySelector('.search__button').click()
  }
}
)

class StreamDisplay extends React.Component {
  render() {
    return (
      <div id="main">
						<div className="inner">
							{/* <GameHeader talentName={this.props.talentName} /> */}
              <h1>{this.props.talentName}</h1>
              <p>{this.props.talentName} has currently published {this.props.results.length} videos. You can use the dropdown menu to get preloaded options for filtering videos. Or if you know what you're looking for, use the search bar below for more precise filtering.</p>
              
              <section id='filteringOptions'>
                <div class="search">
                  <input type="text" class="search__input" placeholder="Type your text"/>
                    <button class="search__button" onClick={() => {searchStreams(this.props.results, document.querySelector ('.search__input').value)}}>
                      <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                      <g>
                          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03  9 9 9c2.215 0 4.24-.804 5.        808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.  295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.       365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.  365-7.5-7.5z"></path>
                      </g>
                      </svg>
                    </button>
                </div>

                <div id = "selectionContainer" onClick={() => {displayGames(this.props.results)}}>
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
                </div>

              </section>

							<section id="videoList">
								{/* Talent Sections and video articles inside */}
								<section id="moriCalliope" className="partContainer">
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