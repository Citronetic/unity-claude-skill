[Image: image]

# 1.3: Objetos que se pueden tomar

Tutorial

Beginner

+10XP

90 mins

1

(89)

Unity Technologies

[Image: 1.3: Objetos que se pueden tomar]SummarySkills

En esta lección, aprenderás cómo configurar objetos para tener una interactividad básica con la que se puedan tomar en VR. Al finalizar esta lección, podrás tomar y lanzar los objetos presentes en la Scene (Escena).

Esta lección forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr).

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

## 1. ¿Cómo elegir modelos de manos?

Q&A (0)

En lugar de utilizar esferas sencillas, puedes elegir los modelos que representen las manos del usuario en VR.

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

**1.  Explora las opciones de modelos de manos:**

- En la ventana Project (Proyecto), abre la carpeta **Course Library** > **Prefabs** > **VR**>**Hands** y elige la opción de **VR_Hand** (Mano_VR) que prefieras.

**2.  Asigna un modelo a tu mano izquierda:**

- En la Hierarchy (Jerarquía), selecciona **XR Rig** > **Camera Offset**> **LeftHand Controller.**
- En el componente XR Controller (Control de XR), dirígete a la propiedad **Model Prefab (Prefab modelo)**, y arrastra y suelta el Prefab mano que prefieras para asignarlo.

**3.  Asigna un modelo a tu mano derecha:**

- En la Hierarchy, selecciona **XR Rig** > **Camera Offset**> **RightHand Controller.**
- Repite el paso anterior para asignar un Prefab a tu mano derecha.

[Image: image]

Ahora, al probar tu aplicación, deberías ver los modelos de manos que seleccionaste en lugar de esferas grises.

Marcar paso como completado

## 2.  ¿Cómo agregar un objeto que se puede tomar?

Q&A (0)

Ahora que puedes ver tus manos en VR, agrega algunos objetos que puedas tomar con ellas.

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

**1.  Agrega una pelota a la Escena:**

- Dirígete a **Course Library** > **Prefabs** > **Objects** > **Sports.**
- Arrastra una pelota hacia una superficie accesible del espacio.

**2.  Haz que la pelota se pueda tomar:**

- Agrega un componente XR Grab Interactable (XR Grab con el que se puede interactuar) a la pelota.
- **Nota**: Al hacer esto, también se agregará automáticamente un componente Rigidbody a la pelota.

**3.  Prueba tu objeto que se puede tomar:**

- Reubica el **XR Rig (Rig de XR)** para que esté frente a la mesa donde está el objeto de pelota que se puede tomar.
- Ejecuta tu aplicación.
- Intenta tomar el objeto al apuntar tu rayo hacia él y presionar el botón Grip (Sujetar).

**4.  Asegúrate de que el objeto tenga el tamaño correcto:**

- En la Hierarchy, crea un nuevo objeto **3D Object > Cube** y cambia su nombre a «Measuring Stick».
- Utiliza Google para determinar el diámetro oficial correcto de la pelota, y convierte las dimensiones que encuentres a metros.
- En el componente Transform del objeto Measuring Stick (Barra de medición), asigna un valor de 0.01 en Scale (Tamaño) para los ejes X y Z, y asigna el valor de la longitud que calculaste en Scale para el eje Y.
- Coloca la barra de medir junto a la pelota para asegurarte de que tenga el tamaño correcto. Si el tamaño es incorrecto, utiliza la herramienta Scale para corregirlo.

[Image: image]

Ahora, deberías poder tomar la pelota con el botón Grip y soltar el botón para lanzarla.

**Nota:** Si utilizas el simulador de dispositivo de XR, puedes activar o desactivar un control con las teclas T o Y, girarlo para que apunte hacia un objeto al mantener presionado el botón central del mouse, y luego mantener presionada la tecla G para sujetar un objeto.

Marcar paso como completado

## 3. ¿Cómo ocultar las manos y deshabilitar el control de anclaje?

Q&A (0)

Actualmente, el modelo de la mano se superpone con el objeto que sostienes, y puedes cambiar la posición de ese objeto en tu mano con el control. Esto no es ideal para interactuar con la Escena.

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

**1.  Evita que el usuario mueva el objeto con la palanca de control izquierda:**

- En la Hierarchy, selecciona el objeto **XR Rig**> **Camera Offset**> **LeftHand Controller**.
- En el componente XR Ray Interactor (Interactor con rayos de XR), deshabilita la opción **Anchor Control (Control de anclaje)**.

**2.  Haz que el modelo de tu mano desaparezca cuando tomes un objeto:**

- En el componente XR Ray Interactor, habilita la opción **Hide Controller on Select (Ocultar control al seleccionar)**.

**3.  Aplica estos cambios a tu control derecho:**

- Repite los pasos anteriores con el objeto **RightHand Controller (Control derecho).**

[Image: image]

Ahora, tus manos deberían desaparecer cuando tomas un objeto, y ya no deberías poder mover ni girar el objeto con la palanca de control.

Marcar paso como completado

## 4. ¿Cómo perfeccionar la experiencia de lanzamiento?

Q&A (0)

Ahora puedes tomar el objeto, pero aún debemos mejorar algunos detalles de su comportamiento.

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

**1.  Haz que la pelota rebote:**

- En el componente Sphere Collider (Colisionador de esfera) del objeto **Ball (Pelota)**, busca la propiedad **Material**.
- Haz clic en el botón circular para asignar uno de los Physics Materials (Materiales de física) proporcionados.

**2.  Evita que el objeto atraviese el piso cuando lo sueltes:**

- En el componente Rigidbody del objeto Ball, busca la opción **Collision Detection (Detección de colisiones)** y selecciona **Continuous Dynamic (Dinámica continua)**.

