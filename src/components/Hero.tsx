import { Globe, MoveRight } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import { useTheme } from '@/context/ThemeProvider'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Card } from './ui/card'
import HeroImage from '../assets/HeroImage.png'
import Solana from '../assets/solana.png'

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className='container mx-auto max-w-6xl pt-32 lg:pt-44 px-4 lg:px-0 pb-16'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="col-span-2 space-y-4 lg:space-y-8 px-4 md:px-0">
                    <div className=" space-y-2 lg:space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-primary via-purple-800 to-blue-500 bg-clip-text text-transparent">
                                Music for NFT
                            </span>
                            <br />
                            <span className="text-foreground">creators.</span>
                        </h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground/90">
                            Digital Music for fans.
                        </h2>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                        Music NFTs will continue to revolutionize the way that artists and fans create community together
                        as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <Card className="flex items-center gap-6 p-4 bg-background/50 backdrop-blur">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Powered By
                                </span>
                                <img
                                    src={Solana}
                                    alt="solana-image"
                                    className={cn('h-3 object-contain', theme === 'light' ? 'invert' : 'invert-0')}
                                />
                            </div>
                            <div className="h-12 w-[1px] bg-border" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-foreground">10K+</span>
                                <span className="text-sm text-muted-foreground">
                                    Artists
                                </span>
                            </div>
                        </Card>

                        <Button
                            size="lg"
                            className="group text-base px-8 py-6"
                        >
                            Discover More
                            <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative col-span-1 order-first lg:order-last">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-muted/20 rounded-full blur-3xl -z-10" />
                    <div className="relative group">
                        <div className="absolute -inset-2   bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <Card className="p-0 overflow-hidden">
                            <img
                                src={HeroImage}
                                alt='hero image'
                                className="w-full h-[400px] sm:h-[450px] md:h-[600px] lg:h-[500px] object-cover transform transition duration-500 group-hover:scale-[1.02]"
                            />
                        </Card>

                        {/* Floating Bid Card */}
                        <Card className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm p-4 w-auto sm:w-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-primary via-amber-400 to-purple-600" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Current Bid</h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground">2.5 SOL</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
                {[
                    { label: 'Artwork', value: '25K+' },
                    { label: 'Artists', value: '10K+' },
                    { label: 'Auction', value: '99K+' },
                    { label: 'Artists Revenue', value: '4M+' }
                ].map((stat, index) => (
                    <Card
                        key={index}
                        className="text-center p-6 bg-background/50 backdrop-blur transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                        <h3 className="text-3xl font-bold text-foreground">
                            {stat.value}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </Card>
                ))}
            </div>
            <Marquee pauseOnHover className='mt-4 py-1 border-y-2'>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
                <h2 className="flex items-center gap-2 text-muted-foreground">NEW WAY TO REACH THE NEW FAN<Globe /></h2>
            </Marquee>
        </div>
    )
}

export default Hero