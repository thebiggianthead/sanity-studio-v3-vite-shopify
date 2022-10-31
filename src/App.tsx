import {createConfig, Studio, DocumentActionComponent} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import types from './schema/index'
import {structure} from './desk'

import './styles.css'

const schemaTypesToLimit = ['product', 'productVariant', 'collection']

const config = createConfig({
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [deskTool({structure}), visionTool()],
  title: 'Sanity Studio / Shopify',
  name: 'sanity-studio-shopify',
  schema: {
    types,
  },
  document: {
    // The below should remove the ability to delete products, variants, and collections
    actions: (previousActions, context) => {
      if (schemaTypesToLimit.includes(context.schemaType)) {
        const publish: DocumentActionComponent[] = previousActions.filter(
          (previousAction) =>
            previousAction.action === 'publish' || previousAction.action === 'discardChanges'
        )
        return publish
      }

      return previousActions
    },
    newDocumentOptions: (previousOptions) => {
      const options = previousOptions.filter((previousOption) => {
        return !schemaTypesToLimit.includes(previousOption.templateId)
      })

      return options
    },
  },
})

export default function App() {
  return <Studio config={config} />
}
