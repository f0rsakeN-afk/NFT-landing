import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

const MarketPlace: React.FC = () => {
    return (
        <div className='container mx-auto max-w-6xl py-8 px-4 lg:px-0'>
            <div className="grid md:grid-cols-2 gap-2">
                <div className="">tsx</div>
                <div className="">
                    <h2 className="text-primary text-7xl pb-2 ">Music NFT MarketPlace</h2>
                    <p className="text-muted-foreground text-sm pb-5">Create your first music NFTs with NFT market for musicians. Create music and music videos just under the $1, the platform works with BSC blockchain and supports mp4. With AirNFTs, you are getting the control over your NFTs, no middle man cutting your sales. Create, Buy, Sell and Earn with your music NFTs.</p>
                    <Button variant='outline' className='flex items-center justify-center'>Explore Marketplace <ChevronRight /></Button>
                </div>
            </div>

        </div>
    )
}

export default MarketPlace