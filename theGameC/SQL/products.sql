CREATE TABLE products ( -- 商品資料表
 product_id INT AUTO_INCREMENT PRIMARY KEY, -- 商品編號
 product_name VARCHAR(255) NOT NULL UNIQUE, -- 商品名稱
 product_type VARCHAR(20) NOT NULL, -- 商品類型
 image VARCHAR(255),  -- 商品封面圖
 description TEXT,  -- 商品介紹
 price INT UNSIGNED NOT NULL,  -- 商品價格
 age_rating VARCHAR(10) NOT NULL, -- 年齡分級
 developer VARCHAR(25), -- 開發商
 publisher VARCHAR(25), -- 發行商
 buy_count INT UNSIGNED,  -- 購買次數(判斷熱門依據)
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM `products` WHERE 1;

INSERT INTO products (product_name, product_type, image, description, price, age_rating, developer, publisher, buy_count)
VALUES ('俠盜列車手5', '動作', 'action/GTA5.jpg', '《GTA5》是一款開放世界的動作冒險遊戲，玩家扮演不同角色自由探索、任務、駕駛車輛、玩家對戰等。', 1300, '18', 'Rockstar', 'Rockstar', 25000),
       ('碧血狂殺2', '動作', 'action/Red_Dead_Redemption_2.jfif', '《碧血狂殺2》是一款開放世界的西部動作遊戲，玩家扮演亞瑟摩根，在西部探索、狩獵、戰鬥的冒險旅程。', 1300, '18', 'Rockstar', 'Rockstar', 6000),
       ('最後生還者2', '動作', 'action/The_last_of_us_2.jpg', '《最後生還者2》是一款動作遊戲，以艾莉和艾比為主角，描寫了後人類文明崩壞後的殘酷世界，在絕望中生存下去。', 1300, '15', 'Naughty Dog', 'Sony', 5000),
       ('惡靈勢力2', '動作', 'action/l4d2.jpg', '《惡靈勢力2》是一款合作射擊遊戲，玩家需要在殭屍肆虐的環境中生存並與其他玩家合作，打敗各種恐怖的殭屍。', 400, '15', 'Valve', 'Valve', 7000),
       ('極地戰嚎5', '動作', 'action/FarCry5.jpg', '《極地戰嚎5》是一款開放世界的第一人稱動作遊戲，玩家需要與異教勢力作戰，並自由探索世界、狩獵、駕駛車輛。', 1000, '18', 'Ubisoft', 'Ubisoft', 5000),
       ('喋血復仇', '動作', 'action/B4B.png', '《喋血復仇》是一款合作射擊遊戲，由原《惡靈勢力2》團隊開發。玩家與其他玩家合作，在殭屍災難中生存並打敗強大的Boss。', 1400, '18', 'Turtle Rock', 'WBIE', 5000),
       ('重金屬：地獄歌手', '動作', 'action/Metal_Hellsinger.jpg', '《重金屬：地獄歌手》是一款結合音樂節奏和射擊的遊戲，玩家與魔鬼作戰，隨著節奏進行攻擊，挑戰強大的敵人。', 750, '18', 'The Outsiders', 'Funcom', 6000),
       ('人類：一敗塗地', '動作', 'action/human_fall.jpg', '《人類：一敗塗地》是一款物理遊戲，玩家扮演彎曲的角色，在夢幻世界中探索、攀爬、推動物體，解決各種謎題。', 600, '12', 'No Brakes Games', 'Curve Digital', 6000),
       ('戰鎚40K：黑潮', '動作', 'action/Darktide.jfif', '《戰鎚40K：黑潮》是一款合作射擊遊戲，玩家進入黑暗世界，面對各種敵人，獲得經驗和裝備，探索故事背景和世界觀。', 960, '15', 'Fatshark', 'Fatshark', 7000),
       ('塞爾達傳說 曠野之息', '冒險', 'adventure/zelda.png', '《塞爾達傳說 曠野之息》是一款開放世界的冒險遊戲，玩家扮演林克，在廣闊的世界中探索，體驗深度的遊戲劇情。', 1490, '15', 'Nintendo', 'Nintendo', 10000),
       ('霍格華茲的傳承', '冒險', 'adventure/hogwarts_legacy.jpg', '《霍格華茲的傳承》是一款以哈利波特世界為背景的角色扮演遊戲，玩家扮演魔法師，探索魔法世界、學習魔法、體驗故事。', 1800, '15', 'Avalanche', 'Portkey Games', 12000),
       ('黑色沙漠', '冒險', 'adventure/Black_Desert.jpg', '《黑色沙漠》是一款多人在線遊戲，以沙盒遊戲為主，可以在豐富的世界自由探索、狩獵、鍛造、種植、貿易等，還有豐富的故事。', 200, '15', 'Pearl Abyss', 'Daum', 8000),
       ('魔物獵人 世界', '冒險', 'adventure/Monster_Hunter.jpg', '《魔物獵人 世界》是一款大型角色扮演遊戲，玩家與玩家合作，探索廣大的世界、狩獵怪獸、鍛造裝備，體驗高度成就感的狩獵遊戲。', 920, '15', 'Capcom', 'Capcom', 9000),
       ('陰森之子', '冒險', 'adventure/Sons_of_the_Forest.webp', '《陰森之子》是一款生存遊戲，玩家在森林中探索、生存、解謎，面對各種可怕的生物，尋找真相。遊戲有驚人的體驗和豐富的劇情。', 490, '18', 'Endnight Games', 'Newnight', 9600),
       ('綠色地獄', '冒險', 'adventure/GREEN_HELL.jpg', '《綠色地獄》是一款生存恐怖遊戲，玩家在叢林中生存、尋找食物、建造住所，同時還要應對疾病和其他危險。具有極高的挑戰性和獨特的風格。', 410, '18', 'Creepy Jar', 'Creepy Jar', 5500),
       ('方舟：生存進化', '冒險', 'adventure/ARK.jpg', '《方舟：生存進化》是一款生存遊戲，玩家在史前世界生存、建造基地、養殖恐龍、戰鬥，與其他玩家或者獸類對抗，體驗沙盒遊戲風格。', 320, '15', 'Studio Wildcard', 'Studio Wildcard', 8000),
       ('異塵餘生4', '冒險', 'adventure/Fallout4.png', '《異塵餘生4》是一款末日冒險遊戲，以核災後的美國為背景，玩家在荒蕪世界尋找資源、完成任務。游戲有許多道德選擇，可以自由探索世界。', 599, '15', 'Bethesda', 'Bethesda', 9000),
       ('刺客教條3', '冒險', 'adventure/Fallout4.png', '《刺客教條3》是一款以獨立戰爭為背景的冒險遊戲，玩家扮演印第安的殺手，透過探索世界、完成任務、進行潛行和戰鬥等遊戲內容。', 565, '15', 'Ubisoft', 'Ubisoft', 8500),
       ('BeamNG.drive', '模擬', 'simulation/BeamNG_drive.jpg', '《BeamNG.drive》是一款真實物理模擬遊戲，玩家駕駛各種車輛，體驗逼真的碰撞、損壞和物理效果，並與其他玩家分享自己的創作。', 378, '15', 'BeamNG', 'BeamNG', 9000),
       ('模擬市民4', '模擬', 'simulation/theSims4.jpg', '《模擬市民4》是一款模擬人生的遊戲，可以創建虛擬人物、建造房屋、發展職業、社交互動、體驗各種生活事件和情感體驗，並自由創作和分享。', 200, '15', 'Maxis', 'EA', 13000),
       ('密室逃脫模擬器', '模擬', 'simulation/Escape_simulator.jpg', '《密室逃脫模擬器》是一款逃脫類型的遊戲，玩家在虛擬世界中尋找線索、解謎、找到出口，避開障礙和敵人，進行越獄或逃脫。', 266, '12', 'Pine Studio', 'Pine Studio', 8800),
       ('漁帆暗湧', '模擬', 'simulation/DREDGE.jpg', '《漁帆暗湧》是一款模擬捕魚遊戲，玩家可以進行釣魚、升級船隻、完成支線任務等。此外，到了夜晚還會觸發恐慌，遊戲玩法很新奇。', 750, '12', 'Black Salt Games', 'Team17', 6500),
       ('海港物語', '模擬', 'simulation/Havendock.jpg', '《海港物語》放在這個舒適的模擬遊戲中好好發揮吧。建造屬於流放者的避風灣、管理資源，並在一片汪洋上活出最精彩的人生。', 266, '12', 'YYZ', 'IndieArk', 4000),
       ('大都會：天際', '模擬', 'simulation/Cities.jpg', '《大都會：天際》是一款模擬城市建設的遊戲，建立自己的城市，滿足市民的需求，並控制城市的發展和進步，以創建更具個性化的城市。', 808, '12', 'Colossal Order', 'Paradox Interactive', 8000),
       ('動物園之星', '模擬', 'simulation/Planet_Zoo.jpg', '《動物園之星》是一款動物主題的模擬遊戲，玩家可以創建自己的動物園、照顧動物，提供了豐富的種類和建築，讓玩家打造自己的夢幻動物園。', 975, '12', 'Frontier Developments', 'Frontier Developments', 7000),
       ('浪貓', '模擬', 'simulation/stray.jpg', '《浪貓》是一款未來世界背景下遊戲，玩家扮演廢棄都市中的貓，探索城市和解謎題，和機器人或動物互動，揭開一個關於未來和人工智慧的神秘故事。', 539, '12', 'BlueTwelve', 'Annapurna Interactive', 8800),
       ('全面戰爭模擬器', '模擬', 'simulation/TABS.jpg', '《全面戰爭模擬器》是一款獨特的戰爭遊戲，以荒謬方式展現戰爭，玩家創建並控制軍隊，每個單位都有特點，玩家需要選擇最佳佈局來獲勝。', 318, '12', 'Landfall', 'Landfall', 9200),
       ('文明帝國6', '策略', 'simulation/Civilization.jpg', '《文明帝國6》是一款策略遊戲，玩家控制文明，透過發展科技、建立城市和擴張領土，贏得勝利。遊戲提供歷史和文化，玩家體驗各種文明。', 975, '12', 'Firaxis Games', '2K', 7500),
       ('世紀帝國4', '策略', 'simulation/AOE4.jpg', '《世紀帝國4》是一款即時戰略遊戲，採用全新的遊戲引擎和畫面。玩家可以控制自己的文明，建立城市、招募士兵，並在歷史上的戰爭中取得勝利。', 679, '12', 'Relic Entertainment', 'Xbox Game', 9200),
       ('世紀帝國2：決定版', '策略', 'simulation/AOE2.jpg', '《世紀帝國2：決定版》是一款即時戰略遊戲，採用全新的遊戲引擎和畫面。玩家可以控制自己的文明，建立城市、招募士兵，在各種戰場取得勝利。', 679, '12', 'Forgotten Empires', 'Xbox Game', 9000),
       ('人類', '策略', 'simulation/humankind.jpg', '《人類》為一款歷史宏觀的策略遊戲，你將重寫人類的進化過程，包括文化、歷史和價值觀等，創造出獨一無二的文明。你會帶領人們的將來走到多遠呢？', 1390, '15', 'AMPLITUDE Studios', 'SEGA', 8000),
       ('英雄連隊3', '策略', 'simulation/Company_of_heroes_3.jpg', '《英雄連隊3》是一款戰略遊戲，採用二戰背景，玩家控制軍隊戰鬥。有高度的戰略性和深度，提供單人和多人模式，以及豐富的戰爭場景和兵種。', 1590, '15', 'Relic Entertainment', 'SEGA', 8600), 
       ('神話世紀', '策略', 'simulation/Age_of_Mythology.jpg', '《神話世紀》是一款即時戰略遊戲，以古希臘、北歐、埃及三大神話為背景，玩家可以控制自己的文明建設城池、招募士兵、探索神話，並與其他文明進行戰爭。', 688, '15', 'SkyBox Labs', 'Xbox Game', 7000), 
       ('美麗新世界 1800', '策略', 'simulation/Anno_1800.png', '《美麗新世界 1800》是城市模擬遊戲，以工業革命為背景，玩家要在建設城市的同時發展經濟，管理資源，與其他玩家進行貿易，打造自己的帝國。', 688, '15', 'SkyBox Labs', 'Xbox Game', 7000), 
       ('聖火降魔錄', '策略', 'simulation/Fire_Emblem_engage.jpg', '《聖火降魔錄》是一款角色扮演策略遊戲，玩家扮演著一個英雄，與同伴們對抗邪惡勢力。玩家通過戰鬥和探索來提升自己，打造出屬於自己的最強英雄。', 1550, '15', 'Intelligent Systems', 'Nintendo', 7000), 
       ('三國志14', '策略', 'simulation/three_kingdoms_14.jpg', '《三國志14》是一款以三國時代為背景的戰略模擬遊戲，玩家可以扮演各大勢力的領袖，掌握政治、軍事、外交等各個方面，逐步擴張領土，統一中國。', 1790, '15', 'KOEI TECMO', 'KOEI TECMO', 5000), 
       ('NBA 2K19', '運動與競技', 'simulation/nba2k.jpg', '《NBA 2K19》是一款籃球競技遊戲。玩家可創建自己的球員，並控制球隊進行比賽。遊戲模擬了真實的NBA比賽，擁有多種模式和豐富的球員資料庫。', 600, '12', 'Visual Concepts', '2K Sports', 7500), 
       ('鬥陣特工2', '運動與競技', 'simulation/overwatch.jpg', '《鬥陣特工2》是一款多人遊戲，玩家透過角色技能、策略和配合取勝，並且有多種遊戲模式可供選擇，如控制點、護送貨物、攻擊/防禦等，深受玩家喜愛。', 938, '15', 'Visual Concepts', '2K Sports', 8000), 
       ('糖豆人', '運動與競技', 'simulation/fall_guys.jpg', '《糖豆人》是一款多人競技遊戲。遊戲中玩家需要通過多個關卡，爭取最後成為最後一名站立的Fall Guy。遊戲風格繽紛活潑，具有趣味性和互動性。', 938, '12', 'Mediatonic', 'Epic', 12000), 
       ('FIFA21', '運動與競技', 'simulation/fifa21.webp', '《FIFA21》是一款足球運動遊戲。遊戲提供包括世界各地的球隊、球員和比賽場地，玩家可以體驗逼真的比賽畫面，參加多種賽事等。', 1770, '12', 'EA', 'EA', 7900), 
       ('舞力全開', '運動與競技', 'simulation/just_dance.jpg', '《舞力全開》是一個跳舞音樂遊戲，玩家跟著舞者的動作節奏舞動，搭配音樂曲目和舞蹈風格。遊戲有多人模式，與其他玩家一同競賽。', 570, '12', 'Ubisoft', 'Ubisoft', 5500), 
       ('極限競速5', '運動與競技', 'simulation/Forza.webp', '《極限競速5》是一款以街頭賽車為主題的競速遊戲，玩家可以自由改裝車輛、調整性能，挑戰各種賽事，並與其他玩家進行線上對戰。', 800, '12', 'Turn 10 Studios', 'Microsoft', 7000), 
       ('RiMS Racing', '運動與競技', 'simulation/RiMS.jpg', '《RiMS Racing》是一款摩托車競速模擬遊戲，玩家體驗高度還原的摩托車騎乘體驗，並進行賽道上的激烈競爭，透過修整、改裝提升車輛性能，贏取榮譽。', 660, '12', 'RaceWard', 'Nacon', 5000)









       

    

    


        