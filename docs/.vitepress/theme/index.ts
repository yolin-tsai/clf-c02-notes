import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import awsIcons from './aws-icons.json'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') {
      import('mermaid').then(({ default: mermaid }) => {
        mermaid.registerIconPacks([
          {
            name: 'aws',
            loader: () => Promise.resolve(awsIcons),
          },
        ])
      })
    }
  },
} satisfies Theme
