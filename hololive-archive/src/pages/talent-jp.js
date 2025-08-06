import React from "react";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";


class TalentJP extends React.Component{
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
										<img src="assets/images/tokino_sora_thumb.png" alt="Tokino Sora" />
									</span>
									<Link to="/Tokino-Sora">
										<div class="content">
										<h2>Tokino Sora</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/roboco-san_thumb.png" alt="Roboco-san" />
									</span>
									<Link to="/Roboco-san">
										<div class="content">
										<h2>Roboco-san</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style3">
									<span class="image">
										<img src="assets/images/Yozora-Mel_list_thumb.png" alt="Yozora Mel" />
									</span>
									<Link to="/Yozora-Mel">
										<div class="content">
										<h2>Yozora Mel</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Aki-Rosenthal_list_thumb.png" alt="Aki Rosenthal" />
									</span>
									<Link to="/Aki-Rosenthal">
										<div class="content">
										<h2>Aki Rosenthal</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Akai-Haato_list_thumb.png" alt="Akai Haato" />
									</span>
									<Link to="/Akai-Haato">
										<div class="content">
										<h2>Akai Haato</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style6">
									<span class="image">
										<img src="assets/images/Shirakami-Fubuki_list_thumb.png" alt="Shirakami Fubuki" />
									</span>
									<Link to="/Shirakami-Fubuki">
										<div class="content">
										<h2>Shirakami Fubuki</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/Natsuiro-Matsuri_list_thumb.png" alt="Natsuiro Matsuri" />
									</span>
									<Link to="/Natsuiro-Matsuri">
										<div class="content">
										<h2>Natsuiro Matsuri</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style3">
									<span class="image">
										<img src="assets/images/Minato-Aqua_list_thumb.png" alt="Minato Aqua" />
									</span>
									<Link to="/Minato-Aqua">
										<div class="content">
										<h2>Minato Aqua</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style1">
									<span class="image">
										<img src="assets/images/shion_thumb.png" alt="Murasaki Shion" />
									</span>
									<Link to="/Murasaki-Shion">
										<div class="content">
										<h2>Murasaki Shion</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Nakiri-Ayame_list_thumb.png" alt="Nakiri Ayame" />
									</span>
									<Link to="/Nakiri-Ayame">
										<div class="content">
										<h2>Nakiri Ayame</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style6">
									<span class="image">
										<img src="assets/images/Yuzuki-Choco_list_thumb.png" alt="Yuzuki Choco" />
									</span>
									<Link to="/Yuzuki-Choco">
										<div class="content">
										<h2>Yuzuki Choco</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Oozora-Subaru_list_thumb.png" alt="Oozora Subaru" />
									</span>
									<Link to="/Oozora-Subaru">
										<div class="content">
										<h2>Oozora Subaru</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/AZKi_list_thumb.png" alt="AZKi" />
									</span>
									<Link to="/AZKi">
										<div class="content">
										<h2>AZKi</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Ookami-Mio_thumb.png" alt="Ookami Mio" />
									</span>
									<Link to="/Ookami-Mio">
										<div class="content">
										<h2>Ookami Mio</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Sakura-Miko_thumb.png" alt="Sakura Miko" />
									</span>
									<Link to="/Sakura-Miko">
										<div class="content">
										<h2>Sakura Miko</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Nekomata-Okayu_list_thumb.png" alt="Nekomata Okayu" />
									</span>
									<Link to="/Nekomata-Okayu">
										<div class="content">
										<h2>Nekomata Okayu</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Inugami-Korone_list_thumb.png" alt="Inugami Korone" />
									</span>
									<Link to="/Inugami-Korone">
										<div class="content">
										<h2>Inugami Korone</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Hoshimachi-Suisei_list_thumb-1.png" alt="Hoshimachi Suisei" />
									</span>
									<Link to="/Hoshimachi-Suisei">
										<div class="content">
										<h2>Hoshimachi Suisei</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Usada-Pekora_list_thumb.png" alt="Usada Pekora" />
									</span>
									<Link to="/Usada-Pekora">
										<div class="content">
										<h2>Usada Pekora</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shiranui-Flare_list_thumb.png" alt="Shiranui Flare" />
									</span>
									<Link to="/Shiranui-Flare">
										<div class="content">
										<h2>Shiranui Flare</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shirogane-Noel_thumb.png" alt="Shirogane Noel" />
									</span>
									<Link to="/Shirogane-Noel">
										<div class="content">
										<h2>Shirogane Noel</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/houshou_marine_thumb.png" alt="Houshou Marine" />
									</span>
									<Link to="/Houshou-Marine">
										<div class="content">
										<h2>Houshou Marine</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Amane-Kanata_list_thumb.png" alt="Amane Kanata" />
									</span>
									<Link to="/Amane-Kanata">
										<div class="content">
										<h2>Amane Kanata</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Tsunomaki-Watame_list_thumb-1.png" alt="Tsunomaki Watame" />
									</span>
									<Link to="/Tsunomaki-Watame">
										<div class="content">
										<h2>Tsunomaki Watame</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Tokoyami-Towa_list_thumb.png" alt="Tokoyami Towa" />
									</span>
									<Link to="/Tokoyami-Towa">
										<div class="content">
										<h2>Tokoyami Towa</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Himemori-Luna_list_thumb.png" alt="Himemori Luna" />
									</span>
									<Link to="/Himemori-Luna">
										<div class="content">
										<h2>Himemori Luna</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Kiryu-Coco_list_thumb-1.png" alt="Kiryu Coco" />
									</span>
									<Link to="/Kiryu-Coco">
										<div class="content">
										<h2>Kiryu Coco</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Yukihana-Lamy_list_thumb.png" alt="Yukihana Lamy" />
									</span>
									<Link to="/Yukihana-Lamy">
										<div class="content">
										<h2>Yukihana Lamy</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Momosuzu-Nene_list_thumb.png" alt="Momosuzu Nene" />
									</span>
									<Link to="/Momosuzu-Nene">
										<div class="content">
										<h2>Momosuzu Nene</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shishiro-Botan_list_thumb.png" alt="Shishiro Botan" />
									</span>
									<Link to="/Shishiro-Botan">
										<h2>Shishiro Botan</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Omaru-Polka_list_thumb.png" alt="Omaru Polka" />
									</span>
									<Link to="/Omaru-Polka">
										<div class="content">
										<h2>Omaru Polka</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/La-Darknesss_list_thumb.png" alt="La+ Darknesss" />
									</span>
									<Link to="/Laplus-Darknesss">
										<div class="content">
										<h2>La+ Darknesss</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Takane-Lui_list_thumb.png" alt="Takane Lui" />
									</span>
									<Link to="/Takane-Lui">
										<div class="content">
										<h2>Takane Lui</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Hakui-Koyori_list_thumb.png" alt="Hakui Koyori" />
									</span>
									<Link to="/Hakui-Koyori">	
										<div class="content">
											<h2>Hakui Koyori</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Sakamata-Chloe_list_thumb.png" alt="Sakamata Chloe" />
									</span>
									<Link to="/Sakamata-Chloe">
										<div class="content">
											<h2>Sakamata Chloe</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Kazama-Iroha_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Kazama-Iroha">
										<div class="content">
											<h2>Kazama Iroha</h2>
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

export default TalentJP