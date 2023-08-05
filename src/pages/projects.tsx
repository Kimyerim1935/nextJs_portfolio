import Layout from 'src/components/layout'
import { DATABASE_ID, TOKEN } from 'src/config';
import ProjectItem from 'src/components/projects/projectItem';

export default function Projects({ projects }: any) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <h1 className="text-2xl font-bold sm:text-2xl">
                    총 프로젝트 :
                    <span className="pl-4 text-indigo-600">{projects?.results?.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects?.results.map((el:any) => (
                        <ProjectItem data={el} key={el.id} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "terms",
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    return {
        props: {projects}
    }
}