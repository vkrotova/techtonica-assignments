-- Create my table for books
CREATE TABLE books (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  description VARCHAR(255),
  url VARCHAR(255)
);
--Check content of new table
select * from public.books;

--Insert records
INSERT INTO books (title, author, genre, description, url) VALUES
('MARS', 'Fuyumi Soryo', 'Manga', 'A dramatic romance manga about love and trauma', 'https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg'),

('Demon Slayer: Kimetsu no Yaiba', 'Koyoharu Gotouge', 'Manga', '', ''),

('One Piece', 'Eiichiro Oda', 'Manga', '', 'https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg'),

('Boys Over Flowers', 'Yoko Kamio', 'Manga', '', 'https://m.media-amazon.com/images/I/91UOsHhcByL._SL1500_.jpg'),

('Sailor Moon', 'Naoko Takeuchi', 'Manga', '', 'https://i0.wp.com/www.syfy.com/sites/syfy/files/styles/1200x1200/public/wire/legacy/sailormoon.jpg'),

('Marmalade Boy', 'Wataru Yoshizumi', 'Manga', '', 'https://m.media-amazon.com/images/M/MV5BNWIxZjQxMDgtZjM4YS00ZTEyLTliNGItMDYyMzg1NWIwNzY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'),

('His and Her Circumstances', 'Masami Tsuda', 'Manga', '', 'https://m.media-amazon.com/images/I/519N1D3AWXL.jpg'),

('From Me to You', 'Karuho Shiina', 'Manga', '', 'https://m.media-amazon.com/images/I/81Jp-JCMgbL._SL1500_.jpg'),

('Good Morning Call', 'Yue Takasuka', 'Manga', '', 'https://d3tvwjfge35btc.cloudfront.net/Assets/10/049/L_p1001804910.jpg'),

('', '', '', '', ''),

('Astro Boy', 'Osamu Tezuka', 'Manga', '', 'https://upload.wikimedia.org/wikipedia/en/a/a6/Astro_Boy-08.jpg'),

('My Hero Academia', 'Kōhei Horikoshi', 'Manga', '', 'https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png');
