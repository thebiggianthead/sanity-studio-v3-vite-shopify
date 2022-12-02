import {defineConfig, Studio} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import types from './schema/index'
import {structure} from './desk'
import {customDocumentActions} from './plugins/customDocumentActions'

import './styles.css'

const config = defineConfig({
  name: 'sanity-studio-shopify',
  title: 'Sanity Studio / Shopify',

  projectId: 'your-project-id',
  dataset: 'production',

  plugins: [deskTool({structure}), customDocumentActions(), visionTool()],

  schema: {
    types,
  },
})

export default function App() {
  return <Studio config={config} />
}
