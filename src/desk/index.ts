/**
 * Desk structure overrides
 */

import type {StructureResolver} from 'sanity/desk'
import {InfoOutlineIcon} from '@sanity/icons'

// If you add document types to desk structure manually, you can add them to this array to prevent duplicates in the root pane
const DOCUMENT_TYPES_IN_STRUCTURE = ['collection', 'product', 'productVariant']

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Collections')
        .schemaType('collection')
        .child(S.documentTypeList('collection')),
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(
          S.documentTypeList('product').child(async (id) =>
            S.list()
              .title('Product')
              .items([
                // Details
                S.listItem()
                  .title('Details')
                  .icon(InfoOutlineIcon)
                  .child(S.document().schemaType('product').documentId(id)),
                // Product variants
                S.listItem()
                  .title('Variants')
                  .schemaType('productVariant')
                  .child(
                    S.documentList()
                      .title('Variants')
                      .schemaType('productVariant')
                      .filter(
                        `
                      _type == "productVariant"
                      && store.productId == $productId
                    `
                      )
                      .params({
                        productId: Number(id.replace('shopifyProduct-', '')),
                      })
                  ),
              ])
          )
        ),
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
    ])
