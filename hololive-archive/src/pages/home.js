import React from "react";
import Menu from "./menu.js";
import Header from "./header.js";
import Footer from "./footer.js";


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
								<p>Welcome to the HoloCatalog! Never struggle to find streams again. Select a division to get started.</p>
							</header>
							<section class="tiles">
								<article class="style1">
									<span class="image">
										<img src="assets/images/pic01.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>HoloJP</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/images/pic02.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>HoloEN</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/images/pic03.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>HoloID</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
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