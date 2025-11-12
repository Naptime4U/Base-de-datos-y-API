DROP DATABASE IF EXISTS productos;

CREATE DATABASE productos;
USE productos;


CREATE TABLE productos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE clientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO productos (nombre, descripcion, precio) 
VALUES 
  ('Monitor 17 pulgadas', 'Monitor plano LCD', 110.22),
  ('Teclado', 'Teclado USB en español', 20.12),
  ('Impresora', 'Impresora láser a color', 360.05);


INSERT INTO clientes (nombre, apellido) 
VALUES 
  ('John', 'Doe'),
  ('Jane', 'Doe'),
  ('Juan', 'Doe');