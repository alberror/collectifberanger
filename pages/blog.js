import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import { BLOGPAGE_QUERY, request } from '../lib'
import { Layout, PageContainer } from '../components'

export const getStaticProps = async () => {
  const data = await request({
    query: BLOGPAGE_QUERY,
    variables: { limit: 10 }
  });
  return { props: { data } }
}


export default function Collectif({data}) {
  const {allPosts} = data

  console.log(allPosts)

  return (
    <Layout>
      <Head>
        <title>Collectif Béranger | Parents d'élèves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.postsGrid}>
          {allPosts.map((post, i) => (
            <Link key={i} href={`/${post.slug}`}>
              <a>
                <img src={post.images[0].url} style={{height: '280px', objectFit: 'cover', width: '100%'}} />
                <h4 className={styles.parentName}>{post.titre}</h4>
                <p>{post.updatedAt}</p>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </PageContainer>
    </Layout>
  )
}
