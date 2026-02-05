
import React from "react";
import Home from './home.js';
import { Link } from 'react-router';

class Header extends React.Component{
    render(){
    
    return(
					<header id="header">
						<div className="inner">

							{/* <!-- Logo --> */}
							<div className="logo">
								<Link to= "/Home">
									<span className="symbol"><img src="assets/images/HoloArchiveFolder.png" alt="" /></span><span className="title">Home</span>
								</Link>
							</div>
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
