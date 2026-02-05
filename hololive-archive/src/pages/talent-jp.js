import React from "react";
import Menu from "./menu.js";
import Header from "./header.js";
import Footer from "./footer.js";
import { Link } from "react-router";


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
								<h1>Hololive</h1>
								<p>The main branch of Hololive, it's almost 50 members have been a pillar of the vtubing community since 2018.</p>
							</header>
							<section class="tiles">
								<article class="style1">
									<span class="image">
										<img src="assets/images/tokino_sora_thumb.png" alt="Tokino Sora" />
									</span>
									<Link to="/Tokino-Sora">
										<div class="content">
										</div>
									</Link>
										<h2>Tokino Sora</h2>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/roboco-san_thumb.png" alt="Roboco-san" />
									</span>
									<Link to="/Roboco-san">
										<div class="content">
										</div>
									</Link>
										<h2>Roboco-san</h2>
								</article>


								<article class="style4">
									<span class="image">
										<img src="assets/images/Hoshimachi-Suisei_list_thumb-1.png" alt="Hoshimachi Suisei" />
									</span>
									<Link to="/Hoshimachi-Suisei">
										<div class="content">
										</div>
									</Link>
										<h2>Hoshimachi Suisei</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Sakura-Miko_thumb.png" alt="Sakura Miko" />
									</span>
									<Link to="/Sakura-Miko">
										<div class="content">
										</div>
									</Link>
										<h2>Sakura Miko</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/AZKi_list_thumb.png" alt="AZKi" />
									</span>
									<Link to="/AZKi">
										<div class="content">
										</div>
									</Link>
										<h2>AZKi</h2>
								</article>

								{/* <article class="style3">
									<span class="image">
										<img src="assets/images/Yozora-Mel_list_thumb.png" alt="Yozora Mel" />
									</span>
									<Link to="/Yozora-Mel">
										<div class="content">
										<h2>Yozora Mel</h2>
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</Link>
								</article> */}

								<article class="style4">
									<span class="image">
										<img src="assets/images/Aki-Rosenthal_list_thumb.png" alt="Aki Rosenthal" />
									</span>
									<Link to="/Aki-Rosenthal">
										<div class="content">
										</div>
									</Link>
										<h2>Aki Rosenthal</h2>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Akai-Haato_list_thumb.png" alt="Akai Haato" />
									</span>
									<Link to="/Akai-Haato">
										<div class="content">
										</div>
									</Link>
										<h2>Akai Haato</h2>
								</article>

								<article class="style6">
									<span class="image">
										<img src="assets/images/Shirakami-Fubuki_list_thumb.png" alt="Shirakami Fubuki" />
									</span>
									<Link to="/Shirakami-Fubuki">
										<div class="content">
										</div>
									</Link>
										<h2>Shirakami Fubuki</h2>
								</article>

								<article class="style2">
									<span class="image">
										<img src="assets/images/Natsuiro-Matsuri_list_thumb.png" alt="Natsuiro Matsuri" />
									</span>
									<Link to="/Natsuiro-Matsuri">
										<div class="content">
										</div>
									</Link>
										<h2>Natsuiro Matsuri</h2>
								</article>

								<article class="style3">
									<span class="image">
										<img src="assets/images/Minato-Aqua_list_thumb.png" alt="Minato Aqua" />
									</span>
									<Link to="/Minato-Aqua">
										<div class="content">
										</div>
									</Link>
										<h2>Minato Aqua</h2>
								</article>

								<article class="style1">
									<span class="image">
										<img src="assets/images/shion_thumb.png" alt="Murasaki Shion" />
									</span>
									<Link to="/Murasaki-Shion">
										<div class="content">
										</div>
									</Link>
										<h2>Murasaki Shion</h2>
								</article>

								<article class="style5">
									<span class="image">
										<img src="assets/images/Nakiri-Ayame_list_thumb.png" alt="Nakiri Ayame" />
									</span>
									<Link to="/Nakiri-Ayame">
										<div class="content">
										</div>
									</Link>
										<h2>Nakiri Ayame</h2>
								</article>

								<article class="style6">
									<span class="image">
										<img src="assets/images/Yuzuki-Choco_list_thumb.png" alt="Yuzuki Choco" />
									</span>
									<Link to="/Yuzuki-Choco">
										<div class="content">
										</div>
									</Link>
										<h2>Yuzuki Choco</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Oozora-Subaru_list_thumb.png" alt="Oozora Subaru" />
									</span>
									<Link to="/Oozora-Subaru">
										<div class="content">
										</div>
									</Link>
										<h2>Oozora Subaru</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Ookami-Mio_thumb.png" alt="Ookami Mio" />
									</span>
									<Link to="/Ookami-Mio">
										<div class="content">
										</div>
									</Link>
										<h2>Ookami Mio</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Nekomata-Okayu_list_thumb.png" alt="Nekomata Okayu" />
									</span>
									<Link to="/Nekomata-Okayu">
										<div class="content">
										</div>
									</Link>
										<h2>Nekomata Okayu</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Inugami-Korone_list_thumb.png" alt="Inugami Korone" />
									</span>
									<Link to="/Inugami-Korone">
										<div class="content">
										</div>
									</Link>
										<h2>Inugami Korone</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Usada-Pekora_list_thumb.png" alt="Usada Pekora" />
									</span>
									<Link to="/Usada-Pekora">
										<div class="content">
										</div>
									</Link>
										<h2>Usada Pekora</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shiranui-Flare_list_thumb.png" alt="Shiranui Flare" />
									</span>
									<Link to="/Shiranui-Flare">
										<div class="content">
										</div>
									</Link>
										<h2>Shiranui Flare</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shirogane-Noel_thumb.png" alt="Shirogane Noel" />
									</span>
									<Link to="/Shirogane-Noel">
										<div class="content">
										</div>
									</Link>
										<h2>Shirogane Noel</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/houshou_marine_thumb.png" alt="Houshou Marine" />
									</span>
									<Link to="/Houshou-Marine">
										<div class="content">
										</div>
									</Link>
										<h2>Houshou Marine</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Amane-Kanata_list_thumb.png" alt="Amane Kanata" />
									</span>
									<Link to="/Amane-Kanata">
										<div class="content">
										</div>
									</Link>
										<h2>Amane Kanata</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Tsunomaki-Watame_list_thumb-1.png" alt="Tsunomaki Watame" />
									</span>
									<Link to="/Tsunomaki-Watame">
										<div class="content">
										</div>
									</Link>
										<h2>Tsunomaki Watame</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Tokoyami-Towa_list_thumb.png" alt="Tokoyami Towa" />
									</span>
									<Link to="/Tokoyami-Towa">
										<div class="content">
										</div>
									</Link>
										<h2>Tokoyami Towa</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Himemori-Luna_list_thumb.png" alt="Himemori Luna" />
									</span>
									<Link to="/Himemori-Luna">
										<div class="content">
										</div>
									</Link>
										<h2>Himemori Luna</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Kiryu-Coco_list_thumb-1.png" alt="Kiryu Coco" />
									</span>
									<Link to="/Kiryu-Coco">
										<div class="content">
										</div>
									</Link>
										<h2>Kiryu Coco</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Yukihana-Lamy_list_thumb.png" alt="Yukihana Lamy" />
									</span>
									<Link to="/Yukihana-Lamy">
										<div class="content">
										</div>
									</Link>
										<h2>Yukihana Lamy</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Momosuzu-Nene_list_thumb.png" alt="Momosuzu Nene" />
									</span>
									<Link to="/Momosuzu-Nene">
										<div class="content">
										</div>
									</Link>
										<h2>Momosuzu Nene</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Shishiro-Botan_list_thumb.png" alt="Shishiro Botan" />
									</span>
									<Link to="/Shishiro-Botan">
										<div class="content">
										</div>
									</Link>
										<h2>Shishiro Botan</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Omaru-Polka_list_thumb.png" alt="Omaru Polka" />
									</span>
									<Link to="/Omaru-Polka">
										<div class="content">
										</div>
									</Link>
										<h2>Omaru Polka</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/La-Darknesss_list_thumb.png" alt="La+ Darknesss" />
									</span>
									<Link to="/Laplus-Darknesss">
										<div class="content">
										</div>
									</Link>
										<h2>La+ Darknesss</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Takane-Lui_list_thumb.png" alt="Takane Lui" />
									</span>
									<Link to="/Takane-Lui">
										<div class="content">
										</div>
									</Link>
										<h2>Takane Lui</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Hakui-Koyori_list_thumb.png" alt="Hakui Koyori" />
									</span>
									<Link to="/Hakui-Koyori">	
										<div class="content">
										</div>
									</Link>
											<h2>Hakui Koyori</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Sakamata-Chloe_list_thumb.png" alt="Sakamata Chloe" />
									</span>
									<Link to="/Sakamata-Chloe">
										<div class="content">
										</div>
									</Link>
											<h2>Sakamata Chloe</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Kazama-Iroha_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Kazama-Iroha">
										<div class="content">
										</div>
									</Link>
											<h2>Kazama Iroha</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Hiodoshi-Ao_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Hiodoshi-Ao">
										<div class="content">
										</div>
									</Link>
											<h2>Hiodoshi Ao</h2>
								</article>
								
								<article class="style4">
									<span class="image">
										<img src="assets/images/Otonose-Kanade_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Otonose-Kanade">
										<div class="content">
										</div>
									</Link>
											<h2>Otonose Kanade</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Ichijou-Ririka_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Ichijou-Ririka">
										<div class="content">
										</div>
									</Link>
											<h2>Ichijou Ririka</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Juufuutei-Raden_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Juufuutei-Raden">
										<div class="content">
										</div>
									</Link>
											<h2>Juufuutei Raden</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Todoroki-Hajime_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Todoroki-Hajime">
										<div class="content">
										</div>
									</Link>
											<h2>Todoroki Hajime</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Isaki-Riona_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Isaki-Riona">
										<div class="content">
										</div>
									</Link>
											<h2>Isaki Riona</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Koganei-Niko_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Koganei-Niko">
										<div class="content">
										</div>
									</Link>
											<h2>Koganei Niko</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Mizumiya-Su_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Mizumiya-Su	">
										<div class="content">
										</div>
									</Link>
											<h2>Mizumiya Su</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Rindo-Chihaya_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Rindo-Chihaya">
										<div class="content">
										</div>
									</Link>
											<h2>Rindo Chihaya</h2>
								</article>

								<article class="style4">
									<span class="image">
										<img src="assets/images/Kikirara-Vivi_list_thumb.png" alt="Kazama Iroha" />
									</span>
									<Link to="/Kikirara-Vivi">
										<div class="content">
										</div>
									</Link>
											<h2>Kikirara Vivi</h2>
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