//rfce
import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video
                src="/videos/video-1.mp4"
                autoPlay
                loop
                muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btn"
                    btnStyle="btn--outline"
                    btnSize="btn--lg">GET STARTED</Button>
                <Button
                    className="btn"
                    btnStyle="btn--primary"
                    btnSize="btn--lg">
                        WATCH TRAILER <i className="far fa-play-circle"></i>
                    </Button>
            </div>
        </div>
    )
}

export default HeroSection;
