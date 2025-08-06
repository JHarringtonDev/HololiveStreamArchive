import React from "react";
import Header from "../header";
import Footer from "../footer";
import GameHeader from "../gameHeader";

function enableScroll (){
const scrollContainer = document.querySelector("#talentBox");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY/15;
});
}

function hideAll(){
	console.log(`hide`)
	for (const s of document.getElementsByClassName("partContainer")) {
		if(s.classList.contains('hidden') == false){
			s.classList.add("hidden")
		}
	  }
		
	}
//#region showFunctions

function showSora(){
	document.querySelector("#tokinoSora").classList.remove('hidden')
}

function showRoboco(){
	document.querySelector("#robocosan").classList.remove('hidden')
}

function showMel(){
	document.querySelector("#yozoraMel").classList.remove('hidden')
}

function showRosenthal(){
	document.querySelector("#akiRosenthal").classList.remove('hidden')
}

function showHaato(){
	document.querySelector("#akaiHaato").classList.remove('hidden')
}

function showFubuki(){
	document.querySelector("#shirakamiFubuki").classList.remove('hidden')
}

function showMatsuri(){
	document.querySelector("#natsuiroMatsuri").classList.remove('hidden')
}

function showAqua(){
	document.querySelector("#minatoAqua").classList.remove('hidden')
}

function showShion(){
	document.querySelector("#murasakiShion").classList.remove('hidden')
}

function showAyame(){
	document.querySelector("#nakiriAyame").classList.remove('hidden')
}

function showChoco(){
	document.querySelector("#yuzukiChoco").classList.remove('hidden')
}

function showSubaru(){
	document.querySelector("#oozoraSubaru").classList.remove('hidden')
}

function showMio(){
	document.querySelector("#ookamiMio").classList.remove('hidden')
}

function showMiko(){
	document.querySelector("#sakuraMiko").classList.remove('hidden')
}

function showOkayu(){
	document.querySelector("#nekomataOkayu").classList.remove('hidden')
}

function showKorone(){
	document.querySelector("#inugamiKorone").classList.remove('hidden')
}

function showSuisei(){
	document.querySelector("#hoshimachiSuisei").classList.remove('hidden')
}

function showAzki(){
	document.querySelector("#AZKi").classList.remove('hidden')
}

function showPekora(){
	document.querySelector("#usadaPekora").classList.remove('hidden')
}

function showFlare(){
	document.querySelector("#shiranuiFlare").classList.remove('hidden')
}

function showNoel(){
	document.querySelector("#shiroganeNoel").classList.remove('hidden')
}

function showMarine(){
	document.querySelector("#houshouMarine").classList.remove('hidden')
}

function showKanata(){
	document.querySelector("#amaneKanata").classList.remove('hidden')
}

function showWatame(){
	document.querySelector("#tsunomakiWatame").classList.remove('hidden')
}

function showTowa(){
	document.querySelector("#tokoyamiTowa").classList.remove('hidden')
}

function showLuna(){
	document.querySelector("#himemoriLuna").classList.remove('hidden')
}

function showLamy(){
	document.querySelector("#yukihanaLamy").classList.remove('hidden')
}

function showNene(){
	document.querySelector("#momosuzuNene").classList.remove('hidden')
}

function showBotan(){
	document.querySelector("#shishiroBotan").classList.remove('hidden')
}

function showPolka(){
	document.querySelector("#omaruPolka").classList.remove('hidden')
}

function showDarknesss(){
	document.querySelector("#laplusDarknesss").classList.remove('hidden')
}

function showLui(){
	document.querySelector("#takaneLui").classList.remove('hidden')
}

function showKoyori(){
	document.querySelector("#hakuiKoyori").classList.remove('hidden')
}

function showChloe(){
	document.querySelector("#sakamataChloe").classList.remove('hidden')
}

function showIroha(){
	document.querySelector("#kazamaIroha").classList.remove('hidden')
}

function showCoco(){
	document.querySelector("#kiryuCoco").classList.remove('hidden')
}

function showCalliope(){
	document.querySelector("#moriCalliope").classList.remove('hidden')
}

function showKiara(){
	document.querySelector("#takanashiKiara").classList.remove('hidden')
}

function showIna(){
	document.querySelector("#ninomaeInanis").classList.remove('hidden')
}

