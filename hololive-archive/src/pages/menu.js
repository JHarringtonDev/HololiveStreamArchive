import React from "react";
import { Link } from 'react-router';

class Menu extends React.Component{
    render(){
    
    return(
				<nav id="menu">
                    <div className="inner">
					<h2>Menu</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/Games">Games List</Link></li>
						<li><Link to="/HoloEN">HoloEN</Link></li>
						<li><Link to="/HoloJP">HoloJP</Link></li>
                        <li><Link to="/HoloID">HoloID</Link></li>
					</ul>
                    </div>
				</nav>
    )
}
}

export default Menu
