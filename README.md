# AWS CLF-C02 考試筆記

AWS Certified Cloud Practitioner（CLF-C02）中文考試筆記。

**線上閱讀：** https://yolin-tsai.github.io/clf-c02-notes/

## 這是什麼

一套涵蓋 CLF-C02 全部考試範圍的繁體中文筆記，適合：

- 準備考 AWS Cloud Practitioner，想要一份中文、好讀、能直接拿去應考的教材
- 已經有點基礎，想快速釐清「這題該選哪個服務」的人
- 非本科背景、需要從觀念開始建立雲端全貌的初學者

## 章節目錄

### 雲端基礎與運算

- [第1章 雲端入門](./docs/clf-c02/1.md) — 雲端運算、全球架構與責任共擔
- [第2章 EC2](./docs/clf-c02/2.md) — 執行個體、計費與擴展
- [第3章 訊息與佇列](./docs/clf-c02/3.md) — SQS 與 SNS
- [第4章 無伺服器運算](./docs/clf-c02/4.md) — Lambda 與 Step Functions
- [第5章 容器](./docs/clf-c02/5.md) — ECS、EKS、Fargate 與 ECR
- [第6章 其他運算服務與選型](./docs/clf-c02/6.md) — Beanstalk、Lightsail、Batch、Outposts

### 網路與全球架構

- [第7章 走向全球](./docs/clf-c02/7.md) — Region 選擇、多 AZ 可靠性與 IaC
- [第8章 雲端網路](./docs/clf-c02/8.md) — VPC、子網、安全群組與全球網路

### 儲存、資料庫與 AI/ML

- [第9章 雲端儲存](./docs/clf-c02/9.md) — S3、EBS、EFS 與 FSx
- [第10章 雲端資料庫](./docs/clf-c02/10.md) — RDS、DynamoDB 與其他資料庫
- [第11章 資料分析](./docs/clf-c02/11.md)
- [第12章 AI 與機器學習](./docs/clf-c02/12.md)

### 安全、監控與治理

- [第13章 雲端安全](./docs/clf-c02/13.md) — IAM、加密、威脅偵測與合規
- [第14章 監控、合規與治理](./docs/clf-c02/14.md)

### 定價、遷移與架構

- [第15章 定價與支援](./docs/clf-c02/15.md)
- [第16章 遷移上雲](./docs/clf-c02/16.md) — 策略、工具與 CAF
- [第17章 架構完善](./docs/clf-c02/17.md) — Well-Architected Framework

---

## 本地執行

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # 輸出至 docs/.vitepress/dist/
```
## 官方參考資料

- [CLF-C02 考試指南（PDF）](https://docs.aws.amazon.com/zh_tw/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf) — 考試範圍、領域占比、題型說明

## 內容時效與免責聲明

- 這是個人學習筆記，非 AWS 官方教材；如與官方考試指南不一致，以官方為準。
- AWS 服務與政策持續變動，筆記內以 † 標出的時效性內容均以標註當下的公開資訊為準；正式應考前建議再對照 AWS 官方文件確認最新狀態。
- 內容最後更新：2026 年 7 月。
- 發現錯誤、過時資訊或有建議，歡迎開 [Issue](https://github.com/yolin-tsai/clf-c02-notes/issues)。