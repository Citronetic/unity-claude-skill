[Image: image]

# 3.1: Comodidad y accesibilidad

Tutorial

Beginner

+10XP

90 mins

1

(18)

Unity Technologies

[Image: 3.1: Comodidad y accesibilidad]SummarySkills

En esta lección, aprenderás cómo reducir el riesgo de mareo por simulación y aumentar la inclusividad de tu aplicación para que la pueda utilizar el mayor número de personas posible. Al terminar esta lección, tu aplicación será más cómoda y accesible.

Esta lección forma parte del

curso: ¿Cómo crear con VR?

Languages available:

EspañolEnglishEspañolEspañol

## 1. ¿Cómo crear un canvas negro simple para hacer la disolvencia?

Q&A (0)

Cuando se carga la Scene (Escena), los usuarios se pueden sentir desconcertados al aparecer repentinamente en un mundo nuevo. Por lo general, se recomienda utilizar una disolvencia de entrada en los entornos nuevos.

**1.  Haz un nuevo canvas de tipo Screen Space (Espacio de pantalla) para la disolvencia de entrada:**

- En la Hierarchy, **Create** > **UI** > **Canvas** y llámalo «Fade_Canvas».

**2.  Haz que el canvas se procese frente a la cámara:**

- En el objeto **Canvas**, en el componente Canvas, dirígete a **Render Mode (Modo de procesado)** y elige la opción **Screen Space - Camera (Espacio de pantalla: cámara)**.
- En la propiedad **Render Camera (Cámara de procesado)**, elige tu **Main Camera (Cámara principal)**.

**3.  Haz que el canvas sea de color negro:**

- Haz clic derecho en el objeto **Fade_Canvas**y crea un **UI** > **Image**.
- En la propiedad **Color**, elige el color negro**.**
- En las propiedades **X Scale o Tamaño en el eje X,**y**Y Scale o Tamaño en el eje Y**, elige un número mayor (por ejemplo, 100) para asegurarte de que el canvas abarque todo tu campo de visión.

**4.  Haz que el canvas aparezca frente a la Main Camera y frente a todos los demás objetos:**

- En el componente Canvas, dirígete a la opción**Plane Distance (Distancia del plano)** y cambia el valor a 0.1.
- Luego, en la opción **Order in Layer (Orden en la capa)**, cambia el valor a 1.

[Image: image]

Ahora, el canvas negro debe cubrir todo el campo de visión al ejecutar el programa.

Marcar paso como completado

## 2. ¿Cómo hacer una disolvencia de entrada al cargar la Escena?

Q&A (0)

Ahora que tienes el canvas negro, debes usarlo para hacer la disolvencia de entrada cuando se carga la Escena.

**1.  Permite que el canvas y todos sus elementos se disuelvan:**

- En el objeto **Fade_Canvas**, agrega un componente Canvas Group (Grupo de Canvas) y un componente Fade Canvas (Disolver Canvas).

**2.  Haz un evento que detecte cuando la Escena esté cargada:**

- En la ventana Hierarchy, agrega un objeto vacío y cambia su nombre a «Scene Loader». Este objeto contendrá los eventos de carga de tu Escena.
- Agrega un componente On Scene Load (Al cargar la Escena) al objeto **Scene Loader**.

**3.  Haz una disolvencia de entrada desde negro al cargar la Escena:**

- En el objeto **Scene Loader**, en el evento **On Load (Al cargar)**, haz clic en el signo **+**para agregar una nueva función.
- Asigna el objeto **Fade_Canvas**.
- Selecciona el **FadeCanvas > función StartFadeOut ()** .

**4.  Oculta la imagen de color negro en la vista de Escena de forma predeterminada:**

- En el componente Canvas Group, cambia el valor de **Alpha** a 0.

[Image: image]

Ahora, debe parecer que la Escena hace una disolvencia de entrada desde negro cuando se carga. Puedes probar esto con la pantalla de la interfaz de usuario para restablecer la Escena que creaste.

**Recursos relacionados:**

