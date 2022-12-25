# HW6
### 基本要求（已完成）
1. 當 "Clear" 按鈕被按下去後，會送出 DELETE request 把 DB 清空，然後在下方空白處印出 “Database
cleared”。
2. 當 "Name", "Subject" 以及 "Score" 三個輸入匡都被輸入值之後，按下 "Add" 按鈕，會把資料寫到
DB:
- 如果 {Name, Subject} paired value 已經存在 DB，則取代原先在 DB 的這筆資料，然後在下方空白
處印出 "Updating (Name, Subject, Score)" // Name, Subject, Score 請代換成輸入的值 
- 否則，在 DB 新增一筆資料，就印出 "Adding (Name, Subject, Score)"。
3. 在 Query string 不為空字串的情況下，當 Query 按鈕按下去後，會根據 Name/Subject 二選一的 radio button 選擇 Name or Subject 作為 query 條件，然後根據輸入 Query String 的內容去 DB 把符合條件的 資料搜尋回來，在下方空白處印出搜尋出來的結果(一筆一行)，"Found card with name: (Name, Subject, Score)", or "Found card with subject: (Name, Subject, Score)"。如果找不到，就印出 “QueryType (QueryString) not found!” // 例如:"Name (Ric) not found!”
4. Query Input 下方為 message console。在印出訊息/資料時請繼續印在之前的訊息之下，而當 “Clear” 動作被執行之後，請清除 console 中的所有訊息並印出 "Database cleared"。如果在 query 時有任何的 錯誤訊息，也是一樣印在這邊。