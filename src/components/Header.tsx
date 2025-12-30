import { type FC } from "react"

interface HeaderProps {
    scrollToSection: (id: string) => void;
}

const nav = [
    { name: 'Про мене', id: 'hero' },
    { name: 'Портфоліо', id: 'portfolio' },
    { name: 'Послуги', id: 'services' },
    { name: 'Контакти', id: 'contact' }
]

export const Header: FC<HeaderProps> = ({scrollToSection}) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <p>Logo</p>
                <nav className="flex space-x-6">
                    {nav.map((item) => {
                        return (
                            <p key={item.id} onClick={() => scrollToSection(item.id)}>{item.name}</p>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}
