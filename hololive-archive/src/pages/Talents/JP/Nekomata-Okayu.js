
import React, { useRef } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from "react-router";

function fillResults(){

    const sectionRef = useRef();
    fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUvaTdHTWBGv3MKj3KVqJVCw&key=AIzaSyApDNwFNfi4HTJOEAVefxOdfBckc-pLqSs&maxResults=50")
    .then(res => res.json())
    .then(data=>{
        data.items.forEach(e => {
            sectionRef.innerHTML += `<a href="https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}"><img src=${e.snippet.thumbnails.medium.url}></a><br/>
            <h3>${e.snippet.title}<br/>`
        })
        //console.log(data);
    })
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
                        <h1>This is Phantom, a free, fully responsive site<br />
                        template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                        <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
                    </header>
                    <section ref={sectionRef}></section>
					
                    

                </div>
            </div>

        {/* Footer */}
            <Footer />

    </div>
    )
}
}

export default Okayu