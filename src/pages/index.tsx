import Layout from 'src/components/layout'
import Hero from 'src/components/home/hero';
import MainAnimation from 'src/components/home/mainAnimation';

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col ">
          <MainAnimation />
          <Hero />
        </div>
      </section>
    </Layout>
  )
}
