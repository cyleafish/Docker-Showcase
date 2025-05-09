# 畢業專題_Docker-Showcase
由於原專案為畢業專題(有參與競賽)，因此僅提供我實作的 Docker 部分供參考
## 負責項目
- 撰寫 Dockerfile，建立 Node.js 環境
- 建立 docker-compose.yml，讓不同團隊成員一鍵建立開發環境並測試
- 撰寫操作說明文件，並教導團隊成員使用 Docker 工具

## Docker 操作筆記
- 執行(在目標專案資料夾中開啟 CMD)：docker-compose up --build
- 若修改了 Dockerfile，要先移除舊 volume 再重建
  - `docker-compose down -v`
  - `docker-compose up --build`

## 檔案結構(部分檔案)
Docker-Showcase/
├── server.js  #專題後端(部分程式)
├── db.js      #專題資料庫(部分程式)
├── Dockerfile           
├── docker-compose.yml    
├── package-lock.json     
├── package.json          
└── .dockerignore
