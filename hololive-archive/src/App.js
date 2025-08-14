import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Footer from './pages/footer';
import Menu from './pages/menu';
import { Routes, Route } from 'react-router';

// Games
import Games from './pages/gamesList';
import GameHeader from './pages/gameHeader';

import DoomEternal from './pages/Games/Doom-Eternal';

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

//require('dotenv').config();

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

      </Routes>
    </div>
  );
  }
export default App;
