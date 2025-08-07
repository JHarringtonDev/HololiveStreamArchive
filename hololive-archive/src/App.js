import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Footer from './pages/footer';
import Menu from './pages/menu';
import { Routes, Route } from 'react-router';

// Games
import Games from './pages/gamesList';
import GameHeader from './pages/gameHeader';

import TwelveMinutes from './pages/Games/12-Minutes';
import AWayOut from './pages/Games/A-Way-Out';
import AliceFiction from './pages/Games/Alice-Fiction';
import AliceMadness from './pages/Games/Alice-Madness';
import AmnesiaDarkDescent from './pages/Games/Amnesia-Dark-Descent';
import AmnesiaRebirth from './pages/Games/Amnesia-Rebirth';
import AmnesiaTheBunker from './pages/Games/Amnesia-The-Bunker';
import AmongTheSleep from './pages/Games/Among-The-Sleep';
import AmongUs from './pages/Games/Among-Us';
import AnimalCrossingNH from './pages/Games/Animal-Crossing-NH';
import Antichamber from './pages/Games/Antichamber';
import AoOni from './pages/Games/Ao-Oni';
import ApexLegends from './pages/Games/Apex-Legends';
import Apotheon from './pages/Games/Apotheon';
import ArkSurvival from './pages/Games/Ark-Survival';
import ArmoredCoreVI from './pages/Games/Armored-Core-VI';
import AssassinsIV from './pages/Games/Assassins-Creed-IV';
import AssettoCorsa from './pages/Games/Assetto-Corsa';

import backrooms1998 from './pages/Games/Backrooms-1998';
import Baldi from './pages/Games/Baldis-Basics';
import BaldursGate3 from './pages/Games/Baldurs-Gate-3';
import BandDreamGirls from './pages/Games/Bang-Dream-Girls-Band';
import Bastion from './pages/Games/Bastion';
import BattleBlockTheater from './pages/Games/BattleBlock-Theater';
import Bayonetta from './pages/Games/Bayonetta';
import Bayonetta2 from './pages/Games/Bayonetta-2';
import Bayonetta3 from './pages/Games/Bayonetta-3';
import BigBrainAca from './pages/Games/Big-Brain-vs-Brain';
import BioShock from './pages/Games/BioShock';
import Biped from './pages/Games/Biped';
import BlackMesa from './pages/Games/Black-Mesa';
import Blasphemous from './pages/Games/Blasphemous';
import Blasphemous2 from './pages/Games/Blasphemous-2';
import BlazingSails from './pages/Games/Blazing-Sails';
import Bloodborne from './pages/Games/Bloodborne';
import BloodstainedRitual from './pages/Games/Bloodstained-Ritual';
import BlueArchive from './pages/Games/Blue-Archive';
import BPM from './pages/Games/BPM';
import BreadAndFred from './pages/Games/Bread-and-Fred';
import Bully from './pages/Games/Bully-Scholarship';
import BusSimulator from './pages/Games/Bus-Simulator';

import CallOfCthulhu from './pages/Games/Call-of-Cthulhu';
import CallistoProtocol from './pages/Games/Callisto-Protocol';
import CatsOrganized from './pages/Games/Cats-Organized';
import Celeste from './pages/Games/Celeste';
import ChooChooCharles from './pages/Games/Choo-Choo-Charles';
import ClubhouseGames51 from './pages/Games/Clubhouse-Games-51';
import ContrabandPolice from './pages/Games/Contraband-Police';
import CookieAndCream from './pages/Games/Cookie-and-Cream';
import CookieRunKingdom from './pages/Games/Cookie-Run-Kingdom';
import CookingSimulator from './pages/Games/Cooking-Simulator';
import Core from './pages/Games/Core';
import Crash4 from './pages/Games/Crash-4';
import CrazyTaxi from './pages/Games/Crazy-Taxi';
import CCFFVII from './pages/Games/CC-FFVII';
import CCFFVIIR from './pages/Games/CC-FFVII-Reunion';
import CultLamb from './pages/Games/Cult-of-the-Lamb';
import Cuphead from './pages/Games/Cuphead';
import Cyberpunk from './pages/Games/Cyberpunk-2077';

