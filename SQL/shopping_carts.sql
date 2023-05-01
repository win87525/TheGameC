CREATE TABLE shopping_carts ( -- 購物車資料表(一欄表示一個商品)
  cart_id INT PRIMARY KEY AUTO_INCREMENT, -- 購物車編號
  user_id INT NOT NULL,  -- 使用購物車的會員
  product_id INT NOT NULL, -- 購物車內的商品(一欄代表一個商品)
  price INT UNSIGNED NOT NULL, -- 購物車內單項商品價格
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);