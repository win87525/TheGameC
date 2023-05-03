-- 新聞
CREATE TABLE news (
news_id INT AUTO_INCREMENT PRIMARY KEY, -- 文章編號
news_title VARCHAR(30) NOT NULL UNIQUE, -- 文章標題
news_type VARCHAR(10) NOT NULL, -- 文章類型
news_img VARCHAR(255), -- 文章封面圖
content TEXT NOT NULL, -- 文章內容
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);