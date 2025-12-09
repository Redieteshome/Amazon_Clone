# Amazon Front-End Clone

This is an **Amazon frontend clone**, built primarily for learning and demonstration purposes.

* Implemented **product catalog**, **cart system**, **checkout**, and **dynamic product pages**.
* Integrated **Firebase authentication and payments**.
* Built using **React** and **CSS**, showcasing **SPA routing**, **state management**, and **modern frontend practices**.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Setup & Installation](#setup--installation)
* [Environment Variables](#environment-variables)
* [Build & Deployment](#build--deployment)
* [License](#license)

## Demo

Frontend deployed on Netlify: [https://frontend-amazon1.netlify.app/]

> Browse products, add to cart, and explore dynamic product pages with a responsive UI. Payments are simulated with Firebase.

## Features

* Browse and search products dynamically.
* View detailed product pages.
* Add, remove, and update items in the cart.
* Checkout flow with Firebase payments.
* Authentication with Firebase (signup/login).
* Responsive design for desktop and mobile.
* SPA routing with React Router.

## Tech Stack

* **Frontend:** React
* **Styling:** CSS / SCSS
* **Routing:** React Router
* **Backend & Data:** Firebase or static JSON
* **Deployment:** Netlify

## Project Structure

```
Amazon_Clone/
├─ src/                # React source code
│  ├─ components/      # Product, Cart, Navbar, etc.
│  ├─ pages/           # Home, Product, Checkout, Error
│  ├─ assets/          # Images, icons
│  ├─ db.js            # Static product data
│  └─ App.jsx
├─ package.json
└─ README.md
```

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/amazon-clone.git
```

2. Navigate to the project folder:

```bash
cd amazon-clone
```

3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm run dev
```

* The frontend will start at `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the project root if using Firebase:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxx
VITE_FIREBASE_APP_ID=xxxxxx
```

*Used for authentication and payment simulation.*

## Build & Deployment

1. Build for production:

```bash
npm run build
```

2. Deploy to Netlify:

* **Base directory:** leave empty (root folder)
* **Build command:** `npm run build`
* **Publish directory:** `dist`
* Add your Firebase keys as environment variables in Netlify.

## License

This project is **open source** and available under the [MIT License](LICENSE).
