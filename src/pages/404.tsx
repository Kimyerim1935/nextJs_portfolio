import ErrAnimation from 'src/pages/components/home/errAnimation';
import Link from 'next/link';
export default function PageNotFound() {
    return (
        <div className='flex items-center flex-col'>
            <ErrAnimation />
            <Link href='/'>
                <span className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go Home</span>
            </Link>
        </div>
    )
}