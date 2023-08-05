import Lottie from 'react-lottie-player';
import AboutMe from 'public/aboutMe.json';

export default function AboutMeAnimation() {
    return (
        <Lottie
            loop
            animationData={AboutMe}
            play
            style={{width: '500px', height: '350px'}}
        />
    )
}