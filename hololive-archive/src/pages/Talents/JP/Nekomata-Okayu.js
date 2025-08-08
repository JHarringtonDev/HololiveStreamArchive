
import React, { useRef } from "react";
import Header from "../../header";
import Footer from "../../footer";
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
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvaTdHTWBGv3MKj3KVqJVCw&maxResults=50${pageToken}&key=AIzaSyApDNwFNfi4HTJOEAVefxOdfBckc-pLqSs`)
        
        let data = await res.json();

        resultsArr = resultsArr.concat(data.items)
        pageToken = `&pageToken=${data.nextPageToken}`

        if(totalVideoNo == 100){
            totalVideoNo = data.pageInfo.totalResults
        }


            // data.items.forEach(e => {
                //     resultsArr.push(e)
                // })
                
            
        }
    }
    
    function displayResults()
    {
        videoDisplay = document.querySelector("#results")
        videoDisplay.innerHTML = ""
        resultsArr.forEach((e) => 
            {
                // if(e.snippet.title.includes("【 ドンキーコングバナンザ 】")){
                    videoDisplay.innerHTML += `<a href="https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}"><img src=${e.snippet.thumbnails.medium.url}></a><br/>
                    <h3>${e.snippet.title}<br/>`
                // }
            } )
            console.log(resultsArr.length)
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
                <div class="inner">
                    <header>
                        <h1 onClick={() => {displayResults()}}>Donkey Kong Bananza</h1>
                        <p id="results"></p>
                    </header>
                </div>
            </div>

        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Okayu