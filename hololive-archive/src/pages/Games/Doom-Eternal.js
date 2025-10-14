import React from "react";
import Header from "../header.js";
import Footer from "../footer.js";
import GameHeader from "../gameHeader.js";

function hideAll(){
	console.log(`hide`)

	for (const s of document.getElementsByClassName("partContainer")) {
		if(s.classList.contains('hidden') == false){
			s.classList.add("hidden")
		}
	  }
		
	}
//#region showFunctions
function showCalliope(){
	document.querySelector("#moriCalliope").classList.remove('hidden')
}

function showAmelia(){
	document.querySelector("#watsonAmelia").classList.remove('hidden')
}

//#endregion

function checkSource(){
//#region checkConditional

//#endregion
}

// console.log(this.props.location)
// setTimeout(checkSource, 300)

console.log(window.location.hash)

class DoomEternal extends React.Component{
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
							<GameHeader />
							<section id="talentBox">
							<img src="assets/images/mori-calliope.png" id="calliope" className="iconSelect" onClick={() => {hideAll(); showCalliope()}}/>
							<img src="assets/images/amelia-watson.png" id="amelia" className="iconSelect" onClick={() => {hideAll(); showAmelia()}}/>
							</section>
							<section id="videoList">
								{/* Talent Sections and video articles inside */}
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
    <img src="https://img.youtube.com/vi/eALSNrEkQY0/mqdefault.jpg" alt="Doom Eternal Part 1" className="videoImg"/>
  </span>
    <h2>【Part #01】</h2>
  </a>
</article>

  <article className="style1 videoItem">
  <a href="https://www.youtube.com/watch?v=1dO7lcQb5D4" target="_blank">
  <span className="image">
    <img src="https://img.youtube.com/vi/1dO7lcQb5D4/mqdefault.jpg" alt="Doom Eternal Part 2" className="videoImg"/>
  </span>
    <h2>【Part #02】</h2>
  </a>
</article>

  <article className="style1 videoItem">
  <a href="https://www.youtube.com/watch?v=blLDxuA9wVU" target="_blank">
  <span className="image">
    <img src="https://img.youtube.com/vi/blLDxuA9wVU/mqdefault.jpg" alt="Doom Eternal Part 3" className="videoImg"/>
  </span>
    <h2>【Part #03】</h2>
  </a>
</article>

  <article className="style1 videoItem">
  <a href="https://www.youtube.com/watch?v=UNNPX4QAztU" target="_blank">
  <span className="image">
    <img src="https://img.youtube.com/vi/UNNPX4QAztU/mqdefault.jpg" alt="Doom Eternal Part 4" className="videoImg"/>
  </span>
    <h2>【Part #04】</h2>
  </a>
</article>

  <article className="style1 videoItem">
  <a href="https://www.youtube.com/watch?v=aMsSPS-hkUg" target="_blank">
  <span className="image">
    <img src="https://img.youtube.com/vi/aMsSPS-hkUg/mqdefault.jpg" alt="Doom Eternal Part 5" className="videoImg"/>
  </span>
    <h2>【Part #05】</h2>
  </a>
</article>

  <article className="style1 videoItem">
  <a href="https://www.youtube.com/watch?v=pYlub3EIqeU" target="_blank">
  <span className="image">
    <img src="https://img.youtube.com/vi/pYlub3EIqeU/mqdefault.jpg" alt="Doom Eternal Part 6" className="videoImg"/>
  </span>
    <h2>【Part #06】</h2>
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

export default DoomEternal