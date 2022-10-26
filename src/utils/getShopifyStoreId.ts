import {useClient} from 'sanity'
import {SANITY_API_VERSION} from '../constants'

const SHOPIFY_SYNC_DOCUMENT_TYPE = 'sanity.shopify.sync'

export const getShopifyStoreId = async () => {
  const client = useClient().withConfig({apiVersion: SANITY_API_VERSION})

  const storeId = await client.fetch(
    `*[_type == $documentType] | order(_updatedAt desc)[0].store`,
    {
      documentType: SHOPIFY_SYNC_DOCUMENT_TYPE,
    }
  )

  return storeId
}
