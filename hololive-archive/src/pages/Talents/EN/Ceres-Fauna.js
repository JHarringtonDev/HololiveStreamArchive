
import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import * as reactRouter from "react-router";

class Fauna extends React.Component{
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
								<reactRouter.Link to="/Doom-Eternal#fauna">
									<div class="content">
									<h2>Doom Eternal</h2>
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
                                    </reactRouter.Link>
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

export default Fauna