import Header from 'src/components/header';
import Footer from 'src/components/footer';

interface layoutProps {
    children: React.ReactNode
}

export default function Layout({ children }:layoutProps) {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-primary'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}