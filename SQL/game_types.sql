CREATE TABLE game_types ( -- 遊戲類型資料表
 game_type_id INT AUTO_INCREMENT PRIMARY KEY,  -- 遊戲類型 id
 game_type_name VARCHAR(20) NOT NULL, -- 遊戲類型名稱
 description TEXT, -- 介紹
 bg_image VARCHAR(255) -- 背景圖片
);

INSERT INTO game_types (game_type_name, description, bg_image) 
VALUES ('射擊遊戲', '射擊遊戲是一種以操縱角色或武器射擊為主要玩法的遊戲類型，具有高度的動作元素和快節奏的遊戲體驗。玩家需要有快速反應和精確射擊的能力，學習遊戲的武器系統、地圖和遊戲模式，以獲得更好的遊戲體驗和得分。射擊遊戲還提供多人模式，讓玩家可以與其他玩家進行線上競技。在不同的場景中與敵人作戰，選擇不同的武器和角色，是射擊遊戲的主要特色。','GameTypeBg/Shooting.jpg'),
       ('冒險遊戲', '冒險遊戲是一種以解謎、探索、對話和互動為主要玩法的遊戲類型，通常有豐富的故事劇情。玩家需要操縱角色在遊戲中與其他角色進行互動、解決謎題，並在不同的場景中探索。冒險遊戲通常具有獨特的藝術風格和音樂，帶給玩家豐富的遊戲體驗。與其他遊戲類型不同，冒險遊戲的重點在於故事情節和遊戲世界的建構，而非動作和競技元素。','GameTypeBg/avg.jpg'),
       ('競技遊戲', '競技遊戲是一種以多人競技和對戰為主要玩法的遊戲類型，通常需要玩家有高超的技巧和策略思考能力。競技遊戲包含多種類型，如即時戰略、格鬥、體育等。玩家可以與其他玩家進行線上對戰或者本地對戰，並通過獲勝來獲得更高的排名和獎勵。競技遊戲通常具有高度的遊戲平衡性和公平性，讓玩家可以在公平的環境中競爭。','GameTypeBg/Competitive.jpg')