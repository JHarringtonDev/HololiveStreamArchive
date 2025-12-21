
import React from "react";
import Home from './home.js';
import { Link } from 'react-router';

class Header extends React.Component{
    render(){
    
    return(
					<header id="header">
						<div className="inner">

							{/* <!-- Logo --> */}
								<Link to= "/Home">
									<span className="symbol"><img src="assets/images/logo.svg" alt="" /></span><span className="title">Home</span>
								</Link>

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
