CREATE TABLE users ( -- 會員資料表
user_id INT AUTO_INCREMENT PRIMARY KEY,  -- 會員 id
username VARCHAR(15) NOT NULL UNIQUE, -- 會員帳號
password VARCHAR(15) NOT NULL,  -- 會員密碼
email VARCHAR(30) NOT NULL UNIQUE,  -- email
phone VARCHAR(11),  -- 電話
birthday DATE NOT NULL,  -- 生日
c_coin_balance INT UNSIGNED DEFAULT 0, -- c幣餘額
nickname VARCHAR(15), -- 暱稱 (預設為帳號)
-- avatar VARCHAR(255) DEFAULT 'default_avatar.jpg', -- 大頭貼
registration_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 帳號建立時間
);

SELECT * FROM `users` WHERE 1;


INSERT INTO users (username, password, email, phone, birthday, c_coin_balance)
VALUES
('user1', 'password1', 'user1@example.com', '0912345678', '1990-01-01', 0),
('user2', 'password2', 'user2@example.com', '0923456789', '1991-02-02', 0),
('user3', 'password3', 'user3@example.com', '0934567890', '1992-03-03', 0),
('user4', 'password4', 'user4@example.com', '0945678901', '1993-04-04', 0),
('user5', 'password5', 'user5@example.com', '0956789012', '1994-05-05', 0),
('user6', 'password6', 'user6@example.com', '0967890123', '1995-06-06', 0),
('user7', 'password7', 'user7@example.com', '0978901234', '1996-07-07', 0),
('user8', 'password8', 'user8@example.com', '0989012345', '1997-08-08', 0),
('user9', 'password9', 'user9@example.com', '0990123456', '1998-09-09', 0),
('user10', 'password10', 'user10@example.com', '0911123456', '1999-10-10', 0),
('user11', 'password11', 'user11@example.com', '0922234567', '2000-11-11', 0),
('user12', 'password12', 'user12@example.com', '0933345678', '2001-12-12', 0),
('user13', 'password13', 'user13@example.com', '0944456789', '2002-01-13', 0),
('user14', 'password14', 'user14@example.com', '0955567890', '2003-02-14', 0),
('user15', 'password15', 'user15@example.com', '0966678901', '2004-03-15', 0),
('user16', 'password16', 'user16@example.com', '0977789012', '2005-04-16', 0),
('user17', 'password17', 'user17@example.com', '0988890123', '2006-05-17', 0),
('user18', 'password18', 'user18@example.com', '0999901234', '2007-06-18', 0),
('user19', 'password19', 'user19@example.com', '0911012345', '2008-07-19', 0),
('user20', 'password20', 'user20@example.com', '0922123456', '2009-08-20', 0);