import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AWS CLF-C02 考試筆記',
  description: 'AWS Cloud Practitioner 完整考試筆記，對應 AWS Skill Builder 官方課程 13 個模組',
  base: '/clf-c02-notes/',
  lang: 'zh-TW',

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: 'GitHub', link: 'https://github.com/yolin-tsai/clf-c02-notes' },
    ],

    sidebar: {
      '/clf-c02/': [
        {
          text: '雲端基礎與運算',
          collapsed: false,
          items: [
            { text: '雲端運算、全球架構與責任共擔', link: '/clf-c02/1' },
            { text: 'EC2：執行個體、計費與擴展', link: '/clf-c02/2' },
            { text: 'SQS 與 SNS', link: '/clf-c02/3' },
            { text: '無伺服器運算：Lambda 與 Step Functions', link: '/clf-c02/4' },
            { text: '容器：ECS、EKS、Fargate 與 ECR', link: '/clf-c02/5' },
            { text: '其他運算服務與選型', link: '/clf-c02/6' },
          ],
        },
        {
          text: '網路與全球架構',
          collapsed: false,
          items: [
            { text: 'Region 選擇、多 AZ 可靠性與 IaC', link: '/clf-c02/7' },
            { text: 'VPC、子網、安全群組與全球網路', link: '/clf-c02/8' },
          ],
        },
        {
          text: '儲存、資料庫與 AI/ML',
          collapsed: false,
          items: [
            { text: 'S3、EBS、EFS 與其他儲存服務', link: '/clf-c02/9' },
            { text: 'RDS、DynamoDB 與其他資料庫', link: '/clf-c02/10' },
            { text: '資料分析', link: '/clf-c02/11' },
            { text: 'AI 與機器學習', link: '/clf-c02/12' },
          ],
        },
        {
          text: '安全、監控與治理',
          collapsed: false,
          items: [
            { text: 'IAM、加密、威脅偵測與合規', link: '/clf-c02/13' },
            { text: '監控、合規與治理', link: '/clf-c02/14' },
          ],
        },
        {
          text: '定價、遷移與架構',
          collapsed: false,
          items: [
            { text: '定價、計費與支援方案', link: '/clf-c02/15' },
            { text: '雲端遷移：策略、工具與 CAF', link: '/clf-c02/16' },
            { text: 'Well-Architected Framework', link: '/clf-c02/17' },
          ],
        },
      ],
    },

    footer: {
      message: '個人學習筆記，考試規格以 AWS 官方 CLF-C02 Exam Guide 為準',
    },

    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'short',
      },
    },

    outline: false,

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切換亮色模式',
    darkModeSwitchTitle: '切換深色模式',
    sidebarMenuLabel: '目錄',
    returnToTopLabel: '回到頂部',
  },
})
