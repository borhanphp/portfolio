"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
    const container = useRef();
    const tl = useRef();

    const toggleTimeline = () => {
        tl.current.reversed( !tl.current.reversed() );
    };

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray( '.box' );
            tl.current = gsap
                .timeline()
                .to( boxes[1], { x: 100 } )
                .to( boxes[0], { x: -100 }, '<' )
                .to( boxes[2], { y: -166, opacity: 0.9 } )
                .to( boxes[3], { x: 300, y: -210, opacity: 0.9 } )
                .to( boxes[4], { x: -300, y: -260, opacity: 0.9 } )
                .to( boxes[5], { x: -500, y: -190, opacity: 0.9 } )
                .to( boxes[6], { x: 500, y: -235, opacity: 0.9 } )
                .to( boxes[7], { x: 300, y: -166, opacity: 0.9 } )
                .to( boxes[8], { x: -300, y: -206, opacity: 0.9 } )
                .to( boxes[9], { y: -300, opacity: 0.9 } )
                .reverse();
        },
        { scope: container }
    );

    useEffect( () => {
        const interval = setInterval( () => {
            toggleTimeline();
        }, 5000 );
        return () => clearInterval( interval );
    }, [] );

    return (
        <>

            <div className="border py-48">
                <main>
                    <section className="boxes-container text-center" ref={container}>

                        <div className='flex items-center justify-center gap-5'>
                            <div className="box gradient-blue text-4xl">Next.js</div>
                            <div className="box gradient-blue text-4xl">React.js</div>
                        </div>
                        <div className=''>
                            <div className="box gradient-blue text-5xl opacity-0">JavaScript</div>
                            <div className="box gradient-blue text-5xl opacity-0">Mongo DB</div>
                            <div className="box gradient-blue text-5xl opacity-0">Node.js</div>
                            <div className="box gradient-blue text-5xl opacity-0">Tailwind CSS</div>
                            <div className="box gradient-blue text-5xl opacity-0">Bootstrap</div>
                            <div className="box gradient-blue text-5xl opacity-0">Express.js</div>
                            <div className="box gradient-blue text-5xl opacity-0">CSS</div>
                            <div className="box gradient-blue text-5xl opacity-0">HTML</div>
                        </div>
                    </section>
                </main>
                {/* <div className='text-center'>
                    <button className='bg-slate-500 p-2 text-white' onClick={toggleTimeline}>Explore Knowledge</button>
                </div> */}
                <div className='mt-[-350px]'>
                    <div className='text-6xl text-center'>Hello World! I am <span className="text-[#148c91]">Jhon Wick</span></div>
                    <div className='text-9xl text-center'>Welcome To My World</div>
                </div>
            </div>

        </>
    )
}

export default HeroSection