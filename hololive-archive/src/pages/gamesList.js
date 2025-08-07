
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router";

class Games extends React.Component{
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
                        template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                        <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
                    </header>
                    <section class="tiles gameSelect">

							<article class="style1">
								<span class="image">
									<img src="assets/images/games/doom-eternal.png" alt="Doom Eternal" />
								</span>
								<Link to="/Doom-Eternal">
									<div class="content">
									<h2>Doom Eternal</h2>
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
								</Link>
							</article>

							<article class="style2">
								<span class="image">
									<img src="assets/images/games/mad-father.png" alt="Mad Father" />
								</span>
								<a href="generic.html">
									<div class="content">
									<h2>Mad Father</h2>
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
								</a>
							</article>

							<article class="style3">
								<span class="image">
									<img src="assets/images/games/minecraft.png" alt="Minecraft" />
								</span>
								<a href="generic.html">
									<div class="content">
									<h2>Minecraft</h2>
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
								</a>
							</article>

							<article class="style4">
								<span class="image">
									<img src="assets/images/games/overcooked-2.png" alt="Overcooked 2" />
								</span>
								<a href="generic.html">
									<div class="content">
									<h2>Overcooked 2</h2>
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

export default Games