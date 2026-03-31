[Image: image]

# Laboratorio 1: Conceptos básicos sobre el proyecto personal de VR

Tutorial

Beginner

+10XP

120 mins

1

(37)

Unity Technologies

[Image: Laboratorio 1: Conceptos básicos sobre el proyecto personal de VR]SummarySkills

En este primer laboratorio, llenarás un documento de diseño para definir tu concepto, y luego configurarás una Escena básica de VR o Realidad virtual con formas primitivas simples.

En este laboratorio, aplicarás las habilidades aprendidas en las siguientes lecciones:

- [Configuración del proyecto VR](https://learn.unity.com/tutorial/vr-project-setup)
- [Traslado en VR](https://learn.unity.com/tutorial/vr-locomotion)
- [Objetos que se pueden tomar](https://learn.unity.com/tutorial/grabbable-objects)
- [Aberturas](https://learn.unity.com/tutorial/sockets-g)

Este laboratorio forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr).

Resources

- [Project Design Doc - VR [WORD].docx](https://unity-connect-prd.storage.googleapis.com/20210212/c8a63efb-f45e-4b3c-bfad-c42f351d2dfc/Project%20Design%20Doc%20-%20VR%20[WORD].docx?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035275182)
- [Project Design Doc - VR [PDF].pdf](https://unity-connect-prd.storage.googleapis.com/20210212/00cd91a4-a6aa-4c93-abaa-004949d72618/Project%20Design%20Doc%20-%20VR%20[PDF].pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035275182)
- [Project Design Doc - VR [GDOC]](https://docs.google.com/document/d/18zUYaiwvXaOpKAUaUxqwVbzzO1qCrkLt2goQDZsEjnE/copy)

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

## 1. ¿Cómo llenar tu documento de diseño?

Q&A (0)

Antes de empezar a trabajar en tu proyecto, debes tener un plan sobre lo que vas a crear. La mejor manera de hacer esto es con un documento de diseño.

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

**1.  Obtén una copia en blanco del documento de diseño del proyecto de VR**

- Haz clic [aquí para crear una copia de un documento de Google.](https://docs.google.com/document/d/18zUYaiwvXaOpKAUaUxqwVbzzO1qCrkLt2goQDZsEjnE/copy)
- Haz clic [aquí para descargarlo como documento de Word.](https://connect-prd-cdn.unity.com/20210212/c8a63efb-f45e-4b3c-bfad-c42f351d2dfc/Project%20Design%20Doc%20-%20VR%20[WORD].docx?_ga=2.111809031.209333272.1612709644-59568313.1601905412)
- Haz clic [aquí para descargarlo como archivo PDF.](https://connect-prd-cdn.unity.com/20210212/00cd91a4-a6aa-4c93-abaa-004949d72618/Project%20Design%20Doc%20-%20VR%20[PDF].pdf?_ga=2.111809031.209333272.1612709644-59568313.1601905412)

**2.  Llena la Sección 1 del documento (App Info o Información sobre la aplicación):**

- Elige un título tentativo para tu aplicación.
- Coloca una marca de verificación (con las funciones de copiar y pegar) junto a la categoría o las dos categorías que describan mejor tu aplicación.

**3.  Llena la Sección 2 del documento (Pitch o Propuesta):**

- Describe el objetivo de la aplicación.
- Describe las razones por las que puede ser especialmente efectiva en VR.
- Describe de manera general lo que harán los usuarios en la aplicación.
- Especifica si tu aplicación estará dirigida a dispositivos con 3 o 6 grados de libertad.

**4.  Llena la Sección 3 del documento (Basics o Conceptos básicos):**

- Describe dónde estará situada la aplicación y cómo se desplazarán por el entorno los usuarios.
- Enumera los tipos de objetos que los usuarios podrán tomar, así como cualquier interactor de abertura que planees utilizar.

Ahora, las primeras tres secciones de tu documento de diseño deberían estar completas y deberían proporcionar una base adecuada para completar el resto de este laboratorio.

Marcar paso como completado

## 2. ¿Cómo abrir y ejecutar un nuevo proyecto de VR?

Q&A (0)

Al igual que como lo hiciste al principio del proyecto VR Room (Sala de VR), lo primero que debes hacer para tus proyectos personales es crear un nuevo proyecto de Unity configurado para VR.

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

**1.  Crea un nuevo proyecto de Unity para tu proyecto personal:**

- Sigue las instrucciones descritas en el [tutorial de Configuración del proyecto VR](https://learn.unity.com/tutorial/vr-project-setup).
- Mueve la carpeta extraída al mismo directorio donde se encuentra tu proyecto VR Room.
- En lugar de usar el nombre «VR Room - [Tu nombre]» para tu proyecto, dale el nombre «VR Personal Project - [Tu nombre]».

**2.  Importa la biblioteca del curso de VR en tu proyecto:**

- Sigue las instrucciones descritas en el [tutorial de Configuración del proyecto VR](https://learn.unity.com/tutorial/vr-project-setup).

**3.  Configura tu proyecto para que se pueda ejecutar en tu dispositivo específico:**

- Sigue las instrucciones descritas en el [tutorial de Configuración del proyecto VR](https://learn.unity.com/tutorial/vr-project-setup).

**4.  Asegúrate de tener todo listo para empezar a desarrollar tu proyecto personal:**

- Cambia el nombre de la **Escena inicial** y ábrela.
- Asegúrate de poder ejecutar correctamente tu proyecto en tu dispositivo de VR o con el simulador de dispositivo.

**5.  Si no quieres los desafíos en tu proyecto:**

- En la ventana Project (Proyecto), haz clic derecho en la carpeta **Challenges (Desafíos)** y luego haz clic en **Delete (Eliminar)**.

Ahora, deberías tener un nuevo proyecto abierto en la Escena inicial, y deberías poder probarlo en VR o con el simulador de dispositivo.

Marcar paso como completado

## 3. ¿Cómo configurar la Escena básica con primitivos?

Q&A (0)

En lugar de utilizar los Assets (Recursos) de la biblioteca del curso, puedes desarrollar esta Escena básica con primitivos y materiales de colores simples:

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

**1.  Crea el suelo:**

- En la Hierarchy (Jerarquía), selecciona el objeto **Plane (Plano)**.
- Restablece la posición del Plane a 0, 0, 0 en el Inspector.
- Cambia su nombre a «Ground».

**2.  Asegúrate de que tus materiales se mantengan organizados:**

- Crea una nueva carpeta llamada «Materials» en el directorio Assets.

**3.  Crea un material para el suelo:**

- En la carpeta Materials, **haz clic derecho en** > **Create** > **Material (Crear material)**.
- Cambia el nombre del nuevo material a «Ground».
- Edita el color de Base Map (Mapa base) en el Inspector.
- Arrastra el material hacia tu objeto Ground.

**4.  Bloquea el resto de tu Escena básica:**

- Crea más objetos primitivos (cubos, esferas, planos, cápsulas, etc.), cambiando su tamaño y aplicando materiales de colores simples.
- Aún no crees ningún objeto que se pueda tomar. Concéntrate en agregar los objetos más importantes para el entorno, como un espacio, una mesa, etc.

**Nota:** Si tienes objetos que se pueden reutilizar en diferentes partes de la Escena, crea una carpeta llamada «Prefabs» y arrástralos hacia esa carpeta para convertirlos en Prefabs.

Ahora, deberías tener tu Escena básica bloqueada con primitivos de un tamaño adecuado.

Marcar paso como completado

## 4. ¿Cómo configurar el traslado básico?

Q&A (0)

Ahora que tienes la Escena básica bloqueada, necesitas desplazarte por ella de alguna manera.

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

**1.  Permite que el usuario se desplace por la Escena:**

- Sigue las instrucciones descritas en el [tutorial de Traslado en VR](https://learn.unity.com/tutorial/vr-locomotion) para configurar las Teleportation Areas (áreas de teletransportación).
- Podrías hacer que todo el suelo se convierta temporalmente en una Teleportation Area para los fines de pruebas y desarrollo.
- También podrías utilizar el movimiento continuo para los fines de pruebas y desarrollo.

**2.  Permite que el usuario se teletransporte hacia las ubicaciones importantes de la Escena:**

- Sigue las instrucciones descritas en el [tutorial de Traslado en VR](https://learn.unity.com/tutorial/vr-locomotion) para configurar los Teleportation Anchors (Delimitadores de teletransportación).
- En lugar de utilizar los tapetes como lo hiciste en tu espacio, crea cubos de 1 x 0.1 x 1 llamados «Teleportation Anchor».
- Recuerda configurar la propiedad Match Orientation (Orientación de emparejamiento) para que la orientación coincida con la dirección hacia adelante del delimitador.

Ahora, deberías poder desplazarte por tu Escena básica.

Marcar paso como completado

## 5. ¿Cómo configurar objetos básicos que se pueden tomar?

Q&A (0)

El último paso  es crear todos los Prefabs de objetos que se puedan tomar con los que esperas que interactúe el usuario.

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

**1.  Para hacer objetos más complejos con los primitivos, sigue estos pasos:**

- Crea un objeto Empty (Vacío).
- Cambia el nombre del objeto.
- Crea objetos secundarios primitivos para representar la malla de la forma del objeto.

**2.  Para hacer que tus objetos se puedan tomar, sigue estos pasos:**

- Sigue las instrucciones descritas en el [tutorial de Objetos que se pueden tomar](https://learn.unity.com/tutorial/grabbable-objects).
- Agrega los componentes al objeto principal Empty, en lugar de a los objetos secundarios primitivos.

**3.  Para agregar aberturas a tu Escena, sigue estos pasos:**

- Sigue las instrucciones descritas en el [tutorial de Aberturas](https://learn.unity.com/tutorial/sockets-g).

**4.  Para convertir tus objetos con los que se pueda interactuar en Prefabs, sigue estos pasos:**

- Arrastra todos los objetos nuevos con los que se puede interactuar hacia la carpeta Prefabs.

Ahora, deberías tener Prefabs funcionales básicos de los objetos principales que se pueden tomar en tu Escena.

Marcar paso como completado

## 6. ¿Cómo organizar la Hierarchy?

Q&A (0)

Antes de que la Hierarchy se llene demasiado,  dedica algún tiempo a reorganizarla.

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

**1.  Para crear objetos organizadores en la Hierarchy, sigue estos pasos:**

- En la Hierarchy, crea nuevos GameObjects Empty llamados «XR», «LIGHTING», «STATIC» y  «DYNAMIC».
- Restablece la posición de todos a los valores 0, 0, 0.

**2.  Para organizar tus objetos por categorías, sigue estos pasos:**

- Arrastra los objetos desde la Hierarchy hacia los objetos organizadores (para crear objetos secundarios) o colócalos debajo de los objetos organizadores (para utilizar los objetos organizadores como encabezados).

Ahora, la Hierarchy debería estar organizada por categorías.

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

- Configuración del proyecto VR
- Escena  bloqueada con primitivos
- Traslado en la Escena
- Objetos que se pueden tomar
- Interactores de aberturas

**Nuevos conceptos y habilidades:**

- Aplicar los conceptos básicos de VR, como el traslado y los objetos que se pueden tomar, en tu propia aplicación de VR.

**Siguiente laboratorio:**

- ¿Cómo implementar las funciones y las interacciones básicas?

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
