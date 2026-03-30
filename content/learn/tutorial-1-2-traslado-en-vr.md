[Image: image]

# 1.2: Traslado en VR

Tutorial

Beginner

+10XP

90 mins

0

(122)

Unity Technologies

[Image: 1.2: Traslado en VR]SummarySkills

En esta lección, aprenderás cómo implementar varios tipos de traslado en VR (Realidad virtual). Al finalizar esta lección, podrás teletransportarte por tu espacio recién amueblado para verlo desde diferentes ángulos.

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

## 1. ¿Cómo llenar el espacio con muebles?

Q&A (0)

Ahora tienes un espacio, pero está vacío. Debes agregar espacios en el espacio donde se puedan realizar interacciones en VR.

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

**1.  Busca los Prefabs de muebles:**

- En la ventana Project (Proyecto), dirígete a **Course Library**>**_Prefabs.**

**2.  Define un área de recibidor:**

- En una esquina del espacio, agrega un objeto **Mirror (Espejo)** y un objeto **Hook (Gancho)**.

**3.  Define una sala:**

- En una mitad del espacio, agrega un objeto **Seating (Asiento),** un objeto **Television (Televisor)**y un objeto **Fireplace (Chimenea).**

**4.  Define otra área:**

- Agrega un objeto **Rug (Alfombra)**, y un objeto **Table (Mesa)** o un objeto **Storage (Almacenamiento)** para proporcionar una superficie.

[Image: image]

Ahora deberías tener lo siguiente: un área de recibidor con un gancho y un espejo, un área para sentarse, una sala con un televisor y una chimenea, y otra área con algunas superficies con espacio para colocar objetos.

Marcar paso como completado

## 2. ¿Cómo agregar la funcionalidad de giro instantáneo?

Q&A (0)

A continuación, vamos a configurar la habilidad para dar vueltas en tu lugar, lo que te permitirá observar el espacio sin tener que moverte o girar físicamente.

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

**1.  Agrega capacidades de traslado a tu XR Rig (Rig de XR):**

- En la Hierarchy (Jerarquía), selecciona el objeto de **XR Rig** y agrega un componente Locomotion System (Sistema de traslado).
- Para la propiedad **XR Origin (Origen de XR)**, selecciona y arrastra el componente XR Origin desde el Inspector hasta el espacio que dice «None».
- **Nota**: También puedes seleccionar el selector de objetos y hacer doble clic en el objeto de XR Rig.

**2.  Permite que tu XR Rig gire en su lugar:**

- Con el objeto de **XR Rig**aún seleccionado**,**agrega un componente Snap Turn Provider (Action-based) o Proveedor de giro instantáneo (basado en acciones)
- Para la propiedad **System (Sistema)**, arrastra y suelta el componente Locomotion System en el espacio.

**3.  Perfecciona la experiencia de giro instantáneo:**

- Experimenta con las propiedades **Turn Amount (Cantidad de giro)**y **Debounce Time (Tiempo de supresión de rebotes)**.
- Selecciona la propiedad **Enable Turn Around (Habilitar vuelta)** para permitir que el usuario gire 180 grados al presionar la palanca de control.

**4.  Experimenta con el giro continuo:**

- Quita el componente Snap Turn Provider, y agrega un componente Continuous Turn Provider (Action Based) o Proveedor de giro continuo (basado en acciones) .

[Image: image]

Ahora, deberías poder utilizar las palancas en el control de cada mano para girar cierto número de grados. Esto permite que tu proyecto se pueda utilizar como una experiencia sin movimiento físico.

**Nota:** Si utilizas el simulador de dispositivo de XR, puedes simular el movimiento al presionar las teclas T o Y para activar uno de los controles, y luego presionar A o D para simular el giro instantáneo.

Marcar paso como completado

## 3. ¿Cómo crear un área de teletransportación sobre una alfombra?

Q&A (0)

Ahora que puedes girar, también puedes teletransportarte  hacia cualquier punto de un área específica.

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

**1.  Permite que el usuario se teletransporte:**

- Selecciona el objeto **XR Rig** y agrega un componente Teleportation Provider (Proveedor de teletransportación).
- Para la propiedad **System**, arrastra y suelta tu componente Locomotion System a fin de asignarlo a la propiedad.

**2.  Convierte la alfombra en un área de teletransportación:**

- Selecciona el objeto **Rug**y agrega un componente Teleportation Area (Área de teletransportación).
- En la parte inferior del componente Teleportation Area, para la propiedad **Teleportation Provider**, arrastra y suelta el objeto **XR Rig**desde la Hierarchy hacia el espacio vacío a fin de asignarlo a la propiedad.

[Image: image]

Ahora, cuando apuntes hacia cualquier parte de la alfombra, el componente de representación de líneas se pondrá de color blanco y podrás utilizar el botón Grip (Sujetar) del control para teletransportarte hacia ese lugar. El botón Grip es el que está en la parte más baja de la parte interna del control, y normalmente se presiona con el dedo medio.

**Nota:**Si  utilizas el simulador de dispositivo de XR, puedes presionar las teclas T o Y para activar uno de los controles, utilizar el botón central del mouse para apuntar el rayo y presionar la tecla G para simular que presionas el botón «Grab».

Marcar paso como completado

## 4. ¿Cómo crear Teleportation Anchors en los tapetes?

Q&A (0)

Algunas veces, quieres que el usuario se teletransporte hacia un punto específico, orientado hacia una dirección específica.

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

**1.  Agrega Teleportation Anchors (Delimitadores de teletransportación) a la Escena:**

