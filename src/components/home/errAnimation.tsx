import Lottie from 'react-lottie-player';
import ErrorAnimation from 'public/404Animation.json';

export default function ErrAnimation() {
    return (
        <Lottie
            loop
            animationData={ErrorAnimation}
            play
        />
    )
}