[Image: image]

# 2.3: Interactores directos y de rayo

Tutorial

Beginner

+10XP

90 mins

1

(32)

Unity Technologies

[Image: 2.3: Interactores directos y de rayo]SummarySkills

En esta lección, aprenderás a implementar interactores directos y a cambiar entre interactores en el mismo control. Al final de esta lección, el usuario será capaz de tomar las cosas directamente con las manos y de activar o desactivar un rayo para apuntar a las cosas cuando lo necesite.

Esta lección forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

Languages available:

EspañolEnglishEspañol한국어Español

## Video de descripción general

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

## 1. ¿Cómo agregar un interactor directo al control derecho?

Q&A (0)

En lugar de utilizar los interactores de rayo que se incluyen por defecto con el rig, puedes configurar un interactor «directo» para uno de los controles.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Eliminar un interactor de rayo del control derecho:**

- En Hierarchy (Jerarquía), selecciona el objeto **RightHand Controller o Controlador derecho**.
- Elimina los tres componentes relacionados con el interactor de rayo: el componente XR Interactor Line Visual, el componente Line Renderer y el componente XR Ray Interactor**.**

**2.  Activa las interacciones directas en el control derecho:**

- Agrega un componente XR Direct Interactor al **RightHand Controller**.
- Selecciona la casilla **Hide Controller on Select (Ocultar control al seleccionar)** para que el objeto que tomes sustituya al visual de la mano.

**3.  Activa la detección del interactor directo:**

- Agrega un componente Sphere Collider (Colisionador de esfera).
- Selecciona la casilla de verificación **Is Trigger**.
- Reduce el **Radius (Radio)** a 0.05.

[Image: image]

Ahora deberías poder tomar todos los objetos que se pueden tomar en tu Scene (Escena) usando la mano con el interactor directo.

Marcar paso como completado

## 2. ¿Cómo agregar una respuesta táctil y sonora a tu interactor directo?

Q&A (0)

Al igual que hiciste con el interactor de rayo, deberías añadir la misma respuesta táctil y sonora al desplazarte por encima de los objetos y seleccionarlos.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Recuerda cómo configuraste la respuesta táctil y sonora originalmente:**

- En Hierarchy, selecciona el objeto **LeftHand Controller (Controlador izquierdo)**, que debería tener todavía un componente Ray Interactor.
- En el componente XR Ray Interactor, expande las secciones**Audio Events (Eventos sonoros)** y **Haptic Events (Eventos táctiles)**.
- Observa la intensidad y la duración de los eventos táctiles y el clip de audio que has seleccionado para tus eventos sonoros.

**2.  Aplica la configuración de eventos táctiles y sonoros al nuevo interactor directo:**

- Desde Hierarchy, selecciona el objeto **RightHand Controller**.
- En el componente XR Direct Interactor, aplica los mismos ajustes de eventos táctiles y sonoros para que coincidan con tu otro control.

[Image: image]

Tu interactor directo debería tener ahora una respuesta táctil y sonora al desplazarte por los eventos y seleccionarlos.

Marcar paso como completado

## 3. ¿Cómo evitar que el rayo tome objetos?

Q&A (0)

Ahora mismo, puedes tomarlo todo con el rayo, pero no es algo muy natural. Solo deberías poder teletransportarte con tu rayo y tomar objetos directamente con la mano.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Añade una nueva capa para los rayos:**

- En el componente **XR Ray Interactor** de tu otra mano, desde el desplegable **Interaction Layer Mask (Máscara de capa de interacción)**, selecciona **Add Layer o Agregar capa**.
- Añade una nueva capa «Raycasts» en el primer espacio vacío disponible.
- Nota: el interactor de rayo aún no estará configurado en esa capa. Hasta este momento, solo has creado la capa.

**2.  Evita que el rayo interactúe con los objetos que puedes tomar:**

- Aún en el componente XR Ray Interactor del objeto del control, para la propiedad **Interaction Layer Mask**, asigna solo la capa **Raycasts**.
- Para ello, primero hay que seleccionar Nothing (Nada) y luego volver a seleccionar la capa «Raycasts».

**3.  Asegúrate de que el rayo pueda interactuar con los objetos de teletransporte:**

- Asegúrate de que, para cada objeto Teleportation Anchor y Teleportation Area en la propiedad **Interaction Layer Mask**, la capa **Raycasts** esté activada**.**

**4.  Evita que el modelo de tu mano desaparezca cuando te teletransportas:**

- En el componente XR Ray Interactor, desactiva el ajuste **Hide Controller On Select**.

