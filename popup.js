import { getAllData, clearAllData } from "./db.js";

// 添加事件监听器
document.addEventListener("DOMContentLoaded", () => {
  // 搜索数据按钮
  document.getElementById("viewSearchData").addEventListener("click", () => {
    chrome.tabs.create({ url: "search_data/data.html" });
  });

  // 主页数据按钮
  document.getElementById("viewHomeData").addEventListener("click", () => {
    chrome.tabs.create({ url: "home_data/data.html" });
  });

  // 使用说明按钮
  document.getElementById("howToUse").addEventListener("click", () => {
    chrome.tabs.create({ url: "about.html" });
  });
}); 