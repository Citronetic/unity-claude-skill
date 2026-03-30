[Image: image]

# Desafío: ¿Cómo dar vida a la Scene?

Ejercicio

Beginner

+60XP

90 mins

2

Unity Technologies

[Image: Desafío: ¿Cómo dar vida a la Scene?]Summary

En este desafío, tendrás la tarea de crear al menos cinco nuevas animaciones en el Editor y configurar al menos un personaje para usar tres nuevas animaciones importadas que tú mismo obtendrás. Al final de este tutorial, podrás demostrar tus nuevas habilidades de animación.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

En los tutoriales anteriores, aprendiste a crear animaciones básicas desde cero directamente en el Editor de Unity, así como a configurar y trabajar con animaciones importadas. Estas dos habilidades de animación abarcan los fundamentos del trabajo con animación en Unity y, con ellas, ahora puedes crear Scenes (Escenas) vibrantes y animadas para tus experiencias interactivas. Es momento de aplicar este conocimiento a un nuevo desafío: dar vida a una nueva Escena con animación.

En este desafío, tendrás la tarea de crear al menos cinco nuevas animaciones en el Editor. También debes configurar al menos un personaje para usar tres nuevas animaciones importadas que tú mismo obtendrás.

Esta será la primera vez que diseñes tus propias animaciones, así que antes de comenzar a planificar, toma un momento para escuchar a nuestros creadores sobre cuáles creen que son los principales desafíos al crear una animación:

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

Marcar paso como completado

## 2. Revisa tus habilidades

Q&A (0)

Has aprendido mucho sobre animación. Repasemos todo lo que sabes hasta ahora y cómo se podría usar en la Escena:

**Animación con fotogramas clave**: Puedes crear Clips de animación para cualquier objeto de la Escena y esas animaciones pueden controlar cualquier componente de un objeto. Has trabajado mucho animando la posición y el tamaño de un objeto, pero ¿qué hay de su rotación, material, color o incluso su visibilidad?

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

Puedes evitar tener que agregar una propiedad con solo presionar el botón **Record (Grabar)** y realizar cambios en el Inspector. Mientras el botón **Record** esté activo, el Editor de animación agregará de forma automática el parámetro. Ten en cuenta que este método solo agrega fotogramas clave cuando realizas cambios en el objeto, y no agrega fotogramas clave finales para el bucle.

**Creación de Controladores de animador:** Los objetos pueden tener varios Clips de animación y esas animaciones pueden hacer transiciones entre sí cuando creas una Máquina de estado en un Controlador de animador. También aprendiste a crear parámetros que se pueden activar con un colisionador de desencadenador y un script.

**Animación de desencadenador:** No es necesario que la animación se inicie apenas inicia una Escena. Al aprender a trabajar con Controladores de animador, descubres que los colisionadores de desencadenadores y los scripts pueden utilizarse para cambiar los estados dentro de un Controlador. Si quieres, puedes reutilizar el script del tutorial de animación de la puerta en esta Escena.

