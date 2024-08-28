# phishing

## Informacion acerca de este phishing

**En esta ocasion clonaremos la pagina de _amazon_, para obtener las credenciales de inicio de sesion del usuario**

**Vector de ataque**

- Le llega un mensaje a la victima por correo electronico o sms.
- Se asume que la victima tiene una cuenta creada en amazon
- Se le informa que su paquete necesita revision por un problema de entrega
- Agregamos el link a nuestra pagina pishing
- Y esperamos que la victima ingrese sus credenciales
- Cuando termine, se le redireccionara a la pagina oficial de amazon, y creera que fue un error y no se dara cuenta

Necesitas clonar el proyecto en tu computadora con git clone.

- [x] Necesitaras xampp para probar el proyecto ya que esta escrito en php
- [ ] Los usuarios se cargan a una base de datos MySql donde se guardan las credenciales de este.
- [ ] Aparte se guardan en un bloc de notas indicando las credenciales de las mismas
- [ ] Tienes una pagina especial para ver las credenciales sin necesidad de entrar a phpmyadmin, usando la contrasena y usuario
- [ ] Lo puedes desplegar en una servidor real con Heroku

## Informacion de este phishing

Este phishing fue creado con las siguientes herramientas:

- **HTTtracker** -> Nos ayuda a crear un clon de la pagina que estamos clonando, pero esto nos ayuda a tener una mejor personalizacion en la pagina.
- **PHP** -> Para guardar los datos y enviarnos a nosotros las credenciales es importante usar PHP, ya que nos permite de una forma facil trabajar con esto.
- **MySql** -> Para guardar los datos en una base de datos
