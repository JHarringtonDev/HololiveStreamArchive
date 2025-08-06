import React from "react";
import Header from "../header";
import Footer from "../footer";

function hideAll(){
	console.log(`hide`)

	for (const s of document.getElementsByClassName("partContainer")) {
		if(s.classList.contains('hidden') == false){
			s.classList.add("hidden")
		}
	  }
	// talentParts.forEach((element)=>{
	// 	if(element.classList.contains('hidden') == false){
	// 		element.classList.add("hidden")
	// 	}
	// })
		
	}

 function showMori(){
	document.querySelector("#moriCalliope").classList.remove('hidden')
}

function showAmelia(){
	document.querySelector("#ameliaWatson").classList.remove('hidden')
}
function checkSource(){
	
if (window.location.hash =='#calliope') {
	showMori();
}else if (window.location.hash =='#amelia') {
	showAmelia();
}
}

// console.log(this.props.location)
// setTimeout(checkSource, 300)

console.log(window.location.hash)

class DontStarve extends React.Component{
    render(){
        return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}
				{/* <Menu /> */}

				{/* Main */}
					<div id="main" onLoad={checkSource}>
						<div className="inner">
							<header>
								<h1>This is Phantom, a free, fully responsive site<br />
								template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
								<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
							</header>
							<section id="talentBox">
							<img src="assets/images/mori-calliope.png" id="calliope" className="iconSelect" onClick={() => {hideAll(); showMori()}}/>
							<img src="assets/images/amelia-watson.png" id="amelia" className="iconSelect" onClick={() => {hideAll(); showAmelia()}}/>
							</section>
							<section id="videoList">
								
									</section>
						</div>
					</div>

				{/* Footer */}
					<Footer />

			</div>
        )
    }
}

export default DontStarve