import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') {
      import('mermaid').then(({ default: mermaid }) => {
        mermaid.registerIconPacks([
          {
            name: 'aws',
            loader: () =>
              fetch(
                'https://raw.githubusercontent.com/harmalh/aws-mermaid-icons/main/iconify-json/aws-icons.json'
              ).then((res) => res.json()),
          },
        ])
      })
    }
  },
} satisfies Theme
