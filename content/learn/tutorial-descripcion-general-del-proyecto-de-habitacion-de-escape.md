[Image: image]

# Descripción general del proyecto de habitación de escape

Tutorial

intermediate

+10XP

30 mins

1

Unity Technologies

[Image: Descripción general del proyecto de habitación de escape]Summary

Este proyecto es diferente a todo lo que has intentado hasta ahora. Solo recibirás un resumen de proyecto con algunas pistas y tendrás que hacer lo posible para completarlo. Tu objetivo es implementar las últimas interacciones de una habitación de escape.

En este tutorial, verás la descripción general del proyecto y aprenderás a usar adecuadamente las pistas proporcionadas y a configurar el proyecto básico en Unity.

Resources

- [VR-Pathway_Escape-Room_partial-project-brief.pdf](https://unity-connect-prd.storage.googleapis.com/20220613/7bde88ee-5d2a-4851-8240-fe917127d0fd/VR-Pathway_Escape-Room_partial-project-brief.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954569832)
- [VR-Pathway_Escape-Room_Assets.zip](https://unity-connect-prd.storage.googleapis.com/20220614/ae357b7b-0652-4352-b515-6def6dafda09/VR-Pathway_Escape-Room_Assets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954569832)

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

## 1. Descripción general

Q&A (0)

Ahora tienes algo de experiencia en la programación de interacciones personalizadas de VR (Realidad virtual) con la Interfaz de programación de aplicaciones (API) del kit de herramientas de interacción de XR o Realidad extendida. A continuación, aplicarás lo que aprendiste en un nuevo resumen de proyecto, donde tendrás la tarea de programar la funcionalidad de una parte de una habitación de escape.

Al desarrollar este proyecto, recibirás conjuntos de pistas que te ayudarán a completar algunos de los elementos más desafiantes del resumen.

En este tutorial, te familiarizarás con el resumen del proyecto y configurarás la Escena básica en Unity.

Marcar paso como completado

## 2. ¿Qué es un resumen de proyecto?

Q&A (0)

Un **resumen de proyecto** es un documento que incluye una síntesis de un proyecto con sus requisitos básicos. El resumen del proyecto funciona como una única fuente de verdad para todas las personas que trabajan en un proyecto. Si no lo utilizas, es casi seguro que habrá malentendidos, ineficiencias y frustración durante el desarrollo.

Al trabajar en el desarrollo de VR, los clientes te proporcionarán un resumen del proyecto o trabajarán contigo para desarrollar uno. Luego, tú y tu equipo deberán crear lo que se les pidió.

Este proyecto de aprendizaje tiene el objetivo de simular ese tipo de interacción típica con los clientes.

En este video, nuestros creadores consolidados hablan sobre el rol que desempeñan los resúmenes de proyectos en la industria:

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

## 3. ¿De qué se trata este proyecto?

Q&A (0)

Para este proyecto, se te pidió implementar las últimas interacciones de una habitación de escape. El usuario debe poder hacer lo siguiente:

**1.**  Escribir un código en un teclado numérico para recibir una tarjeta de acceso.

**2.**  Usar esa tarjeta para quitar el seguro de una puerta.

**3.**  Deslizar la puerta para abrirla y salir de la habitación.

Al completar el proyecto, debe tener un aspecto similar al siguiente:

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

Cada uno de los siguientes tres tutoriales está dedicado a una de las tres interacciones básicas del proyecto: el teclado numérico, el lector de tarjetas y la puerta corrediza. Se te proporcionarán más requisitos técnicos específicos para cada interacción y algunas pistas para ayudarte en el camino.

Si quieres empezar a leer la información relacionada, puedes [descargar el resumen del proyecto](https://connect-prd-cdn.unity.com/20220613/7bde88ee-5d2a-4851-8240-fe917127d0fd/VR-Pathway_Escape-Room_partial-project-brief.pdf) y echar un vistazo a los requisitos ahora.

Marcar paso como completado

## 4. ¿Cómo usar las pistas?

Q&A (0)

Este proyecto no es fácil. Deberás programar varias funcionalidades que no has hecho antes.

Para ayudarte a enfrentar estos desafíos, te proporcionaremos varios conjuntos de pistas en el proceso.

En cada tutorial, encontrarás tres conjuntos de pistas, cada uno con un mayor nivel de apoyo e información específica. Intenta empezar a resolver los desafíos sin utilizar ninguna pista. Si tienes dificultades, revisa el primer conjunto de pistas. Si aún tienes dificultades después de eso, consulta el segundo conjunto. Si aún no puedes resolver el desafío, revisa el último conjunto de pistas.

Esto es lo que encontrarás en cada conjunto de pistas:

- Conjunto de pistas 1
Orientación sobre la arquitectura del código y la lógica de programación a nivel general.
- Conjunto de pistas 2
Métodos, clases o documentos específicos que te pueden ayudar a implementar una característica.
- Conjunto de pistas 3
Fragmentos de código que pueden resultar especialmente útiles para las características más difíciles.

Si trabajaras en este proyecto con un equipo profesional, tendrías colegas que te podrían ayudar o dar ideas al enfrentar dificultades. Debido a que probablemente trabajarás por tu cuenta en este proyecto, imagina que estas pistas representan el apoyo de un programador experto que forma parte de tu equipo.

Te recomendamos ampliamente que intentes programar cada característica antes de pasar al siguiente conjunto de pistas. La mejor manera de aprender es intentar resolver estos desafíos por tu cuenta.

Si no sabes qué hacer y deseas consultar el código funcional, también incluimos los scripts completos al final de cada tutorial.

Marcar paso como completado

## 5. ¿Cómo configurar el proyecto y la Escena?

Q&A (0)

Antes de empezar a trabajar en la primera característica del proyecto, sigue estos pasos para preparar la Escena:

**1.** Crea un nuevo proyecto compatible con VR.
Para esto, puedes utilizar las instrucciones y el ejemplo de proyecto inicial incluidos en el [tutorial de Configuración del proyecto](https://learn.unity.com/tutorial/vr-project-setup). Recuerda configurar tus complementos en el panel de **XR Plug-in Management (Administración de complementos de XR)**.

**2.** Descarga los [Assets (Recursos) de la habitación de escape](https://connect-prd-cdn.unity.com/20220614/ae357b7b-0652-4352-b515-6def6dafda09/VR-Pathway_Escape-Room_Assets.zip) e impórtalos en tu nuevo proyecto compatible con VR.

**3.** Dirígete a la carpeta Scenes y abre la Escena **VREscapeRoom_Start**.

La Escena debe tener un aspecto similar al siguiente:

[Image: image]

Prueba tu proyecto en VR con un casco o con el XR Rig Simulator (Simulador de Rig de XR) y asegúrate de que se pueda ejecutar correctamente.

Ninguno de los Assets debería funcionar por ahora. ¡Te encargarás de eso en los siguientes tutoriales!

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

En el siguiente tutorial, implementarás la funcionalidad para la primera característica: el teclado numérico.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
