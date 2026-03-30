[Image: image]

# ¿Cómo perfeccionar tu animación?

Tutorial

Beginner

+10XP

40 mins

1

Unity Technologies

[Image: ¿Cómo perfeccionar tu animación?]Summary

En este tutorial, aprenderás sobre el Curves Editor (Editor de curvas) y explorarás algunos principios básicos de la animación. Al finalizar este tutorial, podrás hacer lo siguiente:

- Editar los valores de una Curva de animación.
- Agregar fotogramas clave a un Clip de animación.
- Grabar una animación de GameObject con el Record Mode (Modo de grabación).
- Ajustar varios fotogramas clave a la vez.

Resources

- [Key manipulation in Curves mode](https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-KeyManipulationInCurvesMode.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953969613)
- [Editing Curves](https://docs.unity3d.com/6000.0/Documentation/Manual/EditingCurves.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953969613)
- [Using Animation Curves](https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-AnimationCurves.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953969613)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Estás en el proceso de aprender a crear animaciones básicas directamente en Unity. En los tutoriales anteriores, aprendiste a trabajar con el Editor de animación, a crear Clips de animación y a crear y editar fotogramas clave. Para las animaciones más simplistas, ya tienes las habilidades que necesitas, pero Unity tiene herramientas adicionales que te permiten perfeccionar aún más tus animaciones. En este tutorial, aprenderás sobre el Curves Editor y explorarás algunos principios básicos de animación.

A medida que te preparas para dar el siguiente paso en el desarrollo de tus habilidades de animación, tómate un momento para escuchar algunos consejos de nuestros creadores sobre cómo crear animaciones para experiencias 3D en tiempo real:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- Español, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Marcar paso como completado

## 2. ¿Cómo perfeccionar la animación con curvas?

Q&A (0)

Al principio del proyecto, aprendiste que, en la animación digital, el enfoque principal de los animadores está en el proceso de creación de poses con fotogramas clave y que cualquier herramienta que utilice el animador se encarga de la interpolación. Lo viste en acción cuando creaste las animaciones de la pelota: animaste las poses más extremas y Unity hizo la transición sin problemas entre ellas. Para la animación de pulso, este tipo de interpolación funcionó a la perfección; sin embargo, la animación de rebote se veía poco natural.

En casos como la animación del rebote, un animador debe modificar las interpolaciones en sí, y en Unity esto se hace a través del **Curves Editor**. Hasta este punto, has trabajado en una sección del Editor de animación llamada **Dopesheet (Hoja de exposición)**, que es donde se configuran todos los fotogramas clave.

**1.**  Para seguir con Animation_Start_scene, selecciona la pelota y asegúrate de que el Editor de animación todavía esté abierto. Si no lo está, [consulta el tutorial anterior](https://learn.unity.com/tutorial/673d1452edbc2a1bd5b2fa43?language=es#6777e7cdedbc2a4e1b62d1c1) sobre cómo abrirlo.

**2.**  Asegúrate de que la animación actual que se muestra en el Editor de animación sea Ball_Bounce. Si no lo es, selecciónala en el Clip de animación en el menú de la parte superior izquierda del Editor de animación.

**3.** En la parte inferior del Editor de animación, busca y selecciona el botón Curves Editor.

[Image: image]

**4.**  Usa la rueda de desplazamiento del mouse o la tecla F del teclado para alejar el área de trabajo del Editor hasta que puedas ver los tres fotogramas clave y las curvas que los conectan.

[Image: image]

La curva que se muestra en el Editor es una representación visual de las interpolaciones que ocurren entre los fotogramas clave establecidos, específicamente su tasa de transición. Si obtienes una vista previa de la animación, puedes ver esta relación en acción. Durante los primeros fotogramas de la animación, la pelota desciende con lentitud desde su altura máxima, toma velocidad en el medio de la caída y luego reduce la velocidad para el aterrizaje. Repite este proceso al revés para volver al punto de partida. Este tipo de transición se conoce como**aceleración**. Exploremos cómo cambia la animación cuando no se aplica la aceleración.

**5.**Haz clic derecho en el primer fotograma clave de la animación en el Curves Editor y, en la lista, selecciona **Right Tangent**> **Linear**.

**6.**Haz clic derecho en el fotograma clave del medio y, en la lista, selecciona**Left Tangent >** **Linear**.

[Image: image]

Se ha eliminado toda la aceleración de la primera mitad de la animación y esta última se interpola linealmente de un fotograma clave al siguiente.

**7.**Presiona el botón Play (Reproducir) en el Editor de animación para obtener una vista previa de la animación y tomar nota de las diferencias entre la primera mitad y la segunda del rebote de la pelota.

La pelota cae a un ritmo uniforme durante la primera mitad de la animación, pero, al igual que en la interpolación inicial, esto también parece poco natural. La razón es que nada orgánico se mueve de una manera realmente lineal: siempre se produce algún nivel de aceleración.

Marcar paso como completado

## 3. ¿Cómo ajustar la aceleración de la pelota?

Q&A (0)

Al animar, se recomienda consultar las referencias de la vida real siempre que sea posible. Antes de realizar ajustes a las curvas del rebote de la pelota, estudia el siguiente video:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Observa cómo la pelota toma velocidad al caer, antes de impactar con fuerza el suelo y rebotar hacia arriba, para finalmente disminuir la velocidad hacia la parte superior del siguiente arco en el rebote. Este arco de rebote es exactamente como debe verse la curva de tu pelota en el Curves Editor.

**1.** Haz clic derecho en el primer fotograma clave y selecciona Clamped Auto (Sujeción automática) de la lista. Esto restablecerá la tangente a su estado original.

**2.** Haz clic derecho en el fotograma clave del medio y, en la lista, ve a **Right Tangent**> **Lineal.**

**3.**Obtén una vista previa de la animación en el Editor de animación.

La animación ahora se ve mucho más cercana al video de referencia, pero el descenso y el rebote de la pelota se pueden enfatizar aún más.

**4.**Selecciona el último fotograma clave. Al seleccionar el fotograma clave, aparece un pequeño control gris. Este es el **control de la tangente**.

**5.**Selecciona el control de la tangente y arrástralo para ajustar la curva de modo que esté un poco más redondeada en la parte superior.

**6.**Obtén una vista previa de la animación en el Editor de animación y continúa ajustando el control de la tangente hasta que parezca que la pelota se mantiene un poco en el aire antes de volver a caer.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Estás más cerca; sin embargo, el aterrizaje debería tener más impacto. Observa que si seleccionas el fotograma clave del medio, no aparecen controles de tangentes. Se debe a que ambas tangentes se establecieron como lineales. Esto coloca la animación en la posición inicial correcta; sin embargo, ahora que necesitas presionarlo más, es necesario ajustarlo.

**7.**Haz clic derecho en el fotograma clave del medio y, en la lista, ve a **Both Tangents**> **Free**. Esto mantendrá las tangentes en la misma posición, pero te dará acceso a los controles de tangente.

**8.**  Ajusta los controles de tangente del fotograma clave del medio para formar una V más nítida.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**9.**  Continúa ajustando las tangentes y observando la animación hasta que estés satisfecho con los resultados.

Marcar paso como completado

## 4. ¿Cómo crear fotogramas clave de aplastamiento?

Q&A (0)

Cuando un objeto golpea una superficie con la fuerza suficiente, se producirá la deformación del objeto o de la superficie. El objeto deformado volverá a su forma original (o lo más cerca posible) una vez que la energía del golpe se haya disipado. En la animación, este proceso está encapsulado en una técnica llamada aplastamiento y estiramiento. En la animación tradicional, este proceso a menudo se enfatiza demasiado para dar a los impactos una mayor presencia.

El cortometraje Sherman de Unity hace un gran uso del aplastamiento y estiramiento en un formato de animación tradicional. Mira la animación a continuación y busca instancias de aplastamiento y estiramiento demasiado exageradas, en particular con el mapache Sherman.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

[Image: image]

El aplastamiento y estiramiento extremos ayudan a agregar un nivel de dinamismo a Sherman y lo consolidan con firmeza en el ámbito de una caricatura cómica, a pesar de las imágenes realistas. Cuando se usan de manera sutil, el aplastamiento y el estiramiento pueden tener el efecto opuesto, lo que hace que los objetos se sientan más conectados a la realidad. Piensa en cómo podrías aplicar este principio a tu propia animación: ahora la pelota rebota bien, pero la manera en que conserva su forma hace que parezca que se trata de un plástico duro y vacío. La aplicación del aplastamiento y estiramiento pueden hacer que la pelota se vea más como una goma blanda.

Comencemos con el aplastamiento:

**1.**  Regresa a la hoja de exposición con un clic en el botón Dopesheet en la parte inferior del Editor de animación.

**2.**  Configura el Indicador de reproducción en el primer fotograma clave en 0:00 y activa la grabación de fotogramas clave.

**3.**  Haz clic en Add Property (Agregar propiedad) y ve a **Transform**> **Scale**. Ten en cuenta que esto agrega automáticamente un fotograma clave al inicio y al final de la animación.

**4.**  Haz avanzar el Indicador de reproducción al segundo fotograma clave, que es el momento en que la esfera golpea el suelo.

**5.**  Presiona R en tu teclado para habilitar la herramienta Scale (Ajustar tamaño). Ajusta el tamaño de la esfera a 0.8 en Y.

**6.**  Presiona W en tu teclado para habilitar la herramienta Move (Mover). Arrastra la esfera hacia abajo para que parezca que vuelve a reposar sobre la superficie del suelo.

[Image: image]

Si seleccionas y arrastras el Indicador de reproducción a lo largo de la línea de tiempo, puedes obtener una vista previa de forma manual de las secciones de una animación. Este proceso se conoce como **barrido.**Haz un barrido de la animación y verás que ahora la pelota se aplasta; sin embargo, lo hace desde el principio de la animación. El efecto de aplastamiento solo debe producirse al impactar con el suelo.

**7.**Selecciona el fotograma clave Scale en la marca 0:00 y cópialo con **Ctrl +** **C** (Windows) o **Cmd +** **C** (macOS) en tu teclado.

**8.**  Haz avanzar el Indicador de reproducción al fotograma justo antes del fotograma clave del impacto.

**9.**  Presiona **Ctrl/Cmd +** **V** en tu teclado para pegar el fotograma clave Scale que copiaste.

**10.** Haz un barrido entre los dos fotogramas para comprobar que la pelota mantiene su forma hasta que toca el suelo.

Marcar paso como completado

## 5. ¿Cómo crear fotogramas clave de estiramiento?

Q&A (0)

Después del aplastamiento, viene el estiramiento, que es el resultado directo de que la energía del objeto se condense y explote hacia fuera antes de regresar a su forma original. Anteriormente viste que Sherman podía alcanzar una pose de aplastamiento bastante extrema. Ahora, observa el estiramiento resultante:

[Image: image]

Con el impacto de aplastamiento de la pelota completo, puedes proceder al estiramiento. En el caso de una pelota de goma, esto ocurre inmediatamente después del impacto con el suelo, cuando la energía de la caída lanza la pelota de nuevo al aire.

**1.**  Haz avanzar el Indicador de reproducción al fotograma inmediatamente después del fotograma del impacto.

**2.**  En el Inspector, establece el valor de la escala Y en 1.2.

[Image: image]

**3.** Obtén una vista previa de la animación al presionar Play en el Editor de animación. Ahora la esfera se aplastará y se estirará al golpear y rebotar en el aire.

**4.**  Ajusta los fotogramas clave de aplastamiento y estiramiento según tus preferencias personales.

**5.**  Haz clic en el botón Record para salir del Record Mode una vez que hayas terminado de editar.

**Nota**: Si el colisionador de esferas te distrae, puedes quitarlo de la malla. Solo asegúrate de hacerlo cuando el Record Mode no esté activo en el Editor de animación, de lo contrario, simplemente animarás la eliminación del colisionador en un punto específico de tu animación.

Marcar paso como completado

## 6. ¿Cómo mover tu animación por la Scene?

Q&A (0)

Te has tomado el trabajo de animar una pelota, pero ¿qué ocurre cuando decides que quieres que exista en algún otro lugar de la Scene (Escena)? Es de esperar que lo puedas mover con libertad donde lo necesites; sin embargo, ese no es el caso.

**1.**Selecciona la pelota en la Hierarchy (Jerarquía) y luego muévela a otra parte de la Escena.

**2.**  Presiona el botón Preview (Vista previa) en el Editor de animación para reproducir la animación.

Observa cómo la pelota salta inmediatamente al lugar donde la animaste originalmente. Todo esto se reduce a la posición de los fotogramas clave. Recuerda que la configuración de Transform Position (Posición de transformación) que ves en el Inspector se refiere al lugar donde existe el objeto seleccionado en el espacio en 3D, también conocido como las transformaciones globales. Esto significa que la animación que creaste no solo define cómo rebota y se deforma la pelota, sino también en qué lugar del espacio en 3D lo hace. Afortunadamente, hay una manera fácil de permitir que tus animaciones se muevan con libertad.

**3.** Deshaz el movimiento con **Ctrl/Cmd +** **D** en el teclado.

**4.**En la Hierarchy, haz clic derecho y selecciona Create Empty (Crear vacío). Cambia el nombre a «Ball Parent».

**5.**  Para restablecer la posición del objeto Ball Parent, haz clic en el botón de los puntos suspensivos verticales en la sección Transform (Transformación) del Inspector y selecciona Reset (Restablecer). El objeto Ball Parent se ajustará al origen de la Escena (0, 0, 0).

**6.** En la Hierarchy, arrastra el objeto Ball (Pelota) al elemento Ball Parent para convertirlo en un objeto secundario.

[Image: image]

**7.** Mueve el objeto Ball Parent a cualquier parte de la Escena y obtén una vista previa de la animación de la pelota al seleccionarla y presionar el botón Play en el Editor de animación. Si la animación regresa a Ball_Pulse, restablécela a Ball_Bounce en el menú debajo de los controles de reproducción del Editor de animación.

Ahora, la pelota rebotará dondequiera que muevas el objeto Ball Parent. Si seleccionas el objeto Ball y miras el Inspector, podrás ver por qué: los valores de posición de la pelota no han cambiado en absoluto. Cuando un objeto se convierte en elemento secundario de otro objeto en Unity, sus valores de transformación cambian de globales a locales. El hecho de que Ball sea un elemento secundario de Ball Parent significa que solo le importa su valor de posición en relación con el objeto primario. Esto significa que puedes mover el objeto Ball Parent a cualquier lugar de la Escena sin afectar la animación del objeto secundario.

Marcar paso como completado

## 7. Explora: ¿Cómo rebotar y recorrer una distancia?

Q&A (0)

Ya has practicado todas las habilidades que necesitas para crear animaciones simples en Unity. Sin embargo, hasta este punto, solo te has centrado en un objeto que permanece en su lugar durante la animación. En este desafío, tu objetivo es intentar animar la pelota que rebota por toda la plataforma, y no solo en su lugar.

- Crea un nuevo clip de animación llamado «Bounce_Distance».
- Anima la pelota para que rebote al menos tres veces conforme se mueve por el suelo.
- Consulta la imagen y el video de referencia para ver cómo una pelota que rebota pierde energía con el tiempo.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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
