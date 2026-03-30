[Image: image]

# Desafío 3: Simulación de capacitación

Tutorial

Beginner

+10XP

60 mins

1

(10)

Unity Technologies

[Image: Desafío 3: Simulación de capacitación]SummarySkills

En este desafío, aplicarás las habilidades que aprendiste al crear tu espacio de VR en una simulación de capacitación industrial. En esta aplicación, el usuario debe utilizar botones, perillas, palancas y palancas de control para tomar las cajas colocadas en la fábrica y colocarlas en una plataforma cercana.

Este desafío forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

Este desafío sirve para evaluar las habilidades aprendidas en las siguientes lecciones:

- [Comfort & Accessibility](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Optimization](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [Lighting](https://learn.unity.com/tutorial/3-3-lighting?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)

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

## 2. ¿Cómo empezar?

Q&A (0)

**1.  Abre la Escena del prototipo de capacitación que no funciona:**

- Desde la ventana **Project**, expande **Assets** > **Challenges** > **03_Training** > **Scenes**
- Haz doble clic en la Escena **Training_Prototype_Broken** para abrirla.

**2.  Comienza a trabajar en las tareas del desafío:**

- Completa las tareas descritas en los siguientes pasos.
- Si deseas aumentar el nivel del desafío, intenta completar también las tareas adicionales.
- Si tienes dificultades, puedes encontrar pistas para cada tarea en la parte inferior de la página.

Marcar paso como completado

## 3. Tareas del desafío

Q&A (0)

**1.  La pantalla negra de disolvencia de entrada aparece en el centro de la fábrica.**

- La pantalla negra de disolvencia de entrada debe cubrir todo el campo de visión del usuario.

**2.  El alternador «Console Labels» hace que desaparezca toda la consola.**

- Cuando se desactiva este alternador, solo deben desaparecer las etiquetas de la consola.

**3.  La iluminación del piso se ve muy mal.**

- Haz que la iluminación del piso se vea igual de detallada que las demás superficies.

**4.  La pila de cajas ubicada en la esquina trasera izquierda no tiene iluminación integrada y sombras realistas.**

- Las sombras de todas las pilas de cajas se deben ver iguales.

**5.  La consola no responde a la iluminación integrada ubicada sobre ella y se ve muy oscura.**

- Al mantener integrada la luz ubicada sobre la consola para incrementar la optimización, debería parecer que esta luz ilumina la consola.

Marcar paso como completado

## 4. Tareas adicionales

Q&A (0)

**6.  No hay ningún indicador visual en el imán para mostrar si está activo o inactivo.**

- El imán debe cambiar de color cuando está activo o inactivo.

**7.  El usuario tiene acceso al rayo y a los interactores directos en toda la aplicación.**

- El usuario no debe poder utilizar la consola mientras lee las instrucciones, y sus rayos deben desaparecer cuando termina de hacer clic en las instrucciones.

**8.  El usuario no puede controlar la velocidad del imán. [Experto]**

- Debe haber una configuración que controle la velocidad del imán.

**9.  El usuario no puede revisar ni guardar su progreso en esta capacitación. [Experto]**

- Debe haber una interfaz de usuario que muestre cuántas cajas ha tomado el usuario y cuánto tiempo ha pasado.

Marcar paso como completado

## 5. Pistas

Q&A (0)

**Pistas de las tareas principales:**

**1.** Para visualizar mejor el canvas de disolvencia, asigna temporalmente un valor de 1 a la opción Canvas Group Alpha (Alfa de grupo de canvas) y asegúrate de que no esté muy lejos de la cámara.

**2.**Asegúrate de que el alternador active o desactive el objeto adecuado.

**3.**En la parte superior de la vista de Escena, cambia la opción Draw Mode (Modo de dibujo) de Shaded (Sombreado) a Baked Lightmap o Mapa de luz integrado. Verás que la resolución del mapa de luz del piso es mucho menor que la de los demás objetos.

**4.**Para que los objetos se integren en el mapa de luz, deben estar marcados como «Static».

**5.** Las sondas de luz permiten que los objetos dinámicos respondan a las condiciones de iluminación integrada.

**Pistas de las tareas adicionales:**

**6.**Puedes utilizar la misma función que usaste para cambiar la luz del indicador en el control remoto.

**7.**En el componente ShowMessageFromList del objeto Welcome Text (Texto de bienvenida), hay un evento On Complete () o Al completar (). En este evento, debes desactivar los rayos y activar la funcionalidad de la consola, que debe estar desactivada de forma predeterminada.

**8.**No hay ninguna pista disponible. ¡Busca en Google!

**9.**No hay ninguna pista disponible. ¡Busca en Google!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
