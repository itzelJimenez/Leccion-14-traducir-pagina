# Leccion-14-traducir-pagina

FUNCI�N TRANSLATE:
- Dentro de una func�on llamada translate(); realic� lo siguiente.
- Para taducir la p�gina lo primero que hay que hacer es extraer las partes del documento mediante el Id correspondiente. Dichas extracciones se encuntran en las variables title, email y password. Como la etiqueta span y el bot�n no tienen Id entonces se revisan las propiedades que tiene cada uno, es as� que a span se le llama mediante el Tag y a el bot�n mediante la clase btn, cabe aclarar que es importante colocarle al final el no. de elemento al que corresponden (pues dichas funciones las devuelven como arreglos).


- Una vez extraidas las variables se les atribuye el nuevo texto que corresponde al texto traducido, mediante el innerHTML. Con ello lo unico que hacemos es sustituir los valores de los textos en ingl�s de la p�gina.

Despu�s de escribir la funci�n se llama a la funci�n para que realice lo solicitado al momento de recargar.
---
EN HTML
- Agregu� al bot�n un evento onclick que correspondiera a la funci�n mostrarResultado();
- Gener� una nueva secci�n div, en la que declar� 5 Tags con sus Id's respectivos. La primer etiqueta corresponde a un <h2> dos con la etiqueta <h4> que corresponder�n a mostrar los textos "Tu correo electr�nico es:" y "Tu contrase�a es:", las otras dos secciones corresponden a la impresi�n de los datos agregados por el usuario y tienen la etiqueta <h5>.
---
FUNCI�N MOSTRAR RESULTADO:
- Dentro de la funci�n mostrarResultado(); realic� lo siguiente.
- Gener� dos variables llamadas email y password, en las cuales se guarda el valor ingresado por el usuario.
- Despu�s extraje mediante 4 variables los Id�s correspondientes a las etiquetas sobre las que se escribir�n los resultados. 
- Finalmente  escribimos sobre los nodos espec�ficados los valores a imprimir, mediante innerHTML.
