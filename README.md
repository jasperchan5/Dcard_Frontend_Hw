# Dcard_Frontend_Hw
- 使用方法:
  - git clone https://github.com/jasperchan5/Dcard_Frontend_Hw，並進入終端機，輸入 cd Dcard_Frontend_Hw。
  - 輸入 yarn start 以啟動。
  - 一開始會進入主頁面，下方可以輸入 username，按 enter 鍵或是右方箭頭按鈕即可進入下一頁。
  - 當 username 這個 hook 被更新時，就會發送 API 請求，獲取此 username 的所有 repo。
  - 一開始會載入 10 個 repos，畫面捲到底部時會再發送一次 API 請求，額外載入 10 個 repos。
  - 點擊單一 repo 可以進入此該 repo 的頁面。
  - Header 上會顯示當前 username，以及能夠重置所有 hooks 並返回主頁面的按鈕。