import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import { Link } from "react-router";

async function refreshDatabaseOkayu() {
    // Retrieve video data from YouTube API
    let resultsArr = [];
    let totalVideoNo = 100;
    let pageToken = "";
  
    while (resultsArr.length < totalVideoNo) {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvaTdHTWBGv3MKj3KVqJVCw&maxResults=50${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        let data = await res.json();
  
        resultsArr = resultsArr.concat(data.items);
        pageToken = `&pageToken=${data.nextPageToken}`;
  
        if(totalVideoNo === 100){
            totalVideoNo = data.pageInfo.totalResults;
        }
  
        resultsArr.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt) ? 1 : -1 );
    }
    extractVideoDetails(resultsArr);

    function extractVideoDetails(sortedResultsArray) {
        let resultsJsonArray = [];
         sortedResultsArray.forEach(element => {
            resultsJsonArray.push({
                videoId: element.snippet.resourceId.videoId,
                thumbnail: element.snippet.thumbnails.medium.url,
                title: element.snippet.title,
                publishedAt: element.snippet.publishedAt
            })
        })

        console.log(JSON.stringify(resultsJsonArray));
    }

    // Call Express endpoint with the gathered results
    // try {
    //     const response = await fetch('http://localhost:5050/record/', {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ resultsArr })
    //     });
    //     // Log the raw text to see what is actually returned
    //     const text = await response.text();
    //     console.log('Raw response:', text);
        
    //     // Then try parsing JSON if the response looks valid
    //     const result = JSON.parse(text);
    //     console.log('Database refreshed with ID:', result.insertedId);
    // } catch (error) {
    //     console.error('Error refreshing database:', error);
    // }
}

class Database extends React.Component{
    render(){
        return(
            <div id="wrapper">
                <Header />
                <div id="main">
                    <div className="inner">
                        <header>
                            <h1>Database Refresh</h1>
                        </header>
                        <section className="tiles gameSelect">
                            <button className="button primary fit" onClick={refreshDatabaseOkayu}>Okayu</button>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Database;