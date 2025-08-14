
import React, { useRef } from "react";
import Header from "../../header";
import Footer from "../../footer";
import GameHeader from "../../gameHeader";
import { Link } from "react-router";

let resultsArr = []
let displayArr = []
let totalVideoNo = 100;
let videoDisplay

async function fillResults()
{
    let pageToken = ""
 
    while (resultsArr.length < totalVideoNo)
    {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvaTdHTWBGv3MKj3KVqJVCw&maxResults=50${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        
        let data = await res.json();

        resultsArr = resultsArr.concat(data.items)
        pageToken = `&pageToken=${data.nextPageToken}`

        if(totalVideoNo == 100){
            totalVideoNo = data.pageInfo.totalResults
        }


            // data.items.forEach(e => {
                //     resultsArr.push(e)
                // })
                
            resultsArr.sort((a,b) => (a.snippet.publishedAt > b.snippet.publishedAt) ? 1 : ((b.snippet.publishedAt > a.snippet.publishedAt) ? -1 : 0))
        }

        document.querySelector("#talentBox").classList.remove('hidden')

    }
    
    function displayResults(gameString)
    {
        let partNo = 1
        videoDisplay = document.querySelector("#results")
        videoDisplay.innerHTML = ""
        resultsArr.forEach((arrayElement) => 
            {
                // if(e.snippet.title.includes("【 ドンキーコングバナンザ 】")){
                    // videoDisplay.innerHTML += `<a href="https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}"><img src=${e.snippet.thumbnails.medium.url}></a><br/>
                    // <h3>${e.snippet.title}<br/>`
                    if(arrayElement.snippet.title.includes(gameString))
                    {
                    videoDisplay.innerHTML +=
                       `<article class="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=${arrayElement.snippet.resourceId.videoId}" target="_blank">
										<span classe="image">
											<img src="${arrayElement.snippet.thumbnails.medium.url}" alt="Doom Eternal Part 1" class="videoImg"/>
										</span>
											<h2>【Part #${partNo}】</h2>
										</a>
									</article>`

                        partNo++
                    }

                // }
            } )
        }

        
        class Okayu extends React.Component{
            render(){
                fillResults()
    return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}
				{/* <Menu /> */}

				{/* Main */}
					<div id="main">
						<div className="inner">
							<GameHeader />
							<section id="talentBox" class = "hidden">
							<img src="assets/images/games/re1.png" alt="Resident Evil HD" id="calliope" className="iconSelect" onClick={() => {displayResults("biohazard HD REMASTER")}}/>
							<img src="assets/images/games/re2.png" alt="Resident Evil 2" id="amelia" className="iconSelect" onClick={() => {displayResults("biohazard RE:2")}}/>
							</section>
							<section id="videoList">
								{/* Talent Sections and video articles inside */}
								<section id="moriCalliope" className="partContainer">
								<h2 className="talentName">Calliope Mori</h2>
								<section id="results" className="tiles parts">
									
								</section>
									</section>
							</section>
						</div>
					</div>


        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Okayu