import DarkDeception from './pages/Games/Dark-Deception';
import Darq from './pages/Games/Darq';
import DBD from './pages/Games/Dead-by-Daylight';
import DeadSpace from './pages/Games/Dead-Space';
import DeadSpace3 from './pages/Games/Dead-Space-3';
import Deathloop from './pages/Games/Deathloop';
import Deltarune from './pages/Games/Deltarune';
import Devour from './pages/Games/Devour';
import DiabloII from './pages/Games/Diablo-II';
import DiabloIV from './pages/Games/Diablo-IV';
import DJMax from './pages/Games/DJMax-Respect';
import DMC3 from './pages/Games/DMC3';
import DMC4 from './pages/Games/DMC4';
import DMC5 from './pages/Games/DMC5';
import DontStarve from './pages/Games/Dont-Starve';
import DoomEternal from './pages/Games/Doom-Eternal';
import DQTreasures from './pages/Games/DQ-Treasures';
import Drawing from './pages/Games/Drawing';
import Dredge from './pages/Games/Dredge';
import Duolingo from './pages/Games/Duolingo';
import DyingLight from './pages/Games/Dying-Light';

import EarthBound from './pages/Games/EarthBound';
import EDF5 from './pages/Games/EDF5';
import EldenRing from './pages/Games/Elden-Ring';
import EnderLilies from './pages/Games/Ender-Lilies';
import EscapeSimulator from './pages/Games/Escape-Simulator';
import EuroTruck2 from './pages/Games/Euro-Truck-2';
import Everhood from './pages/Games/Everhood';

import FaithTrinity from './pages/Games/Faith-Trinity';
import FallGuys from './pages/Games/Fall-Guys';
import NewVegas from './pages/Games/Fallout-New-Vegas';
import FEThreeHouses from './pages/Games/FE-Three-Houses';
import FEEngage from './pages/Games/FE-Engage';
import FIFA23 from './pages/Games/FIFA-23';
import FightCrab from './pages/Games/Fight-Crab';
import FFVII from './pages/Games/FF-VII';
import FFVIIRemake from './pages/Games/FF-VII-Remake';
import FFXIV from './pages/Games/FF-XIV';
import FFXVI from './pages/Games/FF-XVI';
import Forewarned from './pages/Games/Forewarned';
import Fortnite from './pages/Games/Fortnite';
import FNF from './pages/Games/Friday-Night-Funkin';
import Frostpunk from './pages/Games/Frostpunk';
import Furi from './pages/Games/Furi';

import GarticPhone from './pages/Games/Gartic-Phone';
import GenitalJousting from './pages/Games/Genital-Jousting';
import GeoGuessr from './pages/Games/GeoGuessr';
import GettingOverIt from './pages/Games/Getting-Over-It';
import Glover from './pages/Games/Glover';
import Gorn from './pages/Games/Gorn';
import GolfIt from './pages/Games/Golf-It';
import GTAIV from './pages/Games/GTA-IV';
import GTAV from './pages/Games/GTA-V';
import Grime from './pages/Games/Grime';
import GrooveCoaster from './pages/Games/Groove-Coaster';
import GGXrd from './pages/Games/Guilty-Gear-Xrd';
import GuiltyGearStrive from './pages/Games/Guilty-Gear-Strive';
import GundamEvolution from './pages/Games/GundamEvolution';




























































































