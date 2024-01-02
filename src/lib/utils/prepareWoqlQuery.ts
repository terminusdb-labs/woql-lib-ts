import type { Query } from '../../syntax.js'

interface WOQLQuery {
  query: Query
  all_witnesses?: boolean
}

interface WoqlQueryOptions {
  allWitnesses?: boolean
}

export function embedWoqlQuery(
  woql: Query,
  options?: WoqlQueryOptions,
): WOQLQuery {
  return {
    query: woql,
    all_witnesses: options?.allWitnesses ?? undefined,
  }
}

interface Source {
  '@type': 'Source'
  post?: string
  url?: string
}

interface QueryResource {
  '@type': 'QueryResource'
  format: 'csv'
  source: Source
  options?: object
}

// Disabled linting as the Record form is not as expressive for what the key is
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface WoqlFileAttachments {
  [filename: string]: string
}

interface WoqlHttpPostBodyOptions {
  allWitnesses?: boolean
  attachments?: WoqlFileAttachments
}

export const prepareWoqlHttpPostBody = (
  woql: Query,
  options?: WoqlHttpPostBodyOptions,
): WOQLQuery | FormData => {
  const woqlQuery = embedWoqlQuery(woql, {
    allWitnesses: options?.allWitnesses,
  })

  const resourceObjects = getResourceObjects(woqlQuery.query)

  let postBody
  if (resourceObjects.length > 0) {
    const formData = new FormData()

    resourceObjects.forEach((resourceObject) => {
      const fileName =
        resourceObject.source.post?.split('/').pop()?.split('\\').pop() ??
        'unknown.csv'
      resourceObject.source.post = fileName

      const attachment = options?.attachments?.[fileName]
      if (typeof attachment === 'string' && attachment !== '') {
        formData.append('file', attachment)
      }
    })

    formData.append(
      'payload',
      new Blob([JSON.stringify(woqlQuery)], { type: 'application/json' }),
      'body.json',
    )

    postBody = formData
  } else {
    postBody = woqlQuery
  }
  return postBody
}

// recurse the WOQL query for all properties and arrays. If @type on an object = QueryResource,
// add it to the post body.
const getResourceObjects = (woql: Query): QueryResource[] =>
  (Array.isArray(woql) ? woql : [woql]).reduce(
    (resources: QueryResource[], query: Query) => {
      if (query !== null && typeof query === 'object') {
        Object.keys(query).forEach((key) => {
          const resourceKey = 'resource'
          if (key !== resourceKey) return
          if (!(key in query)) return // Looks like a type inaccuracy bug in TypeScript
          const value = query[resourceKey]
          if (value !== null && typeof value === 'object') {
            if ('@type' in value && value['@type'] === 'QueryResource') {
              resources.push(value as QueryResource)
            } else {
              resources = resources.concat(getResourceObjects(value))
            }
          }
        })
      } else if (typeof query !== 'string' && Array.isArray(query)) {
        resources.concat(getResourceObjects(query))
      }
      return resources
    },
    [],
  )