**Nota:**Si aún puedes utilizar el rayo para tomar objetos, asegúrate de que los objetos que se pueden tomar no estén en la capa Raycasts de Interaction Layer.

[Image: image][Image: image]

Ya no podrás tomar objetos con tu interactor de rayo, pero podrás usarlo para el teletransporte.

Marcar paso como completado

## 4. ¿Cómo crear un interactor directo y de rayo para cada mano?

Q&A (0)

Para poder tomar objetos con las dos manos, debes tener interactores directos en ambas manos. Entonces puedes activar el rayo cuando se mueve la palanca de control. Para conseguirlo, tendrás que crear los interactores directo y de rayo para cada mano.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Crea controles de rayo alternativos para cada mano:**

- Duplica el control con el interactor de rayo **dos** veces.
- Renombra estos objetos «LeftHand Ray» y «RightHand Ray».

**2.  Controla cada rayo con la mano correcta:**

- Para tus nuevos objetos**RightHand Ray** y**LeftHand Ray**, en el componente XR Controller, asegúrate de que el ajuste predefinido**Input Action References** esté configurado correctamente en Left (Izquierda) o Right (Derecha) para cada objeto.
- Para editar el ajuste predefinido, en la parte superior derecha del componente, haz clic en el botón **Presets (Predefinidos)** y selecciona el preajuste adecuado para la mano.

**3.  Haz que el LeftHand Controller se comporte como un interactor directo:**

- En el objeto**LeftHand Controller**, elimina los componentes relacionados con el interactor de rayo (los componentes XR Ray Interactor, Line Renderer y XR Interactor Line Visual).
- Copia los componentes Direct Interactor y Sphere Collider de **RightHand Controller** a**LeftHand Controller.**

**Nota**. Para copiar un componente:

- Selecciona el menú contextual en la parte superior derecha de ese componente y haz clic en **Copy Component (Copiar componente).**
- Para pegar el componente en otro objeto, selecciona el menú contextual de uno de los componentes del objeto receptor y haz clic en **Paste Component As New (Pegar componente como nuevo).**

**4.  Asegúrate de que solo dispongas de un modelo de mano para cada mano:**

- En tus nuevos objetos **LeftHand Ray** y **RightHand Ray** en el componente XR Controller, cambia el objeto **Model Prefab (Prefab modelo)**por **None (Ninguno).**

[Image: image]

Ahora cada mano debería poder teletransportarse con sus interactores de rayo y tomar objetos con sus interactores directos.

Marcar paso como completado

## 5. ¿Cómo activar y desactivar el rayo al pulsar un botón?

Q&A (0)

Ahora que tienes los interactores directos y de rayo en cada mano, añadirás la posibilidad de activar y desactivar el rayo al pulsar un botón.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Añade la posibilidad de activar y desactivar el rayo izquierdo:**

- En el objeto **LeftHand Ray**, añade un componente Toggle Ray (Activar y desactivar rayo).
- Para la propiedad **Direct Interactor**, asigna el objeto**LeftHand Controller**.

**2.  Para poder detectar si se pulsa un botón:**

- En el objeto **LeftHand Controller**, añade un componente On Button Press (Al presionar el botón).

**3.  Especifica el botón que se va a vincular a esta acción:**

- En el componente On Button Press, en la casilla **Action**, haz clic en **+**y elige **Add Binding (Agregar nexo)** (**Nota:** Es muy fácil no ver la casilla Action; fíjate bien).
- Haz doble clic donde dice **No Binding (Sin nexo)**.
- In the **Path**drop-down, select **XR Controller**>**XR Controller (Left Hand)**>**Optional Controls**>**primaryButton.**

**Nota**: Los distintos controles tienen diferentes botones, desencadenadores y paneles táctil. Si no utilizas un Oculus Quest, es probable que tengas que elegir una ruta de nexo diferente que funcione con tu dispositivo. Por ejemplo, echa un vistazo a los perfiles de control OpenXR para el [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791) o el [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791).

**4.  Activa el rayo cuando se pulsa el botón:**

- En el evento **On Press**, haz clic en **+** para añadir una nueva acción.
- Asigna el objeto **LeftHand Ray**, ya que posee el componente Toggle Ray.
- En el menú desplegable de la función, selecciona el **ToggleRay** > **función ActivateRay ()**.

**5.  Desactiva el rayo cuando se suelte el botón:**

- En el evento **On Release**, haz clic en **+** para añadir una nueva acción.
- Asigna el objeto **LeftHand Ray**.
- Selecciona el **ToggleRay** > **función DeactivateRay ()**.

