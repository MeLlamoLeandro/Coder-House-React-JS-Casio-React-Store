# Proyecto Final - React JS - CASIO REACT STORE

## Descripción:

Proyecto final del curso React-JS de CoderHouse, app de ecommerce de la marca "CASIO",
# User story/brief:
Un usuario puede ingresar, navegar por mas de 60 productos en diferentes categorías e ir a sus detalles.
* Desde el detalle se visualiza la descripción, foto, precio y es posible ingresarlo al carrito.
* Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
* Al ingresar los datos de compra , envio y pago puede generar una 'orden de compra'
* Al clickear en ‘Generate Order’ se guardar en la base de datos una orden que contiene todos los productos, la fecha y retorna el ID de la order de compra a la pantalla.

## Extrass:
* auth/createUser: Creacion de cuenta de usuario utilizando una direccion de email para el logue.
* auth/login: Se puede utilizar el servicio de autenticación con una dirección de email en Firebase. Si un usuario está logueado, el checkout y el loguinWidget lo identifica como ‘signed as xxxx@email.com’ con la direccion utilzada para loguearse.
En funcion de que si el usurio permanece logueado o no, se cambiaran las opciones del loguinWidget y el Checkout.
* SearchBar: La barra de busqueda permite hacer una "busqueda de texto simple" de productos con algunas palabras claves tales como: 
'Digital', 'G-Shock Move', 'Analog-Digital', 'Vintage', 'Full Metal', 'Basic', 'Standard', 'BGD-565', 'MR-G','Metal Covered' , 'Data Bank', 'Edifice', 'Printing Calculators' entre otras...
* Confirmación de compra por E-mail: al generar la orden se recibirá un template con detalle de la compra a la dirección brindada.
* Cart persistente: El cart es persistente a la recarga del navegador (local/session storage)


## Despliegue 📦

https://casio-react-store.netlify.app/

## Construido con 🛠️

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="REACT" alt="REACT" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" alt="Bootstrap" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain-wordmark.svg" title="Firebase" alt="Firebase" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40"/>  
</div>
 
 ## Capturas 📷
 <div id = "header" align = "center">  
  <img src="https://bancomonaco-simulador.netlify.app/img/captura1-min.png?raw=true"  height="50%" />
  <img src="https://bancomonaco-simulador.netlify.app/img/captura2-min.png?raw=true"  height="50%" />
  <img src="https://bancomonaco-simulador.netlify.app/img/captura3-min.png?raw=true"  height="50%" />
  <img src="https://bancomonaco-simulador.netlify.app/img/captura4-min.png?raw=true"  height="50%" />
</div>
 
 
## Autor ✒️

* **Leandro Giffoni** - *Diseño wireframe, desarrollo web y multimedia* - [MeLlamoLeandro](https://github.com/MeLlamoLeandro)

## Agradecimientos 🎁

* Muchas gracias a [Javier](https://github.com/JavierVeron) y Santiago , excelentes profesores, por todo lo brindado tanto en conocimiento y apoyo 📢.


<hr>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
