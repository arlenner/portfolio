import React from 'react';
import './App.css'
import Jumbo from './components/jumbo'
import Topper from './components/topper'
import ContentBox from './components/contentbox'
import { faCode, faAtom, faBolt, faFingerprint, faWrench, faArchive, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import FabLink from './components/fab-link';
import { faGithub, faMedium, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';
import { IS_MOBILE } from './helpers/is-mobile'

const missionContent  = `It is my mission to bring great design and meaningful products together, beautifully.`
const goalContent     = `My goal is to use my talents to unite customers to businesses with elegant products.`
const passionContent  = `My passion is writing superior quality code that is clean and functional.`
const bioContent      = `An enthusiastic and ingenuitous problem solver, a lifelong learner. I'm always looking for a challenge, 
                         or to learn something new. I like doing things the right way, and I'm willing to keep an open mind
                         in the face of criticism. I have a keen eye for design and possess strong attention to detail. I'm comfortable
                         in either team-oriented environments or working individually. I love clean, well written code and elegant
                         but minimal design schemes. I believe that I am a superior developer, and an excellent choice to include
                         on your next project!`

const medium          = `https://medium.com/@arlenross02/`
const twitter         = `https://twitter.com/Rossketeer/`
const linkedin        = `https://linkedin.com/in/arlenner22/`
const github          = `https://github.com/arlenner`

const App = () => (
    <>
        <Jumbo 
            title='A. Ross'
            subtitle="Let's Build Something Beautiful"
            withIcon/>

        <Fade bottom>
        <div className='fab-grid'>
            
            <FabLink href={github} icon={faGithub} x='2' y={IS_MOBILE() ? '4' : '3'} />
            <FabLink href={medium} icon={faMedium} x='3' y='4' />
            <FabLink href={twitter} icon={faTwitter} x='4' y='4' />
            <FabLink href={linkedin} icon={faLinkedin} x='5' y={IS_MOBILE() ? '4' : '3'} />
        </div>
        </Fade>

        <div className='flex-row'>
            
            <ContentBox
                title="My Mission"
                subtitle="To Unite Business and Design"
                icon={faBolt}
                content={missionContent} />

            <ContentBox 
                title="My Goal"
                subtitle="Why Design Beautiful Content?"
                icon={faAtom}
                content={goalContent} />

            <ContentBox 
                title="My Passion"
                subtitle="Coding Perfection"
                icon={faCode}
                content={passionContent} /> 

        </div>

        <Topper/>

        <ContentBox
            title="About Me"
            subtitle="An Aspiring Web Developer"
            icon={faFingerprint}
            content={bioContent}
            full />

        <ContentBox
            title="Projects"
            subtitle="Some Things I've Worked On"
            icon={faWrench}
            content=""
            full> 
        </ContentBox>

        <ContentBox
            title="Blog"
            subtitle="My Latest Articles"
            icon={faBookOpen}
            content=""
            full> 
        </ContentBox>
    </>
)

export default App;
