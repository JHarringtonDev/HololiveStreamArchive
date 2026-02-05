import React from "react";
import Menu from "./menu.js";
import Header from "./header.js";
import Footer from "./footer.js";
import TalentJP from './talent-jp.js';
import TalentEN from './talent-en.js';
import TalentID from './talent-id.js';
import { Link } from "react-router";


class Home extends React.Component{
    render(){
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
								<h1>HoloCatalog</h1>
								<p>Welcome to the HoloArchive. The ultimate tool for finding your favorite Hololive members playing your favorite games. Pick a branch to begin.</p>
							</header>
							<section class="tiles">
								<article class="style1">
									<span class="image">
										<img src="assets/images/hololive.png" alt="Japanese Branch" />
									</span>
									<Link to="/HoloJP">

									</Link>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/images/hololiveEnglish.png" alt="English Branch" />
									</span>
									<Link to="/HoloEN">
									</Link>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/images/hololiveIndo.png" alt="Indonesian Branch" />
									</span>
									<Link to="/HoloID">
									</Link>
								</article>
								
							</section>
						</div>
					</div>

				{/* Footer */}
					<Footer />

			</div>
        )
    }
}

export default Home