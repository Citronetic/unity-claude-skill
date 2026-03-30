[Image: image]

# 2.2: Eventos de activación

Tutorial

Beginner

+10XP

90 mins

0

(38)

Unity Technologies

[Image: 2.2: Eventos de activación]SummarySkills

En esta lección, aprenderás cómo agregar una funcionalidad única a un objeto cuando el usuario interactúa con él de cierta forma. Al finalizar esta lección, los usuarios podrán tomar un mando a distancia y presionar un botón para encender un televisor.

Esta lección forma parte del

curso: ¿Cómo crear con VR?

Resources

- [Polaroid-Scripts.zip](https://unity-connect-prd.storage.googleapis.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931417753)

Languages available:

EspañolEnglishEspañolEspañol

## 1. ¿Cómo agregar un mando a distancia que se puede tomar?

Q&A (0)

Hasta este momento solo podías tomar y soltar objetos. Ahora añadirás un objeto con el que podrás *hacer*o «activar» algo una vez que esté en tu mano.

**1.  Añade un mando a distancia a tu Scene (Escena):**

- Ve a **Course Library**> **Prefabs**> **Objects** > **Electronics,**
- Arrastra el objeto Prefab «Remote» sobre la superficie en tu Escena.

**2.  Permite que el objeto se pueda tomar:**

- Agrega un componente RigidBody con Collision Detection (Detección de colisiones) establecida en Continuous Dynamic (Dinámica continua) para que no se caiga a través del suelo.
- Añade un componente XR Grab Interactable (XR Grab con el que se puede interactuar).

**3.  Coloca el mando a distancia correctamente en la mano del jugador cuando lo tome:**

- En el objeto **Remote**, crea un nuevo objeto secundario Attach (Unir) vacío.
- Coloca y orienta adecuadamente el objeto **Attach**.
- Asigna el objeto **Attach**a la propiedad **Attach Transform (Transform de unión)** del componente XR Grab Interactable.

[Image: image]

Ahora podrás tomar el mando a distancia de forma que parezca natural.

Marcar paso como completado

## 2. ¿Cómo reproducir un sonido cuando se activa el mando a distancia?

Q&A (0)

Ahora harás que el mando a distancia haga un sonido de clic cuando lo sostengas y presiones el desencadenador.

**1.  Permite que el mando a distancia emita sonido:**

- En el objeto Remote, agrega un componente AudioSource.
- En el componente AudioSource, desliza la propiedad **Spatial Blend (Mezcla espacial)** completamente hasta **3D**(«1») para permitir el audio 3D.

**2.  Dota al mando a distancia de la capacidad de reproducir un sonido:**

- Añade un componente Play Quick Sound (Reproducir sonido rápido) al mando a distancia.
- Para la propiedad **Sound** , asigna un clip de audio que quieres de **Course Library** > **Audio**folder.

**3.  Localiza el evento Activated (Activado) del mando a distancia:**

- En la parte inferior del componente XR Grab Interactable del mando a distancia, expande el desplegable **Interactable Events (Eventos con los que se pueden interactuar)**para ver todas las opciones de eventos.
- Localiza el evento **Activated**

**4.  Reproduce un sonido cuando se activa el mando a distancia:**

- En el evento **Activated**, haz clic en **+** para añadir una nueva acción.
- Arrastra y suelta el objeto **Remote**en la ranura Object (Objeto) vacía para acceder a sus componentes.
- Haz clic en el menú despleglabe **No Function** para seleccionar una función, luego selecciona **Play Quick Sound**>**Play ().**

[Image: image]

Con el mando a distancia en la mano, ahora podrás pulsar el botón de activación, el desencadenador del mando a distancia y escuchar un sonido.

Marcar paso como completado

## 3. ¿Cómo cambiar el color de la luz del indicador del mando a distancia cuando se activa?

Q&A (0)

Para proporcionar información adicional al pulsar el mando a distancia, también puedes hacer que la luz indicadora se vuelva roja cuando el mando a distancia esté activado.

**1.  Agrega la posibilidad de que el indicador luminoso se ilumine en rojo:**

- En Hierarchy, expande el objeto Remote y selecciona el objeto secundario **Indicator_Light**.
- Añade un componente Change Material (Cambio de material).
- Asigna un material rojo a la propiedad «**Other Material (Otro material)**».

**2.  Cambia el color del material a rojo al pulsar el desencadenador:**

- En el objeto primario **Remote**, en la parte inferior del componente XR Grab Interactable, expande el desplegable **Interactable Events**para ver todas las opciones de eventos.
- En el evento **Activated**, haz clic en **+** para añadir una nueva función.
- Asigna el objeto secundario **Indicator Light (Luz indicadora)** a la propiedad Object.
- Haz clic en el menú desplegable **No Function** para seleccionar una nueva función, luego haz clic en **Change Material**>**SetOtherMaterial ()**function**.**

**3.  Haz que el material vuelva a su estado original cuando se suelte el botón de activación:**

- En el evento **Deactivated (Desactivado)**, haz clic en **+** para añadir una nueva acción.
- Asigne el objeto Indicator_Light, luego selecciona el **Change Material**>**SetOriginalMaterial ()**function.

[Image: image]

Al activar el mando a distancia, la luz indicadora debe volverse roja y luego debe volver a su color original al soltar el botón de activación.

Marcar paso como completado

## 4. ¿Cómo reproducir un video en el televisor?

Q&A (0)

Antes de configurar el botón para encender el televisor, debes asegurarte de que el televisor de la Escena pueda reproducir un video correctamente.

**1.  Permite que el televisor emita audio 3D:**

- En Hierarchy, selecciona el objeto secundario **Screen (Pantalla)** del televisor.
- Añade un componente Audio Source (Fuente de audio).
- Arrastra la propiedad **Spatial Blend** completamente hasta 3D (1.0) para activar el audio espacial.

**2.  Permite que el televisor reproduzca video:**

- En el objeto secundario Screen, añade un componente Video Player (Reproductor de video).
- Cambia la **Material Property**a **_BaseMap** (en lugar de _MainTex) para proyectar el video a su material en lugar de a su textura.

**3.  Añade funciones adicionales de control de video:**

- En el objeto secundario Screen, añade un componente Play Video.
- Selecciona la casilla **Play At Start (Reproducir al iniciar)**para reproducir el video automáticamente.

**4.  Selecciona el video que quieres reproducir en la pantalla:**

- En el componente Play Video, expande el desplegable **Video Clips**.
- Establece la propiedad de lista **Size (tamaño)** en 1 y pulsa Enter para revelar una ranura de clip de video vacía.
- Asigna uno de los videos de la **Course Library** > **Videos** a la propiedad Video Clip.

[Image: image]

Ahora, cuando ejecutes tu aplicación, el video debería reproducirse automáticamente en la pantalla del televisor con audio 3D.

Marcar paso como completado

## 5. ¿Cómo controlar el televisor con el mando a distancia?

Q&A (0)

Ahora que el televisor funciona, tendrás que controlarlo con el mando a distancia.

**1.  Detén la reproducción automática del video:**

- En el componente Play Video, desactiva la casilla **Play At Start**.

**2.  Localiza los eventos Interaction del Remote:**

- Selecciona el GameObject **Remote**.
- En el componente XR Grab Interactable, expande el desplegable **Interactable Events**para ver todas las opciones de eventos.

**3.  Activa el televisor cuando se active el mando a distancia:**

- En el evento **Activated**, haz clic en **+** para añadir una nueva acción.
- Asigna el objeto **Screen** a la propiedad Object vacía, ya que tiene el Script Play Video.
- Haz clic en el menú desplegable **No Function** y selecciona **PlayVideo**>**TogglePlayPause ()**,  **PlayVideo**>**TogglePlayStop ()**function**,**dependiendo en si quieres poner en pausa o detener cuando se presione una segunda vez.

[Image: image]

Al activar el mando a distancia, el video del televisor debería alternar entre la reproducción y la pausa o la detención.

Marcar paso como completado

## 6. Resumen

Q&A (0)

**Nueva funcionalidad:**

- Mando a distancia que se puede tomar
- Acción de reproducción de sonido
- Acción de cambio de material
- Acción de reproducción de video

**Nuevos conceptos y habilidades:**

- Activación de objeto
- Eventos & Acciones
- Scripts & funciones

**Siguiente lección:**

- Interactores directos y de rayo

Marcar paso como completado

## 7. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Añade un teléfono que reproduzca video [Fácil]**

Crea un teléfono que reproduzca un video al pulsar el desencadenador:

- Puedes encontrar Prefabs de teléfonos en Course Library > Prefabs > Objects > Electronics folder.
- Deberás crear un nuevo objeto secundario de «pantalla» con un material similar al de la pantalla del televisor.
- **Extra:**Intenta hacer el ciclo del teléfono a través de múltiples videos al usar Play Video > NextClip () function.

**2.  Añade una linterna que funcione [Media]**

Añade a la Escena una linterna que se encienda y se apague al pulsar el desencadenador, y que emita incluso un sonido de clic para proporcionar una respuesta sonora:

- Tendrás que añadir un objeto secundario SpotLight a la linterna.
- Intenta usar la función ToggleLight > Flip () para apagar y encender la luz.

**3.  Añade un encendedor que funcione y una vela que se pueda encender con él [Difícil]**

Añade un encendedor a la Escena que produzca una llama al activarlo. Si la llama se acerca a una vela, esta puede encenderse.

- Puedes utilizar el Prefab Particle_Flame
- En la vela, utiliza un colisionador desencadenador y el Script OnTrigger para detectar cuando un objeto con una etiqueta determinada ha entrado en el desencadenador
- **Extra:** Haz que la llama se apague cuando se agite mediante el Script OnVelocity

**4.  Añade un proyectil a una pistola de dardos o a una grapadora [Experto]**

Haz que una pistola dispare dardos o que una grapadora dispare grapas al apretar el desencadenador:

- Localiza los Prefabs para los objetos y proyectiles en la Course Library > Prefabs > Objects > Launchers folders
- Usa el Script LaunchProjectile que se encuentra en la Course Library
- Si lo deseas, usa el Script DestroyObject que se encuentra en la Course Library para hacer desaparecer el proyectil después de cierta cantidad de tiempo.
- **Extra:** Haz que la grapadora se abra con una bisagra.
- **Extra**:  Añade sonidos cuando se lance el objeto

**5.  Añade una cámara instantánea en funcionamiento  [Experto] [Requiere programación]**

Añade una cámara instantánea que funcione y que te permita obtener una previsualización en la pantalla del visor e imprimir una foto con el desencadenador:

- Para la pantalla del visor, fíjate en cómo está configurado el espejo con una textura de procesado.
- Consulta la documentación de [Camera.Render()](https://docs.unity3d.com/ScriptReference/Camera.Render.html).
- No te preocupes si, por ahora, la cámara procesa también tus rayos; aprenderemos a ocultarlos en el próximo tutorial.
- Si deseas ayuda, descarga los ejemplos [Polaroid y Photo scripts](https://connect-prd-cdn.unity.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip)

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
