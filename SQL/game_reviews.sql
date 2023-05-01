-- 遊戲評分/評論
CREATE TABLE game_reviews ( 
  game_review_id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT NOT NULL,
  user_id INT NOT NULL,
  rating FLOAT, -- 評分
  comment TEXT, -- 評論
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);