function showGura(){
	document.querySelector("#gawrGura").classList.remove('hidden')
}

function showAmelia(){
	document.querySelector("#watsonAmelia").classList.remove('hidden')
}

function showFauna(){
	document.querySelector("#ceresFauna").classList.remove('hidden')
}

function showKronii(){
	document.querySelector("#ouroKronii").classList.remove('hidden')
}

function showMumei(){
	document.querySelector("#nanashiMumei").classList.remove('hidden')
}

function showBaelz(){
	document.querySelector("#hakosBaelz").classList.remove('hidden')
}

function showShiori(){
	document.querySelector("#shioriNovella").classList.remove('hidden')
}

function showBijou(){
	document.querySelector("#kosekiBijou").classList.remove('hidden')
}

function showNerissa(){
	document.querySelector("#nerissaRavencroft").classList.remove('hidden')
}

function showIrys(){
	document.querySelector("#IRyS").classList.remove('hidden')
}

function showFuwamoco(){
	document.querySelector("#FUWAMOCO").classList.remove('hidden')
}

function showSana(){
	document.querySelector("#tsukumoSana").classList.remove('hidden')
}

function showZeta(){
	document.querySelector("#vestiaZeta").classList.remove('hidden')
}

function showRisu(){
	document.querySelector("#ayundaRisu").classList.remove('hidden')
}

function showMoona(){
	document.querySelector("#moonaHoshinova").classList.remove('hidden')
}

function showIofi(){
	document.querySelector("#airaniIofifteen").classList.remove('hidden')
}

function showOllie(){
	document.querySelector("#kureijiOllie").classList.remove('hidden')
}

function showAnya(){
	document.querySelector("#anyaMelfissa").classList.remove('hidden')
}

function showReine(){
	document.querySelector("#pavoliaReine").classList.remove('hidden')
}

function showKaela(){
	document.querySelector("#kaelaKovalskia").classList.remove('hidden')
}

function showKobo(){
	document.querySelector("#koboKanaeru").classList.remove('hidden')
}

function showAo(){
	document.querySelector("#hiodoshiAo").classList.remove('hidden')
}

function showKanade(){
	document.querySelector("#otonoseKanade").classList.remove('hidden')
}

function showRirika(){
	document.querySelector("#ichijouRirika").classList.remove('hidden')
}

function showRaden(){
	document.querySelector("#juufuuteiRaden").classList.remove('hidden')
}

function showHajime(){
	document.querySelector("#todorokiHajime").classList.remove('hidden')
}


//#endregion

