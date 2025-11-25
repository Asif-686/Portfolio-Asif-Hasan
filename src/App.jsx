import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Particles from './components/Particles';

function App() {
    return (
        <div className="w-full overflow-x-hidden relative">
            <Particles />
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
