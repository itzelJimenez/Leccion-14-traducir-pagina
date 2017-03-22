# Leccion-14-traducir-pagina

FUNCIÓN TRANSLATE:
- Dentro de una funcíon llamada translate(); realicé lo siguiente.
- Para taducir la página lo primero que hay que hacer es extraer las partes del documento mediante el Id correspondiente. Dichas extracciones se encuntran en las variables title, email y password. Como la etiqueta span y el botón no tienen Id entonces se revisan las propiedades que tiene cada uno, es así que a span se le llama mediante el Tag y a el botón mediante la clase btn, cabe aclarar que es importante colocarle al final el no. de elemento al que corresponden (pues dichas funciones las devuelven como arreglos).


- Una vez extraidas las variables se les atribuye el nuevo texto que corresponde al texto traducido, mediante el innerHTML. Con ello lo unico que hacemos es sustituir los valores de los textos en inglés de la página.

Después de escribir la función se llama a la función para que realice lo solicitado al momento de recargar.
---
EN HTML
- Agregué al botón un evento onclick que correspondiera a la función mostrarResultado();
- Generé una nueva sección div, en la que declaré 5 Tags con sus Id's respectivos. La primer etiqueta corresponde a un <h2> dos con la etiqueta <h4> que corresponderán a mostrar los textos "Tu correo electrónico es:" y "Tu contraseña es:", las otras dos secciones corresponden a la impresión de los datos agregados por el usuario y tienen la etiqueta <h5>.
---
FUNCIÓN MOSTRAR RESULTADO:
- Dentro de la función mostrarResultado(); realicé lo siguiente.
- Generé dos variables llamadas email y password, en las cuales se guarda el valor ingresado por el usuario.
- Después extraje mediante 4 variables los Id´s correspondientes a las etiquetas sobre las que se escribirán los resultados. 
- Finalmente  escribimos sobre los nodos específicados los valores a imprimir, mediante innerHTML.
