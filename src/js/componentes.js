import '../css/componentes.css'; // Por defecto Webpack no sabe como importar y tratar los archivos .css. Para solucionar ésto, se tiene que realizar una configuración específica en el archivo de configuración de Webpack usando los módulos 'style-loader' y 'css-loader'
import webpacklogo from '../assets/img/webpack-logo.png'; // Por defecto Webpack no sabe como importar y tratar los archivos de imagen. Para solucionar ésto, se tiene que realizar una configuración específica en el archivo de configuración de Webpack


export const saludar = nombre => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append(h1);

    // Img
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
};