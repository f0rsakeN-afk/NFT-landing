import React from 'react'
import r7 from '../assets/r7.png'
import how from '../assets/how.png'
import { useTheme } from '@/context/ThemeProvider'
import { cn } from '@/lib/utils'

const HowItWorks: React.FC = () => {
    const { theme } = useTheme()
    return (
        <div className='container mx-auto max-w-6xl py-8 px-4 lg:px-0'>
            <div className="grid md:grid-cols-2 gap-2">
                <div className="order-last md:order-first flex flex-col items-center justify-center">
                    <h2 className="pb-2 text-7xl  text-primary">How do music NFTs work?</h2>
                    <p className="text-muted-foreground text-sm">NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p></div>
                <div className="flex items-center justify-center relative">
                    <img src={how} alt="how image" className='w-[350px]' />
                    <img src={r7} alt="reactangle image" className={cn('absolute h-[250px] right-0 top-4 lg:h-[250px] lg:right-20 lg:top-4', theme === 'light' ? 'invert' : 'invert-0')} />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks