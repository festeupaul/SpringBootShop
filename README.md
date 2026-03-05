# Spring Boot Shop

## Overview

Spring Boot Shop is a comprehensive full-stack e-commerce web application designed to deliver a seamless and interactive shopping experience. The project integrates a modern, responsive user interface with a robust, highly scalable backend system. It encompasses core e-commerce functionalities such as product catalog browsing and management, while also featuring advanced capabilities like caching for performance optimization and real-time chat for user support. 

## Live Links

* **APP URL:** [https://shop-paul.netlify.app/](https://shop-paul.netlify.app/)
* **API Swagger Documentation:** [https://my-shop-n0nv.onrender.com/swagger-ui/index.html#/](https://my-shop-n0nv.onrender.com/swagger-ui/index.html#/)

## Architecture

The application is built using a decoupled client-server architecture, ensuring a clear separation of concerns between the user interface and the business logic. 

* **Frontend (Client-Side):** The user interface is developed using React.js (JavaScript). It provides a dynamic Single Page Application (SPA) experience, consuming data through HTTP requests to the backend. The production build is hosted on Netlify for fast and reliable global delivery.
* **Backend (Server-Side):** The core business logic and RESTful APIs are powered by Java and the Spring Boot framework. The backend exposes endpoints for the frontend to interact with, fully documented using Swagger UI. It is deployed in the cloud using Render.
* **Database (Relational Storage):** PostgreSQL is utilized as the primary relational database to securely store structured data such as users, products, and transactional records. The production environment leverages Neon for a serverless PostgreSQL solution.
* **Caching Layer:** Redis is integrated into the architecture to cache frequently requested data. This significantly reduces database load and improves the overall response time of the application. Upstash provides the cloud-based Redis infrastructure.
* **Real-Time Communication:** Firebase Firestore is integrated to facilitate a real-time chat feature, allowing instant messaging capabilities within the platform.
* **Infrastructure & Containerization:** For local development and testing, Docker and Docker Compose are used to quickly spin up the required services (database, cache) in isolated containers, ensuring environment consistency.

## Use Cases & Application Flow

This section outlines the primary user journeys within the application, demonstrating both the customer shopping experience and the administrative management tools.

### 1. Customer Shopping Experience

**1.1 User Login**
The journey begins at the login screen. The user inputs their credentials (e.g., as a `customer`) to access the platform securely.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 22 33" src="https://github.com/user-attachments/assets/8e43417a-54fd-4def-86fe-5d72b11201b7" />

**1.2 Product Browsing and Live Support**
Upon successful login, the customer is directed to the "Product Collection" page. Here, they can browse available items, check real-time stock, and open the "Live Support" widget to chat directly with an administrator if they need assistance.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 23 10" src="https://github.com/user-attachments/assets/73c545bc-d75f-4060-b0d3-88f3745097e2" />


**1.3 Adding Items to Cart**
When the customer clicks "Add to Cart", a confirmation modal appears, notifying them that the selected product has been successfully added to their shopping cart.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 25 29" src="https://github.com/user-attachments/assets/e60b0765-025d-4533-a311-4f7d7d829f9a" />


**1.4 Reviewing the Shopping Cart**
By navigating to the cart, the customer can review their selected items, verify the quantities, and view the total price before proceeding to checkout.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 25 40" src="https://github.com/user-attachments/assets/cd4d0b06-7ac7-43bd-8920-056c2674f2b1" />


**1.5 Order Confirmation Prompt**
Upon clicking "Complete Order", a final confirmation prompt asks the user to verify the total amount, preventing accidental purchases.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 25 48" src="https://github.com/user-attachments/assets/eb6b5282-33b6-4f1e-aea6-49e9530586a5" />

**1.6 Successful Checkout**
After confirmation, a success modal informs the customer that their order has been placed successfully.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 25 54" src="https://github.com/user-attachments/assets/0a9724db-54a0-430f-b156-4e2c90479e2f" />

**1.7 Post-Purchase Stock Update**
Returning to the product collection, the inventory is updated in real-time. The stock for the purchased items immediately reflects the deduction based on the completed order.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 26 00" src="https://github.com/user-attachments/assets/a0bd3afc-94ec-4c1e-8a6c-6fd0a53c1248" />

---

### 2. Administrator Management Flow

**2.1 Admin Dashboard Overview**
Users with the `ADMIN` role have access to a dedicated dashboard. This provides a quick, high-level overview of the store's metrics, including the total number of products, registered users, and alerts for products with low stock.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 21 45" src="https://github.com/user-attachments/assets/f8658120-39a8-4bcc-a2a2-31ff00eee3b7" />

**2.2 Product Management and Editing**
Administrators can easily manage the catalog. The editing interface allows them to update product details such as the name, price, available stock, and image URL, with a live preview of the product image.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 21 23" src="https://github.com/user-attachments/assets/a97f40dd-6042-4837-a7f1-258c51346e85" />

**2.3 Customer Support (Inbox)**
The admin panel includes a "Messages Inbox" section integrated with the real-time chat feature. Admins can view incoming messages from customers and reply instantly to provide support and answer queries.

<img width="1470" height="755" alt="Screenshot 2026-03-05 at 09 22 12" src="https://github.com/user-attachments/assets/ed76409b-6e00-40b4-bc55-bb0b57a2da87" />

---

## Documentation

* [REACT Documentation site](https://alexandrugh.github.io/react-project-doc/)
* [Project requirements next steps](https://alexandrugh.github.io/AC_Inginerie_Software_2025-2026/)
* [Full Project and interview documentation](https://alexandrugh.github.io/Shop-Project-Documentation/)
* [React video tutorial 1](https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=15397s)
* [React video tutorial 2](http://youtube.com/watch?v=G6D9cBaLViA&t=4513s)
* [CRUD API Documentation](https://blog.stoplight.io/crud-api-design)

## Required Software Links

### LOCAL

* [React npm](https://nodejs.org/dist/v24.12.0/node-v24.12.0-x64.msi)
* [Redis Cache](https://github.com/tporadowski/redis/releases)
* [Postgresql](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* [Docker](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-amd64)
* [Realtime Chat - Firestore Firebase](https://firebase.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&utm_content=text-ad&utm_term=KW_firebase%20firestore&gclsrc=aw.ds&gad_source=1&gad_campaignid=23417478215&gbraid=0AAAAADpUDOizd9KM31u2r1F6jQWGrpA2X&gclid=Cj0KCQiAyP3KBhD9ARIsAAJLnnbk0Jj7RKvO_rgBBXhibp2-W-IEfwzLSZm-FEbG_-X3ssf5y5cZSzEaAhCNEALw_wcB)

### Cloud

* [React - Netlify](https://www.netlify.com/)
* [Spring Boot - Render](https://render.com/)
* [Postgresql - Neon](https://neon.com/)
* [Redis Cache - UpStash](https://upstash.com/)

## Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone [https://github.com/festeupaul/SpringBootShop.git](https://github.com/festeupaul/SpringBootShop.git)