- Dirígete a la carpeta **Course Library**> **Prefabs**> **Rugs**, y agrega objetos pequeños «Mat» en determinados puntos clave del espacio.
- Gira estos objetos para que la flecha (azul) de sus ejes Z locales apunte hacia la dirección a la que deseas que aparezca orientado el usuario cuando se teletransporte hasta ahí.
- **Nota**: Debes tener las coordenadas **Local** activadas para ver la dirección hacia adelante local de los objetos.
En Unity 2021.3 LTS, la configuración Local o Global se representa con un menú desplegable de botones de globo terráqueo o cubo ubicado en la esquina superior izquierda de la vista de Escena:

[Image: image]

**2.  Guarda los cambios para todos los tapetes en el modo Prefab:**

- Selecciona uno de los objetos Mat (Tapete) y haz clic en el botón **Open (Abrir)** ubicado en la parte superior del Inspector.
- Para asegurarte de que se guarden tus cambios, en la esquina superior derecha de la vista de Escena, habilita la opción **Auto-save** (Guardado automático).

**3.  Convierte el Prefab tapete en un Teleportation Anchor:**

- En el Prefab tapete, agrega un nuevo componente Teleportation Anchor.
- **Nota**: No es necesario asignar la propiedad **Teleportation Provider,** ya que se asigna automáticamente cuando se ejecuta la aplicación.

**4.  Haz que la orientación del delimitador coincida cuando te teletransportes hasta allí:**

- En el componente Teleportation Anchor, configura la propiedad **Match Orientation (Hacer que la orientación coincida)** con la opción **Target Up And Forward (Objetivo arriba y adelante).**

**5.  Sal del modo Prefab:**

- Selecciona la flecha hacia atrás ubicada en la esquina superior izquierda de la Hierarchy.

[Image: image]

Ahora, deberías poder teletransportarte hacia los diferentes tapetes ubicados en el espacio y reorientar la dirección de cada tapete cuando llegas a él.

**Nota:**Si deseas ocultar los contornos de color de los objetos en la vista de Escena, en la esquina superior derecha de la ventana de la vista de Escena, haz clic en el botón **Gizmos** para ocultar los Gizmos de la vista de Escena. También puedes hacer clic en la flecha del menú desplegable que aparece junto al botón Gizmos para mostrar u ocultar elementos específicos.

Marcar paso como completado

## 5. ¿Cómo personalizar las retículas para la teletransportación?

Q&A (0)

Los Line Renderers (Componentes de representación de líneas) de tus manos cambian de color cuando puedes teletransportarte hacia un lugar. Para brindar más información visual al usuario, podemos usar retículas.

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

**1.  Busca la retícula que deseas usar:**

- Dirígete a **Course Library**> **Prefabs** > **Reticles** > **VR** y elige la retícula que prefieras.

**2.  Asigna una retícula personalizada para el tapete de Teleportation Area:**

- Selecciona el objeto **Rug**grande que tiene un componente Teleportation Area.
- En la parte inferior del componente Teleportation Area, para la propiedad **Custom Reticle (Retícula personalizada)**, arrastra y suelta la retícula que hayas elegido para asignar la propiedad.

**3.  Asigna una retícula personalizada para los tapetes de Teleportation Anchor:**

- Abre el Prefab de uno de tus objetos de tapetes.
- En el componente Teleportation Anchor, para la propiedad **Custom Reticle**, asigna la retícula.
- Sal del modo Prefab.

[Image: image]

Ahora, la retícula personalizada debería aparecer en la ubicación donde el componente de representación de líneas se une con el destino de la teletransportación.

Marcar paso como completado

## 6. Resumen

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

- Sala diseñada
- Rig de giro
- Rig de teletransportación

**Nuevos conceptos y habilidades**

- Tipos de traslado
(Tamaño del espacio, continua o teletransportación)
- Mareo por vección y simulación
- Diferencias entre las áreas de teletransportación y los delimitadores de teletransportación

**Siguiente lección:**

- Objetos que se pueden tomar

Marcar paso como completadoPaso opcional

## 7. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión que aparecen abajo. Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto] para indicar el nivel del desafío, así como una etiqueta que indica cuando una actividad [Requiere programación].

Estas actividades son totalmente opcionales, pero son muy recomendables para quienes desean llevar sus habilidades de desarrollo de VR al siguiente nivel.

**1. Investiga otros tipos de movimiento en VR [Fácil]**

Busca información sobre otras formas menos comunes de movimiento en VR, como la deformación de proyectiles, el movimiento codificado, el avatar proyectado, el mundo de extracción, etc.

- Mira [este video sobre los tipos de movimiento](https://learn.unity.com/tutorial/unit-4-locomotion-and-ergonomics?courseId=5d955b5dedbc2a319caab9a0#5d969198edbc2a001f9f7588), que forma parte de nuestro curso de Diseño, desarrollo e implementación para VR.
- Busca «tipos de movimiento en VR» en Google a fin de encontrar otras estrategias interesantes para el traslado de VR.

**2. Crea tu propio arte [Medio]**

Agrega tu propia obra de arte personalizada al espacio para que sea único.

- Puedes crear tu propia obra maestra, o buscar una en línea y asegurarte de tener permiso de utilizarla (busca la licencia «creative commons 0»)
- Pista: Deberás crear un nuevo **Material**, asignar tu imagen como **Base Map (Mapa base)** de ese material y aplicarlo a un objeto.

[Image: image]

**3. Retícula animada [Medio] [Requiere programación]**

Haz que la retícula de teletransportación gire o cambie de tamaño para que la experiencia se sienta más dinámica.

- Pista: Crea un Script de rotación personalizado y aplícalo al Prefab retícula

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
