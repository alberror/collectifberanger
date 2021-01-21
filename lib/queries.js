export const ACTIONS_QUERY = `query HomePage {
  allActions {
    ordre
    titre
    contenu
  }
}`

export const HOMEPAGE_QUERY = `query HomePage {
  pageDAccueil {
    titre
    contenu
  }
}`

export const PARENTS_QUERY = `query CollectifPage {
  allMembres {
    nom
    photo {
      url
    }
  }
}`

export const BLOGPAGE_QUERY = `query BlogPage($limit: IntType) {
  allPosts(first: $limit) {
    titre
    contenu
    excerpt
    slug
    updatedAt
    images {
      url
    }
  }
}`