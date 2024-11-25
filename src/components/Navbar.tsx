import React from 'react'
import Logo from './Logo'
import { Wallet, Moon, Sun, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/context/ThemeProvider'
import { Switch } from './ui/switch'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

type NavbarData = {
    name: string
}

const navbarData: NavbarData[] = [
    { name: 'MarketPlace' },
    { name: 'About' },
    { name: 'Resources' },
    { name: 'FAQ' }
]

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme()
    //const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50",
            "border-b border-border",
            "bg-background/80 backdrop-blur-md",
            "supports-[backdrop-filter]:bg-background/60"
        )}>
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <Logo />

                    <div className="hidden md:flex items-center gap-6">
                        {navbarData.map((el, index) => (
                            <h2
                                key={index}
                                className={cn(
                                    "uppercase text-sm font-medium",
                                    "text-muted-foreground hover:text-foreground",
                                    "transition-colors cursor-pointer"
                                )}
                            >
                                {el.name}
                            </h2>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        {/* <SocialIcons /> */}
                        <div className="flex items-center space-x-2">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                            <Switch
                                checked={theme === 'dark'}
                                onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                aria-label="Toggle theme"
                            />
                            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                        </div>
                        <AccountConnect />
                    </div>

                    {/* Mobile menu */}
                    <div className=" flex gap-4 items-center md:hidden">
                        <Switch
                            checked={theme === 'dark'}
                            onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            aria-label="Toggle theme"
                        />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant='outline'><Menu /></Button>
                            </SheetTrigger>
                            <SheetContent>
                                <div className=" flex flex-col items-center space-y-4 h-screen justify-center">
                                    {navbarData.map((el, index) => (
                                        <h2
                                            key={index}
                                            className={cn(
                                                "uppercase text-2xl font-medium",
                                                "text-muted-foreground hover:text-foreground",
                                                "transition-colors cursor-pointer"
                                            )}
                                        >
                                            {el.name}
                                        </h2>
                                    ))}
                                </div>
                                {/*  <AccountConnect /> */}
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

/* const SocialIcons: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            {[FacebookIcon, TwitterIcon, Instagram].map((Icon, index) => (
                <Icon
                    key={index}
                    size={20}
                    className={cn(
                        "cursor-pointer",
                        "text-muted-foreground hover:text-foreground",
                        "transition-colors"
                    )}
                />
            ))}
        </div>
    )
} */

const AccountConnect: React.FC = () => {
    return (
        <Button
            variant="outline"
            size="sm"
            className={cn(
                "flex items-center gap-2",
                "hover:bg-primary hover:text-primary-foreground",
                "transition-all duration-200"
            )}
        >
            <Wallet className="h-4 w-4" />
            <span className="text-sm font-medium">Connect Wallet</span>
        </Button>
    )
}

export default Navbar