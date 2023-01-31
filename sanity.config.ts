import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'



export default defineConfig({
  basePath: "/studio",
  name: "NAHEEN_BLOG",
  title: "NAHEEN_BLOG",
  projectId:"nv02lb2s",
  dataset:"production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
