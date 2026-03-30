[Image: image]

# 2.1: Audio y tacto

Tutorial

Beginner

+10XP

90 mins

1

(49)

Unity Technologies

[Image: 2.1: Audio y tacto]SummarySkills

En esta lección, aprenderás a aumentar el efecto envolvente de tu proyecto mediante estímulos táctiles y auditivos. Al finalizar esta lección, el usuario recibirá respuesta táctil y sonora cuando tome un objeto o se desplace sobre él. La Scene (Escena) también tendrá sonido ambiente espacial 3D.

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

## 1. ¿Cómo agregar una respuesta táctil al desplazarte sobre un objeto y seleccionarlo?

Q&A (0)

Puedes añadir una respuesta táctil al desplazarte sobre un objeto y seleccionarlo para proporcionar una respuesta física para las manos del jugador.

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

**Nota**: Si estás utilizando el complemento OpenXR para el desarrollo en dispositivos como el HTC Vive o Valve index, puede que esta característica no funcione.

**1.  Edita ambos objetos del control al mismo tiempo:**

- En la Hierarchy, expande el**XR Rig** y elgt; **Camera Offset.**
- Mantén pulsado Ctrl o Cmd y selecciona tanto **RightHand** **Controller (Controlador derecho)**como **LeftHand Controller (Controlador izquierdo)**para que ambos estén seleccionados**.**

**2.  Localiza los eventos táctiles:**

- En la parte inferior de los componentes de XR Ray Interactor (Interactor con rayos XR) de los objetos del **Control**, expande el desplegable **Haptic Events o Eventos táctiles**.

**3.  Crea una respuesta táctil sutil cuando el usuario pase por encima de un objeto:**

- Haz clic en la casilla **On Hover Entered (Al empezar a desplazarse por encima)** para activarla.
- Ajusta la **Intensity (Intensidad)**a un valor bajo (por ejemplo, 0.1 o 0.5).
- Ajusta la **Duration (Duración)**a un valor muy bajo (por ejemplo, 0.1 segundos).

**4.  Crea una respuesta que se note más cuando el usuario tome un objeto:**

- Selecciona la casilla **On Select Entered (Al empezar a seleccionar)**.
- Ajusta los valores de **Intensity** y **Duration** a valores ligeramente superiores (por ejemplo, 0.25 segundos).

[Image: image]

Ahora el control debería vibrar de forma sutil cuando se pasa por encima de un objeto, y un poco más cuando se selecciona un objeto.

Marcar paso como completado

## 2. ¿Cómo agregar una respuesta sonora al desplazarte sobre un objeto o seleccionarlo?

Q&A (0)

Ahora que has aplicado la respuesta táctil, puedes mejorar la experiencia del usuario (UX) con la respuesta sonora.

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

**Nota**: Si estás utilizando el complemento OpenXR para el desarrollo en dispositivos como el HTC Vive o Valve index, puede que esta característica no funcione.

**1.  Selecciona el sonido que quieras utilizar:**

- Desde el **Course Library** > **Audio** > **FX**, determina qué efecto de sonido sutil de la interfaz de usuario quieres para el Hover o selecciona el evento.
- Para obtener una vista previa del sonido, puede ser necesario arrastrar hacia arriba el panel de vista previa desde la parte inferior de la ventana Inspector.

**2.  Aplica este efecto de sonido a ambos controles:**

- En Hierarchy, selecciona los objetos RightHand Controller (Controlador derecho) y LeftHand Controller (Controlador izquierdo).
- En el componente XR Ray Interactor, expande el desplegable **Audio Events (Eventos sonoros)**.
- Haz clic para activar el ajuste **On Select Entered** u **On Hover Entered**
- y luego asigna el efecto de sonido que hayas elegido.

[Image: image]

Ahora deberías escuchar un efecto de sonido cuando te desplazas sobre un objeto o cuando lo seleccionas.

Marcar paso como completado

## 3. ¿Cómo agregar sonido 3D de la chimenea?

Q&A (0)

Además de la respuesta sonora durante los eventos, puedes añadir audio espacial 3D a la Escena que emana de la chimenea para aumentar la inmersión.

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

**1.  Dale al fuego un efecto sonoro:**

- Añade un componente de Audio Source (Fuente de audio) al objeto partícula.
- Para la propeidad **AudioClip** , asigna el efecto de sonido SFX_Loop_Fire de la **Course Library**>**Audio**>**FX**folder.

**2.  Haz que el sonido se reproduzca automáticamente y en bucle:**

- En el componente Audio Source, asegúrate de que los ajustes **Play on Awake (Reproducir está activo)** y **Loop (Bucle)** estén activados.

**3.  Configura este componente como un sonido 3D:**

- Ajusta la propiedad **Spatial Blend (Mezcla espacial)** arrastrando el control deslizante (slider) hasta el ajuste **3D** derecho (o configurando el slider en 1).

**4.  Edita el volumen global y la atenuación del volumen de la chimenea:**

- Edita la propiedad **Volume (Volumen)**.
- **Expande el desplegable 3D Sound Settings (Configuración de sonidos en 3D) y, a continuación, ajusta los valores Min Distance (Distancia mínima) y Max Distance (Distancia máxima).**

[Image: image]

La chimenea debería emitir ahora un sonido crepitante, que debería cambiar de volumen y de equilibrio izquierda y derecha según la posición en la que te encuentres y tu orientación en la Escena.

**Recursos relacionados:**

