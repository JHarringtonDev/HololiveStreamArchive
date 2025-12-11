import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import { Link } from "react-router";

const channelIDs = {
    gen0: ["UUp6993wxpyDPHUpavwDFqgg", "UUDqI2jOz0weumE8s7paEk6g", "UU0TXe_LYZ4scaW2XMyi5_kw", "UU-hM6YJuNYVAmUWxeIr9FeA", "UU5CwaMl1eIgY8h02uZw7u8A"],
    gen1: ["UUFTLzh12_nrtzqBPsTCqenA", "UU1CfXB_kRs3C-zaeTG3oGyg", "UUQ0UDLQCjY0rmuxCDE38FGg"],
    gen2: ["UU7fk0CB07ly8oSl0aqKkqFg", "UU1opHUrw8rvnsadT-iGp7Cg", "UUXTpFs_3PqI41qX2d9tL2Rw", "UU1suqwovbL1kzsoaZgFZLKg","UUvzGlP9oQwU--Y0r9id_jnA"],
    gamers: ["UUdn5BQ06XqgXoAxIhbqw5Rg", "UUp-5t9SrOQwXMU7iIjQfARg", "UUvaTdHTWBGv3MKj3KVqJVCw", "UUhAnqc_AY5_I3Px5dig3X1Q"],
    gen3: ["UU1DCedRgGHBdm81E1llLhOQ", "UUvInZx9h3jC2JzsIzoOebWg", "UUdyqAaZDKHXg4Ahi7VENThQ", "UUCzUftO8KOVkV4wQG1vkUvg"],
    gen4: ["UUZlDXzGoo7d44bwdNObFacg", "UUqm3BQLlJfvkTsX_hvm0UmA", "UU1uv2Oq6kNxgATlCiez59hw", "UUa9Y57gfeY0Zro_noHRVrnw","UUS9uQI-jC3DE0L4IpXyvr6w"],
    gen5: ["UUFKOVgVbGmX65RxO3EtH3iw", "UUAWSyEs_Io8MtpY3m-zqILA", "UUUKD-uaobj9jiqB-VXt71mA", "UUK9V2B22uJYu3N7eR_BT9QA"],
    holoX: ["UUENwRMx5Yh42zWpzURebzTw", "UUs9_O1tRPMQTHQ-N_L6FU2g", "UU6eWCld0KwmyHFbAqK3V-Rw", "UUIBY1ollUsauvVi4hW4cumw","UU_vMYWcDjmfdpH6r4TTn1MQ"],
    reGloss: ["UUWQtYtq9EOB4-I5P-3fh8lA", "UUMGfV7TVTmHhEErVJg1oHBQ", "UUtyWhCj3AqKh2dXctLkDtng", "UUdXAk5MpyLD8594lm_OvtGQ", "UU1iA6_NT4mtAcIII6ygrvCw"],
    flowGlow: ["UU9LSiN9hXI55svYEBrrK-tw", "UUuI_opAVX6qbxZY-a-AxFuQ", "UUjk2nKmHzgH5Xy-C5qYRd5A", "UUKMWFR6lAstLa7Vbf5dH7ig", "UUGzTVXqMQHa4AgJVJIVvtDQ"],
    id1: ["UUOyYb1c43VlX9rc_lT6NKQw", "UUP0BspO_AMEe3aQqqpo89Dg", "UUAoy6rzhSf4ydcYjJw3WoVg"],
    id2: ["UUYz_5n-uDuChHtLo7My1HnQ", "UU727SQYUvx5pDDGQpTICNWg", "UUhgTyjG-pdNvxxhdsXfHQ5Q"],
    id3: ["UUTvHWSfBZgtxE4sILOaurIQ", "UUZLZ8Jjx_RN2CXloOmgTHVg", "UUjLEmnpCNeisMxy134KPwWw"],
    myth: ["UUL_qhgtOy0dy1Agp8vkySQg", "UUHsx4Hqa-1ORjQTh9TYDhww", "UUMwGHR0BTZuLsmjY_NT5Pwg", "UUoSrY_IQQVpmIRZ9Xf-y93g", "UUyl1z3jo3XHR1riLFKG5UAg"],
    promise: ["UU8rcEBzJSleTkf_-agPM20g", "UUO_aKKYxn4tvrqPjcTzZ6EQ", "UUmbs8T6MWqUHP1tIQvSgKrg", "UU3n5uGu18FoCy23ggWWp8tA","UUgmPnx-EEeOrZSg5Tiw7ZRQ","UUsUj0dszADCGbF3gNrQEuSQ"],
    advent: ["UUgnfPPb9JI3e9A4cXHnWbyg", "UU9p_lqQ0FEDz327Vgf5JwqA", "UU_sFNM0z0MWm9A6WlKPuMMg", "UUt9H_RpQzhxzlyBxFqrdHqA"],
    justice: ["UUW5uhrG1eCBYditmhL0Ykjw", "UUDHABijvPBnJm7F-KlNME3w", "UUvN5h1ShZtc7nly3pezRayg", "UUl69AEx4MdqMZH7Jtsm7Tig"],
}

