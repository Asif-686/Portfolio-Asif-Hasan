import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Particles from './components/Particles';
import Features from './sections/Features';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Testimonial from './sections/Testimonial';
import Pricing from './sections/Pricing';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';

function App() {
    return (
        <div className="w-full overflow-x-hidden relative">
            <Particles />
            <Navbar />
            <Hero />
            <Features/>
            <Portfolio/>
            <Resume/>
            <Testimonial/>
            <Pricing/>
            <Blogs/>
            <Contact/>
            <Footer/>
            <BackToTop/>
        </div>
    );
}

export default App;
