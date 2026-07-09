import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Landing } from './pages/Landing';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { Perspective } from './pages/Perspective';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ExploringSynth } from './pages/work/ExploringSynth';
import { BookletDesign } from './pages/work/BookletDesign';
import { SpeechAnimation } from './pages/work/SpeechAnimation';
import { DeepFaked } from './pages/work/DeepFaked';
import { PunkPoster } from './pages/work/PunkPoster';
import { FKAExperimental } from './pages/work/FKAExperimental';
import { CasaLica } from './pages/work/CasaLica';
import { PokeyBattlePredictors } from './pages/work/PokeyBattlePredictors';
import { NatureConservatory } from './pages/work/NatureConservatory';
import { BlunitFinal } from './pages/work/BlunitFinal';
import { Head } from './components/Head';

export default function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/exploring-synth" element={<ExploringSynth />} />
        <Route path="/work/booklet-design" element={<BookletDesign />} />
        <Route path="/work/speech-animation" element={<SpeechAnimation />} />
        <Route path="/work/deepfaked" element={<DeepFaked />} />
        <Route path="/work/punk-poster" element={<PunkPoster />} />
        <Route path="/work/fka-experimental" element={<FKAExperimental />} />
        <Route path="/work/casa-lica" element={<CasaLica />} />
        <Route path="/work/pokey-battle-predictors" element={<PokeyBattlePredictors />} />
        <Route path="/work/nature-conservatory" element={<NatureConservatory />} />
        <Route path="/work/blunit-final" element={<BlunitFinal />} />
        <Route path="/services" element={<Services />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}