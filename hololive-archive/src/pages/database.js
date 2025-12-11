import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import { Link } from "react-router";

const channelIDs = {
    gen0: ["UCp6993wxpyDPHUpavwDFqgg", "UCDqI2jOz0weumE8s7paEk6g", "UC0TXe_LYZ4scaW2XMyi5_kw", "UC-hM6YJuNYVAmUWxeIr9FeA", "UC5CwaMl1eIgY8h02uZw7u8A"],
    gen1: ["UCFTLzh12_nrtzqBPsTCqenA", "UC1CfXB_kRs3C-zaeTG3oGyg", "UCQ0UDLQCjY0rmuxCDE38FGg"],
    gen2: ["UC7fk0CB07ly8oSl0aqKkqFg", "UC1opHUrw8rvnsadT-iGp7Cg", "UCXTpFs_3PqI41qX2d9tL2Rw", "UC1suqwovbL1kzsoaZgFZLKg","UCvzGlP9oQwU--Y0r9id_jnA"],
    gamers: ["UCdn5BQ06XqgXoAxIhbqw5Rg", "UCp-5t9SrOQwXMU7iIjQfARg", "UCvaTdHTWBGv3MKj3KVqJVCw", "UChAnqc_AY5_I3Px5dig3X1Q"],
    gen3: ["UC1DCedRgGHBdm81E1llLhOQ", "UCvInZx9h3jC2JzsIzoOebWg", "UCdyqAaZDKHXg4Ahi7VENThQ", "UCCzUftO8KOVkV4wQG1vkUvg"],
    gen4: ["UCZlDXzGoo7d44bwdNObFacg", "UCqm3BQLlJfvkTsX_hvm0UmA", "UC1uv2Oq6kNxgATlCiez59hw", "UCa9Y57gfeY0Zro_noHRVrnw","UCS9uQI-jC3DE0L4IpXyvr6w"],
    gen5: ["UCFKOVgVbGmX65RxO3EtH3iw", "UCAWSyEs_Io8MtpY3m-zqILA", "UCUKD-uaobj9jiqB-VXt71mA", "UCK9V2B22uJYu3N7eR_BT9QA"],
    holoX: ["UCENwRMx5Yh42zWpzURebzTw", "UCs9_O1tRPMQTHQ-N_L6FU2g", "UC6eWCld0KwmyHFbAqK3V-Rw", "UCIBY1ollUsauvVi4hW4cumw","UC_vMYWcDjmfdpH6r4TTn1MQ"],
    reGloss: ["UCWQtYtq9EOB4-I5P-3fh8lA", "UCMGfV7TVTmHhEErVJg1oHBQ", "UCtyWhCj3AqKh2dXctLkDtng", "UCdXAk5MpyLD8594lm_OvtGQ", "UC1iA6_NT4mtAcIII6ygrvCw"],
    flowGlow: ["UC9LSiN9hXI55svYEBrrK-tw", "UCuI_opAVX6qbxZY-a-AxFuQ", "UCjk2nKmHzgH5Xy-C5qYRd5A", "UCKMWFR6lAstLa7Vbf5dH7ig", "UCGzTVXqMQHa4AgJVJIVvtDQ"],
    id1: ["UCOyYb1c43VlX9rc_lT6NKQw", "UCP0BspO_AMEe3aQqqpo89Dg", "UCAoy6rzhSf4ydcYjJw3WoVg"],
    id2: ["UCYz_5n-uDuChHtLo7My1HnQ", "UC727SQYUvx5pDDGQpTICNWg", "UChgTyjG-pdNvxxhdsXfHQ5Q"],
    id3: ["UCTvHWSfBZgtxE4sILOaurIQ", "UCZLZ8Jjx_RN2CXloOmgTHVg", "UCjLEmnpCNeisMxy134KPwWw"],
    myth: ["UCL_qhgtOy0dy1Agp8vkySQg", "UCHsx4Hqa-1ORjQTh9TYDhww", "UCMwGHR0BTZuLsmjY_NT5Pwg", "UCoSrY_IQQVpmIRZ9Xf-y93g", "UCyl1z3jo3XHR1riLFKG5UAg"],
    promise: ["UC8rcEBzJSleTkf_-agPM20g", "UCO_aKKYxn4tvrqPjcTzZ6EQ", "UCmbs8T6MWqUHP1tIQvSgKrg", "UC3n5uGu18FoCy23ggWWp8tA","UCgmPnx-EEeOrZSg5Tiw7ZRQ","UCsUj0dszADCGbF3gNrQEuSQ"],
    advent: ["UCgnfPPb9JI3e9A4cXHnWbyg", "UC9p_lqQ0FEDz327Vgf5JwqA", "UC_sFNM0z0MWm9A6WlKPuMMg", "UCt9H_RpQzhxzlyBxFqrdHqA"],
    justice: ["UCW5uhrG1eCBYditmhL0Ykjw", "UCDHABijvPBnJm7F-KlNME3w", "UCvN5h1ShZtc7nly3pezRayg", "UCl69AEx4MdqMZH7Jtsm7Tig"],
}

async function refreshDatabaseOkayu() {
    // Retrieve video data from YouTube API
    let resultsArr = [];
    let totalVideoNo = 100;
    let pageToken = "";
    let channelName = ""
  
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

        console.log(resultsJsonArray);
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