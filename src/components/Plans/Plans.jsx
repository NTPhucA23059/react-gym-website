import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className='programs-header' style={{ gap: '2rem' }}>
                <span className='stroke-text'>Ready to Start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>now withus</span>
            </div>
            {/**Pplans card */}
            <div className='plans'>
                {plansData.map((plan, index) => (
                    <div className='plan' key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>

                        <div className='features'>
                            {plan.features.map((feature, i) => (
                                <div className='feature' key={i}>
                                    <img src={whiteTick} alt='' />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div >
                            <span>See more benfits</span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Plans
