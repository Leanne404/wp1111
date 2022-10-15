# HW4 MineSweeper
### 基本要求（已完成）
1. HomePage 顯示。 
2. ”Start Game” button，在按下時，開始遊戲。
3. 在按下  start  button  後，應該要切換到 Board。
4. 完成 freshBoard。
5. 建構 Board。
6. 在 Board 上加上可以插旗子的功能 (updateFlag)，在遊戲中透過按右鍵插旗子，請判斷以下幾種情況： 
- 若此 Cell 已經被按開 (revealed) ，則不能再插上旗子
- 若此 Cell 沒有被插上旗子，且沒有被按開，可以插上旗子 
- 若此 Cell 已經被插上旗子，必須拔掉旗子。
7. 完成 Board.js 裡的 revealCell function 。判斷兩種情況： 
- 若正要被reveal 的這個 Cell 裡面是地雷，則結束遊戲。 
- 若並不是地雷，則直接打開。 

### 進階要求（已完成） 
1. 難度調整的功能，地雷數量不能超過 Cell 總數 (n*n)，如果超過的話，Error 會顯示，Start Button會沒辦法按。
2. 若要 reveal 的 Cell 數值為 0 ，則會同步開啟這個 Cell 四周未被插旗子且不是地雷的 Cell。
3. 實作 Modal，出現的時機有兩個：
- 所有非地雷的 Cell  都被  reveal，會顯示 “WIN”， New Game & Back to Home button，按下可開新遊戲或是回到主畫面。   
- 任一個地雷的 Cell  被  reveal，會顯示 “Game Over” Try again & Back to Home button，按下可開新遊戲或是回到主畫面。      
4. 在 Dashboard.js 中實作計時器。每個新遊戲皆從 0 秒開始計時，當遊戲結束時，計時器會停止在遊戲
結束的秒數。

![](https://i.imgur.com/pfsPBRR.png)
## [Demo Video](https://www.youtube.com/watch?v=mDx4bi-rA-Q)


## Structure
![](https://i.imgur.com/noioyH8.png)

## File Structure
![](https://i.imgur.com/LQWxcXW.png)

## Our Rules of MineSweeper
![](https://i.imgur.com/1Di60VR.png)

## Structure of HTML
![](https://i.imgur.com/18fudrr.png)
![](https://i.imgur.com/nLgxGL2.png)
![](https://i.imgur.com/5TwVv4A.png)
![](https://i.imgur.com/BvhORok.png)

