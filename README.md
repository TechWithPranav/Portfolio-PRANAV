# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


****************** To run the app from initial
****************** To install imoportant libraries
****************** Watch below commands and steps

1) Install intial pakages and setup.....................................  
    npm create vite@latest ./ -- --template react 

2) Install tailwind Pakages ..............................

    npm install -D tailwindcss
    npx tailwindcss init
    npm install --legacy-peer-deps -D postcss autoprefixer
    npx tailwindcss init -p

3) Installing various required libraries required in our project - for more explaination see "Important.txt file"............................ 

    npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

4) Run the server.......................
    npm run dev
