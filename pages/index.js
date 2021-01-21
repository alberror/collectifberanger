import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ACTIONS_QUERY, HOMEPAGE_QUERY, request } from '../lib'
import { Layout, PageContainer } from '../components'

export const getStaticProps = async () => {
  const pageDAccueil = await request({
    query: HOMEPAGE_QUERY
  });
  const actions = await request({
    query: ACTIONS_QUERY
  })
  return { props: { pageDAccueil, actions } }
}


export default function Home(props) {
  const {pageDAccueil} = props.pageDAccueil
  const {allActions} = props.actions

  return (
    <Layout>
      <Head>
        <title>Collectif Béranger | Parents d'élèves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <h1 className={styles.title}>
          {pageDAccueil.titre}
        </h1>
        <div dangerouslySetInnerHTML={{__html: pageDAccueil.contenu}} />
        <div>
          {allActions.map((action, i) => (
            <div key={i}>
              <h2>{action.titre}</h2>
              <div dangerouslySetInnerHTML={{__html: action.contenu}} />
            </div>
          ))}
        </div>
      </PageContainer>
    </Layout>
  )
}
