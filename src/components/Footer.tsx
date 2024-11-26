import React from 'react'
import { Button } from './ui/button';
import { MoveUp } from 'lucide-react';
import { Separator } from './ui/separator';
import { scrollToTop } from '@/utils';

const Footer: React.FC = () => {
    return (
        <div className="container mx-auto max-w-6xl pb-4 px-4 lg:px-0">
            <h2 className="text-3xl font-medium pb-2">Shape the NFT Music</h2>
            <div className="grid md:grid-cols-3 gap-2">
                <div className="col-span-2 flex flex-col justify-between">
                    <div className="flex h-5 items-center space-x-4 text-sm uppercase tracking-widest font-medium">
                        <div>Facebook</div>
                        <Separator orientation="vertical" />
                        <div>Instagram</div>
                        <Separator orientation="vertical" />
                        <div>X</div>
                        <Separator orientation="vertical" />
                        <div>Medium</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-muted-foreground text-sm">Privacy Policy</p>
                        <p className="text-muted-foreground text-sm">Terms & Conditions</p>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Button onClick={() => scrollToTop()} className='hidden md:flex items-center gap-1 '>
                        <MoveUp /> Back to the top
                    </Button>
                    <p className="text-muted-foreground text-sm">Copyright &copy;2025 Naresh Rajbanshi </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;