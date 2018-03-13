GET: / 200  /*success*/
hola mundo
 
POST:/movie 201  /*201 creacion exitosa*/
crear una pelicula

GET: /movie 200  /*success*/
obtener todas las peliculas

GET: /movie/:id 200  /*success*/
obtener un sola pelicula

PUT: /movie/:id 200 /*success*/
modificar una pelicula

DELETE : /movie/:id 400  /* el recurso esta vacio */
eliminar una pelicula

POST /user 201       /*201 creacion exitosa*/
crea un usuario

GET: /user/:id 200   /*success*/
obtiene un usuario

PUT: /user/:id 200   /*success*/
actualiza al usuario

DELETE: /user/:id 400  /* el recurso esta vacio */
elimino un usuario

POST /auth 201     /*201 creacion exitosa*/
token para el usuario

