-- 使用者已有玩的線上遊戲
CREATE TABLE user_games (
user_games_id INT AUTO_INCREMENT PRIMARY KEY, -- 已遊玩的遊戲編號
user_id INT NOT NULL, -- 使用者 id
game_id INT NOT NULL, -- 已擁有的遊戲id
image VARCHAR(255), 
-- 遊戲頁設計時要設計點選下載or遊玩某遊戲時，會上傳一個該遊戲封面圖的路徑的字串
play_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 玩遊戲時間
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (game_id) REFERENCES games(game_id),
UNIQUE (user_id, game_id) -- 設定此人擁有此遊戲為唯一
);

SELECT * FROM `user_games` WHERE 1;

INSERT INTO user_games (user_id, game_id, image)
VALUES
('1', '2', 'MapleStory/cover.jpg'),
('1', '3', 'CrazyArcade/cover.jpg'),
('1', '1', 'CSO/cover.jfif'),
('1', '5', 'AVA/cover.jpg'),
('1', '6', 'KartRider/cover.jfif'),
('2', '1', 'CSO/cover.jfif'),
('2', '7', 'LOL/cover.jpg'),
('2', '9', 'DragonNest/cover.jpg'),
('3', '2', 'MapleStory/cover.jpg'),
('3', '8', 'Valorant/cover.jpg')



