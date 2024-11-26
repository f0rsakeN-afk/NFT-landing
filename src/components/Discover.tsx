import React from 'react'
import { Badge } from './ui/badge'
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import d5 from '../assets/d5.png'
import d6 from '../assets/d6.png'
import d7 from '../assets/d7.png'
import d8 from '../assets/d8.png'
import d9 from '../assets/d9.png'
import d10 from '../assets/d10.png'
import d11 from '../assets/d11.png'
import d12 from '../assets/d12.png'
import re from '../assets/re.png'
import solanalogo from '../assets/solanalogo.png'
import { CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronRight, Play } from 'lucide-react'
import { useTheme } from '@/context/ThemeProvider'
import { cn } from '@/lib/utils'

const data: string[] = ['Rock', 'Pop', 'Jazz', 'Funk', 'Classical']

interface imageTilesProps {
    image: string
    sol: number
    tokens: number
    name: string
}

const imageTiles: imageTilesProps[] = [
    {
        image: d1,
        sol: 0.87,
        tokens: 18,
        name: "Heart and Sol 1"
    },
    {
        image: d2,
        sol: 0.71,
        tokens: 15,
        name: "Heart and Sol 2"
    },
    {
        image: d3,
        sol: 0.95,
        tokens: 6,
        name: "Heart and Sol 3"
    },
    {
        image: d4,
        sol: 0.77,
        tokens: 3,
        name: "Heart and Sol 4"
    },
    {
        image: d5,
        sol: 0.66,
        tokens: 19,
        name: "Heart and Sol 5"
    },
    {
        image: d6,
        sol: 0.59,
        tokens: 14,
        name: "Heart and Sol 6"
    },
    {
        image: d7,
        sol: 0.49,
        tokens: 17,
        name: "Heart and Sol 7"
    },
    {
        image: d8,
        sol: 0.64,
        tokens: 11,
        name: "Heart and Sol 8"
    },
    {
        image: d9,
        sol: 0.93,
        tokens: 9,
        name: "Heart and Sol 9"
    },
    {
        image: d10,
        sol: 0.51,
        tokens: 5,
        name: "Heart and Sol 10"
    },
    {
        image: d11,
        sol: 0.82,
        tokens: 2,
        name: "Heart and Sol 11"
    },
    {
        image: d12,
        sol: 0.35,
        tokens: 13,
        name: "Heart and Sol 12"
    }
];


const Discover: React.FC = () => {
    const { theme } = useTheme()
    return (
        <div className='container mx-auto max-w-6xl px-4 lg:px-0 pt-8 pb-16'>
            <section className="flex flex-col md:flex-row md:justify-between md:items-end">
                <h2 className="text-primary text-6xl">Discover Music NFT</h2>
                <div className='flex gap-2 items-center '>
                    <span className="text-sm text-muted-foreground pt-1">Music Genre</span>
                    <div className="flex gap-1 md:gap-2 mt-2">
                        {data.map((el, index) => (
                            <Badge className='cursor-pointer' key={index}>{el}</Badge>
                        ))}
                    </div>
                </div>
            </section>


            {/* imagetiles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pt-8">
                {imageTiles.map(el => (
                    <div key={el.name} className='relative p-4 md:p-0'>
                        <CardContent >
                            <img src={re} alt="rectange border" className={cn('absolute h-[350px] left-3 top-24 md:h-[350px] md:top-20 md:-left-1 lg:left-0 lg:top-12 lg:h-[350px] w-full ', theme === 'light' ? 'invert' : 'invert-0')} />
                            <img src={el.image} alt="image" className='transform duration-500 hover:scale-110 cursor-pointer transition' />
                            <div className="pt-5 flex flex-col space-y-2">
                                <h2 className="text-2xl font-semibold">{el.name}</h2>
                                <section className="flex items-center justify-between">
                                    <h3 className="flex items-center gap-1">
                                        <img src={solanalogo} alt="solana logo" className={cn('', theme === 'light' ? 'invert' : 'invert-0')} />
                                        {el.sol}
                                    </h3>
                                    <h3 className="">{el.tokens} tokens</h3>
                                </section>
                                <div className="flex items-center justify-between">
                                    <Button>Play Now <Play /></Button>
                                    <Button className='uppercase bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-700'>Buy Nft</Button>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-6">
                <Button variant='outline'>Discover More Music NFT <ChevronRight /></Button>
            </div>
        </div>
    )
}

export default Discover