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
										<img src="assets/images/HoloJP.png" alt="" />
									</span>
									<Link to="/HoloJP">
										<div class="content">
											<h2>Japanese Branch</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/images/HoloEN.png" alt="" />
									</span>
									<Link to="/HoloEN">
										<div class="content">
											<h2>English Branch</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/images/HoloID.png" alt="" />
									</span>
									<Link to="/HoloID">
										<div class="content">
											<h2>Indonesian Branch</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
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