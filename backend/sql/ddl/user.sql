CREATE TABLE user (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45),
    password VARCHAR(45),
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    email VARCHAR(250),
    role VARCHAR(45),
    status BIT,
    phoneNumber VARCHAR(45),
    address VARCHAR(300)
);