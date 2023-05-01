CREATE TABLE c_coin_recharge ( -- C幣儲值表
  recharge_id INT PRIMARY KEY AUTO_INCREMENT, -- C幣儲值單號id
  user_id INT NOT NULL, -- 會員 id
  consume INT NOT NULL, -- 消費金額
  recharge_rate FLOAT NOT NULL, -- 儲值比率
  c_coin_recharge INT NOT NULL, -- C幣儲值金額 (獲得多少c幣)
  c_coin_balance INT UNSIGNED DEFAULT 0, -- c幣餘額
  pay_method VARCHAR(10) NOT NULL, -- 儲值方式：(credit、paypal、gash)
  credit_account VARCHAR(20) NOT NULL, -- 信用卡卡號
  recharge_date DATETIME NOT NULL, -- 儲值日期
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

