--
-- PostgreSQL database dump
--

\restrict 6tEBQyCH6iYc8w8NP3Yc1w6TbC1OYAGrbNt8hbnKKwxqrFDPVHq9BT8Ui92IwhF

-- Dumped from database version 14.20 (Homebrew)
-- Dumped by pg_dump version 14.20 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: violettakrotova
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255),
    author character varying(255),
    genre character varying(255),
    description character varying(255),
    url character varying(255)
);


ALTER TABLE public.books OWNER TO violettakrotova;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: violettakrotova
--

ALTER TABLE public.books ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: violettakrotova
--

COPY public.books (id, title, author, genre, description, url) FROM stdin;
1	MARS	Fuyumi Soryo	Manga	A dramatic romance manga about love and trauma	https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg
2	Demon Slayer: Kimetsu no Yaiba	Koyoharu Gotouge	Manga		
3	One Piece	Eiichiro Oda	Manga		https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg
4	Boys Over Flowers	Yoko Kamio	Manga		https://m.media-amazon.com/images/I/91UOsHhcByL._SL1500_.jpg
5	Sailor Moon	Naoko Takeuchi	Manga		https://i0.wp.com/www.syfy.com/sites/syfy/files/styles/1200x1200/public/wire/legacy/sailormoon.jpg
6	Marmalade Boy	Wataru Yoshizumi	Manga		https://m.media-amazon.com/images/M/MV5BNWIxZjQxMDgtZjM4YS00ZTEyLTliNGItMDYyMzg1NWIwNzY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg
7	His and Her Circumstances	Masami Tsuda	Manga		https://m.media-amazon.com/images/I/519N1D3AWXL.jpg
8	From Me to You	Karuho Shiina	Manga		https://m.media-amazon.com/images/I/81Jp-JCMgbL._SL1500_.jpg
9	Good Morning Call	Yue Takasuka	Manga		https://d3tvwjfge35btc.cloudfront.net/Assets/10/049/L_p1001804910.jpg
10					
11	Astro Boy	Osamu Tezuka	Manga		https://upload.wikimedia.org/wikipedia/en/a/a6/Astro_Boy-08.jpg
14	MARS14	Fuyumi Soryo14	Manga	A dramatic romance manga about love and trauma	https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg
12	MARS14	Fuyumi Soryo14	Manga	A dramatic romance manga about love and trauma	https://bloomreviewsblog.com/wp-content/uploads/2016/09/rei-kira-bike.jpg
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: violettakrotova
--

SELECT pg_catalog.setval('public.books_id_seq', 15, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: violettakrotova
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 6tEBQyCH6iYc8w8NP3Yc1w6TbC1OYAGrbNt8hbnKKwxqrFDPVHq9BT8Ui92IwhF

