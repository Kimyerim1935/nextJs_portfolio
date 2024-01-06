// import { Icon_arrow } from '../../assets/images';
import Link from "next/link";
import ThemeBtn from "src/components/home/themeBtn";

export default function Header() {
    const handleClickButton = () => {

    }
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/'>
                        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <h1 className="ml-3 text-xl">〈HappppyRim /〉</h1>
                        </span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href='/'>
                            <span className="mr-5 hover:text-gray-900">Home</span>
                        </Link>
                        <Link href='/aboutMe'>
                            <span className="mr-5 hover:text-gray-900">About Me</span>
                        </Link>
                        <Link href='https://useplease-ui.github.io/react-components/' target="_blank">
                            <span className="mr-5 hover:text-gray-900">Projects</span>
                        </Link>
                        <a href="https://open.kakao.com/o/sy8Dmgzf" target="_blank" className="mr-5 hover:text-gray-900">Contacts</a>
                    </nav>
                    <ThemeBtn />
                </div>
            </header>
        </>
    )
}