**Configuración de la animación humanoide:** Cualquier configuración de personaje para utilizar el Sistema de animación humanoide de Unity puede compartir animación. Esto te da acceso a cientos de animaciones en línea y en la [Tienda de recursos de Unity](https://assetstore.unity.com/3d/animations?category=3d%2Fanimations&free=true&orderBy=1&rows=264). Aprendiste a configurarlo y agregarlo a un Controlador de animador, ya sea como animación predeterminada o como parte de una Máquina de estado. Puedes reutilizar el script de la fiesta de baile del tutorial anterior o puedes usar uno nuevo que se explicará a continuación.

[Image: image]

¿Qué deberías animar? Lo dejamos a tu gusto. Cuando explores la Escena, intenta pensar en una narración sobre las razones por las que las cosas están configuradas de la manera en que lo están (o puedes cambiar lo que ocurre en la Escena si lo prefieres). ¿Puedes contar la historia de la Escena solo con animaciones?

Marcar paso como completado

## 3. ¿Cómo utilizar el Script Trigger del código clave?

Q&A (0)

En la carpeta Scripts, encontrarás un script llamado AnimatorControllerTriggers. Este script se diseñó para que lo edites, de modo que puedas desencadenar animaciones para tus personajes y objetos según la entrada del teclado.

Para editar el script, haz lo siguiente:

**1.**  Abre AnimatorControllerTriggers en Visual Studio con un doble clic en el script de la carpeta Scripts.

**2.**  Desplázate hacia abajo al método Update (Actualizar) y busca la sección que te indica duplicar el bloque de código.

**3.**  Selecciona el bloque de código, asegúrate de resaltar la llave de cierre ( } ) y cópialo con **Ctrl**/**Cmd**+**C**.

**4.**  Pega tu nuevo bloque varias líneas debajo del bloque de código existente, pero siempre dentro del método Update (mantente dentro de la penúltima llave en el script).

**5.**  Reemplaza la A en Keycode.A con la tecla que quieras. Puedes ver una lista completa de las teclas disponibles[aquí](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/KeyCode.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954563078).

**6.**  En la línea anim.SetTrigger, reemplaza YOUR_TRIGGER_NAME_HERE_INSIDE_THE_QUOTES con el nombre del parámetro al que deseas llamar cuando se presione la tecla.

**7.**  Guarda el script.

**8.**  Agrega el script al objeto que tiene adjunto el Controlador de animador.

Si no te sientes listo para editar un script, siempre puedes usar el de la fiesta de baile para este desafío. Te recordamos que está asignado para usar solo las teclas Q, W, E, R, T e Y Para revisar cómo está configurado este script y cómo configurar tu Controlador de animador para que funcione con él, consulta el [tutorial anterior](https://learn.unity.com/tutorial/673d1552edbc2a1c0b6b322e?language=es#6777fd01edbc2a3a5aa0d3bb).

Marcar paso como completado

## 4. ¿Cómo crear tus animaciones?

Q&A (0)

**1.** En la carpeta Scenes, busca y abre ChallengeScene_Animation.

**2.** Revisa la Escena y piensa en la narración que podrías transmitir mediante diferentes animaciones.

**3.**  Identifica varios elementos que puedas animar. Debes crear un mínimo de cinco animaciones con fotogramas clave, pero puede haber varias animaciones en el mismo objeto, siempre y cuando crees un Controlador de animador que permita que alguien las vea todas.

**4.**  Identifica un personaje de la Escena que deseas animar. Obtén un mínimo de tres animaciones en línea o en la [Tienda de recursos de Unity](https://assetstore.unity.com/).

**5.**  Utiliza el Script AnimatorControllerTriggers o el DanceParty para controlar el animador con pulsaciones de teclas.

**6.**  Crea tus animaciones con fotogramas clave y configura el Controlador de animador según sea necesario.

**7.**  Configura tus animaciones importadas para el Sistema de animación humanoide y agrégalas al Controlador de animador de tu personaje seleccionado (todas usan el Controlador de animador SharedController del tutorial anterior).

**8.**  Una vez que hayas completado tus animaciones, graba un video para mostrarlas.

**9.**  Si quieres compartir tu arduo trabajo con la comunidad de Learn, envía tu video.

Es posible que debas invertir al menos una hora y 15 minutos a este desafío.

Marcar paso como completado

## 5. Requisitos

Q&A (0)

Sabrás que tienes éxito si cumples con estos requisitos:

- Has creado al menos cinco animaciones con fotogramas clave (de nuevo, no tienen que estar todas en objetos diferentes) y has importado al menos tres animaciones creadas externamente.
- Has creado o personalizado Controladores de animador según sea necesario para asegurarte de que todas tus animaciones se ejecuten de forma correcta.
- Puedes transmitir algún tipo de narración o historia con las animaciones que creas.

Si encuentras tus animaciones importadas en línea, asegúrate de otorgarle el crédito correspondiente a la fuente. Una buena manera de hacerlo es mediante un archivo de texto que enumere a los creadores, el sitio web del que obtuviste los recursos y cualquier otra información solicitada.

Marcar paso como completado

## 6. Más recursos

Q&A (0)

Visita el siguiente [video de Unity en Youtube](https://www.youtube.com/watch?v=_GmpouP1-zo) con uno de nuestros creadores establecidos para saber que tan lejos te puede llevar el mundo de la animación en Unity.

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

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

¡Felicitaciones! Has completado el aprendizaje requerido para Habilidades básicas para creadores artísticos: Animación.

Tienes las habilidades y el conocimiento básicos para una de las áreas creativas principales dentro del motor de Unity.

Ahora estás listo para aplicar estas habilidades en otros proyectos. Queremos ver lo que puedes crear.

Marcar paso como completadoPaso opcional

## 8. ¿Cómo enviar tu proyecto?

Q&A (0)

Cuando hayas completado este desafío, envía y comparte tu proyecto.

Haz lo siguiente para enviar tu proyecto:

**1.** Toma una captura de pantalla o una grabación de tu pantalla de tu proyecto en modo **Play**.

**2.**Agrega un título y una descripción para la entrega.

- Asegúrate de incluir la imagen o el video de tu proyecto. Si tienes detalles adicionales sobre tu proceso o el proyecto que has creado, también puedes compartirlos en la descripción.

**3.**  Configura quién puede ver tu entrega.

- **Público:** Cualquier persona que vea este tutorial.
- **Privado:** Solo tú.

**4.**  Selecciona **Guardar y previsualizar entrega**.

**5.** Revisa la previsualización de tu entrega y luego completa el test CAPTCHA y selecciona **Enviar y continuar**.

Te recomendamos encarecidamente que comentes al menos en la entrega de otro creador. ¿Logró completar el desafío con éxito? ¿Qué te gusta del proyecto?

#### Por favor inicia sesión para enviar

Iniciar sesión

## Complete this Tutorial

Marcar todos los pasos como completados

Submission Gallery

[[Image: aliens bailando ]

aliens bailando

un grupo de personas bailando

OOscar_olmos140](https://learn.unity.com/submission/698bd771edbc2a00c4575c21)[[Image: a]

a

jaoi

Ddanymtzh01180](https://learn.unity.com/submission/698a59d5edbc2a01833dfd94)[[Image: Attack on Banana]

Attack on Banana

Showing animations while telling a beautiful story
Animations links:
https://assetstore.unity.com/packages/3d/animations/human-melee-animations-free-165785
https://assetstore.unity.com/packages/3d/animations/human-dance-animations-free-161313

PPall7240](https://learn.unity.com/submission/69429188edbc2a085dfd2969)[[Image: AVANCE 1 - Wizard Mayhem v2]

AVANCE 1 - Wizard Mayhem v2

CONTROLES:

- para moverse y agacharse (usar las teclas A-W-S-D)
- para saltar (usar SPACE)
- para probar el ataque basico (usar la tecla F)

Uunity_75188251220](https://learn.unity.com/submission/68e57b59edbc2a1ac52fb025)[[Image: tanques]

tanques

tanques

Uunity_74934503240](https://learn.unity.com/submission/68dda0a3edbc2a04378d2121)Load More
