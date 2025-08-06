
import React from "react";

class Header extends React.Component{
    render(){
    
    return(
					<header id="header">
						<div className="inner">

							{/* <!-- Logo --> */}
								<a href="assets/index.html" class="logo">
									<span className="symbol"><img src="assets/images/logo.svg" alt="" /></span><span className="title">Phantom</span>
								</a>

							{/* <!-- Nav --> */}
								<nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav>

						</div>
					</header>
    )
}
}

export default Header
