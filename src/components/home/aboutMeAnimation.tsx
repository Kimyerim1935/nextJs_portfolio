import Lottie from 'react-lottie-player';
import AboutAnimtaion from '../../../public/aboutme.json';

export default function AboutMeAnimation() {
    return (
        <Lottie
            loop
            animationData={AboutAnimtaion}
            play
            style={{width: '500px', height: '350px'}}
        />
    )
}