function checkSource(){
//#region checkConditional
if (window.location.hash =='#sora') {
	showSora();
}

else if (window.location.hash =='#mel') {
	showMel();
}

else if (window.location.hash =='#roboco') {
	showRoboco();
}

else if (window.location.hash =='#rosenthal') {
	showRosenthal();
}

else if (window.location.hash =='#haato') {
	showHaato();
}

else if (window.location.hash =='#fubuki') {
	showFubuki();
}

else if (window.location.hash =='#matsuri') {
	showMatsuri();
}

else if (window.location.hash =='#aqua') {
	showAqua();
}

else if (window.location.hash =='#shion') {
	showShion();
}

else if (window.location.hash =='#ayame') {
	showAyame();
}

else if (window.location.hash =='#choco') {
	showChoco();
}

else if (window.location.hash =='#subaru') {
	showSubaru();
}

else if (window.location.hash =='#mio') {
	showMio();
}

else if (window.location.hash =='#miko') {
	showMiko();
}

else if (window.location.hash =='#okayu') {
	showOkayu();
}

else if (window.location.hash =='#korone') {
	showKorone();
}

else if (window.location.hash =='#suisei') {
	showSuisei();
}

else if (window.location.hash =='#pekora') {
	showPekora();
}

else if (window.location.hash =='#flare') {
	showFlare();
}

else if (window.location.hash =='#noel') {
	showNoel();
}

else if (window.location.hash =='#marine') {
	showMarine();
}

else if (window.location.hash =='#kanata') {
	showKanata();
}

else if (window.location.hash =='#watame') {
	showWatame();
}

else if (window.location.hash =='#towa') {
	showTowa();
}

else if (window.location.hash =='#luna') {
	showLuna();
}

else if (window.location.hash =='#lamy') {
	showLamy();
}

else if (window.location.hash =='#nene') {
	showNene();
}

else if (window.location.hash =='#botan') {
	showBotan();
}

else if (window.location.hash =='#polka') {
	showPolka();
}

else if (window.location.hash =='#darknesss') {
	showDarknesss();
}

else if (window.location.hash =='#lui') {
	showLui();
}

else if (window.location.hash =='#koyori') {
	showKoyori();
}

else if (window.location.hash =='#chloe') {
	showChloe();
}

else if (window.location.hash =='#iroha') {
	showIroha();
}

else if (window.location.hash =='#coco') {
	showCoco();
}

else if (window.location.hash =='#calliope') {
	showCalliope();
}

else if (window.location.hash =='#kiara') {
	showKiara();
}

else if (window.location.hash =='#ina') {
	showIna();
}

else if (window.location.hash =='#gura') {
	showGura();
}

else if (window.location.hash =='#amelia') {
	showAmelia();
}

else if (window.location.hash =='#fauna') {
	showFauna();
}

else if (window.location.hash =='#kronii') {
	showKronii();
}

else if (window.location.hash =='#mumei') {
	showMumei();
}

else if (window.location.hash =='#baelz') {
	showBaelz();
}

else if (window.location.hash =='#shiori') {
	showShiori();
}

else if (window.location.hash =='#bijou') {
	showBijou();
}

else if (window.location.hash =='#nerissa') {
	showNerissa();
}

else if (window.location.hash =='#sana') {
	showSana();
}

else if (window.location.hash =='#irys') {
	showIrys();
}

else if (window.location.hash =='#fuwamoco') {
	showFuwamoco();
}

else if (window.location.hash =='#zeta') {
	showZeta();
}

else if (window.location.hash =='#risu') {
	showRisu();
}

else if (window.location.hash =='#moona') {
	showMoona();
}

else if (window.location.hash =='#iofi') {
	showIofi();
}

else if (window.location.hash =='#ollie') {
	showOllie();
}

else if (window.location.hash =='#anya') {
	showAnya();
}

else if (window.location.hash =='#reine') {
	showReine();
}

else if (window.location.hash =='#Kaela') {
	showKaela();
}

else if (window.location.hash =='#azki') {
	showAzki();
}

else if (window.location.hash =='#kobo') {
	showKobo();
}

else if (window.location.hash =='#ao') {
	showAo();
}

else if (window.location.hash =='#kanade') {
	showKanade();
}

else if (window.location.hash =='#ririka') {
	showRirika();
}

else if (window.location.hash =='#raden') {
	showRaden();
}

else if (window.location.hash =='#hajime') {
	showHajime();
}
//#endregion
}

// console.log(this.props.location)
// setTimeout(checkSource, 300)

console.log(window.location.hash)

