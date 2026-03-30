[Image: image]

# Generar, ejecutar y distribuir

Tutorial

Beginner

+0XP

5 mins

0

Unity Technologies

[Image: Generar, ejecutar y distribuir]Summary

Has visto cada uno de los pasos que necesitas para crear un juego en Unity, desde el primer GameObject hasta cómo crear *scripts* personalizados.

Ya que tu juego está completo, necesitas generarlo para crear una aplicación independiente que puedes colgar en una tienda digital. Esto significa que el público podrá jugar el juego sin tener que instalar el Editor Unity y descargar todos los recursos a su computador.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se ajustan las configuraciones básicas del Player?

Q&A (0)

La aplicación que crees desde el Editor para distribuir tu juego a los usuarios se llama el Player. Antes de crearlo, vamos a ajustar algunas de sus configuraciones:

1. En la barra de menú en la parte superior, ve a **Edit > Project Settings** y selecciona **Player**. Aquí es donde puedes configurar parte de la información sobre tu juego.

[Image: image]

2. El nombre de la compañía o **Company Name** se usa para crear las carpetas donde los archivos que se crean para los juegos generados serán guardados. Puedes cambiarlo si gustas, pero no se requiere para que el proceso de generación funcione.

3. El nombre del producto o **Product Name** es el nombre de tu juego. Cambia este nombre a «El paseo encantado de John Lemon». Si quieres aprender más sobre las configuraciones del Player en general, puedes encontrar más información en la documentación.

4. El botón descargar (la flecha que apunta hacia abajo) en la parte superior de la próxima sección aquí significa que todas las configuraciones en esta sección son para las **plataformas independientes** **PC, Mac y Linux.** Si has instalado apoyo para otras plataformas cuando instalaste Unity, verás más botones en esa barra de herramientas.

[Image: image]

Se puede hacer clic en cada sección para mostrar sus configuraciones. Solo vamos a resaltar un par de ellas aquí, pero puedes encontrar una explicación sobre cada configuración en la documentación (en inglés) sobre [las configuraciones del Player para plataformas independientes](https://docs.unity3d.com/Manual/class-PlayerSettingsStandalone.html?_ga=2.84558365.526979184.1579546254-1968629467.1563827889&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951892874).

Marcar paso como completado

## 2. ¿Cómo se ajustan las configuraciones para la presentación y la resolución de pantalla?

Q&A (0)

Vamos a ajustar cómo tu juego se verá para los jugadores:

1. Haz clic en la sección Resolución de pantalla y presentación o **Resolution and Presentation** para abrirla.

[Image: image]

2. Resolución de pantalla o **Resolution** te permite definir el modo por defecto en el que el juego comenzará. La configuración **Run In Background**determina si tu juego continúa funcionando si la ventana/aplicación no tiene el enfoque. Por ejemplo, cuando esa opción está deshabilitada y la persona que está jugando el juego abre un navegador y navega la red mientras está jugando, el juego pausará hasta que regresen al juego.

3. En las opciones para la subsección **Standalone Player**, asegúrate que **Display Resolution Dialog** esté configurada como habilitada. Esto te permite mostrar una ventana cuando el usuario haya empezado el juego que le permite seleccionar la resolución:

[Image: image]

4. En la sección Splash Images, puedes cambiar la imagen que se muestra sobre el diálogo anterior (Application Config Dialog Banner) o el logo que se muestra cuando el juego empieza (Logos).

No necesitamos ajustar ninguna otra configuración. Estás listo para generar el juego.

Marcar paso como completado

## 3. ¿Cómo se genera el juego?

Q&A (0)

Ahora que has terminado las configuraciones del Player, es hora de generar tu juego. Esto toma todos los recursos o Assets (por ejemplo, los *scripts*, las imágenes, los sonidos) y los empaca en un formato optimizado para la distribución.

Para generar tu aplicación en Unity:

1. En el menú superior, selecciona **File > Build Settings**.

[Image: image]

2. La sección Scenes in Build en la parte superior lista todas las escenas que estarán incluidas en tu juego. Puedes tener escenas en tu proyecto que solo usas para testear herramientas o para encontrar fallos; por ende, Unity necesita saber cuáles debe incluir en el producto final.

Si tu última escena todavía está abierta, haz clic en Add Open Scenes (Agregar ventanas abiertas) para agregarla a la lista. También puedes arrastrar y soltar tus escenas desde la ventana Project a la sección Scenes in Build (Escenas en la generación)de la ventana Build Settings (Configuración de generación).

3. La sección Platform en la parte inferior izquierda te permite escoger en cuáles plataformas quieras que el juego funcione. Por defecto, el Editor solo apoya la plataforma en la cuál está instalado.

Para instalar más plataformas:

Abre el Unity Hub;

Haz clic en Installs;

Haz clic en los … junto a la versión de Unity apropiada;

Haz clic en Add Component y selecciona la plataforma que quieras instalar.

4. En la parte inferior derecha hay configuraciones que tienen que ver con la plataforma que está actualmente seleccionada. Estas configuraciones se usan en mayor parte para encontrar fallos o para hacer generaciones del juego especiales, por eso puedes ignorarlas por ahora.

5. Por ahora vamos a empezar una generación para la plataforma en la que instalaste el Editor. Haz clic en Build para implementar una generación

6. Crea una carpeta nueva, ponle el nombre Build y selecciónala.

Marcar paso como completado

## 4. ¿Qué es lo que produce Unity?

Q&A (0)

Unity va a generar tu juego No puedes hacer nada con el Editor Unity mientras tanto porque en este momento está:

Comprimiendo y empacando todos tus recursos o Assets;

Detectando e ignorando esos que no se usan;

Compilando tus scripts en una forma optimizada.

Cuando haya terminado, Unity abre la carpeta en la que el proyecto ha sido generado y encontrarás la generación ejecutable para tu plataforma (.exe en Windows, .app en mac OSX, etc., etc.).

¡Lanza el archivo ejecutable para testear tu juego!

Marcar paso como completado

## 5. Resumen

Q&A (0)

¡Has terminado este proyecto y creado una generación del paseo encantado de John Lemon! Ahora puedes enviar todos los archivos en esa carpeta Build a tus amigos para que puedan jugar tu juego.

Acabas de crear un juego completo en Unity. Pero tu viaje hacia el desarrollo de juegos solo ha empezado. Échale un vistazo al sitio web de Unity Learn para encontrar otros tutoriales y para ahondar más profundamente en otras áreas. También puedes desarrollar tu entendimiento explorando el manual (en inglés) y las referencias sobre scripts para aprender más sobre cualquier cosa que te hayamos presentado a lo largo de este proyecto.

¡Buena suerte! Estamos muy entusiasmados por ver lo que producirás en el futuro.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
