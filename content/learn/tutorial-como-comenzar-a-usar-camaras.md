[Image: image]

# ¿Cómo comenzar a usar cámaras?

Tutorial

Beginner

+10XP

25 mins

1

Unity Technologies

[Image: ¿Cómo comenzar a usar cámaras?]Summary

En este proyecto, aprenderás a trabajar con cámaras tanto desde una perspectiva técnica como de diseño.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Distinguir entre los diferentes puntos de vista de la cámara para brindar a los usuarios finales la orientación adecuada a la Scene (Escena).
- Explorar los efectos de la configuración de la cámara en la experiencia del usuario.

Resources

- [CreativeCore_Camera_6000.0.zip](https://unity-connect-prd.storage.googleapis.com/20241014/68e0512d-c176-49b3-ae60-5543c6038ffd/CreativeCore_Camera_6000.0.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953035066)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Pocas cosas son más omnipresentes en Unity que una cámara. Las cámaras se incluyen automáticamente con cada nueva Escena creada en el Editor y no se puede probar una experiencia interactiva sin una. A pesar de su importancia para un proyecto final, a menudo se pasan por alto. Sin embargo, un diseño cuidadoso de la cámara puede mejorar cualquier experiencia interactiva. Las cámaras pueden ayudar a transmitir la atmósfera y narración de una historia, indicar las características visuales importantes a las que el usuario debe prestar atención e incluso ayudar al usuario a entender su propia función en la experiencia. En este proyecto, aprenderás a trabajar con cámaras tanto desde una perspectiva técnica como de diseño.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

#### ¿No tienes experiencia con Unity?

Si no tienes experiencia con Unity, te damos la bienvenida. El [**trayecto de aprendizaje Aspectos básicos de Unity**](https://learn.unity.com/pathway/unity-essentials) está diseñado para prepararte para crear en el Editor de Unity. Te recomendamos completar este trayecto antes de continuar con **Habilidades básicas para creadores artísticos: Cámaras**.

#### Actualiza el Unity Hub

Antes de empezar a configurar tu proyecto de Unity, considera la opción de actualizar el Unity Hub a la versión más reciente. Si utilizas una versión anterior, es posible que encuentres diferencias entre la orientación proporcionada y tu experiencia.

#### Revisa los fundamentos del Editor de Unity

Si necesitas repasar los fundamentos del Editor de Unity, puedes revisar el tutorial [**¿Cómo explorar el Editor de Unity?**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) en cualquier momento.

#### Configura tu proyecto de Unity

Para configurar tu proyecto de Unity, haz lo siguiente:

**1.** [Instala **Unity 6**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa) si aún no lo has hecho.

**2.** Descarga [el proyecto](https://unity-connect-prd.storage.googleapis.com/20241014/68e0512d-c176-49b3-ae60-5543c6038ffd/CreativeCore_Camera_6000.0.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953035066) de esta experiencia de aprendizaje.

**3.**  Identifica una ubicación adecuada en tu computadora y descomprime la carpeta del proyecto ahí. Elimina la carpeta del proyecto de Unity de su carpeta primaria vacía.

**4.** [Agrega el proyecto de Unity al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f15).

**5.**  Abre el proyecto desde el Unity Hub.

**6.** En la ventana Project del Editor de Unity, busca la carpeta Scenes (Escenas) y luego abre la Escena **Camera_Intro_Scene**.

Marcar paso como completado

## 3. Te damos la bienvenida a Habilidades básicas para creadores artísticos: Cámaras

Q&A (0)

#### ¿Cuál es el objetivo de Habilidades básicas para creadores artísticos: Cámaras?

El objetivo de esta experiencia de aprendizaje es mostrarte las funciones principales de una cámara de Unity y cómo modificarlas para obtener la toma deseada. También explorarás cómo se pueden usar las cámaras para establecer una atmósfera e insinuar la narración en una experiencia interactiva. Las habilidades que desarrollas en este proyecto se pueden aplicar en todas las industrias creativas.

#### ¿Qué haré en esta experiencia de aprendizaje?

Al trabajar en estos tutoriales, aprenderás sobre las diferentes funciones de la cámara y su uso frecuente en las experiencias interactivas. También explorarás varias Escenas que muestran las diferentes tomas de la cámara en acción para que puedas entender mejor cómo funcionan en situaciones reales dentro de la aplicación. Completarás este proyecto al aplicar todas las habilidades que aprenderás para recrear una toma de cámara con tus medios favoritos.

#### ¿Cuáles serán mis resultados de aprendizaje?

Al final de esta experiencia de aprendizaje, habrás explorado todas las funciones principales de las cámaras de Unity y podrás configurarlas con confianza para que se adapten a las necesidades de tu Escena. También habrás explorado varias tomas y ángulos populares, y tendrás un entendimiento fundamental de cómo se puede establecer la atmósfera con ellas.

Estarás listo para aplicar estas habilidades en la configuración de tomas del proyecto guiado que elegiste y de tu proyecto independiente (si estás completando el trayecto **Habilidades básicas para creadores artísticos**), o cualquier otro prototipo de experiencia en tiempo real creado con Unity.

Marcar paso como completado

## 4. ¿Quién configura las cámaras en Unity?

Q&A (0)

A diferencia de otras áreas de enfoque en Unity, la creación y el mantenimiento de cámaras no suele depender de una función de trabajo exclusiva. Más bien, el creador que trabaja en estrecha colaboración con la visión general de la experiencia tiene más probabilidades de asumir la tarea. Para los juegos, puede ser un programador que esté creando el controlador del personaje. Para la animación, los artistas de guion gráfico pueden determinar sus tomas directamente en el Editor, al igual que un director de fotografía o de cine. Debido a que este rol puede corresponder a cualquier persona, es importante que todos los creadores de Unity tengan un buen conocimiento básico de cómo funcionan las cámaras en el Editor.

Marcar paso como completado

## 5. Importancia de las cámaras en las experiencias interactivas

Q&A (0)

Cuando un creador coloca una cámara en una Escena, está determinando lo que el usuario puede ver y, a menudo, cómo debe sentir lo que está viendo. Antes de explorar las diferentes funciones de las cámaras en Unity, tomemos un momento para entender mejor su función en las experiencias interactivas.

**1.**  En **Camera_Intro_Scene,**presiona el botón **Play (Reproducir)** y, con las teclas WASD, intenta guiar al personaje jugador hacia el cubo rojo.

[Image: image]

Debido al ángulo de la cámara, es difícil notar que la plataforma en la que se encuentra el cubo rojo está inclinada y demasiado alta para que el personaje pueda saltar. Esto obliga al usuario a intentar saltar sobre ella antes de darse cuenta de que primero debe dirigirse al extremo inferior de la plataforma. En un entorno estático sin riesgos, este no es un problema importante. Sin embargo, si se trata de algún tipo de desafío externo (enemigos, un límite de tiempo para alcanzar el cubo, etc.), la falta de respuesta visual realmente frustrará al usuario.

**2**.  Presiona C en tu teclado para cambiar la vista de la cámara.

**3.**  Navega hasta el cubo en esta nueva vista.

[Image: image]

Desde este ángulo de la cámara, es mucho más fácil decir que el usuario deberá utilizar la rampa para alcanzar su objetivo.

Además de contribuir a la facilidad de uso general, la ubicación de la cámara puede desempeñar un papel importante a la hora de proporcionar pistas sobre los objetos y los personajes en el fotograma.

**4.**Presiona C en tu teclado para cambiar a la siguiente vista de cámara.

[Image: image]

En esta toma, el personaje se coloca en el centro del fotograma y el espectador está en un ángulo bajo para que eleve la mirada hacia el personaje. De forma automática, esto crea la sensación de que el personaje en la toma tiene una función importante y puede estar en una posición de poder.

**5.**Presiona C en tu teclado para cambiar a la siguiente vista de cámara.

[Image: image]

El estado de ánimo cambia en gran medida tan solo con la posición de la cámara. Aquí, el personaje todavía está en el centro de la toma y se ve desde un ángulo bajo, pero está mirando hacia otro lado y ocupando mucho menos espacio en el fotograma. Esta toma podría indicar que el personaje tiene ante sí algún tipo de desafío, pero se siente seguro de afrontarlo.

**6.**Presiona C en tu teclado para cambiar a la vista final de la cámara.

[Image: image]

En esta toma final, la cámara se subió a la altura del personaje. A pesar de la proximidad de la cámara con el personaje, como el personaje está en el tercio izquierdo del fotograma, esta toma equilibra la importancia del personaje con la del entorno. Le da al espectador una sensación de igualdad con el personaje, como si fuera un amigo o al menos parte de la conversación.

Marcar paso como completado

## 6. Explora: ¿Cómo revisar tus elementos favoritos?

Q&A (0)

Durante mucho tiempo, se ha sabido que las cámaras son un elemento importante de los medios creativos. Muchas de las reglas que se siguen en los juegos actuales se adaptaron del cine y la animación, y el cine mismo puede encontrar algunas de sus raíces de fotogramas de cámara en la escenografía para teatro. Incluso si no lo has notado de forma consciente, hay muchas señales visuales en el trabajo de la cámara que se han utilizado durante mucho tiempo para controlar no solo lo que ves, sino también lo que sientes dentro de una experiencia.

Al comenzar tu propio trabajo con las cámaras para tus experiencias interactivas, es útil consultar los elementos que te resulten particularmente atractivos. Selecciona algunos de tus juegos, películas o animaciones favoritos y observa lo que hacen con sus cámaras. Considera lo siguiente:

- ¿Cómo se posicionan las cámaras cuando los personajes o las ubicaciones importantes se presentan por primera vez?
- ¿Cuándo son las tomas de la cámara estáticas? ¿Cuando se mueven?
- ¿Algunas tomas de la cámara te parecen particularmente dinámicas? ¿Qué ves en la pantalla en esas tomas?
- ¿Cuáles son las atmósferas de la Escena cuando las cámaras están particularmente cerca de un tema importante? ¿Cuál es la atmósfera cuando están lejos?

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

Te sorprenderá descubrir que se requiere un gran trabajo para crear tomas de cámara. Si te interesa el diseño de la cámara, observa las tomas que te parezcan más interesantes y piensa cómo podrías utilizarlas en tu propio trabajo.

En el siguiente tutorial, comenzarás a explorar las distintas formas en que puedes configurar una cámara de Unity para encuadrar tu toma.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