[Image: image]

Ahora el rayo de la mano izquierda aparecerá solo mientras se toque el botón primario, y desaparecerá cuando se suelte el botón.

Marcar paso como completado

## 6. ¿Cómo agregar más nexos y repetir para la otra mano?

Q&A (0)

Un control funciona con un botón. Puedes dar al jugador más opciones de botones para pulsar, según sus preferencias, y luego aplicar esta funcionalidad a la otra mano.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Añade un nexo adicional que detecte la palanca:**

- En el componente On Button Press, en la casilla Action, haz clic en el botón **+** para agregar un nexo adicional a esta acción.
- Sigue las mismas instrucciones como los pasos anteriores para seleccionar un nexo, pero selecciona **XR Controller**>**XR Controller (Left Hand)**>**Optional Controls**>**thumbstickTouched**en vez de **primaryButton**.

**Nota**: Los distintos controles tienen diferentes botones, desencadenadores y paneles táctil. Si no utilizas un Oculus Quest, es probable que tengas que elegir una ruta de nexo diferente que funcione con tu dispositivo. Por ejemplo, echa un vistazo a los perfiles de control OpenXR para el [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791) o el [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791).

**2.  Añade esta misma funcionalidad de activación y desactivación de rayo para tu mano derecha:**

- Repite todas las instrucciones del paso anterior, pero, para RightHand Controller y RightHand Ray:

- añade un componente Toggle Ray a **RightHand Ray**y asigna RightHand Controller a la propiedad Direct Interactor.
- Agrega un componente On Button Press al **RightHand Controller** y agrega nexos para el Right Primary Button y Right Thumbstick
- En elevento**On Press** , llama al **Toggle Ray > función ActivateRay()** en el objeto**RightHand Ray** .
- En el evento **On Release** , llama al **Toggle Ray > función DeactivateRay()** en el objeto **RightHand Ray**.

[Image: image]

Ahora los rayos en ambas manos aparecerán solo mientras se presiona el botón primario o la palanca.

Marcar paso como completado

## 7. Resumen

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**Nueva funcionalidad:**

- Interactores directos en cada mano.
- Activar y desactivar los interactores directos con un botón.

**Nuevos conceptos y habilidades:**

- Interactores directos y de rayo
- Detección de pulsación de un botón

**Siguiente lección:**

- Interfaces de usuario

Marcar paso como completadoPaso opcional

## 8. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Personaliza las líneas del interactor de rayo [Fácil]**

Edita los colores de las líneas del interactor de rayo y los colores de la transparencia, incluidos los gradientes y la transparencia:

- Queda bien hacer transparente el inicio del rayo para que no se superponga con las manos.
- Para personalizar los colores de los rayos, busca en los componentes XR Interactor Line Visual las propiedades de gradiente de color Valid o Válida e Invalid o Inválida.
- En la ventana Gradient Editor o Editor de gradientes, usa los marcadores debajo de la barra de color para editar el color y los marcadores encima de la barra de color para editar el valor de transparencia (Alfa).

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**2.  Añade una regadera funcional [Medio]**

Añade una regadera que genere una partícula de agua al inclinarla:

- Usa el Script OnTilt que encuentras en la Course Library > Scripts > Conditions para detectar la inclinación.
- Encuentra un objeto Particle_Water en la Course Library > Prefabs > Particles
- Usa el ToggleParticle > funciones Play() and Stop() para controlar la partícula.
- Extra: agrega un efecto de sonido de vertido mediante el Script PlayContinuousSound.
- Extra: utiliza el Script OnVelocity para añadir también un sonido de salpicadura al agitar. Sugerencia: añade una fuente de audio separada para que esto no interfiera con el sonido de vertido.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**3.  Añade bisagras a las puertas de los armarios [Experto]**

Permite al usuario abrir las puertas de los armarios o las tapas de los cofres mediante las bisagras físicas de Unity:

- Tendrás que añadir una [Hinge Joint (Bisagra)](https://docs.unity3d.com/Manual/class-HingeJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791) y un RigidBody a la puerta y personalizar sus límites angulares.
- Tendrás que añadir un componente XR Grab Interactable (XR Grab con el que se puede interactuar) al mango y tal vez quieras añadir un [Fixed Joint](https://docs.unity3d.com/Manual/class-FixedJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449791) conectado al RigidBody de la puerta.
- Asegúrate de que ningún colisionador de la puerta se solape con otros colisionadores, ya que esto podría provocar que se atasque.
- Advertencia: las uniones son muy complicadas y pueden provocar frustración.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
