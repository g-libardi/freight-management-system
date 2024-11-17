CREATE TABLE vehicle_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE cargo_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE payment_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE freight_status (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE carrier (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE driver (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE freight (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    price DECIMAL NOT NULL,
    id_carrier INT NOT NULL,
    id_driver INT NOT NULL,
    id_vehicle_type INT NOT NULL,
    id_freight_status INT NOT NULL,
    id_cargo_type INT NOT NULL,
    id_payment_type INT NOT NULL,
    FOREIGN KEY (id_carrier) REFERENCES carrier(id),
    FOREIGN KEY (id_driver) REFERENCES driver(id),
    FOREIGN KEY (id_vehicle_type) REFERENCES vehicle_type(id),
    FOREIGN KEY (id_freight_status) REFERENCES freight_status(id),
    FOREIGN KEY (id_cargo_type) REFERENCES cargo_type(id),
    FOREIGN KEY (id_payment_type) REFERENCES payment_type(id)
);