// async function refreshDatabaseOkayu() {
//     // Retrieve video data from YouTube API
//     let resultsArr = [];
//     let totalVideoNo = 100;
//     let pageToken = "";
//     let channelName = ""
  
//     while (resultsArr.length < totalVideoNo) {
//         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvaTdHTWBGv3MKj3KVqJVCw&maxResults=50${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
//         let data = await res.json();
  
//         resultsArr = resultsArr.concat(data.items);
//         pageToken = `&pageToken=${data.nextPageToken}`;
  
//         if(totalVideoNo === 100){
//             totalVideoNo = data.pageInfo.totalResults;
//         }
  
//         resultsArr.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt) ? 1 : -1 );
//     }
//     console.log(resultsArr[0].snippet.channelTitle);
//     extractVideoDetails(resultsArr);

//     function extractVideoDetails(sortedResultsArray) {
//         let resultsJsonArray = [];
//          sortedResultsArray.forEach(element => {
//             resultsJsonArray.push({
//                 videoId: element.snippet.resourceId.videoId,
//                 thumbnail: element.snippet.thumbnails.medium.url,
//                 title: element.snippet.title,
//                 publishedAt: element.snippet.publishedAt
//             })
//         })

//         console.log(resultsJsonArray);
//     }

    

//     // Call Express endpoint with the gathered results
//     // try {
//     //     const response = await fetch('http://localhost:5050/record/', {
//     //         method: "POST",
//     //         headers: {
//     //           "Content-Type": "application/json"
//     //         },
//     //         body: JSON.stringify({ resultsArr })
//     //     });
//     //     // Log the raw text to see what is actually returned
//     //     const text = await response.text();
//     //     console.log('Raw response:', text);
        
//     //     // Then try parsing JSON if the response looks valid
//     //     const result = JSON.parse(text);
//     //     console.log('Database refreshed with ID:', result.insertedId);
//     // } catch (error) {
//     //     console.error('Error refreshing database:', error);
//     // }
// }

async function refreshDatabase(genArray) {
    // Retrieve video data from YouTube API
    let resultsArr = [];
    let totalVideoNo = 100;
    let pageToken = "";
    let channelName = ""
    
    for (let i=0; i < genArray.length; i++) {
    while (resultsArr.length < totalVideoNo) {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${genArray[i]}&maxResults=50${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        let data = await res.json();
  
        resultsArr = resultsArr.concat(data.items);
        pageToken = `&pageToken=${data.nextPageToken}`;
  
        if(totalVideoNo === 100){
            totalVideoNo = data.pageInfo.totalResults;
        }
  
        resultsArr.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt) ? 1 : -1 );
    }
    console.log(resultsArr[0].snippet.channelTitle);
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
        resultsArr = [];
        totalVideoNo = 100;
        pageToken = "";
        channelName = ""
        console.log(resultsJsonArray);
    }
}
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
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen0)}>Gen 0</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen1)}>Gen 1</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen2)}>Gen 2</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gamers)}>Gamers</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen3)}>Gen 3</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen4)}>Gen 4</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.gen5)}>Gen 5</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.holoX)}>Holo X</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.reGloss)}>ReGloss</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.flowGlow)}>FlowGlow</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.id1)}>ID Gen 1</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.id2)}>ID Gen 2</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.id3)}>ID Gen 3</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.myth)}>Myth</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.promise)}>Promise</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.advent)}>Advent</button>
                            <button className="button primary" onClick={() => refreshDatabase(channelIDs.justice)}>Justice</button>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Database;