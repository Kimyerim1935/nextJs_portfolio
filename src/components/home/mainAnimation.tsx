import Lottie from 'react-lottie-player';
import mainAnimation from 'public/mainAnimation.json';

export default function MainAnimation() {
    return (
        <Lottie
            loop
            animationData={mainAnimation}
            play
        />
    )
}