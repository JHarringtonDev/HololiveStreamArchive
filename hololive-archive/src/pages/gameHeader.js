import React from "react";
								// <h1 className="talentName">{this.props.talentName}</h1>
class GameHeader extends React.Component{
    render(){
    
    return(
					<header id="header">
          <header>
								<h1>{this.props.talentName}</h1>
								<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
							</header>
					</header>
    )
}
}

export default GameHeader