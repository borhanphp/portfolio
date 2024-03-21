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
                .to( boxes[7], { x: 300, y: 50, opacity: 0.9 } )
                .to( boxes[8], { x: -300, y: 50, opacity: 0.9 } )
                .to( boxes[9], { y: 10, opacity: 0.9 } )
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

            <div className="border-b-[1px] p-48">
                {/* <main>
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
                </main> */}

                <div className='w-50'>
                    <div className='text-9xl text-center'>Welcome to <span className="text-[#148c91]">Invisible</span></div>
                    <div className='text-9xl text-center'>Where Great Idea Speaks Louder in Silence!</div>


                </div>
                {/* <div className='text-center w-50'>
                    <button
                        className='bg-slate-500 p-2 text-white' onClick={toggleTimeline}>Lets Explore the Idea</button>
                </div> */}
            </div>

        </>
    )
}

export default HeroSection