- [Ajustes de Audio Source](https://docs.unity3d.com/Manual/class-AudioSource.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408155)

Marcar paso como completado

## 4. ¿Cómo agregar una zona de reverberación?

Q&A (0)

Para mantener la sensación de presencia en VR (Realidad virtual), es especialmente importante asegurarse de que el audio se comporte como lo haría en el mundo real. Para ello, hay que tener en cuenta cómo pueden reverberar los sonidos en distintos tipos de salas.

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

**1.  Añade una nueva Audio Reverb Zone (Zona de reverberación de audio) como objeto secundario de Room (Espacio):**

- En Hierarchy, haz clic con el botón derecho en el objeto **Room_[style]**.
- Haz clic en **Audio** > **Audio Reverb Zone**.

**2.  Asegúrate de que la zona de reverberación abarque toda la sala:**

- En el componente Audio Reverb Zone, asegúrate de que la propiedad **Min Distance** esté configurada, al menos, al ancho de la sala (10).
- **Nota:**Para visualizar la zona, es posible que tengas que activar el botón Gizmos y alejarte.
En **Unity 2021 LTS**, el botón Gizmos está representado por un icono de esfera con puntos en sus vértices:

[Image: image]

**3.  Haz que tu zona de reverberación se adapte a tu sala:**

- Utiliza el desplegable **Reverb Presets (Predefinidos de reverberación)** para experimentar con diferentes estilos de reverberación.
- Selecciona una configuración que se ajuste a tu espacio (Room o Living Room).

[Image: image]

Ahora deberías tener una zona de reverberación configurada en tu sala para que el sonido 3D sea aún más realista.

**Recursos relacionados:**

- [Zonas de reverberación de audio](https://docs.unity3d.com/Manual/class-AudioReverbZone.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408155)

Marcar paso como completadoPaso opcional

## 5. Experimentación con complementos espacializadores [opcional]

Q&A (0)

Además del sonido 3D integrado en Unity, que cambia el volumen en los oídos izquierdo y derecho en función de la distancia y la orientación del jugador, hay complementos adicionales espacializadores que puedes instalar para que el sonido sea aún más realista.

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

**1.  Descarga e importa un complemento:**

- Desde los enlaces que aparecen a continuación, descarga el complemento de espacializador correspondiente a tu plataforma.
- Importa el paquete a tu proyecto.

**2.  Habilita el complemento:**

- Haz clic en **Edit** > **Project Settings**.
- Selecciona la sección **Audio** en el panel izquierdo.
- Utiliza el menú desplegable junto a **Spatializer Plugin (Complemento espacializador)** para seleccionar tu complemento.

**3.  Implementa el complemento en tu partícula de fuego:**

- Sigue las instrucciones correspondientes a tu dispositivo para implementar el audio espacializado.

[Image: image]

Ahora, el sonido de la Escena debería resultar más realista, si tienes en cuenta la Función de transferencia anatómica (HRTF) del usuario.

**Recursos relacionados:**

- [Unity Audio Spatializer (Espacializador de audio Unity, en inglés).](https://docs.unity3d.com/Manual/VRAudioSpatializer.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408155)
- [Oculus Spatializer Download (Descarga del espacializador de Oculus, en inglés).](https://developer.oculus.com/downloads/package/oculus-spatializer-unity/)

- [Oculus 3D Audio Spatialization Guide (Guía de espacialización de audio 3D de Oculus, en inglés).](https://developer.oculus.com/learn/audio-intro-spatialization/)
- [Oculus Spatializer Features (Características de espacialización de Oculus, en inglés).](https://developer.oculus.com/documentation/unity/audio-spatializer-features/?locale=en_US)
- [Apply Spatialization in Unity (Aplicación de la espacialización en Unity, en inglés).](https://developer.oculus.com/documentation/unity/audio-osp-unity-spatialize/)
- [Microsoft HRTF Spatializer Download (Descarga del espacializador HRTF de Microsoft, en inglés)](https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/spatial-sound-in-unity)
(compatible con UWP y con PC que ejecutan Windows 10).

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

**Nueva funcionalidad:**

- Respuesta táctil en los controles
- Respuesta sonora en los controles
- Audio 3D realista de la chimenea

**Nuevos conceptos y habilidades:**

- Importancia de las funciones táctiles y sonoras para la inmersión.
- Audio 3D frente a 2D.
- Zonas de reverberación.
- Audio espacializado con función de transferencia anatómica (HRTF).

**Habilidades técnicas:**

- Audio & Haptic events

Marcar paso como completadoPaso opcional

## 7. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Añade un altavoz [Fácil]**

Agrega un altavoz al espacio para reproducir música, o incluso un tocadiscos que gire de verdad:

- Busca un altavoz en la Course Library > Prefabs > Objects > Speakers folder.
- Busca opciones de música enla **Course Library**>**Audio**>**Music**folder.
- Extra: si utilizas el tocadiscos, necesitarás un sencillo Script para hacer girar el plato sobre el que gira el disco.

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

**2.  Añade sonidos de rebote realistas [Medio] [Requiere programación]**

Añade un sonido de rebote para tu pelota, de modo que la oigas rebotar cada vez que toque el suelo:

- Descarga e importa un nuevo efecto de sonido, si es necesario
- Agrega una fuente de audio 3D a tu pelota, como hiciste con la chimenea.
- Para hacer que reproduzca un sonido cuando toque el suelo, tendrás que utilizar la función OnCollisionEnter y el método PlayOneShot.
- Extra: si quieres que el volumen cambie en función de la velocidad a la que se mueve la pelota, prueba utilizar rigidbody.velocity.magnitude.

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
