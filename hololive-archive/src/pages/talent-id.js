import React from "react";
import Menu from "./menu.js";
import Header from "./header.js";
import Footer from "./footer.js";
import { Link } from "react-router";


class TalentID extends React.Component{
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
								<h1>Hololive Indonesia</h1>
								<p>Since 2020, HoloID's 9 members have provided 1000s of hours of entertainment for Indonesian, English and Japanese fans around the world.</p>
							</header>
							<section class="tiles">
								<article class="style1">
									<span class="image">
										<img src="assets/images/Ayunda-Risu.png" alt="Ayunda Risu" />
									</span>
									<Link to="/Ayunda-Risu">
										<div class="content">
										</div>
									</Link>
										<h2>Ayunda Risu</h2>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/Moona-Hoshinova.png" alt="Moona Hoshinova" />
									</span>
									<Link to="/Moona-Hoshinova">
										<div class="content">
										</div>
									</Link>
										<h2>Moona Hoshinova</h2>
								</article>

								<article class="style3">
									<span class="image">
										<img src="assets/images/Iofi.png" alt="Airani Iofifteen" />
									</span>
									<Link to="/Airani-Iofifteen">
										<div class="content">
										</div>
									</Link>
										<h2>Airani Iofifteen</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Ollie.png" alt="Kureiji Ollie" />
									</span>
									<Link to="/Kureiji-Ollie">
										<div class="content">
										</div>
									</Link>
										<h2>Kureiji Ollie</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/anya_melfissa_thumb-2.png.png" alt="Kureiji Ollie" />
									</span>
									<Link to="/Anya-Melfissa">
										<div class="content">
										</div>
									</Link>
										<h2>Anya Melfissa</h2>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Reine.png" alt="Pavolia Reine" />
									</span>
									<Link to="/Pavolia-Reine">
										<div class="content">
										</div>
									</Link>
										<h2>Pavolia Reine</h2>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Zeta.png" alt="Vestia Zeta" />
									</span>
									<Link to="/Vestia-Zeta">
										<div class="content">
										</div>
									</Link>
										<h2>Vestia Zeta</h2>
								</article>
								
								<article class="style5">
									<span class="image">
										<img src="assets/images/Kaela.png" alt="Kaela Kovalskia" />
									</span>
									<Link to="/Kaela-Kovalskia">
										<div class="content">
										</div>
									</Link>
										<h2>Kaela Kovalskia</h2>
								</article>
								
								<article class="style5">
									<span class="image">
										<img src="assets/images/Kobo.png" alt="Kobo Kanaeru" />
									</span>
									<Link to="/Kobo-Kanaeru">
										<div class="content">
										</div>
									</Link>
										<h2>Kobo Kanaeru</h2>
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

export default TalentID