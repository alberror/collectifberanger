import Head from 'next/head'
import styles from '../styles/Collectif.module.css'
import { PARENTS_QUERY, request } from '../lib'
import { Layout, PageContainer } from '../components'

export const getStaticProps = async () => {
  const parents = await request({
    query: PARENTS_QUERY
  });
  return { props: { data: parents } }
}


export default function Collectif(props) {
  const { allMembres } = props.data
  return (
    <Layout>
      <Head>
        <title>Collectif Béranger | Parents d'élèves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <h1 className={styles.title}>Les parents</h1>
        <div className={styles.parentsGrid}>
          {allMembres.map((membre, i) => (
            <div key={i} className={styles.parentCard}>
              <img src={membre.photo.url} />
              <h4 className={styles.parentName}>{membre.nom}</h4>
            </div>
          ))}
        </div>
      </PageContainer>
    </Layout>
  )
}
