[Image: image]

# Desafío 2: Pintura 3D

Tutorial

Beginner

+10XP

60 mins

1

(12)

Unity Technologies

[Image: Desafío 2: Pintura 3D]SummarySkills

En este desafío, aplicarás las habilidades que obtuviste al crear tu espacio de VR en una aplicación de pintura 3D. En esta aplicación, el usuario puede elegir la forma sobre la que desea pintar, el color y el tamaño de su pincel en una paleta de mano y, luego, ¡crear su obra maestra!

Este desafío sirve para repasar las habilidades aprendidas en las siguientes lecciones:

- [Audio & Haptics](https://learn.unity.com/tutorial/2-1-audio-and-haptics)
- [Activation Events](https://learn.unity.com/tutorial/2-2-activation-events)
- [Direct & Ray Interactors](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors)
- [User Interface](https://learn.unity.com/tutorial/2-4-user-interface)

Este desafío forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

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

## 1. Descripción paso a paso del desafío

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

Marcar paso como completado

## 2. Primeros pasos

Q&A (0)

**1.  Abre la Scene (Escena) del prototipo de pintura 3D rota:**

- Desde la ventana **Project**, expande, **Assets** > **Challenges** > **02_3DPainting** > **Scenes**
- Haz doble clic en la Escena **3DPainting_Prototype_Broken** para abrirla.

**2.  Comienza a trabajar en las tareas del desafío:**

- Completa las tareas descritas en los siguientes pasos.
- Si deseas aumentar el nivel del desafío, intenta completar también las tareas adicionales.
- Si tienes dificultades, puedes encontrar pistas para cada tarea en la parte inferior de la página.

Marcar paso como completado

## 3. Tareas del desafío

Q&A (0)

**1.  El canvas que te permite cambiar la forma del pedestal sigue a la cámara.**

- Este canvas debe estar inmóvil junto al pedestal.

**2.  El rayo activado y el canvas de la paleta están siguiendo las manos opuestas.**

- La paleta debe moverse con la mano izquierda y, al pulsar la palanca o el botón primario del control derecho, el rayo activado debe emitirse desde la mano derecha.

**3.  La activación del pincel es al revés: comienza cuando se suelta el desencadenador y se detiene cuando se presiona.**

- El pincel debe crear un rastro mientras se mantiene pulsado el desencadenador, y debe detenerse cuando se suelta.

**4.  El botón del tamaño de pincel medio se vuelve invisible al pulsarlo y hace que el rastro sea gigantesco.**

- El botón debe adquirir el mismo color gris que los demás botones cuando se pulsa, y debe cambiar el rastro a un tamaño intermedio entre los tamaños de pincel pequeño y grande.

**5.  El efecto de sonido del pincel sigue siendo el mismo, independientemente de la distancia a la que se encuentre.**

- El sonido del pincel debe estar a todo volumen cerca de tu cara, pero a un 50 % cuando extiendes el brazo.

Marcar paso como completado

## 4. Tareas adicionales

Q&A (0)

**6.  No hay respuesta sonora desde la interfaz de usuario.**

- Añade efectos de sonido para todos los botones de la interfaz de usuario y un efecto de sonido continuo que se reproduzca mientras se utilice el pincel.

**7.  No hay manera de ocultar completamente el pedestal.**

- Añade una interfaz de usuario de alternación al menú junto al pedestal que muestra u oculta el objeto pedestal cuando se activa o se desactiva.

**8.  No hay forma de guardar el trabajo.**

- Añade un botón Print (Imprimir) que crea una versión en miniatura de tu creación en 3D en una mesa a tu lado.

**9.  No hay manera de pintar en la parte posterior o en los lados del objeto.**

- Añade un deslizador a la interfaz de usuario que haga girar todo el pedestal, lo que te permitirá pintar también la parte trasera.

Marcar paso como completado

## 5. Pistas

Q&A (0)

**Pistas de las tareas principales:**

**1.**El Render Mode (Modo de procesado) del canvas tiene que estar en «World Space», no en «Screen Space».

**2.**Mira el mapeo de entrada en los componentes del controlador de XR para LeftHand (Mano izquierda) y RightRay (Rayo derecho).

**3.**Mira las funciones de los eventos Activated (Activado) y Deactivated (Desactivado) en el componente XR Grab Interactable (XR Grab con el que se puede interactuar) del pincel.

**4.**Asegúrate de comprobar el valor alfa (transparencia) del tinte del botón. Mira las funciones de los pinceles pequeños y grandes para obtener referencias sobre la anchura ideal del rastro.

**5.**Asegúrate de que el audio 3D esté activado y comprueba la curva de atenuación del audio 3D para asegurarte de que esté al 50 % a un metro de la fuente.

**Pistas de la tarea adicional:**

**6.**Intenta utilizar los Scripts PlayQuickSound o PlaySoundsFromList.

**7.**Utiliza la función Toggle() en el Script ToggleVisibility.

**8.**No hay ninguna pista disponible. ¡Busca en Google!

**9.**No hay ninguna pista disponible. ¡Busca en Google!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
