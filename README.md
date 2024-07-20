# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


****************** To run the app from initial
****************** To install imoportant libraries
****************** Watch below commands and steps

1) Install intial pakages and setup.....................................  
    -npm create vite@latest ./ -- --template react 

2) Install tailwind Pakages ..............................

    -npm install -D tailwindcss
    -npm install --legacy-peer-deps -D postcss autoprefixer
    -npx tailwindcss init -p

3) Installing various required libraries required in our project - for more explaination see "Important.txt file"............................ 

    -npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

    -npm install --legacy-peer-deps three


4) install magic UI ----------------------------
    MAGIC UI : 
    - go to this link and carry on whather they say ......https://magicui.design/docs/installation/react
    - U have to create lib/utils.js  folder under src folder and then paste
    - Now u can use any component we want
    For ex : animated list : https://magicui.design/docs/components/animated-list
    - go in installation ---> go in manual-----> and create the file named given and extension should be .jsx
    - then demo file and in that put preview wala code.......
    - now in any jsx component u can call that demo wala file
    - Note : we can call tsx file in jsx file so dont worry
    Note : all component files of magic ui is in typescript    




4) Run the server.......................
    -npm run dev