**3.  Permite que la física del componente Rigidbody de la pelota funcione mientras está en tu mano:**

- En el componente XR Grab Interactable, asegúrate de que la opción **Movement Type (Tipo de movimiento)** esté configurada como **Kinematic (Cinemático)**.

**4.  Suaviza el movimiento del objeto:**

- En el componente XR Grab Interactable, habilita las propiedades **Smooth Position (Posición suave)** y **Smooth Rotation (Rotación suave)**.

[Image: image][Image: image][Image: image]

Ahora, la pelota debería rebotar en lugar de atravesar el piso, y moverse suavemente en tu mano.

Marcar paso como completado

## 5. ¿Cómo agregar un objeto que tenga un mango para sujetarlo?

Q&A (0)

Ya agregamos un objeto de pelota que se sujeta por el centro y con cualquier orientación. Ahora, vamos a agregar un objeto que se debe sujetar en un punto particular y con una orientación específica.

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

**1.  Agrega una raqueta, una paleta o un bate a la Escena:**

- Dirígete a **Course Library** > **Prefabs** > **Sports.**
- Arrastra uno de los artículos deportivos hacia la superficie que está junto a la pelota.

**2.  Haz que el nuevo objeto se pueda tomar:**

- Selecciona el nuevo objeto y agrega un componente XR Grab Interactable.
- En el componente XR Grabbable, habilita las propiedades **Smooth Position** y **Smooth Rotation** para reducir la vibración.
- En el componente Rigidbody (que se agregó automáticamente), en la opción **Collision Detection**, selecciona **Continuous Dynamic** para evitar que el objeto atraviese el piso.

**3.  Crea un punto de unión específico para el objeto:**

- En la Hierarchy, haz clic derecho sobre el objeto y crea un objeto secundario **Empty**(Vacío).
- Cambia el nombre de este objeto vacío a «Attach».
- Reubica y gira el objeto Attach (Unir) para que coincida con la posición y la orientación que debe tener el modelo de tu mano cuando sujetes el nuevo objeto.

**4.  Asigna el punto de unión a tu artículo deportivo:**

- En la Hierarchy, vuelve a seleccionar el objeto deportivo principal.
- En el componente XR Grab Interactable, busca la propiedad **Attach Transform (Transform de unión)**.
- Arrastra y suelta tu nuevo objeto Attach para asignarlo a la propiedad Attach Transform.

[Image: image]

Ahora, deberías poder sujetar el artículo deportivo por el mango y usarlo para golpear la pelota.

Marcar paso como completado

## 6. ¿Cómo organizar la Hierarchy?

Q&A (0)

Es una buena idea establecer un sistema de organización para evitar tener demasiados objetos en la Hierarchy.

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

**1.  Crea objetos organizadores en la Hierarchy:**

- En la Hierarchy, crea nuevos GameObjects Empty llamados «XR», «LIGHTING», «STATIC» y  «DYNAMIC».
- Restablece la posición de todos a los valores 0, 0, 0.

**2.  Organiza tus objetos por categorías:**

- Puedes arrastrar los objetos de la Hierarchy hacia el interior de los objetos organizadores, lo que te ayuda a mantener la Hierarchy limpia y organizada.
- También puedes colocar tus objetos debajo de los objetos organizadores, lo que te permite tenerlos siempre al alcance.

[Image: image]

Ahora deberías poder usar la Hierarchy con mayor facilidad al tenerla organizada por categorías.

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

**Nuevas características:**

- Modelos de manos
- Pelota sencilla que se puede tomar
- Herramienta que se puede tomar con punto de unión
- Hierarchy organizada

**Nuevos conceptos y habilidades**

- Diferencias entre la escala de Unity y la escala del mundo real
- Propiedades de los objetos que se pueden tomar
- Modos de detección de colisiones
(discreta vs. dinámica continua)
- Tipos de movimiento
(cinemático, instantáneo, seguimiento de velocidad)

**Siguiente lección:**

- Aberturas

Marcar paso como completadoPaso opcional

## 8. Extensiones

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Llena tu espacio con objetos [Fácil]**

Agrega objetos divertidos y decorativos que se puedan tomar a tu Escena para hacerla parecer más interactiva, incluso si estos objetos aún no son totalmente funcionales:

- Explora las carpetas Course Library > Prefabs > Objects para encontrar más ideas.

[Image: image]

**2.  Experimenta con las propiedades del componente Grab Interactable [Fácil]**

Agrega un nuevo objeto a tu Escena y experimenta con las diferentes propiedades del componente XR Grab Interactable, que incluyen las siguientes:

- Movement Type: Kinematic, Instantaneous (Instantáneo), Velocity Tracking, o Seguimiento de velocidad
- Smooth Position/Rotation Amount y Tighten Position, o Reforzar posición
- Propiedades de Throw on Detach, o Lanzar al desprender

**3.  Agrega una lupa [Difícil]**

Agrega a tu Escena una lupa funcional que se pueda tomar y utilizar para examinar otros objetos:

- Puedes utilizar una Camera Render Texture (Textura de procesado de cámara) similar a la de los espejos.
- No te preocupes si el rayo te estorba por ahora: eso se resolverá cuando podamos activar y desactivar los rayos.

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

**4.  Agrega una libreta que se abra [Experto]**

Agrega una libreta con una cubierta que se abra cuando la tomes:

- Pista: El objeto Notebook_Cover (Cubierta_libreta) necesita una [bisagra](https://docs.unity3d.com/Manual/class-HingeJoint.html) con la propiedad **Connected Body (Cuerpo conectado)** configurada con el Rigidbody de la libreta.
- Si lo deseas, puedes intentar agregar algo de texto a la libreta.

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