// HoloJP
import TalentJP from './pages/talent-jp';
import Sora from './pages/Talents/JP/Tokino-Sora';
import Roboco from './pages/Talents/JP/Roboco-san';
import Mel from './pages/Talents/JP/Yozora-Mel';
import Aki from './pages/Talents/JP/Aki-Rosenthal';
import Haato from './pages/Talents/JP/Akai-Haato';
import Fubuki from './pages/Talents/JP/Shirakami-Fubuki';
import Matsuri from './pages/Talents/JP/Natsuiro-Matsuri';
import Aqua from './pages/Talents/JP/Minato-Aqua';
import Shion from './pages/Talents/JP/Murasaki-Shion';
import Ayame from './pages/Talents/JP/Nakiri-Ayame';
import Choco from './pages/Talents/JP/Yuzuki-Choco';
import Subaru from './pages/Talents/JP/Oozora-Subaru';
import AZKi from './pages/Talents/JP/AZKi';
import Mio from './pages/Talents/JP/Ookami-Mio';
import Miko from './pages/Talents/JP/Sakura-Miko';
import Okayu from './pages/Talents/JP/Nekomata-Okayu';
import Korone from './pages/Talents/JP/Inugami-Korone';
import Suisei from './pages/Talents/JP/Hoshimachi-Suisei';
import Pekora from './pages/Talents/JP/Usada-Pekora';
import Flare from './pages/Talents/JP/Shiranui-Flare';
import Noel from './pages/Talents/JP/Shirogane-Noel';
import Marine from './pages/Talents/JP/Houshou-Marine';
import Kanata from './pages/Talents/JP/Amane-Kanata';
import Watame from './pages/Talents/JP/Tsunomaki-Watame';
import Towa from './pages/Talents/JP/Tokoyami-Towa';
import Luna from './pages/Talents/JP/Himemori-Luna';
import Lamy from './pages/Talents/JP/Yukihana-Lamy';
import Nene from './pages/Talents/JP/Momosuzu-Nene';
import Coco from './pages/Talents/JP/Kiryu-Coco';
import Botan from './pages/Talents/JP/Shishiro-Botan';
import Polka from './pages/Talents/JP/Omaru-Polka';
import Laplus from './pages/Talents/JP/Laplus-Darkness';
import Lui from './pages/Talents/JP/Takane-Lui';
import Koyori from './pages/Talents/JP/Hakui-Koyori';
import Chloe from './pages/Talents/JP/Sakamata-Chloe';
import Iroha from './pages/Talents/JP/Kazama-Iroha';

// HoloEN
import TalentEN from './pages/talent-en';
import Calliope from './pages/Talents/EN/Mori-Calliope';
import Amelia from './pages/Talents/EN/Watson-Amelia';
import Kiara from './pages/Talents/EN/Takanashi-Kiara';
import Gura from './pages/Talents/EN/Gawr-Gura';
import Ina from './pages/Talents/EN/Ninomae-Inanis';
import IRyS from './pages/Talents/EN/IRyS';
import Fauna from './pages/Talents/EN/Ceres-Fauna';
import Sana from './pages/Talents/EN/Tsukumo-Sana';
import Kronii from './pages/Talents/EN/Ouro-Kronii';
import Mumei from './pages/Talents/EN/Nanashi-Mumei';
import Baelz from './pages/Talents/EN/Hakos-Baelz';
import Shiori from './pages/Talents/EN/Novella-Shiori';
import Bijou from './pages/Talents/EN/Koseki-Bijou';
import Nerissa from './pages/Talents/EN/Ravencroft-Nerissa';
import FUWAMOCO from './pages/Talents/EN/FUWAMOCO';

// #region HoloID imports
import TalentID from './pages/talent-id';
import Risu from './pages/Talents/ID/Ayunda-Risu';
import Iofi from './pages/Talents/ID/Airani-Iofifteen';
import Moona from './pages/Talents/ID/Moona-Hoshinova';
import Ollie from './pages/Talents/ID/Kureiji-Ollie';
import Anya from './pages/Talents/ID/Anya-Melfissa';
import Reine from './pages/Talents/ID/Pavolia-Reine';
import Zeta from './pages/Talents/ID/Vestia-Zeta';
import Kaela from './pages/Talents/ID/Kaela-Kovalskia';
import Kobo from './pages/Talents/ID/Kobo-Kanaeru';
// #endregion

