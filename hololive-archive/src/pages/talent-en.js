import React from "react";
import Menu from "./menu.js";
import Header from "./header.js";
import Footer from "./footer.js";
import Calliope from "./Talents/EN/Mori-Calliope.js";
import Amelia from './Talents/EN/Watson-Amelia.js';
import Kiara from './Talents/EN/Takanashi-Kiara.js';
import Gura from './Talents/EN/Gawr-Gura.js';
import Ina from './Talents/EN/Ninomae-Inanis.js';
import IRyS from './Talents/EN/IRyS.js';
import Fauna from './Talents/EN/Ceres-Fauna.js';
import Sana from './Talents/EN/Tsukumo-Sana.js';
import Kronii from './Talents/EN/Ouro-Kronii.js';
import Mumei from './Talents/EN/Nanashi-Mumei.js';
import Baelz from './Talents/EN/Hakos-Baelz.js';
import Shiori from './Talents/EN/Novella-Shiori.js';
import Bijou from './Talents/EN/Koseki-Bijou.js';
import Nerissa from './Talents/EN/Ravencroft-Nerissa.js';
import FUWAMOCO from './Talents/EN/FUWAMOCO.js';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router';



class TalentEN extends React.Component{
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
										<img src="assets/images/mori-calliope.png" alt="Calliope Mori" />
									</span>
									<Link to="/Mori-Calliope">
										<div class="content">
											<h2>Mori Calliope</h2>
											<p>hololive English -Myth-</p>
										</div>
									</Link>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/images/takanashi-kiara.png" alt="" />
									</span>
									<Link to="../Takanashi-Kiara">
										<div class="content">
											<h2>Takanashi Kiara</h2>
											<p>hololive English -Myth-</p>
										</div>
									</Link>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/images/ninomae-inanis.png" alt="" />
									</span>
									<Link to="../Ninomae-Inanis">
										<div class="content">
											<h2>Ninomae Ina'Nis</h2>
											<p>hololive English -Myth-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/gawr-gura.png" alt="" />
									</span>
									<Link to="../Gawr-Gura">
										<div class="content">
											<h2>Gawr Gura</h2>
											<p>hololive English -Myth-</p>
										</div>
									</Link>
								</article>
								<article class="style5">
									<span class="image">
										<img src="assets/images/amelia-watson.png" alt="" />
									</span>
									<Link to="/Watson-Amelia">
										<div class="content">
											<h2>Amelia Watson</h2>
											<p>hololive English -Myth-</p>
										</div>
									</Link>
								</article>
								<article class="style6">
									<span class="image">
										<img src="assets/images/irys.png" alt="" />
									</span>
									<Link to="/IRyS">
										<div class="content">
											<h2>IRyS</h2>
											<p>hololive English -Promise-</p>
										</div>
									</Link>
								</article>
								<article class="style6">
									<span class="image">
										<img src="assets/images/tsukumo-sana.png" alt="" />
									</span>
									<Link to="/Tsukumo-Sana">
										<div class="content">
											<h2>Tsukumo Sana</h2>
											<p>hololive English -Council-</p>
										</div>
									</Link>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/images/ceres-fauna.png" alt="" />
									</span>
									<Link to="/Ceres-Fauna">
										<div class="content">
											<h2>Ceres Fauna</h2>
											<p>hololive English -Promise-</p>
										</div>
									</Link>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/images/ouro-kronii.png" alt="" />
									</span>
									<Link to="../Ouro-Kronii">
										<div class="content">
											<h2>Ouro Kronii</h2>
											<p>hololive English -Promise-</p>
										</div>
									</Link>
								</article>
								<article class="style1">
									<span class="image">
										<img src="assets/images/nanashi-mumei.png" alt="" />
									</span>
									<Link to="/Nanashi-Mumei">
										<div class="content">
											<h2>Nanashi Mumei</h2>
											<p>hololive English -Promise-</p>
										</div>
									</Link>
								</article>
								<article class="style5">
									<span class="image">
										<img src="assets/images/hakos-baelz.png" alt="" />
									</span>
									<Link to="/Hakos-Baelz">
										<div class="content">
											<h2>Hakos Baelz</h2>
											<p>hololive English -Promise-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/shiori-novella.png" alt="" />
									</span>
									<Link to="/Novella-Shiori">
										<div class="content">
											<h2>Shiori Novella</h2>
											<p>hololive English -Advent-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/koseki-bijou.png" alt="" />
									</span>
									<Link to="/Koseki-Bijou">
										<div class="content">
											<h2>Koseki Bijou</h2>
											<p>hololive English -Advent-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/Nerissa-Ravencroft_list_thumb.png" alt="" />
									</span>
									<Link to="/Ravencroft-Nerissa">
										<div class="content">
											<h2>Nerissa Ravencroft</h2>
											<p>hololive English -Advent-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/fuwamoco.png" alt="" />
									</span>
									<Link to="/FUWAMOCO">
										<div class="content">
											<h2>FUWAMOCO</h2>
											<p>hololive English -Advent-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/Elizabeth-Rose-Bloodflame_list_thumb.png" alt="" />
									</span>
									<Link to="/Elizabeth-Bloodflame">
										<div class="content">
											<h2>Elizabeth Bloodflame</h2>
											<p>hololive English -Justice-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/Gigi-Murin_list_thumb.png" alt="" />
									</span>
									<Link to="/Gigi-Murin">
										<div class="content">
											<h2>Gigi Murin</h2>
											<p>hololive English -Justice-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/Cecilia-Immergreen_list_thumb.png" alt="" />
									</span>
									<Link to="/Cecilia-Immergreen">
										<div class="content">
											<h2>Cecilia Immergreen</h2>
											<p>hololive English -Justice-</p>
										</div>
									</Link>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/images/Raora-Panthera_list_thumb.png" alt="" />
									</span>
									<Link to="/Raora-Panthera">
										<div class="content">
											<h2>Raora Panthera</h2>
											<p>hololive English -Justice-</p>
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

export default TalentEN