class TwelveMinutes extends React.Component{
    render(){
        return(
            <div id="wrapper">

				{/* Header */}
				<Header />

				{/* Menu */}
				{/* <Menu /> */}

				{/* Main */}
					<div id="main" onLoad={checkSource}>
						<div className="inner">
							<GameHeader />
							<section id="talentBox" onLoad={enableScroll}>
							{/* put talent images here */}
							<img src="assets/images/tokino_sora_thumb.png" id="sora" className="iconSelect" onClick={() => {hideAll(); showSora()}}/>

<img src="assets/images/Yozora-Mel_list_thumb.png" id="mel" className="iconSelect" onClick={() => {hideAll(); showMel()}}/>

<img src="assets/images/Aki-Rosenthal_list_thumb.png" id="rosenthal" className="iconSelect" onClick={() => {hideAll(); showRosenthal()}}/>

<img src="assets/images/Akai-Haato_list_thumb.png" id="haato" className="iconSelect" onClick={() => {hideAll(); showHaato()}}/>

<img src="assets/images/Shirakami-Fubuki_list_thumb.png" id="fubuki" className="iconSelect" onClick={() => {hideAll(); showFubuki()}}/>

<img src="assets/images/Natsuiro-Matsuri_list_thumb.png" id="matsuri" className="iconSelect" onClick={() => {hideAll(); showMatsuri()}}/>

<img src="assets/images/Minato-Aqua_list_thumb.png" id="aqua" className="iconSelect" onClick={() => {hideAll(); showAqua()}}/>

<img src="assets/images/shion_thumb.png" id="shion" className="iconSelect" onClick={() => {hideAll(); showShion()}}/>

<img src="assets/images/Nakiri-Ayame_list_thumb.png" id="ayame" className="iconSelect" onClick={() => {hideAll(); showAyame()}}/>

<img src="assets/images/Yuzuki-Choco_list_thumb.png" id="choco" className="iconSelect" onClick={() => {hideAll(); showChoco()}}/>

<img src="assets/images/Oozora-Subaru_list_thumb.png" id="subaru" className="iconSelect" onClick={() => {hideAll(); showSubaru()}}/>

<img src="assets/images/Ookami-Mio_thumb.png" id="mio" className="iconSelect" onClick={() => {hideAll(); showMio()}}/>

<img src="assets/images/Sakura-Miko_thumb.png" id="miko" className="iconSelect" onClick={() => {hideAll(); showMiko()}}/>

<img src="assets/images/Nekomata-Okayu_list_thumb.png" id="okayu" className="iconSelect" onClick={() => {hideAll(); showOkayu()}}/>

<img src="assets/images/Inugami-Korone_list_thumb.png" id="korone" className="iconSelect" onClick={() => {hideAll(); showKorone()}}/>

<img src="assets/images/Hoshimachi-Suisei_list_thumb-1.png" id="suisei" className="iconSelect" onClick={() => {hideAll(); showSuisei()}}/>

<img src="assets/images/AZKi_list_thumb.png" id="azki" className="iconSelect" onClick={() => {hideAll(); showAzki()}}/>

<img src="assets/images/Usada-Pekora_list_thumb.png" id="pekora" className="iconSelect" onClick={() => {hideAll(); showPekora()}}/>

<img src="assets/images/Shiranui-Flare_list_thumb.png" id="flare" className="iconSelect" onClick={() => {hideAll(); showFlare()}}/>

<img src="assets/images/Shirogane-Noel_thumb.png" id="noel" className="iconSelect" onClick={() => {hideAll(); showNoel()}}/>

<img src="assets/images/houshou_marine_thumb.png" id="marine" className="iconSelect" onClick={() => {hideAll(); showMarine()}}/>

<img src="assets/images/Amane-Kanata_list_thumb.png" id="kanata" className="iconSelect" onClick={() => {hideAll(); showKanata()}}/>

<img src="assets/images/Tsunomaki-Watame_list_thumb-1.png" id="watame" className="iconSelect" onClick={() => {hideAll(); showWatame()}}/>

<img src="assets/images/Tokoyami-Towa_list_thumb.png" id="towa" className="iconSelect" onClick={() => {hideAll(); showTowa()}}/>

<img src="assets/images/Himemori-Luna_list_thumb.png" id="luna" className="iconSelect" onClick={() => {hideAll(); showLuna()}}/>

<img src="assets/images/Yukihana-Lamy_list_thumb.png" id="lamy" className="iconSelect" onClick={() => {hideAll(); showLamy()}}/>

<img src="assets/images/Momosuzu-Nene_list_thumb.png" id="nene" className="iconSelect" onClick={() => {hideAll(); showNene()}}/>

<img src="assets/images/Shishiro-Botan_list_thumb.png" id="botan" className="iconSelect" onClick={() => {hideAll(); showBotan()}}/>

<img src="assets/images/Omaru-Polka_list_thumb.png" id="polka" className="iconSelect" onClick={() => {hideAll(); showPolka()}}/>

<img src="assets/images/La-Darknesss_list_thumb.png" id="darknesss" className="iconSelect" onClick={() => {hideAll(); showDarknesss()}}/>

<img src="assets/images/Takane-Lui_list_thumb.png" id="lui" className="iconSelect" onClick={() => {hideAll(); showLui()}}/>

<img src="assets/images/Hakui-Koyori_list_thumb.png" id="koyori" className="iconSelect" onClick={() => {hideAll(); showKoyori()}}/>

<img src="assets/images/Sakamata-Chloe_list_thumb.png" id="chloe" className="iconSelect" onClick={() => {hideAll(); showChloe()}}/>

<img src="assets/images/Kazama-Iroha_list_thumb.png" id="iroha" className="iconSelect" onClick={() => {hideAll(); showIroha()}}/>

<img src="assets/images/Kiryu-Coco_list_thumb-1.png" id="coco" className="iconSelect" onClick={() => {hideAll(); showCoco()}}/>

<img src="assets/images/mori-calliope.png" id="calliope" className="iconSelect" onClick={() => {hideAll(); showCalliope()}}/>

<img src="assets/images/takanashi-kiara.png" id="kiara" className="iconSelect" onClick={() => {hideAll(); showKiara()}}/>

<img src="assets/images/ninomae-inanis.png" id="ina" className="iconSelect" onClick={() => {hideAll(); showIna()}}/>

<img src="assets/images/gawr-gura.png" id="gura" className="iconSelect" onClick={() => {hideAll(); showGura()}}/>

<img src="assets/images/amelia-watson.png" id="amelia" className="iconSelect" onClick={() => {hideAll(); showAmelia()}}/>

<img src="assets/images/ceres-fauna.png" id="fauna" className="iconSelect" onClick={() => {hideAll(); showFauna()}}/>

<img src="assets/images/ouro-kronii.png" id="kronii" className="iconSelect" onClick={() => {hideAll(); showKronii()}}/>

<img src="assets/images/nanashi-mumei.png" id="mumei" className="iconSelect" onClick={() => {hideAll(); showMumei()}}/>

<img src="assets/images/hakos-baelz.png" id="baelz" className="iconSelect" onClick={() => {hideAll(); showBaelz()}}/>

<img src="assets/images/shiori-novella.png" id="shiori" className="iconSelect" onClick={() => {hideAll(); showShiori()}}/>

<img src="assets/images/koseki-bijou.png" id="bijou" className="iconSelect" onClick={() => {hideAll(); showBijou()}}/>

<img src="assets/images/Nerissa-Ravencroft_list_thumb.png" id="nerissa" className="iconSelect" onClick={() => {hideAll(); showNerissa()}}/>

<img src="assets/images/tsukumo-sana.png" id="sana" className="iconSelect" onClick={() => {hideAll(); showSana()}}/>

<img src="assets/images/Zeta.png" id="zeta" className="iconSelect" onClick={() => {hideAll(); showZeta()}}/>

<img src="assets/images/Ayunda-Risu.png" id="risu" className="iconSelect" onClick={() => {hideAll(); showRisu()}}/>

<img src="assets/images/Moona-Hoshinova.png" id="moona" className="iconSelect" onClick={() => {hideAll(); showMoona()}}/>

<img src="assets/images/Iofi.png" id="iofi" className="iconSelect" onClick={() => {hideAll(); showIofi()}}/>

<img src="assets/images/Ollie.png" id="ollie" className="iconSelect" onClick={() => {hideAll(); showOllie()}}/>

<img src="assets/images/anya_melfissa_thumb-2.png.png" id="anya" className="iconSelect" onClick={() => {hideAll(); showAnya()}}/>

<img src="assets/images/Reine.png" id="reine" className="iconSelect" onClick={() => {hideAll(); showReine()}}/>

<img src="assets/images/Kaela.png" id="kaela" className="iconSelect" onClick={() => {hideAll(); showKaela()}}/>

<img src="assets/images/Kobo.png" id="kobo" className="iconSelect" onClick={() => {hideAll(); showKobo()}}/>

<img src="assets/images/Hiodoshi-Ao_list_thumb.png" id="ao" className="iconSelect" onClick={() => {hideAll(); showAo()}}/>

<img src="assets/images/Otonose-Kanade_list_thumb.png" id="kanade" className="iconSelect" onClick={() => {hideAll(); showKanade()}}/>

<img src="assets/images/Ichijou-Ririka_list_thumb.png" id="ririka" className="iconSelect" onClick={() => {hideAll(); showRirika()}}/>

<img src="assets/images/Juufuutei-Raden_list_thumb.png" id="raden" className="iconSelect" onClick={() => {hideAll(); showRaden()}}/>

<img src="assets/images/Todoroki-Hajime_list_thumb.png" id="hajime" className="iconSelect" onClick={() => {hideAll(); showHajime()}}/>

<img src="assets/images/irys.png" id="irys" className="iconSelect" onClick={() => {hideAll(); showIrys()}}/>

<img src="assets/images/fuwamoco.png" id="fuwamoco" className="iconSelect" onClick={() => {hideAll(); showFuwamoco()}}/>

<img src="assets/images/roboco-san_thumb.png" id="roboco" className="iconSelect" onClick={() => {hideAll(); showRoboco()}}/>

							</section>
							<section id="videoList">
								{/* Talent Sections and video articles inside */}
								
								<div>
								<section id="moriCalliope" className="partContainer hidden">
								<h2 className="talentName">Calliope Mori</h2>
								<section id="calliope" className="tiles parts">
                                
									</section>
									</section>

								<section id="watsonAmelia" className="partContainer hidden">
								<h2 className="talentName">Amelia Watson</h2>
								<section id="#amelia" className="tiles parts">
                                
									</section>
									</section>

									<section id="ninomaeInanis" className="partContainer hidden">
								<h2 className="talentName">Ninomae Ina'nis</h2>
								<section id="#ina" className="tiles parts">
                                
									</section>
									</section>

									<section id="ceresFauna" className="partContainer hidden">
								<h2 className="talentName">Ceres Fauna</h2>
								<section id="#fauna" className="tiles parts">
                                
									</section>
									</section>

									<section id="FUWAMOCO" className="partContainer hidden">
								<h2 className="talentName">FUWAMOCO</h2>
								<section id="#fuwamoco" className="tiles parts">
                                
									</section>
									</section>

									<section id="gawrGura" className="partContainer hidden">
								<h2 className="talentName">Gawr Gura</h2>
								<section id="#gura" className="tiles parts">
                                
									</section>
									</section>

									<section id="hakosBaelz" className="partContainer hidden">
								<h2 className="talentName">Hakos Baelz</h2>
								<section id="#baelz" className="tiles parts">
                                
									</section>
									</section>

									<section id="IRyS" className="partContainer hidden">
								<h2 className="talentName">IRyS</h2>
								<section id="#irys" className="tiles parts">
                                
									</section>
									</section>

									<section id="nanashiMumei" className="partContainer hidden">
								<h2 className="talentName">Nanashi Mumei</h2>
								<section id="#mumei" className="tiles parts">
                                
									</section>
									</section>

									<section id="shioriNovella" className="partContainer hidden">
								<h2 className="talentName">Shiori Novella</h2>
								<section id="#shiori" className="tiles parts">
                                
									</section>
									</section>

									<section id="ouroKronii" className="partContainer hidden">
								<h2 className="talentName">Ouro Kronii</h2>
								<section id="#kronii" className="tiles parts">
                                
									</section>
									</section>

									<section id="nerissaRavencroft" className="partContainer hidden">
								<h2 className="talentName">Nerissa Ravencroft</h2>
								<section id="#nerissa" className="tiles parts">
                                
									</section>
									</section>

									<section id="kosekiBijou" className="partContainer hidden">
								<h2 className="talentName">Koseki Bijou</h2>
								<section id="#bijou" className="tiles parts">
                                
									</section>
									</section>

									<section id="takanashiKiara" className="partContainer hidden">
								<h2 className="talentName">Takanashi Kiara</h2>
								<section id="#kiara" className="tiles parts">
                                
									</section>
									</section>

									<section id="tsukumoSana" className="partContainer hidden">
								<h2 className="talentName">Tsukumo Sana</h2>
								<section id="#sana" className="tiles parts">
                                
									</section>
									</section>

<section id="tokinoSora" className="partContainer hidden">
<h2 className="talentName">Tokino Sora</h2>
<section id="#sora" className="tiles parts">
                
  </section>
  </section>

	<section id="robocosan" className="partContainer hidden">
<h2 className="talentName">Robocosan</h2>
<section id="#roboco" className="tiles parts">
                
  </section>
  </section>


<section id="yozoraMel" className="partContainer hidden">
<h2 className="talentName">Yozora Mel</h2>
<section id="#mel" className="tiles parts">
                
  </section>
  </section>


<section id="akiRosenthal" className="partContainer hidden">
<h2 className="talentName">Aki Rosenthal</h2>
<section id="#rosenthal" className="tiles parts">
                
  </section>
  </section>


<section id="akaiHaato" className="partContainer hidden">
<h2 className="talentName">Akai Haato</h2>
<section id="#haato" className="tiles parts">
                
  </section>
  </section>


<section id="shirakamiFubuki" className="partContainer hidden">
<h2 className="talentName">Shirakami Fubuki</h2>
<section id="#fubuki" className="tiles parts">
                
  </section>
  </section>


<section id="natsuiroMatsuri" className="partContainer hidden">
<h2 className="talentName">Natsuiro Matsuri</h2>
<section id="#matsuri" className="tiles parts">
                
  </section>
  </section>


<section id="minatoAqua" className="partContainer hidden">
<h2 className="talentName">Minato Aqua</h2>
<section id="#aqua" className="tiles parts">
                
  </section>
  </section>


<section id="murasakiShion" className="partContainer hidden">
<h2 className="talentName">Murasaki Shion</h2>
<section id="#shion" className="tiles parts">
                
  </section>
  </section>


<section id="nakiriAyame" className="partContainer hidden">
<h2 className="talentName">Nakiri Ayame</h2>
<section id="#ayame" className="tiles parts">
                
  </section>
  </section>


<section id="yuzukiChoco" className="partContainer hidden">
<h2 className="talentName">Yuzuki Choco</h2>
<section id="#choco" className="tiles parts">
                
  </section>
  </section>


<section id="oozoraSubaru" className="partContainer hidden">
<h2 className="talentName">Oozora Subaru</h2>
<section id="#subaru" className="tiles parts">
                
  </section>
  </section>


<section id="ookamiMio" className="partContainer hidden">
<h2 className="talentName">Ookami Mio</h2>
<section id="#mio" className="tiles parts">
                
  </section>
  </section>


<section id="sakuraMiko" className="partContainer hidden">
<h2 className="talentName">Sakura Miko</h2>
<section id="#miko" className="tiles parts">
                
  </section>
  </section>


<section id="nekomataOkayu" className="partContainer hidden">
<h2 className="talentName">Nekomata Okayu</h2>
<section id="#okayu" className="tiles parts">
                
  </section>
  </section>


<section id="inugamiKorone" className="partContainer hidden">
<h2 className="talentName">Inugami Korone</h2>
<section id="#korone" className="tiles parts">
                
  </section>
  </section>


<section id="hoshimachiSuisei" className="partContainer hidden">
<h2 className="talentName">Hoshimachi Suisei</h2>
<section id="#suisei" className="tiles parts">
                
  </section>
  </section>


<section id="usadaPekora" className="partContainer hidden">
<h2 className="talentName">Usada Pekora</h2>
<section id="#pekora" className="tiles parts">
                
  </section>
  </section>


<section id="shiranuiFlare" className="partContainer hidden">
<h2 className="talentName">Shiranui Flare</h2>
<section id="#flare" className="tiles parts">
                
  </section>
  </section>


<section id="shiroganeNoel" className="partContainer hidden">
<h2 className="talentName">Shirogane Noel</h2>
<section id="#noel" className="tiles parts">
                
  </section>
  </section>


<section id="houshouMarine" className="partContainer hidden">
<h2 className="talentName">Houshou Marine</h2>
<section id="#marine" className="tiles parts">
                
  </section>
  </section>


<section id="amaneKanata" className="partContainer hidden">
<h2 className="talentName">Amane Kanata</h2>
<section id="#kanata" className="tiles parts">
                
  </section>
  </section>


<section id="tsunomakiWatame" className="partContainer hidden">
<h2 className="talentName">Tsunomaki Watame</h2>
<section id="#watame" className="tiles parts">
                
  </section>
  </section>


<section id="tokoyamiTowa" className="partContainer hidden">
<h2 className="talentName">Tokoyami Towa</h2>
<section id="#towa" className="tiles parts">
                
  </section>
  </section>


<section id="himemoriLuna" className="partContainer hidden">
<h2 className="talentName">Himemori Luna</h2>
<section id="#luna" className="tiles parts">
                
  </section>
  </section>


<section id="yukihanaLamy" className="partContainer hidden">
<h2 className="talentName">Yukihana Lamy</h2>
<section id="#lamy" className="tiles parts">
                
  </section>
  </section>


<section id="momosuzuNene" className="partContainer hidden">
<h2 className="talentName">Momosuzu Nene</h2>
<section id="#nene" className="tiles parts">
                
  </section>
  </section>


<section id="shishiroBotan" className="partContainer hidden">
<h2 className="talentName">Shishiro Botan</h2>
<section id="#botan" className="tiles parts">
                
  </section>
  </section>


<section id="omaruPolka" className="partContainer hidden">
<h2 className="talentName">Omaru Polka</h2>
<section id="#polka" className="tiles parts">
                
  </section>
  </section>


<section id="laplusDarknesss" className="partContainer hidden">
<h2 className="talentName">La+ Darknesss</h2>
<section id="#darknesss" className="tiles parts">
                
  </section>
  </section>


<section id="takaneLui" className="partContainer hidden">
<h2 className="talentName">Takane Lui</h2>
<section id="#lui" className="tiles parts">
                
  </section>
  </section>


<section id="hakuiKoyori" className="partContainer hidden">
<h2 className="talentName">Hakui Koyori</h2>
<section id="#koyori" className="tiles parts">
                
  </section>
  </section>


<section id="sakamataChloe" className="partContainer hidden">
<h2 className="talentName">Sakamata Chloe</h2>
<section id="#chloe" className="tiles parts">
                
  </section>
  </section>

	<section id="AZKi" className="partContainer hidden">
<h2 className="talentName">AZKi</h2>
<section id="#azki" className="tiles parts">
                
  </section>
  </section>

<section id="kazamaIroha" className="partContainer hidden">
<h2 className="talentName">Kazama Iroha</h2>
<section id="#iroha" className="tiles parts">
                
  </section>
  </section>


<section id="kiryuCoco" className="partContainer hidden">
<h2 className="talentName">Kiryu Coco</h2>
<section id="#coco" className="tiles parts">
                
  </section>
  </section>



									<section id="vestiaZeta" className="partContainer hidden">
									<h2 className="talentName">Vestia Zeta</h2>
									<section id="#zeta" className="tiles parts">

									  </section>
									  </section>
									

									<section id="ayundaRisu" className="partContainer hidden">
									<h2 className="talentName">Ayunda Risu</h2>
									<section id="#risu" className="tiles parts">

									  </section>
									  </section>
									

									<section id="moonaHoshinova" className="partContainer hidden">
									<h2 className="talentName">Moona Hoshinova</h2>
									<section id="#moona" className="tiles parts">

									  </section>
									  </section>
									

									<section id="airaniIofifteen" className="partContainer hidden">
									<h2 className="talentName">Airani Iofifteen</h2>
									<section id="#iofi" className="tiles parts">

									  </section>
									  </section>
									

									<section id="kureijiOllie" className="partContainer hidden">
									<h2 className="talentName">Kureiji Ollie</h2>
									<section id="#ollie" className="tiles parts">

									  </section>
									  </section>
									

									<section id="anyaMelfissa" className="partContainer hidden">
									<h2 className="talentName">Anya Melfissa</h2>
									<section id="#anya" className="tiles parts">

									  </section>
									  </section>
									

									<section id="pavoliaReine" className="partContainer hidden">
									<h2 className="talentName">Pavolia Reine</h2>
									<section id="#reine" className="tiles parts">

									  </section>
									  </section>
									

									<section id="kaelaKovalskia" className="partContainer hidden">
									<h2 className="talentName">Kaela Kovalskia</h2>
									<section id="#kaela" className="tiles parts">

									  </section>
									  </section>
									

									<section id="koboKanaeru" className="partContainer hidden">
									<h2 className="talentName">Kobo Kanaeru</h2>
									<section id="#kobo" className="tiles parts">

									  </section>
									  </section>

<section id="hiodoshiAo" className="partContainer hidden">
<h2 className="talentName">Hiodoshi Ao</h2>
<section id="#ao" className="tiles parts">
                
  </section>
  </section>


<section id="otonoseKanade" className="partContainer hidden">
<h2 className="talentName">Otonose Kanade</h2>
<section id="#kanade" className="tiles parts">
                
  </section>
  </section>


<section id="ichijouRirika" className="partContainer hidden">
<h2 className="talentName">Ichijou Ririka</h2>
<section id="#ririka" className="tiles parts">
                
  </section>
  </section>


<section id="juufuuteiRaden" className="partContainer hidden">
<h2 className="talentName">Juufuutei Raden</h2>
<section id="#raden" className="tiles parts">
                
  </section>
  </section>


<section id="todorokiHajime" className="partContainer hidden">
<h2 className="talentName">Todoroki Hajime</h2>
<section id="#hajime" className="tiles parts">
                
  </section>
  </section>







</div>
							</section>
						</div>
					</div>

				{/* Footer */}
					<Footer />

			</div>
        )
    }
}

export default TwelveMinutes