function App() {
  return (
    <div>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='Games' element={<Games/>}/>
      <Route path='HoloEN' element={<TalentEN />}/>
      <Route path='HoloJP' element={<TalentJP />}/>
      <Route path='HoloID' element={<TalentID />}/>

      {/* EN */}
      <Route path='Mori-Calliope' element={<Calliope />}/>
      <Route path='Watson-Amelia' element={<Amelia />}/>
      <Route path='Gawr-Gura' element={<Gura />}/>
      <Route path='Takanashi-Kiara' element={<Kiara />}/>
      <Route path='Ninomae-Inanis' element={<Ina />}/>
      <Route path='IRyS' element={<IRyS />}/>
      <Route path='Ceres-Fauna' element={<Fauna />}/>
      <Route path='Nanashi-Mumei' element={<Mumei />}/>
      <Route path='Ouro-Kronii' element={<Kronii />}/>
      <Route path='Tsukumo-Sana' element={<Sana />}/>
      <Route path='Hakos-Baelz' element={<Baelz />}/>
      <Route path='Novella-Shiori' element={<Shiori />}/>
      <Route path='Koseki-Bijou' element={<Bijou />}/>
      <Route path='Ravencroft-Nerissa' element={<Nerissa />}/>
      <Route path='FUWAMOCO' element={<FUWAMOCO />}/>


      {/* JP */}
      <Route path='Tokino-Sora' element={<Sora />}/>
      <Route path='Roboco-san' element={<Roboco />}/>
      <Route path='Yozora-Mel' element={<Mel />}/>
      <Route path='Aki-Rosenthal' element={<Aki />}/>
      <Route path='Akai-Haato' element={<Haato />}/>
      <Route path='Shirakami-Fubuki' element={<Fubuki />}/>
      <Route path='Natsuiro-Matsuri' element={<Matsuri />}/>
      <Route path='Minato-Aqua' element={<Aqua />}/>
      <Route path='Murasaki-Shion' element={<Shion />}/>
      <Route path='Nakiri-Ayame' element={<Ayame />}/>
      <Route path='Yuzuki-Choco' element={<Choco />}/>
      <Route path='Oozora-Subaru' element={<Subaru />}/>
      <Route path='AZKi' element={<AZKi />}/>
      <Route path='Ookami-Mio' element={<Mio />}/>
      <Route path='Sakura-Miko' element={<Miko />}/>
      <Route path='Nekomata-Okayu' element={<Okayu />}/>
      <Route path='Inugami-Korone' element={<Korone />}/>
      <Route path='Hoshimachi-Suisei' element={<Suisei />}/>
      <Route path='Usada-Pekora' element={<Pekora />}/>
      <Route path='Shiranui-Flare' element={<Flare />}/>
      <Route path='Shirogane-Noel' element={<Noel />}/>
      <Route path='Houshou-Marine' element={<Marine />}/>
      <Route path='Amane-Kanata' element={<Kanata />}/>
      <Route path='Tsunomaki-Watame' element={<Watame />}/>
      <Route path='Tokoyami-Towa' element={<Towa />}/>
      <Route path='Himemori-Luna' element={<Luna />}/>
      <Route path='Kiryu-Coco' element={<Coco />}/>
      <Route path='Yukihana-Lamy' element={<Lamy />}/>
      <Route path='Momosuzu-Nene' element={<Nene />}/>
      <Route path='Shishiro-Botan' element={<Botan />}/>
      <Route path='Omaru-Polka' element={<Polka />}/>
      <Route path='Laplus-Darknesss' element={<Laplus />}/>
      <Route path='Takane-Lui' element={<Lui />}/>
      <Route path='Hakui-Koyori' element={<Koyori />}/>
      <Route path='Sakamata-Chloe' element={<Chloe />}/>
      <Route path='Kazama-Iroha' element={<Iroha />}/>


      {/* ID */}
      <Route path="Ayunda-Risu" element={<Risu />}/>
      <Route path="Moona-Hoshinova" element={<Moona />}/>
      <Route path="Airani-Iofifteen" element={<Iofi />}/>
      <Route path="Kureiji-Ollie" element={<Ollie />}/>
      <Route path="Anya-Melfissa" element={<Anya />}/>
      <Route path="Pavolia-Reine" element={<Reine />}/>
      <Route path="Vestia-Zeta" element={<Zeta />}/>
      <Route path="Kaela-Kovalskia" element={<Kaela />}/>
      <Route path="Kobo-Kanaeru" element={<Kobo />}/>

      {/* DEV_IS */}
      {/* <Route path='Hiodoshi-Ao' element={<Ao />}/>
      <Route path='Otonose-Kanade' element={<Kanade />}/>
      <Route path='Ichijou-Ririka' element={<Ririka />}/>
      <Route path='Juufuutei-Raden' element={<Raden />}/>
      <Route path='Todoroki-Hajime' element={<Hajime />}/> */}

      {/* Games */}
        <Route path='Doom-Eternal' element={<DoomEternal />}/>
       <Route path='Bloodborne' element={<Bloodborne />}/>
       <Route path='EarthBound' element={<EarthBound />}/>
       <Route path='Elden-Ring' element={<EldenRing />}/>
       <Route path='FFVII' element={<FFVII />}/>
       <Route path='FFVII-CC' element={<CCFFVII />}/>
       <Route path='FFVII-Remake' element={<FFVIIRemake />}/>
       <Route path='FFXVI' element={<FFXVI />}/>
       <Route path='FFVII-CC-Reunion' element={<CCFFVIIR />}/>
      <Route path= '12-Minutes' element={<TwelveMinutes />} />
       {/* <Route path='Live-A-Live' element={<LiveALive />}/>
       <Route path='Links-Awakening' element={<LinksAwakening />}/>
       <Route path='Majoras-Mask' element={<MajorasMask />}/>
       <Route path='Ocarina-of-Time' element={<OcarinaOfTime />}/>
       <Route path='Skyward-Sword-HD' element={<SkywardSword />}/>
       <Route path='Twilight-Princess-HD' element={<TwilightPrincess />}/>
       <Route path='Wind-Waker-HD' element={<WindWaker />}/>
       <Route path='Mad-Father' element={<MadFather />}/>
       <Route path='Minecraft' element={<Minecraft />}/>
       <Route path='Overcooked-2' element={<Overcooked2 />}/>
       <Route path='Persona-3-Portable' element={<Persona3P />}/>
       <Route path='Persona-4-Golden' element={<Persona4G />}/>
       <Route path='Persona-5-Royal' element={<Persona5R />}/>
       <Route path='Pokemon-BDSP' element={<PokemonBDSP />}/>
       <Route path='Pokemon-Legends-Arceus' element={<PokemonLA />}/>
       <Route path='Pokemon-SV' element={<PokemonSV />}/>
       <Route path='Jump-King' element={<JumpKing />}/> */}

       {/* not added */}
       {/* 

              <Route path= 'A-Way-Out' element={<AWayOut />} />
              <Route path= 'Animal-Crossing-NH' element={<AnimalCrossingNH />} />
              <Route path= 'Cookie-and-Cream' element={<CookieAndCream />} />
              <Route path= 'Alice-Fiction' element={<AliceFiction />} />
              <Route path= 'Alice-Madness' element={<AliceMadness />} />
              <Route path= 'Amnesia-The-Bunker' element={<AmnesiaTheBunker />} />
              <Route path= 'Amnesia-Dark-Descent' element={<AmnesiaDarkDescent />} />
              <Route path= 'Amnesia-Rebirth' element={<AmnesiaRebirth />} />
              <Route path= 'Among-The-Sleep' element={<AmongTheSleep />} />
              <Route path= 'Among-Us' element={<AmongUs />} />
              <Route path= 'Antichamber' element={<Antichamber />} />
              <Route path= 'Ao-Oni' element={<AoOni />} />
              <Route path= 'Apex-Legends' element={<ApexLegends />} />
              <Route path= 'Apotheon' element={<Apotheon />} />
              <Route path= 'Ark-Survival' element={<ArkSurvival />} />
              <Route path= 'Armored-Core-VI' element={<ArmoredCoreVI />} />
              <Route path= 'Assassins-Creed-IV' element={<AssassinsIV />} />
              <Route path= 'Assetto-Corsa' element={<AssettoCorsa />} />
              <Route path= 'Backrooms-1998' element={<backrooms1998 />} />
              <Route path= 'Baldis-Basics' element={<Baldi />} />
              <Route path= 'Baldurs-Gate-3' element={<BaldursGate3 />} />
              <Route path= 'Bang-Dream-Girls-Band' element={<BandDreamGirls />} />
              <Route path= 'Bastion' element={<Bastion />} />
              <Route path= 'Bayonetta' element={<Bayonetta />} />
              <Route path= 'Bayonetta-2' element={<Bayonetta2 />} />
              <Route path= 'Bayonetta-3' element={<Bayonetta3 />} />
              <Route path= 'BattleBlock-Theater' element={<BattleBlockTheater />} />
              <Route path= 'Big-Brain-vs-Brain' element={<BigBrainAca />} />
              <Route path= 'BioShock' element={<BioShock />} />
              <Route path= 'Biped' element={<Biped />} />
              <Route path= 'Black-Mesa' element={<BlackMesa />} />
              <Route path= 'Blasphemous' element={<Blasphemous />} />
              <Route path= 'Blasphemous-2' element={<Blasphemous2 />} />
              <Route path= 'Blazing-Sails' element={<BlazingSails />} />
              <Route path= 'Bloodborne' element={<Bloodborne />} />
              <Route path= 'Bloodstained-Ritual' element={<BloodstainedRitual />} />
              <Route path= 'Blue-Archive' element={<BlueArchive />} />
              <Route path= 'BPM' element={<BPM />} />
              <Route path= 'Bread-and-Fred' element={<BreadAndFred />} />
              <Route path= 'Bully-Scholarship' element={<Bully />} />
              <Route path= 'Bus-Simulator' element={<BusSimulator />} />
              <Route path= 'Call-of-Cthulhu' element={<CallOfCthulhu />} />
              <Route path= 'Callisto-Protocol' element={<CallistoProtocol />} />
              <Route path= 'Cats-Organized' element={<CatsOrganized />} />
              <Route path= 'Celeste' element={<Celeste />} />
              <Route path= 'Choo-Choo-Charles' element={<ChooChooCharles />} />
              <Route path= 'Clubhouse-Games-51' element={<ClubhouseGames51 />} />
              <Route path= 'Contraband-Police' element={<ContrabandPolice />} />
              <Route path= 'Cookie-Run-Kingdom' element={<CookieRunKingdom />} />
              <Route path= 'Cooking-Simulator' element={<CookingSimulator />} />
              <Route path= 'Core' element={<Core />} />
              <Route path= 'Crash-4' element={<Crash4 />} />
              <Route path= 'Crazy-Taxi' element={<CrazyTaxi />} />
              <Route path= 'CC-FFVII' element={<CCFFVII />} />
              <Route path= 'CC-FFVII-Reunion' element={<CCFFVIIR />} />
              <Route path= 'NecroDancer' element={<NecroDancer />} />
              <Route path= 'Cult-of-the-Lamb' element={<CultLamb />} />
              <Route path= 'Cuphead' element={<Cuphead />} />
              <Route path= 'Cyberpunk-2077' element={<Cyberpunk />} />
              <Route path= 'Dark-Deception' element={<DarkDeception />} />
              <Route path= 'Darq' element={<Darq />} />
              <Route path= 'Dead-by-Daylight' element={<DBD />} />
              <Route path= 'Dead-Space' element={<DeadSpace />} />
              <Route path= 'Dead-Space-3' element={<DeadSpace3 />} />
              <Route path= 'Deathloop' element={<Deathloop />} />
              <Route path= 'Deltarune' element={<Deltarune />} />
              <Route path= 'Devour' element={<Devour />} />
              <Route path= 'Diablo-II' element={<DiabloII />} />
              <Route path= 'Diablo-IV' element={<DiabloIV />} />
              <Route path= 'DJMax-Respect' element={<DJMax />} />
              <Route path= 'DMC3' element={<DMC3 />} />
              <Route path= 'DMC4' element={<DMC4 />} />
              <Route path= 'DMC5' element={<DMC5 />} />
              <Route path= 'Dont-Starve' element={<DontStarve />} />
              <Route path= 'Doom-Eternal' element={<Doom-Eternal />} />
              <Route path= 'DQ-Treasures' element={<DQTreasures />} />
              <Route path= 'Drawing' element={<Drawing />} />
              <Route path= 'Dredge' element={<Dredge />} />
              <Route path= 'Duolingo' element={<Duolingo />} />
              <Route path= 'Dying-Light' element={<DyingLight />} />
              <Route path= 'EarthBound' element={<EarthBound />} />
              <Route path= 'EDF5' element={<EDF5 />} />
              <Route path= 'Elden-Ring' element={<EldenRing />} />
              <Route path= 'Ender-Lilies' element={<EnderLilies />} />
              <Route path= 'Escape-Simulator' element={<EscapeSimulator />} />
              <Route path= 'Euro-Truck-2' element={<EuroTruck2 />} />
              <Route path= 'Everhood' element={<Everhood />} />
              <Route path= 'Faith-Trinity' element={<FaithTrinity />} />
              <Route path= 'Fall-Guys' element={<FallGuys />} />
              <Route path= 'Fallout-New-Vegas' element={<NewVegas />} />
              <Route path= 'FE-Three-Houses' element={<FEThreeHouses />} />
              <Route path= 'FE-Engage' element={<FEEngage />} />
              <Route path= 'FIFA-23' element={<FIFA23 />} />
              <Route path= 'Fight-Crab' element={<FightCrab />} />
              <Route path= 'FF-VII' element={<FFVII />} />
              <Route path= 'FF-VII-Remake' element={<FFVIIRemake />} />
              <Route path= 'FF-XIV' element={<FFXIV />} />
              <Route path= 'FF-XVI' element={<FFXVI />} />
              <Route path= 'Forewarned' element={<Forewarned />} />
              <Route path= 'Fortnite' element={<Fortnite />} />
              <Route path= 'Friday-Night-Funkin' element={<FNF />} />
              <Route path= 'Frostpunk' element={<Frostpunk />} />
              <Route path= 'Furi' element={<Furi />} />
              <Route path= 'Gartic-Phone' element={<GarticPhone />} />
              <Route path= 'Genital-Jousting' element={<GenitalJousting />} />
              <Route path= 'GeoGuessr' element={<GeoGuessr />} />
              <Route path= 'Getting-Over-It' element={<GettingOverIt />} />
              <Route path= 'Glover' element={<Glover />} />
              <Route path= 'Gorn' element={<Gorn />} />
              <Route path= 'Golf-It' element={<GolfIt />} />
              <Route path= 'GTA-IV' element={<GTAIV />} />
              <Route path= 'GTA-V' element={<GTAV />} />
              <Route path= 'Grime' element={<Grime />} />
              <Route path= 'Groove-Coaster' element={<GrooveCoaster />} />
              <Route path= 'Guilty-Gear-Xrd' element={<GGXrd />} />
              <Route path= 'Guilty-Gear-Strive' element={<GuiltyGearStrive />} />
              <Route path= 'GundamEvolution' element={<GundamEvolution />} />
              <Route path= 'Hades' element={<Hades />} />
              <Route path= 'Half-Life-2' element={<HalfLife2 />} />
              <Route path= 'Halo-Combat-Evolved' element={<Halo />} />
              <Route path= 'Happys-Humble-Burger-Barn' element={<HappysBurger />} />
              <Route path= 'Hatsune-Miku-Colorful-Stage' element={<MikuColorful />} />
              <Route path= 'Hatsune-Miku-Mega' element={<MikuMega />} />
              <Route path= 'Henry-Stickmin' element={<HenryStickmin />} />
              <Route path= 'Here-Comes-Niko' element={<HereComesNiko />} />
              <Route path= 'Hitman-WoA' element={<HitmanWoA />} />
              <Route path= 'Hollow-Knight' element={<HollowKnight />} />
              <Route path= 'Holocure' element={<Holocure />} />
              <Route path= 'Hotline-Miami' element={<HotlineMiami />} />
              <Route path= 'Hotline-Miami-2' element={<HotlineMiami2 />} />

       */}
       
















      </Routes>
    </div>
  );
  }
export default App;
