--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

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
-- Name: account_0_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_0_activities (
    activity_id bigint NOT NULL,
    completed boolean
);


ALTER TABLE public.account_0_activities OWNER TO postgres;

--
-- Name: account_0_activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_0_activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_0_activities_activity_id_seq OWNER TO postgres;

--
-- Name: account_0_activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_0_activities_activity_id_seq OWNED BY public.account_0_activities.activity_id;


--
-- Name: account_34_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_34_activities (
    activity_id bigint NOT NULL,
    completed boolean
);


ALTER TABLE public.account_34_activities OWNER TO postgres;

--
-- Name: account_34_activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_34_activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_34_activities_activity_id_seq OWNER TO postgres;

--
-- Name: account_34_activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_34_activities_activity_id_seq OWNED BY public.account_34_activities.activity_id;


--
-- Name: account_35_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_35_activities (
    activity_id bigint NOT NULL,
    completed boolean
);


ALTER TABLE public.account_35_activities OWNER TO postgres;

--
-- Name: account_35_activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_35_activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_35_activities_activity_id_seq OWNER TO postgres;

--
-- Name: account_35_activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_35_activities_activity_id_seq OWNED BY public.account_35_activities.activity_id;


--
-- Name: account_36_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_36_activities (
    activity_id bigint NOT NULL,
    completed boolean
);


ALTER TABLE public.account_36_activities OWNER TO postgres;

--
-- Name: account_36_activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_36_activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_36_activities_activity_id_seq OWNER TO postgres;

--
-- Name: account_36_activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_36_activities_activity_id_seq OWNED BY public.account_36_activities.activity_id;


--
-- Name: account_38_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_38_activities (
    activity_id bigint NOT NULL,
    completed boolean
);


ALTER TABLE public.account_38_activities OWNER TO postgres;

--
-- Name: account_38_activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_38_activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_38_activities_activity_id_seq OWNER TO postgres;

--
-- Name: account_38_activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_38_activities_activity_id_seq OWNED BY public.account_38_activities.activity_id;


--
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    account_id bigint NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    points bigint NOT NULL,
    created_on timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    last_login timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- Name: accounts_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_account_id_seq OWNER TO postgres;

--
-- Name: accounts_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_account_id_seq OWNED BY public.accounts.account_id;


--
-- Name: activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.activities (
    activity_id bigint NOT NULL,
    activity_name text NOT NULL,
    image_location text NOT NULL,
    activity_type text NOT NULL,
    sponsored boolean,
    points bigint,
    lat_x numeric,
    lat_y numeric,
    lon_x numeric,
    lon_y numeric
);


ALTER TABLE public.activities OWNER TO postgres;

--
-- Name: activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.activities_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activities_activity_id_seq OWNER TO postgres;

--
-- Name: activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.activities_activity_id_seq OWNED BY public.activities.activity_id;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    city_id bigint NOT NULL,
    city_name text NOT NULL,
    image_location text NOT NULL
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- Name: cities_city_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cities_city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_city_id_seq OWNER TO postgres;

--
-- Name: cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cities_city_id_seq OWNED BY public.cities.city_id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    country_id bigint NOT NULL,
    country_name text NOT NULL,
    image_location text NOT NULL
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_country_id_seq OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_country_id_seq OWNED BY public.countries.country_id;


--
-- Name: country_city_activity_maps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country_city_activity_maps (
    activity_id bigint,
    city_id bigint,
    country_id bigint
);


ALTER TABLE public.country_city_activity_maps OWNER TO postgres;

--
-- Name: account_0_activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_0_activities ALTER COLUMN activity_id SET DEFAULT nextval('public.account_0_activities_activity_id_seq'::regclass);


--
-- Name: account_34_activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_34_activities ALTER COLUMN activity_id SET DEFAULT nextval('public.account_34_activities_activity_id_seq'::regclass);


--
-- Name: account_35_activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_35_activities ALTER COLUMN activity_id SET DEFAULT nextval('public.account_35_activities_activity_id_seq'::regclass);


--
-- Name: account_36_activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_36_activities ALTER COLUMN activity_id SET DEFAULT nextval('public.account_36_activities_activity_id_seq'::regclass);


--
-- Name: account_38_activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_38_activities ALTER COLUMN activity_id SET DEFAULT nextval('public.account_38_activities_activity_id_seq'::regclass);


--
-- Name: accounts account_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts ALTER COLUMN account_id SET DEFAULT nextval('public.accounts_account_id_seq'::regclass);


--
-- Name: activities activity_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities ALTER COLUMN activity_id SET DEFAULT nextval('public.activities_activity_id_seq'::regclass);


--
-- Name: cities city_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities ALTER COLUMN city_id SET DEFAULT nextval('public.cities_city_id_seq'::regclass);


--
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries ALTER COLUMN country_id SET DEFAULT nextval('public.countries_country_id_seq'::regclass);


--
-- Data for Name: account_0_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_0_activities (activity_id, completed) FROM stdin;
\.


--
-- Data for Name: account_34_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_34_activities (activity_id, completed) FROM stdin;
\.


--
-- Data for Name: account_35_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_35_activities (activity_id, completed) FROM stdin;
13	t
\.


