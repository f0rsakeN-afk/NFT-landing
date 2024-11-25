import React from 'react'
import { Card } from './ui/card'

interface EngageDataTypes {
    index: string
    text: string
}

const data: EngageDataTypes[] = [{
    index: '01',
    text: 'Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allows genuine fans to buy into their market.'
}, {
    index: '02',
    text: 'NFT gives all the power to creators. Anyone upcoming artiste can do their stuff on-chain, making them more independent and freeing them from unfavorable deals from record labels. '
}, {
    index: '03',
    text: 'A positive NFT-fueled change in the music market can upstage crypto adoption at large.'
}]

const Engage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0 py-8 max-w-6xl">
            <h1 className="text-primary text-7xl max-w-[650px] tracking-wider">Engage your
                Fans with community</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 pt-6">
                {data.map(el => (
                    <Card
                        className='text-center p-6 bg-background/50 backdrop-blur transition-colors hover:bg-gray-50 dark:hover:bg-gray-900'
                        key={el.index}>
                        <h3 className="pb-3 text-4xl font-medium text-primary ">{el.index}</h3>
                        <p className="text-sm text-muted-foreground">{el.text}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Engage