

# Vite + React + Tailwind CSS App

This project is built using **Vite**, **React**, and **Tailwind CSS**. It sets up a fast development environment and uses modern tooling.

### Steps to Set Up

1. **Create a Vite Project**  
   Run the following commands to create a new Vite project:

   ```bash
   npm create vite@latest my-vite-app
   cd my-vite-app
   npm install
   ```

2. **Install Tailwind CSS**  
   To install Tailwind CSS and its necessary dependencies, run:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

3. **Configure Tailwind**  
   Update the `tailwind.config.js` file:

   ```js
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Create CSS File**  
   Add the following to a new `src/index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Import Tailwind in `src/main.js`**  
   Import your `index.css` file in the main JavaScript/JSX file:

   ```js
   import './index.css';
   ```

6. **Run the Development Server**  
   Start the development server:

   ```bash
   npm run dev
   ```
7. **Installing Axios in `frontend`**
    use this command
    ```bash
    npm install axios
    ```

---

