import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js';
import Footer from './pages/footer.js';
import Menu from './pages/menu.js';
import { Routes, Route } from 'react-router';

import Database from './pages/database.js';

// Games
import Games from './pages/gamesList.js';
import GameHeader from './pages/gameHeader.js';

import DoomEternal from './pages/Games/Doom-Eternal.js';

// HoloJP
import TalentJP from './pages/talent-jp.js';
import Sora from './pages/Talents/JP/Tokino-Sora.js';
import Roboco from './pages/Talents/JP/Roboco-san.js';
import Mel from './pages/Talents/JP/Yozora-Mel.js';
import Aki from './pages/Talents/JP/Aki-Rosenthal.js';
import Haato from './pages/Talents/JP/Akai-Haato.js';
import Fubuki from './pages/Talents/JP/Shirakami-Fubuki.js';
import Matsuri from './pages/Talents/JP/Natsuiro-Matsuri.js';
import Aqua from './pages/Talents/JP/Minato-Aqua.js';
import Shion from './pages/Talents/JP/Murasaki-Shion.js';
import Ayame from './pages/Talents/JP/Nakiri-Ayame.js';
import Choco from './pages/Talents/JP/Yuzuki-Choco.js';
import Subaru from './pages/Talents/JP/Oozora-Subaru.js';
import AZKi from './pages/Talents/JP/AZKi.js';
import Mio from './pages/Talents/JP/Ookami-Mio.js';
import Miko from './pages/Talents/JP/Sakura-Miko.js';
import Okayu from './pages/Talents/JP/Nekomata-Okayu.js';
import Korone from './pages/Talents/JP/Inugami-Korone.js';
import Suisei from './pages/Talents/JP/Hoshimachi-Suisei.js';
import Pekora from './pages/Talents/JP/Usada-Pekora.js';
import Flare from './pages/Talents/JP/Shiranui-Flare.js';
import Noel from './pages/Talents/JP/Shirogane-Noel.js';
import Marine from './pages/Talents/JP/Houshou-Marine.js';
import Kanata from './pages/Talents/JP/Amane-Kanata.js';
import Watame from './pages/Talents/JP/Tsunomaki-Watame.js';
import Towa from './pages/Talents/JP/Tokoyami-Towa.js';
import Luna from './pages/Talents/JP/Himemori-Luna.js';
import Lamy from './pages/Talents/JP/Yukihana-Lamy.js';
import Nene from './pages/Talents/JP/Momosuzu-Nene.js';
import Coco from './pages/Talents/JP/Kiryu-Coco.js';
import Botan from './pages/Talents/JP/Shishiro-Botan.js';
import Polka from './pages/Talents/JP/Omaru-Polka.js';
import Laplus from './pages/Talents/JP/Laplus-Darknesss.js';
import Lui from './pages/Talents/JP/Takane-Lui.js';
import Koyori from './pages/Talents/JP/Hakui-Koyori.js';
import Chloe from './pages/Talents/JP/Sakamata-Chloe.js';
import Iroha from './pages/Talents/JP/Kazama-Iroha.js';

// HoloEN
import TalentEN from './pages/talent-en.js';
import Calliope from './pages/Talents/EN/Mori-Calliope.js';
import Amelia from './pages/Talents/EN/Watson-Amelia.js';
import Kiara from './pages/Talents/EN/Takanashi-Kiara.js';
import Gura from './pages/Talents/EN/Gawr-Gura.js';
import Ina from './pages/Talents/EN/Ninomae-Inanis.js';
import IRyS from './pages/Talents/EN/IRyS.js';
import Fauna from './pages/Talents/EN/Ceres-Fauna.js';
import Sana from './pages/Talents/EN/Tsukumo-Sana.js';
import Kronii from './pages/Talents/EN/Ouro-Kronii.js';
import Mumei from './pages/Talents/EN/Nanashi-Mumei.js';
import Baelz from './pages/Talents/EN/Hakos-Baelz.js';
import Shiori from './pages/Talents/EN/Novella-Shiori.js';
import Bijou from './pages/Talents/EN/Koseki-Bijou.js';
import Nerissa from './pages/Talents/EN/Ravencroft-Nerissa.js';
import FUWAMOCO from './pages/Talents/EN/FUWAMOCO.js';

// #region HoloID imports
import TalentID from './pages/talent-id.js';
import Risu from './pages/Talents/ID/Ayunda-Risu.js';
import Iofi from './pages/Talents/ID/Airani-Iofifteen.js';
import Moona from './pages/Talents/ID/Moona-Hoshinova.js';
import Ollie from './pages/Talents/ID/Kureiji-Ollie.js';
import Anya from './pages/Talents/ID/Anya-Melfissa.js';
import Reine from './pages/Talents/ID/Pavolia-Reine.js';
import Zeta from './pages/Talents/ID/Vestia-Zeta.js';
import Kaela from './pages/Talents/ID/Kaela-Kovalskia.js';
import Kobo from './pages/Talents/ID/Kobo-Kanaeru.js';
// #endregion

//require('dotenv').config();

function App() {
  return (
    <div>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='Database' element={<Database />}/>
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
