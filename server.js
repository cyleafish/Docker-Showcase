const express = require("express");
const db = require('./db'); //db.js 的檔案
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

// SERVER 啟動
app.listen(PORT, () => {
    console.log(`Judge 伺服器運行在 http://localhost:${PORT}`);
});
