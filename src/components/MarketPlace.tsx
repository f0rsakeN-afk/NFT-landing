import React from 'react'
import { useTheme } from '@/context/ThemeProvider'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { CardContent } from './ui/card'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import re from '../assets/re.png'
import solana from '../assets/solanalogo.png'

const MarketPlace: React.FC = () => {
    const { theme } = useTheme();
    return (
        <div className='container mx-auto max-w-6xl py-8 px-4 lg:px-0'>
            <div className="grid lg:grid-cols-2 space-y-4 gap-2 items-center ">
                <div className=" relative">

                    <div className="relative">
                        <CardContent >
                            <img src={re} alt="rectangle image" className={cn('absolute h-[200px] left-2 top-20', theme === 'light' ? 'invert' : 'invert-0 ')} />
                            <img src={m1} alt="marketplace image" className='transform transition ease-linear duration-500 hover:scale-110' />
                            <h2 className="py-2 font-medium">Rap Music</h2>
                            <span className="flex items-center gap-1"><img src={solana} alt="solana image" className={cn('', theme === 'light' ? 'invert' : 'invert-0')} /> 0.3234</span>
                        </CardContent>
                    </div>
                    <div className="relative md:ml-16 mt-6 md:mt-4">
                        <CardContent >
                            <img src={re} alt="rectangle image" className={cn('absolute h-[200px] left-2 top-20', theme === 'light' ? 'invert' : 'invert-0 ')} />
                            <img src={m2} alt="marketplace image" className='transform transition ease-linear duration-500 hover:scale-110' />
                            <h2 className="py-2 font-medium">Rap Music</h2>
                            <span className="flex items-center gap-1"><img src={solana} alt="solana image" className={cn('', theme === 'light' ? 'invert' : 'invert-0')} /> 0.3234</span>
                        </CardContent>
                    </div>
                    <div className="absolute  flex space-y-6 flex-col top-6 right-0 md:top-4 md:right-8">
                        <CardContent >
                            <img src={re} alt="rectangle image" className={cn('absolute h-[200px] left-2 top-20', theme === 'light' ? 'invert' : 'invert-0 ')} />
                            <img src={m3} alt="marketplace image" className='transform transition ease-linear duration-500 hover:scale-110' />
                            <h2 className="py-2 font-medium">Rap Music</h2>
                            <span className="flex items-center gap-1"><img src={solana} alt="solana image" className={cn('', theme === 'light' ? 'invert' : 'invert-0')} /> 0.3234</span>
                        </CardContent>
                        <CardContent >
                            <img src={re} alt="rectangle image" className={cn('absolute h-[200px] left-2 top-96', theme === 'light' ? 'invert' : 'invert-0 ')} />
                            <img src={m4} alt="marketplace image" className='transform transition ease-linear duration-500 hover:scale-110' />
                            <h2 className="py-2 font-medium">Rap Music</h2>
                            <span className="flex items-center gap-1"><img src={solana} alt="solana image" className={cn('', theme === 'light' ? 'invert' : 'invert-0')} /> 0.3234</span>
                        </CardContent>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-primary text-6xl md:text-7xl pb-2 ">Music NFT MarketPlace</h2>
                    <p className="text-muted-foreground text-sm pb-5">Create your first music NFTs with NFT market for musicians. Create music and music videos just under the $1, the platform works with BSC blockchain and supports mp4. With AirNFTs, you are getting the control over your NFTs, no middle man cutting your sales. Create, Buy, Sell and Earn with your music NFTs.</p>
                    <Button variant='outline' className='flex items-center justify-center'>Explore Marketplace <ChevronRight /></Button>
                </div>
            </div>

        </div>
    )
}

export default MarketPlace