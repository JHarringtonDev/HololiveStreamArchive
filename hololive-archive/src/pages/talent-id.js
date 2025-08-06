import React from "react";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";


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
								<h1>This is Phantom, a free, fully responsive site<br />
								template designed by <Link to="http://html5up.net">HTML5 UP</Link>.</h1>
								<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
							</header>
							<section class="tiles">
								<article class="style1">
									<span class="image">
										<img src="assets/images/Ayunda-Risu.png" alt="Ayunda Risu" />
									</span>
									<Link to="/Ayunda-Risu">
										<div class="content">
										<h2>Ayunda Risu</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/Moona-Hoshinova.png" alt="Moona Hoshinova" />
									</span>
									<Link to="/Moona-Hoshinova">
										<div class="content">
										<h2>Moona Hoshinova</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style3">
									<span class="image">
										<img src="assets/images/Iofi.png" alt="Airani Iofifteen" />
									</span>
									<Link to="/Airani-Iofifteen">
										<div class="content">
										<h2>Airani Iofifteen</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Ollie.png" alt="Kureiji Ollie" />
									</span>
									<Link to="/Kureiji-Ollie">
										<div class="content">
										<h2>Kureiji Ollie</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Reine.png" alt="Pavolia Reine" />
									</span>
									<Link to="/Pavolia-Reine">
										<div class="content">
										<h2>Pavolia Reine</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Zeta.png" alt="Vestia Zeta" />
									</span>
									<Link to="/Vestia-Zeta">
										<div class="content">
										<h2>Vestia Zeta</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>
								
								<article class="style5">
									<span class="image">
										<img src="assets/images/Kaela.png" alt="Kaela Kovalskia" />
									</span>
									<Link to="/Kaela-Kovalskia">
										<div class="content">
										<h2>Kaela Kovalskia</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>
								
								<article class="style5">
									<span class="image">
										<img src="assets/images/Kobo.png" alt="Kobo Kanaeru" />
									</span>
									<Link to="/Kobo-Kanaeru">
										<div class="content">
										<h2>Kobo Kanaeru</h2>
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

export default TalentID