[Image: image]

# ¿Cómo crear tus primeras animaciones en 3D?

Tutorial

Beginner

+10XP

40 mins

1

(8)

Unity Technologies

[Image: ¿Cómo crear tus primeras animaciones en 3D?]Summary

En este tutorial, aprenderás los principios básicos de la animación y las herramientas disponibles en Unity al animar una pelota. Este es un ejercicio clásico para los nuevos animadores, tanto digitales como tradicionales. Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar un nuevo clip de animación.
- Grabar una animación de GameObject mediante el Record Mode (Modo de grabación).
- Agregar fotogramas clave a un clip de animación.
- Ajustar varios fotogramas clave a la vez.

Resources

- [Using the Animation view](https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-UsingAnimationEditor.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953434329)
- [Creating a new Animation Clip](https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-CreatingANewAnimationClip.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953434329)
- [Animating a GameObject](https://docs.unity3d.com/6000.0/Documentation/Manual/animeditor-AnimatingAGameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953434329)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Como aprendiste en el tutorial anterior, hay dos tipos de animación con los que trabajarás comúnmente en Unity: importada y generada en el Editor. Comenzarás tu recorrido de animación con animaciones en el Editor. Prácticamente cualquier cosa, desde GameObjects y sus componentes individuales, se puede animar en Unity. Puedes animar el material de un objeto para que cambie de color con el tiempo, encender y apagar una luz, desencadenar un script y más.

En este tutorial, aprenderás los principios básicos de la animación y las herramientas disponibles en Unity al animar una pelota. Este es un ejercicio clásico para los nuevos animadores, tanto digitales como tradicionales.

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

## 2. ¿Cómo crear un clip de animación?

Q&A (0)

En Unity, las animaciones individuales se almacenan en un recurso llamado **Clip de animación**. Está asociado con el objeto seleccionado en el momento de la creación del clip y almacena todos los datos necesarios para crear una animación específica. Los Clips de animación pueden tener cualquier longitud y un solo GameObject puede tener varios Clips de animación asociados.

**1.**En la Hierarchy (Jerarquía), selecciona el GameObject Ball (Pelota).

En el Editor de animación, observa que ha aparecido un botón **Create (Crear)** en el área principal de trabajo. Este botón siempre aparecerá para cualquier objeto seleccionado que aún no tenga ninguna animación asociada. Si seleccionas un objeto que ya ha sido animado, la primera animación creada se mostrará en el Editor de animación.

[Image: image]

**2.** Haz clic en el botón **Create** y Unity te pedirá que selecciones una ubicación para guardar tu animación.

**3.**Asígnale el nombre "Ball_Pulse" a la animación y guárdala en la carpeta Animations (Animaciones).

Al guardar el nuevo Clip de animación, la apariencia de la ventana Animation cambia. El lado izquierdo de la ventana ahora cuenta con un botón **Add Property (Agregar propiedad)** donde puedes agregar y ver las propiedades que deseas animar. Directamente sobre este botón está el nombre de tu Clip de animación actual en un menú desplegable. Si eliges tener varias animaciones en el mismo GameObject, puedes seleccionar la que quieres ver en este menú.

[Image: image]

El cuerpo de la ventana Animation ahora mostrará una línea de tiempo donde puedes crear tu animación.

Marcar paso como completado

## 3. ¿Cómo configurar los fotogramas clave de la animación?

Q&A (0)

Al igual que una animación está contenida en un Clip de animación, las poses específicas dentro de una animación se definen por sus **fotogramas clave**. En la animación tradicional dibujada a mano, los fotogramas clave son las poses que dibujan los animadores principales y son dibujos importantes (o clave) que definen la secuencia de animación. Una vez que los animadores principales terminan estas poses clave, otros animadores dibujan los fotogramas entre ellas para completar la animación. Estos fotogramas se conocen como fotogramas intermedios o **interpolaciones**.

En la animación digital, la interpolación generalmente la maneja cualquier herramienta con la que trabaje el animador, lo que significa que este solo debe preocuparse de configurar los fotogramas clave. Los fotogramas clave digitales registran todos los datos relacionados con el GameObject que se está animando en una marca de tiempo determinada. Veamos esto en acción al crear una animación de pulso simple con la pelota.

**1.**  Asegúrate de que la pelota aún esté seleccionada en la Hierarchy.

**2.** Haz clic en el botón **Add Property** en el lado izquierdo de la ventana Animation, y luego selecciona el menú desplegable junto a Transform (Transformar) para revelar la propiedad Scale (Ajustar tamaño). Selecciona el botón **+** para agregarla a la animación.

[Image: image]

Aparecerán cuatro íconos de rombo al inicio y al final de la escala de tiempo, dos por serie. Estos íconos representan fotogramas clave.

[Image: image]

Cuando se agrega una nueva propiedad a una animación, el Editor de animación registra los datos relevantes (en este caso, el tamaño actual de la pelota) sobre el objeto seleccionado y genera fotogramas clave iniciales para él. Un fotograma clave se genera al inicio y al final de la línea de tiempo para que la animación que generes pueda moverse en un **bucle**o comenzar y terminar en la misma posición para que la animación parezca perfecta. Si no deseas que tu animación se repita, puedes eliminar los fotogramas clave al final de la línea de tiempo, pero en este caso, querrás que tu animación se repita.

Has configurado los fotogramas clave iniciales, pero como los dos son iguales, aún no has animado nada. Para hacerlo, deberás modificar la malla de la pelota en la Scene (Escena) y luego establecer otro fotograma clave para registrar el cambio. Hay varias maneras de lograrlo, pero la más sencilla es utilizar el botón **Record (Grabar)**en el Editor de animación, que detectará automáticamente cuando realices algún cambio en tu modelo y generará fotogramas clave para grabar los cambios.

**3.** Selecciona el botón circular **Record** en la parte superior izquierda de la ventana Animation para activar el modo de grabación.

[Image: image]

Cuando se presiona el botón **Record**, tanto el botón como la línea de tiempo se resaltan en rojo. Mientras el botón **Record** esté activo, Unity agregará automáticamente fotogramas clave para cualquier propiedad que se cambie en el Inspector.

**4.** En la sección numerada de la escala de tiempo, selecciona la marca 25.

La línea blanca que estaba previamente en la marca 0 salta a la ubicación donde hiciste clic. Este es el **Indicador de reproducción** que muestra qué parte de la animación está activa o dónde está configurada la ubicación de los fotogramas clave.

**5.**  Cambia a la herramienta Scale al presionar la tecla R en tu teclado y luego aumenta el tamaño de Ball. Un fotograma clave se agrega de forma automática a la línea de tiempo donde se ha establecido el Indicador de reproducción.

**6.**  Presiona el botón **Play (Reproducir)** en la ventana Animation ubicada cerca del botón Record para obtener una vista previa de la animación.

[Image: image]

Aunque solo establezcas tres fotogramas clave, Ball pulsará suavemente desde su tamaño inicial hasta el tamaño al que la cambiaste y de regreso. Unity se encargó de la interpolación entre los fotogramas clave automáticamente.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:06Loaded: 100.00%0:00Remaining Time -0:061xPlayback Rate

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

Puedes editar con facilidad los fotogramas clave después de crearlos: coloca el Indicador de reproducción en el fotograma que quieres editar y selecciona el fotograma clave. Cualquier cambio que realices se grabará sobre la configuración anterior, siempre que el modo Record esté activo. Para eliminar un fotograma clave, selecciónalo y presiona la tecla Delete (Eliminar) en tu teclado.

Revisemos el hecho de que se agregaron dos íconos de rombo a la línea de tiempo cuando creaste los fotogramas clave por primera vez. Aparece un ícono en el área gris más oscura, directamente debajo del marcador de la línea de tiempo, y otro en el área de trabajo gris más clara. El fotograma clave superior se utiliza para seleccionar todos los fotogramas clave en ese marcador de tiempo específico y moverlos por la línea de tiempo. Esto es particularmente útil cuando animas muchas propiedades en el mismo punto de la línea de tiempo, ya que el fotograma clave superior te permite moverlas todas a la vez.

**7.** Selecciona el fotograma clave superior en la marca 25. Selecciónalo y arrástralo a 30 para ajustar la sincronización del fotograma clave.

**8.**  Selecciona el botón **Record** para desactivar el modo de grabación.

Marcar paso como completado

## 4. ¿Cómo crear un segundo clip?

Q&A (0)

Un solo objeto puede tener un número infinito de clips de animación. Sigamos trabajando con la pelota para crear una segunda animación; esta vez un rebote en bucle. La creación de una animación de pelota que rebota es un ejercicio clásico para los animadores tradicionales y digitales; es simple, pero permite a los nuevos animadores experimentar con varios principios de animación. Echemos una mirada a lo que vas a crear a continuación:

[Image: image]

Hay tres puntos principales para los que se deben crear fotogramas clave: la pelota que cae, la pelota que golpea el suelo y la pelota que rebota hacia arriba. Manos a la obra.

**1.** Con la pelota seleccionada en la Hierarchy, usa el menú en la parte superior izquierda debajo de los controles de reproducción, que indica Ball_Pulse como la animación actual, y selecciona Create New Clip (Crear un nuevo clip).

[Image: image]

**2.**  Cuando se te solicite, guarda el nuevo clip de animación como «Ball_Bounce» en la carpeta Animation.

La ventana Animation se limpiará de fotogramas clave, pero no te preocupes, los datos de la animación de pulso se almacenan de forma segura en su clip.

Dado que esta animación depende más del tiempo que el clip anterior, puede ser útil hacer que la línea de tiempo muestre segundos en lugar de fotogramas.

**3.**Selecciona los puntos suspensivos verticales en la esquina superior derecha de la ventana Animation, en el mismo nivel que la línea de tiempo, y selecciona Seconds (Segundos).

[Image: image]

De forma predeterminada, las animaciones de Unity tienen una frecuencia de imagen (FPS, fotogramas por segundo) de 60. Esto significa que por cada segundo de animación, se renderizan 60 fotogramas en la pantalla. Esto produce una animación muy fluida; sin embargo, la frecuencia de imagen más común para la animación es de 24 FPS. Esta es también la frecuencia de imagen para la mayoría de las películas. La frecuencia de imagen que elijas para animar se reduce, en última instancia, a tus preferencias personales, pero asegúrate de utilizar la misma frecuencia de forma constante en todas las animaciones de tu proyecto. Es especialmente importante tener esto en cuenta si planeas utilizar animaciones importadas de una DCC o de la Tienda de recursos de Unity, que a menudo tienen una velocidad de 24 FPS.

**4.** Haz clic en el mismo botón de los puntos suspensivos verticales del paso anterior y ve a **Set Sample Rate > 24.**

**Nota:**Es importante entender la forma en que se muestran los números en la escala de tiempo para las animaciones con una frecuencia de muestra inferior a 60 fotogramas por segundo. El primer número antes de los dos puntos es el segundo de la animación, mientras que el número después de los dos puntos es el fotograma actual. Por ejemplo, 1:22 significa el fotograma 22 de animación dentro del primer segundo.

Marcar paso como completado

## 5. ¿Cómo crear la animación de rebote?

Q&A (0)

**1.**En la Escena, selecciona la pelota y arrástrala sobre el plano del suelo a unas tres unidades, o la altura que prefieras.

**2.**  Haz clic en el botón Record en el Editor de animación para que puedas comenzar a editar tus fotogramas clave de inmediato.

**3.** Selecciona el botón **Add Property** en el Editor de animación y luego haz clic en la flecha hacia abajo a la izquierda de la opción Transform para revelar las diferentes propiedades **Transform**. Selecciona el botón **+** en el lado derecho de Position (Posición).

Al igual que antes, puedes ver los fotogramas clave al inicio y al final de la escala de tiempo de la animación. Sin embargo, en este momento la animación solo durará un segundo, lo cual es demasiado rápido para la animación que estás creando. Vamos a ajustarla para que sea más larga.

**4.** Coloca el mouse en la línea de tiempo y desplázate hacia abajo con la rueda del mouse, o arrastra la barra de desplazamiento inferior hasta que puedas ver 1:10.

**5.**  Selecciona el fotograma clave superior derecho y arrástralo a la marca 1:10. La animación tardará un poco más en completarse.

**6.** En la sección numerada de la línea de tiempo, haz clic en el punto medio entre el fotograma inicial y el final. En la vista de Escena, mueve la pelota para que repose en el plano del suelo, pero ten cuidado de cambiar solo la posición en el eje Y.

**7.**  Obtén una vista previa de la animación al presionar Play en el Editor de animación.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:08Loaded: 21.00%0:00Remaining Time -0:081xPlayback Rate

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

El rebote básico está completo. Sin embargo, si miras de cerca, tu pelota se animó sin problemas, pero no se ve exactamente como esperas que se vea una pelota que rebota. Parece flotar suavemente hacia arriba y hacia abajo en lugar de caer y rebotar. En el siguiente tutorial, perfeccionarás la animación para que parezca más realista.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