--
-- Data for Name: account_36_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_36_activities (activity_id, completed) FROM stdin;
\.


--
-- Data for Name: account_38_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_38_activities (activity_id, completed) FROM stdin;
1	f
2	f
3	f
\.


--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts (account_id, password, email, name, points, created_on, last_login) FROM stdin;
36	$2a$10$IKabH4ZdsECQhHl0sfu8dunuisaDH2A4wE42jF1RmOV77kf7kVCBa	Tap15@gmail.com		0	2023-03-06 00:12:25.25096+00	2023-03-06 00:12:25.250961+00
38	$2a$10$wwUnptyTO67eWLhJQ.NUb.PDMnD7GlDzmcNgUEkoWTFAHTQ8M5odm	Tap16@gmail.com		0	2023-03-06 00:13:17.517118+00	2023-03-06 00:13:17.517119+00
35	$2a$10$9DMXV4GVrWXgQMDqzREQIO8FueP9Ea5TzSBl1v/oWCMnCs0XjTCP2	Tap@gmail.com		170	2023-03-05 22:37:09.265019+00	2023-03-05 22:37:09.265019+00
\.


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.activities (activity_id, activity_name, image_location, activity_type, sponsored, points, lat_x, lat_y, lon_x, lon_y) FROM stdin;
1	Big Ben	Countries/England/London/Activities/Big Ben/	Place	f	10	43.649799	43.649351	-79.376874	-79.375024
14	Cardiff Castle	Countries/Wales/Cardiff/Activities/Cardiff Castle/	Place	f	10	43.672162	43.629845	-79.435850	-79.314585
15	Titanic Belfast	Countries/Northern Ireland/Belfast/Activities/Titanic Belfast/	Place	f	10	43.672162	43.629845	-79.435850	-79.314585
13	Loch Ness	Countries/Scotland/Inverness/Activities/Loch Ness/	Place	f	10	43.672162	43.629845	-79.435850	-79.314585
\.


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cities (city_id, city_name, image_location) FROM stdin;
1	London	Countries/England/London/bigben.jpeg
20	Inverness	Countries/Scotland/Inverness/scotland.jpg
19	Cardiff	Countries/Wales/Cardiff/wales.jpg
21	Belfast	Countries/Northern Ireland/Belfast/nireland.jpeg
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries (country_id, country_name, image_location) FROM stdin;
15	England	Countries/England/General/bigben.jpeg
17	Scotland	Countries/Scotland/General/scotland.jpg
16	Wales	Countries/Wales/General/wales.jpg
18	Northern Ireland	Countries/Northern Ireland/General/nireland.jpeg
\.


--
-- Data for Name: country_city_activity_maps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country_city_activity_maps (activity_id, city_id, country_id) FROM stdin;
1	1	15
14	19	16
15	21	18
13	20	17
\.


--
-- Name: account_0_activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_0_activities_activity_id_seq', 1, false);


--
-- Name: account_34_activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_34_activities_activity_id_seq', 1, false);


--
-- Name: account_35_activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_35_activities_activity_id_seq', 1, false);


--
-- Name: account_36_activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_36_activities_activity_id_seq', 1, false);


--
-- Name: account_38_activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_38_activities_activity_id_seq', 1, false);


--
-- Name: accounts_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_account_id_seq', 38, true);


--
-- Name: activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.activities_activity_id_seq', 15, true);


--
-- Name: cities_city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_city_id_seq', 21, true);


--
-- Name: countries_country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_country_id_seq', 18, true);


--
-- Name: account_0_activities account_0_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_0_activities
    ADD CONSTRAINT account_0_activities_pkey PRIMARY KEY (activity_id);


--
-- Name: account_34_activities account_34_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_34_activities
    ADD CONSTRAINT account_34_activities_pkey PRIMARY KEY (activity_id);


--
-- Name: account_35_activities account_35_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_35_activities
    ADD CONSTRAINT account_35_activities_pkey PRIMARY KEY (activity_id);


--
-- Name: account_36_activities account_36_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_36_activities
    ADD CONSTRAINT account_36_activities_pkey PRIMARY KEY (activity_id);


--
-- Name: account_38_activities account_38_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_38_activities
    ADD CONSTRAINT account_38_activities_pkey PRIMARY KEY (activity_id);


--
-- Name: accounts accounts_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_email_key UNIQUE (email);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (account_id);


--
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (activity_id);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (city_id);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- Name: country_city_activity_maps fk_country_city_activity_maps_activity; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country_city_activity_maps
    ADD CONSTRAINT fk_country_city_activity_maps_activity FOREIGN KEY (activity_id) REFERENCES public.activities(activity_id);


--
-- Name: country_city_activity_maps fk_country_city_activity_maps_city; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country_city_activity_maps
    ADD CONSTRAINT fk_country_city_activity_maps_city FOREIGN KEY (city_id) REFERENCES public.cities(city_id);


--
-- Name: country_city_activity_maps fk_country_city_activity_maps_country; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country_city_activity_maps
    ADD CONSTRAINT fk_country_city_activity_maps_country FOREIGN KEY (country_id) REFERENCES public.countries(country_id);


--
-- PostgreSQL database dump complete
--

