import { useEffect, useState, type FC } from "react"
import { Button } from "./ui/Button";
import type { ScrollToSectionProps } from "../types/ScrollToSection";



const nav = [
    { name: 'Про мене', id: 'hero' },
    { name: 'Портфоліо', id: 'portfolio' },
    { name: 'Послуги', id: 'services' },
    { name: 'Контакти', id: 'contact' }
]

export const Header: FC<ScrollToSectionProps> = ({ scrollToSection }) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <p>Logo</p>
                <nav className="flex space-x-6 items-center">
                    {nav.map((item) => {
                        return (
                            <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.name}</button>
                        )
                    })}
                    <Button variant="header-button" onClick={() => scrollToSection('contact')}>Contact me</Button>
                </nav>
            </div>
        </header>
    )
}
