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
	document.querySelector("#watsonAmelia").classList.remove('hidden')
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

class Bloodborne extends React.Component{
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
							<section id="moriCalliope" className="partContainer hidden">
								<h2 className="talentName">Calliope Mori</h2>
								<section id="calliope" className="tiles parts">
									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=z298GGddFpg" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/z298GGddFpg/mqdefault.jpg" alt="Doom Eternal Part 1" className="videoImg"/>
										</span>
											<h2>【Part #01】</h2>
										</a>
									</article>
									
									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=gDeZRNockqI" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/gDeZRNockqI/mqdefault.jpg" alt="Doom Eternal Part 2" className="videoImg"/>
										</span>
											<h2>【Part #02】</h2>
										</a>

									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=CQ2lmH5TdJI" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/CQ2lmH5TdJI/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #03】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=hPRoh9XPxn4" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/hPRoh9XPxn4/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #04】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=FvtNfOuWrGU" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/FvtNfOuWrGU/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #05】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=_OXjZc2ooZY" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/_OXjZc2ooZY/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #06】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=cm1pOvc-owQ" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/cm1pOvc-owQ/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #07】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=Gx53HcRwHM8" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/Gx53HcRwHM8/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #08】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=mcrXgIZvbuY" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/mcrXgIZvbuY/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #09】</h2>
										</a>
									</article>

									<article className="style1 videoItem">
										<a href="https://www.youtube.com/watch?v=hYQTgdUu_E0" target="_blank">
										<span className="image">
											<img src="https://img.youtube.com/vi/hYQTgdUu_E0/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
										</span>
											<h2>【Part #10】</h2>
										</a>
									</article>
									</section>
									</section>

									<section id="watsonAmelia" className="partContainer hidden">
								<h2 className="talentName">Amelia Watson:</h2>
								<section id="amelia" className="tiles parts">
									  
    <article className="style1 videoItem">
      <a href="https://www.youtube.com/watch?v=eALSNrEkQY0" target="_blank">
      <span className="image">
        <img src="https://img.youtube.com/vi/eALSNrEkQY0/mqdefault.jpg" alt="Doom Eternal Part 01" className="videoImg"/>
      </span>
        <h2>【Part #01】</h2>
      </a>
    </article>
    
    <article className="style1 videoItem">
      <a href="https://www.youtube.com/watch?v=1dO7lcQb5D4" target="_blank">
      <span className="image">
        <img src="https://img.youtube.com/vi/1dO7lcQb5D4/mqdefault.jpg" alt="Doom Eternal Part 02" className="videoImg"/>
      </span>
        <h2>【Part #02】</h2>
      </a>
    </article>
    
    <article className="style1 videoItem">
      <a href="https://www.youtube.com/watch?v=_2jtFfRfGA4" target="_blank">
      <span className="image">
        <img src="https://img.youtube.com/vi/_2jtFfRfGA4/mqdefault.jpg" alt="Doom Eternal Part 03" className="videoImg"/>
      </span>
        <h2>【Part #03】</h2>
      </a>
    </article>
    
    <article className="style1 videoItem">
      <a href="https://www.youtube.com/watch?v=aMsSPS-hkUg" target="_blank">
      <span className="image">
        <img src="https://img.youtube.com/vi/aMsSPS-hkUg/mqdefault.jpg" alt="Doom Eternal Part 04" className="videoImg"/>
      </span>
        <h2>【Part #04】</h2>
      </a>
    </article>
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

export default Bloodborne