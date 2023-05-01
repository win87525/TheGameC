CREATE TABLE c_coin_exchange ( -- C幣轉換表
  exchange_id INT PRIMARY KEY AUTO_INCREMENT, -- C幣轉換單號id
  user_id INT NOT NULL, -- 會員名稱
  c_coin_exchange INT NOT NULL, -- c幣轉換面額(轉出多少c幣)
  game_id INT NOT NULL, -- c幣轉進的遊戲
  c_coin_balance INT UNSIGNED DEFAULT 0, -- c幣餘額
  exchange_date DATETIME NOT NULL, -- 轉點日期
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);