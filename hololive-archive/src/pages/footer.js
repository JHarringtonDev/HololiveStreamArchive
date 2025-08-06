import React from "react";

class Footer extends React.Component{
    render(){
    
    return(
					<footer id="footer">
						<div class="inner">
							{/* <section>
								<h2>Get in touch</h2>
								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div class="field half">
											<input type="email" name="email" id="email" placeholder="Email" />
										</div>
										<div class="field">
											<textarea name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send" class="primary" /></li>
									</ul>
								</form>
							</section> */}
							<section>
								<h2>Follow</h2>
								<ul class="icons">
									<li><a href="https://twitter.com/CorruptedPulse" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="https://www.instagram.com/corruptedpulse/" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="https://www.youtube.com/@corruptedpulse" class="icon brands style2 fa-youtube"><span class="label">Facebook</span></a></li>
									<li><a href="https://www.twitch.tv/corrupted_pulse" class="icon brands style2 fa-twitch"><span class="label">Dribbble</span></a></li>
								</ul>
							</section>
							<ul class="copyright">
								<li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>
    )
}
}

export default Footer