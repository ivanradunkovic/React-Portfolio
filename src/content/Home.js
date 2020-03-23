import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../image/ir.png';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img alt="IR" src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Ivan Radunković','I am a React developer', 'I love World of Warcraft and riding a bike']} speed={100} eraseDelay={600}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home