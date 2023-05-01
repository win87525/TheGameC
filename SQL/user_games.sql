-- 使用者已有玩的線上遊戲
CREATE TABLE user_games (
user_games_id INT AUTO_INCREMENT PRIMARY KEY, -- 已遊玩的遊戲編號
user_id INT NOT NULL, -- 使用者 id
game_id INT NOT NULL, -- 已遊玩的遊戲id
play_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 玩遊戲時間
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (game_id) REFERENCES games(game_id)
);

