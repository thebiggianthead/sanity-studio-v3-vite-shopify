// Documents
import product from './documents/product'
import productVariant from './documents/productVariant'
import collection from './documents/collection'

const documents = [product, productVariant, collection]

// Objects
import shopifyProduct from './objects/shopify/product'
import productOption from './objects/shopify/productOption'
import shopifyProductVariant from './objects/shopify/productVariant'
import shopifyCollection from './objects/shopify/collection'
import shopifyCollectionRule from './objects/shopify/collectionRule'
import moduleCallout from './objects/module/callout'
import seoShopify from './objects/seo/shopify'

const objects = [
  shopifyProduct,
  productOption,
  shopifyProductVariant,
  shopifyCollection,
  shopifyCollectionRule,
  seoShopify,
  moduleCallout,
]

// Blocks
import body from './blocks/body'

const blocks = [body]

export default [...documents, ...objects, ...blocks]
