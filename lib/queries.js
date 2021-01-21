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