- [Tutorial de disolvencia de pantalla con sombreador personalizado (en inglés)](https://www.youtube.com/watch?v=OGDOC4ACfSE)

Marcar paso como completado

## 3. ¿Cómo teletransportarse con una disolvencia?

Q&A (0)

La teletransportación representa otra oportunidad para mejorar la comodidad de los jugadores mediante la disolvencia. Normalmente, se utiliza una disolvencia breve para reducir la ilusión de movimiento («vección») y mejorar la comodidad al teletransportarse.

**1.  Agrega una funcionalidad de disolvencia a tu Teleportation Area o Área de teletransportación (tapete):**

- En tu Prefab **Rug (Tapete)**, elimina el componente Teleportation Area predeterminado y reemplázalo con el componente Teleport Area With Fade (Área de teletransportación con disolvencia) personalizado.
- En la parte inferior del nuevo componente, asigna las mismas propiedades **Interaction Layer Mask o Máscara de capa de interacción**,  **Custom Reticle o Retícula personalizada,** y **Match Orientation o Coincidir orientación** para que coincidan con las del componente original.

**2.  Agrega la funcionalidad de disolvencia a tu Teleportation Anchor o Delimitador de teletransportación (tapetes):**

- Entra en **Prefab Mode (Modo de Prefab)** en uno de tus tapetes para poder aplicar los cambios a todos los tapetes al mismo tiempo.
- Elimina el componente Teleportation Anchor predeterminado y reemplázalo con el componente Teleport Anchor With Fade (Delimitador de teletransportación con disolvencia) personalizado.
- Edita las propiedades del nuevo componente para que coincidan con las del componente original.
- **Nota**: Asegúrate de aplicar los cambios a todos los Prefabs tapetes o a todas las variantes de los Prefabs.

[Image: image]

Tus Teleportation Anchors y tu área de teletransportación ahora deben hacer una disolvencia rápida a negro cuando te teletransportas.

Marcar paso como completado

## 4. ¿Cómo agregar un panel de configuración?

Q&A (0)

Para poder agregar algunas configuraciones, primero deberás agregar un nuevo panel al que se pueda acceder desde el panel del menú principal.

**1.  Agrega un nuevo botón de configuración:**

- En la Hierarchy, haz clic derecho en el objeto **Welcome Background**y selecciona **UI > Button - TextMeshPro** para agregar un botón.
- Cambia su nombre a «Settings Button».
- En la propiedad **Source Image (Imagen de origen)**, selecciona el ícono de engranaje.
- Elimina el texto predeterminado para que el botón no tenga ningún texto.
- Cambia el tamaño y la posición del botón para que quepa bien en la esquina inferior derecha del menú.

**2.  Crea una nueva pantalla de configuración:**

- En la ventana Hierarchy, **duplica** el objeto **Welcome Background**.
- Cambia el nombre del objeto copiado a «Settings Background».
- Desactiva temporalmente el panel de bienvenida para que solo veas la pantalla de configuración y puedas editarla con mayor facilidad.

**3.  Agrega contenido que funcione como marcador de posición a la pantalla de configuración:**

- Reemplaza el contenido del panel con tres objetos de texto que funcionen como marcadores de posición («Setting 1», «Setting 2» y «Setting 3»).
- Agrega un objeto **Toggle (Alternar).** junto a cada opción y elimina el texto predeterminado generado por el objeto.
- Puedes agregar cada objeto de texto a un elemento principal para agruparlos.
- **Nota**: Utiliza texto TextMeshPro para las etiquetas en lugar de la etiqueta de texto predeterminada que se incluye con el alternador.

**4.  Reemplaza el ícono de engranaje de configuración con un ícono «X»:**

- En el componente Image (Imagen) del ícono de engranaje, cambia la propiedad **Source Image** de **Icon_Gear**a**Icon_Close**.

**5.  Permite que el usuario entre y salga libremente de estos menús:**

- En el evento **On Click (Al hacer clic)**del botón de configuración, haz que la pantalla de configuración esté activa y la pantalla de bienvenida esté inactiva.
- En el evento **On Click** del botón Close (Cerrar), haz que la pantalla de configuración esté inactiva y la pantalla de bienvenida esté activa.

**6.  Haz que el menú de restablecimiento oculte el menú de configuración cuando aparezca:**

- En el evento **On Button Press (Al presionar el botón)**del XR Rig (Rig de XR), agrega una nueva acción que deshabilite la pantalla de configuración.

[Image: image][Image: image]

Debes poder acceder al menú de configuración desde un ícono de engranaje ubicado en el menú principal, que tiene tres opciones con marcadores de posición para alternar. También debes poder regresar al panel de bienvenida desde el menú de configuración al presionar el botón Close.

Marcar paso como completado

## 5. ¿Cómo agregar una configuración de giro instantáneo?

Q&A (0)

Una de las maneras más sencillas para aumentar la accesibilidad es crear más opciones para desplazarse por el entorno. En los siguientes pasos, permitirás que el usuario habilite o deshabilite el giro instantáneo.

**1.  Reemplaza la configuración de los marcadores de posición:**

- Edita el texto de la primera opción para que diga «Snap Turning» (Giro instantáneo).
- En el componente Toggle (Alternar), asegúrate de que la propiedad **Is On (Activado)** esté habilitada, pues Snap Turning se habilita de forma predeterminada.

**2.  Vincula el componente Toggle con el componente Snap Turn:**

- En el componente Toggle, en el evento **On Value Changed (Cuando cambia el valor)**, haz clic en el signo **+** para agregar una nueva acción.
- Asigna el XR Rig a la casilla Object (Objeto), pues este contiene el componente Snap Turn.
- Selecciona la función habilitada **Action Based Snap Turn Provider**>  **(Dynamic Bool)**.

**Nota**: Asegúrate de seleccionar la propiedad «habilitada» que sea un booleano dinámico, pues esto significa que el estado del componente Toggle la afectará de forma dinámica.

[Image: image]

Ahora debes tener una casilla de verificación funcional que sirva para habilitar y deshabilitar el giro instantáneo.

Marcar paso como completado

## 6. ¿Cómo agregar una configuración para tomar objetos a distancia?

Q&A (0)

Otra configuración que puede aumentar drásticamente la accesibilidad es la capacidad para tomar objetos desde lejos por medio de rayos.

**1.  Configura la manera en que el ajuste debe aparecer de forma predeterminada:**

- En el componente Toggle, habilita o deshabilita la propiedad **Is On**.
- Cambia el texto del Toggle a «Distance Grab».

**2.  Asegúrate de que sea posible acceder a todos tus objetos que se puedan tomar en la misma capa:**

- En el componente XR Grab Interactable (XR Grab con el que se puede interactuar), asegúrate de que la propiedad **Interaction Layer Mask** incluya la capa **Default (Predeterminada)**.

**3.  Haz que tus rayos puedan cambiar a un conjunto de capas diferente:**

- En la ventana Hierarchy, selecciona los objetos**LeftHand Ray (Rayo izquierdo)**y**RightHand Ray (Rayo derecho)**.
- Agrega un componente Set Interaction Layer (Establecer capa de interacción) a ambos objetos.
- Configura la propiedad **Target Layer (Capa objetivo)** para que incluya las capas **Default** y **Raycasts**, que les permitirán tomar objetos.

**4.  Haz que el Toggle «Distance Grab» active estas capas objetivo:**

- En el componente Toggle, en el evento **On Value Changed**, haz clic en el signo **+**dos veces a fin de agregar dos nuevas acciones (una para cada mano).
- Asigna el RightHand Ray a una casilla de objeto y el Lefthand Ray a la otra.
- Para ambas acciones, selecciona el **SetInteractionLayer** > función **ToggleTargetLayer (Dynamic bool)**.
- **Nota**: Debes seleccionar la opción**Dynamic bool (Booleano dinámico)** en la parte superior de la lista para unir la función con el valor del componente Toggle.

[Image: image][Image: image]

Ahora debes tener un alternador que habilite y deshabilite la capacidad para tomar objetos desde lejos por medio de rayos.

**Recursos relacionados:**

- [Accesibilidad de VR](https://www.unimelb.edu.au/accessibility/guides/vr-old)

Marcar paso como completado

## 7. Resumen

Q&A (0)

**Nueva funcionalidad:**

- Disolvencia de entrada desde negro
- Disolvencia de teletransportación
- Menú de configuración

**Nuevos conceptos y habilidades:**

- Comodidad de VR
- Accesibilidad de VR

**Siguiente lección:**

- Optimización

Marcar paso como completado

## 8. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Agregar narración con voz en off [Fácil]**

Agrega una narración de audio que se reproduzca al principio de tu Escena, en la que la voz lea el texto del menú principal:

- Utiliza el Script OnSceneLoad para activarla.
- Extra: Solo se debe reproducir el audio.

**2.  Agregar una configuración de subtítulos [Medio]**

Agrega subtítulos para mejorar la accesibilidad del audio:

- En el caso de los sonidos ambientales, como la chimenea, agrega subtítulos en la ubicación de cada sonido para indicar qué es.
- Extra: Haz que los subtítulos siempre estén orientados hacia el jugador para que este los pueda leer en cualquier momento (utiliza el Script LookAtPlayer de la biblioteca del curso o escribe tu propio Script).
- Extra: Para tu televisor, utiliza un video con palabras y agrega subtítulos junto con las palabras del video (el video proporcionado, titulado Unity-shape-the-world, tiene voz en off). [Requiere programación]

**3.  Agregar una configuración de movimiento continuo [Medio]**

Agrega una configuración para alternar el movimiento continuo:

- Utiliza la misma técnica que aplicaste para alternar el giro instantáneo.
- Deberás agregar un componente Continuous Move Provider (Proveedor de movimiento continuo) y un componente Continuous Turn Provider (Proveedor de giro continuo) al XR Rig.
- Extra: puedes tener un solo alternador o un menú desplegable que permita cambiar entre (a) movimiento y giro continuos, y (b) giro instantáneo y teletransportación.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
