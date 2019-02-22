# pagina-indra
La pagina fue desarrollada para la parte de frontend con angular y en la parte de backend con nodejs y usando la base de natos mongoDB.
El primer paso es crear una database en mongoDB, llamada noticias.
En una ventana de comando accedemos a la carpeta de backend, luego mandamos el comando npm start para iniciarlo.
En gig yo subí el archivo con todos los modulos de node necesarios peor en caso tal de que no funcione, crear otra carpeta
de backend, el punto de partida es indexjs y licencia MIT, copiar los archivos y realizar las siguientes instalaciones desde la ventana de comando:
npm install express --save
npm install body-parser --save
npm install connect-multiparty --save
npm install mongoose --save
npm install nodemon --save-dev
En el caso de frontend los archivos están en la carpeta pagina-indra, yo adjunte todas los documentos necesarios pero en caso de no
funcionar desde la ventana de comando crear un nuevo archivo de angular llamado pagina-indra y copiar los archivos del src
y los documentos .jsoPuede ocurrir un error con Rxjs, en caso tal instalar la libreria
npm install --save rxjs-compat

Tanto el backend como el frontend deben estar funcionando al tiempo, además de mongoDB y su demonio.
En el caso de fronted para tener acceso a la web se lanza el comando ng serve en la ventana de comandosy en el de backend según mis configuraciones
se lanza el comando npm start
Recordar que en todo momento la base de datos debe estar conectada también.
