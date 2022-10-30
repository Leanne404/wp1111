# Homework 5
### 基本要求（已完成）
1. frontend/src/App.js) 處理畫面邏輯以及管理 states。
- 當 “start game” 按鈕按下去之後，透過 axios 通知 server 去產生一個新的猜謎數字
- 當 “guess!” 按鈕按下去之後，把輸入匡猜的數字透過 Axios 傳給 server 端去做判斷，並且接收
server 傳回來的猜測狀態，設定對應的 states 與 status 值 (字串)。
當後端告知 error 時，應該要 用 “catch” 來抓到 error, 並且印出像 ‘Error: "xx" is not a valid number (1 - 100)’ 這樣的 error message，然後要可以繼續猜先前未猜到的數字。
- 當猜到數字後，要切換畫面顯示 "you won! the number was xxx.”, 然後當使用者按下 “restart” 按鈕後，透過 axios 通知 server 去重新產生一個新的猜謎數字，並且進入 “guess” mode.
2. (fronend/src/axios.js) 實現上述需要跟 server 溝通的 { startGame, guess, restart }這三個 functions。
3. (backend/core/getNumber.js) 定義一個全域變數 “number” (i.e. 要猜的數字，stored in the memory DB of the server), 並且 export 兩個 functions: getNumber() 以及 genNumber(), 前者用來取得 “number”, 後者用來產生一個介於 1 ~ 100 的隨機亂數 (as "number")。
4. (backend/routes/guess.js) 實作 Express router-level middleware, 定義 { "/start", "/guess", "/restart" } 三個 APIs。其中 “/guess” 檢查猜的數字是否正確，並且回傳建議 (status, as a string) - “Bigger” (猜大一點), “Smaller” (猜小一點), “Equal" (答對了)，而如果輸入的數字格式不正確，請回傳的 HTTP error (406) (如上所述，前端要 catch 此 error);而 “/start" 與 “/restart" 兩個 APIs 是用來開始以及重新開始遊戲。
5. 加入 css 檔，編輯 style。
