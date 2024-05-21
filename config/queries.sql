DROP TABLE IF EXISTS POSTS;

CREATE TABLE POSTS (
	id SERIAL PRIMARY KEY, 
	usuario VARCHAR(25),
	url VARCHAR(1000),
	descripcion VARCHAR(255),
	likes INT DEFAULT 0 CHECK (LIKES >= 0)
);

INSERT INTO POSTS (usuario, url, descripcion) VALUES 
('user1', 'https://fastly.picsum.photos/id/231/500/500.jpg?hmac=1esUfM6PFf1cma0OUojGMBAjfrNQ_0Hmir8wvuJtj6Y', 'descripcion1'),
('user2', 'https://fastly.picsum.photos/id/261/500/500.jpg?hmac=ezWMIhZgsZogKMR2UTydJ6yjX2G_bvspYtAkXQJ37Lo', 'descripcion2'),
('user3', 'https://fastly.picsum.photos/id/133/500/500.jpg?hmac=mvAWcFjxl48pXjpOl4Ukw72TUxTLO4njcBCV-9nMFNU', 'descripcion3');