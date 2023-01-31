'use client'

import config from '../../../sanity.config'
import {NextStudioLoading} from 'next-sanity/studio/loading'

export  function Loading() {
  return <NextStudioLoading config={config} />
}