# CRUD Productos y Categorías - React + Spring Boot

Este proyecto es un sistema de gestión de **productos** y **categorías** utilizando:

- **Frontend:** React
- **Backend:** Spring Boot

Permite crear, leer, actualizar y eliminar productos y categorías de manera rápida y sencilla.

---

## 📁 Estructura del proyecto
```bash
crud-productos-react-springboot/
│
├── backend/
│ └── backend_spring/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/tecsup/
│ │ │ │ ├── BackendSpringApplication.java
│ │ │ │ ├── controller/
│ │ │ │ │ ├── CategoriaController.java
│ │ │ │ │ └── ProductoController.java
│ │ │ │ ├── model/
│ │ │ │ │ ├── Categoria.java
│ │ │ │ │ └── Producto.java
│ │ │ │ └── repository/
│ │ │ │ ├── CategoriaRepository.java
│ │ │ │ └── ProductoRepository.java
│ │ │ └── resources/
│ │ │ ├── application.properties
│ │ │ ├── static/
│ │ │ └── templates/
│ │ └── test/
│ │ └── java/com/tecsup/BackendSpringApplicationTests.java
│ └── pom.xml
│
└── frontend/
└── frontend-react/
├── src/
│ ├── api.js
│ ├── App.js
│ ├── App.css
│ ├── App.test.js
│ ├── index.js
│ ├── index.css
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ ├── logo.svg
│ └── components/
│ ├── Home.jsx
│ ├── ProductForm.jsx
│ ├── ProductList.jsx
│ ├── CategoryForm.jsx
│ └── CategoryList.jsx
└── package.json
```

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) (para React)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/) (para Spring Boot)
- Git

---

## 🚀 Instalación y ejecución

### 1️ Clonar el repositorio

```bash
git clone https://github.com/lynmad05/crud-productos-react-springboot.git
cd crud-productos-react-springboot
```
El backend correrá en http://localhost:8088/api.

### 2️ Levantar el backend (Spring Boot)
```bash
cd backend/backend_spring
mvn spring-boot:run
```
El backend correrá en http://localhost:8088/api.

### 3️ Levantar el frontend (React)
```bash
cd frontend/frontend-react
npm install
npm start
```

El frontend correrá en http://localhost:3000.


### 🖥️ Uso

- Abrir el navegador y acceder a http://localhost:3000.

- Desde la página de inicio podrás: Gestionar productos y  Gestionar categorías: Crear, editar y eliminar productos y categorías usando la interfaz.

### 🛠️ Tecnologías utilizadas

Frontend: React, Bootstrap 5, React Router, Axios

Backend: Java, Spring Boot, Spring Data JPA, Maven

Base de datos: H2 (configurable en application.properties)

### ⚠️ Notas

Asegúrate de iniciar primero el backend antes del frontend.

Todos los archivos del frontend están dentro de frontend/frontend-react y del backend en backend/backend_spring.

Se pueden hacer commits y pushes del proyecto completo sin separar frontend y backend, aunque se recomienda mantener la estructura de carpetas para claridad.

### 👤 Autora
https://github.com/lynmad05 
