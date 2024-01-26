import Link from "next/link";

export default function Hero() {
    return (
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요
                <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed">하루하루가 해삐한 꿈 많은 프론트앤드 개발자<br/> 김예림입니다😀</p>
            <div className="flex justify-center">
                <Link href='https://useplease-ui.github.io/react-components/' target="_blank">
                    <span className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg dark:text-slate-200">프로젝트 보러가기</span>
                </Link>
                <Link target="_blank" href='https://github.com/Kimyerim1935'>
                    <span className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg dark:hover:text-gray-600">Github
                    </span>
                </Link>
            </div>
        </div>
    )
}
