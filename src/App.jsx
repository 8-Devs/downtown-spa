import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Menopause from './pages/Menopause.jsx'
import Wellness from './pages/Wellness.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Testimonials from './pages/Testimonials.jsx'
import GiftCards from './pages/GiftCards.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menopause" element={<Menopause />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
