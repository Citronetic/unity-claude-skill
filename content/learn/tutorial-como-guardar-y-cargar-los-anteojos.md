[Image: image]

# Save and load the glasses spanish

Tutorial

Beginner

+10XP

75 mins

1

(21)

Unity Technologies

[Image: Save and load the glasses spanish]Summary

Por ahora, parece que la aplicación funciona de la manera esperada. Sin embargo, si la cámara deja de detectar por un momento la cara de un usuario, sucede algo inesperado: cuando la cámara vuelve a detectar su cara, los anteojos no vuelven a aparecer.

En este tutorial, harás lo siguiente:

- Guardar las opciones elegidas por el usuario con una variable.
- Volver a aplicar las opciones elegidas por el usuario cuando la cámara vuelva a detectar su cara.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Es importante probar frecuentemente las aplicaciones mientras trabajas en ellas. Sin embargo, muchas veces es imposible identificar los errores hasta que todo parece estar terminado. Por eso, siempre debes probar detalladamente la aplicación después de terminar de desarrollarla y antes de publicarla.

Por ahora, parece que la aplicación funciona de la manera esperada. Sin embargo, si la cámara deja de detectar por un momento la cara de un usuario, sucede algo inesperado:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:07Loaded: 8.52%0:00Remaining Time -0:071xPlayback Rate

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

Cuando la cámara vuelve a detectar la cara del usuario, los anteojos no vuelven a aparecer. Además, cuando el usuario vuelve a seleccionar uno de los botones de anteojos, el material que seleccionó anteriormente no se vuelve a aplicar.

Esto se debe a que, cuando la cámara deja de detectar la cara del usuario, el componente AR Face Manager (Administrador de cara de AR) elimina el Prefab **GlassesGroup**. Cuando la cámara vuelve a detectar la cara del usuario, el componente AR Face Manager crea una nueva instancia del Prefab. La nueva versión del Prefab **GlassesGroup** tendrá la configuración predeterminada, lo que significa que todos los Mesh Renderers (Renderizadores de mallas) estarán desactivados y no se aplicará ningún material.

En este tutorial, crearás la función para guardar las opciones elegidas por el usuario y volver a aplicarlas cuando la cámara vuelva a detectar su cara.

Marcar paso como completado

## 2. ¿Cómo crear una variable para guardar la etiqueta de los anteojos seleccionados?

Q&A (0)

Primero, debes guardar una referencia del par de anteojos que seleccionó el usuario. Cada vez que el usuario cambie de anteojos, la referencia también se debe actualizar.

Si necesitas conservar alguna referencia, también debes crear una variable para guardarla. Hasta ahora, en estos tutoriales has utilizado variables para proporcionar datos a diferentes nodos de los gráficos de script. Sin embargo, también puede suceder lo opuesto: los gráficos de script pueden agregar datos a las variables y otro gráfico puede hacer referencia a ellas. La función que creaste para acceder a las mallas utiliza etiquetas, por lo que deberás crear una variable que pueda guardar la etiqueta de los anteojos que aparezcan en la pantalla.

Sigue estas instrucciones para crear la nueva variable:

**1.**En la ventana Hierarchy (Jerarquía), selecciona el GameObject**GlassesGroup**y asegúrate de que esté activado en la ventana Inspector.

**2.**  En la ventana Hierarchy, selecciona el GameObject **Visual Scripts (Scripts visuales)**.

**3.**  En la ventana Inspector, ve al componente Script Machine (Máquina de scripts) asociado con el gráfico **MeshChanger** y selecciona **Edit Graph (Editar gráfico)**.

**4.**En la sección **Object Variable (Variable de objeto)** de la ventana Blackboard (Pizarra), crea una nueva variable llamada «currentGlassesTag».

**5.**En la opción **Type (Tipo)** de la variable, selecciona **String (Secuencia de caracteres)**.

[Image: image]

Cuando utilizas una variable como referencia de un gráfico, la puedes arrastrar desde la ventana Blackboard. Sin embargo, debes usar un nodo diferente para establecer una variable. Después de crear una variable en la ventana Blackboard, esta también se muestra en el buscador de concordancias.

**6.**En la ventana Graph Editor (Editor de gráficos), ve a una nueva área vacía ubicada sobre los demás nodos para comenzar una nueva secuencia de nodos.

[Image: image]

**7.**Abre el buscador de concordancias y busca «Set currentGlassesTag**»** para agregar este elemento al gráfico.

[Image: image]Marcar paso como completado

## 3. ¿Cómo guardar el valor de currentGlassesTag?

Q&A (0)

Ya que el valor de**currentGlassesTag** deberá cambiar según el botón que seleccione el usuario, vamos a crear un evento personalizado al que puedas llamar para cada botón.

Mira el video o sigue estas instrucciones para configurar el evento:

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

**1.**En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Custom Event (Evento personalizado)**.

**2.**Asigna el nombre «SaveTag» al nuevo nodo.

**3.**En la propiedad **Arguments (Argumentos)**, elige **1**. Al igual que como lo hiciste con el evento ChangeMaterial, utilizarás un argumento para enviar los datos. En este caso, enviarás la etiqueta del par de anteojos que seleccionó el usuario.

**4.**Conecta la salida de flujo del nodo **Custom Event SaveTag (Guardar etiqueta)** a la entrada de flujo del nodo **Set Variable currentGlassesTag**.

[Image: image]

**5.**En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Game Object Get Tag (Obtener etiqueta)**.

Los argumentos que se utilizan en eventos personalizados no se pueden configurar de manera que requieran un tipo de datos específico, por lo que el valor que envíes a este evento será una referencia al GameObject entero y a todos sus componentes. Para acceder específicamente a la etiqueta, deberás utilizar este nodo **Game Object Get Tag**.

**6.**Conecta la salida **Arg. 0**del nodo **Custom Event SaveTag** a la entrada del nodo **Get Tag**.

**7.**Conecta la salida del nodo **Get Tag** a la entrada de valor del nodo **Set Variable currentGlassesTag** (el ícono de círculo con relleno blanco).

[Image: image]Marcar paso como completado

## 4. ¿Cómo llamar al evento personalizado SaveTag?

Q&A (0)

Ahora, el evento personalizado se guardará en la variable **currentGlassesTag** y solo será necesario que lo activen los gráficos de **On Button Click (Al hacer clic en el botón)**.

Mira el video o sigue estas instrucciones para agregar el **Event Trigger (Desencadenador de evento)** al final de la cadena de gráficos:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:36Loaded: 9.99%0:00Remaining Time -0:361xPlayback Rate

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

**1.**En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Trigger (Desencadenador)** **Custom Event**.

**2.**Asigna el nombre «SaveTag» al nodo Trigger.

**3.**En la propiedad **Arguments** del nuevo nodo, elige **1**.

**4.**En el gráfico **glasses1Button On Button Click** (la primera de las tres filas), busca el último nodo **Set Enabled (Establecer como activado)**. Conecta la salida de flujo del nodo **Set Enabled**a la entrada de flujo del nodo **Trigger SaveTag**.

**5.**Conecta la última salida de resultado (ícono de cubo) del nodo **Find With Tag (Buscar con etiqueta)** a la entrada **Arg. 0** del nodo**Trigger SaveTag**.

[Image: image]

El nodo **Find With Tag** proporciona al evento personalizado los datos que requiere como argumento (en otras palabras, le indica cuál es el GameObject que se debe guardar).

**6.**Ingresa al modo Play (Reproducir) para probar los cambios. Selecciona el primer botón de anteojos.

**7.**En la sección **Object Variable** de la ventana Blackboard, desplázate hacia abajo hasta llegar a la variable**currentGlassesTag**y observa lo que dice en el campo **Value (Valor)**. El evento **SaveTag** agregó la etiqueta del primer par de anteojos.

**8.**Sal del modo Play.

**9.**Duplica el nodo **Custom Event SaveTag** dos veces y repite los pasos 4 y 5 para los demás botones.

[Image: image]

Ahora puedes volver a probar la aplicación con cada uno de los botones de anteojos. En la ventana Blackboard, puedes ver que el valor de la variable **currentGlassesTag** cambia cada vez que haces clic en otro botón.

Marcar paso como completado

## 5. ¿Cómo crear un gráfico para cargar los anteojos?

Q&A (0)

Ahora tienes una referencia al par de anteojos seleccionado por el usuario, la cual se actualizará cada vez que haya un cambio en la aplicación. El siguiente paso es crear una función que vuelva a cargar estos cambios en el nuevo Prefab **GlassesGroup** cuando AR Foundation cree una instancia del mismo.

El proceso de volver a cargar estos cambios es una nueva función, por lo que debes crear otro gráfico especial para esto:

**1.**En la ventana Hierarchy, selecciona el GameObject **Visual Scripts (Scripts visuales)**.

**2.**  En la ventana Inspector, agrega un nuevo componente Script Machine.

**2.**Crea un nuevo gráfico llamado «FilterUpdater» y guárdalo en la carpeta**Visual Scripts**.

**3.**En el campo **Title (Título)**, escribe «Filter Updater».

**4.**En el campo **Summary (Resumen)**, escribe «Reloads the last worn pair of glasses and selected material after a user’s face is lost and rediscovered by AR Foundation», lo que indica que el gráfico recarga el último par de anteojos utilizado y el último material seleccionado cuando AR Foundation deja de detectar y luego vuelve a detectar la cara de un usuario.

[Image: image]

**5.**Selecciona **Edit Graph** para abrir el nuevo gráfico **FilterUpdater**.

**6.**  Elimina el nodo **On Start (Al inicio)**. Para este gráfico, necesitarás el nodo **On Update (Al actualizar)**.

#### ¿Cómo cargar los anteojos seleccionados por el usuario?

Las funciones de cambio de color y malla de la aplicación se presentan en situaciones muy controladas. Estas funciones solo se llevan a cabo cuando el usuario interactúa con los botones de la interfaz de usuario. Los gráficos de script son relativamente simples, ya que la aplicación solo detecta el momento exacto en que el usuario selecciona los botones. Desafortunadamente, no tienes ningún control sobre lo que sucede cuando la cámara deja de detectar la cara del usuario. Por lo tanto, debes crear un gráfico que tome en cuenta la posibilidad de que el usuario deje de apuntar la cámara hacia su cara y lo vuelva a hacer en cualquier momento.

Para lograrlo, utilizarás el nodo **On Update**.

[Image: image]

El nodo **On Update** se ejecuta continuamente mientras una aplicación está activa, por lo que lo puedes usar para revisar constantemente si se deja de detectar la cara del usuario. Esta revisión continua es lo que necesitas para la última función de la aplicación.

Marcar paso como completado

## 6. ¿Cómo activar la malla actual?

Q&A (0)

El gráfico **FilterUpdater** se ejecuta de una manera muy similar a la función **MeshChanger** original. **FilterUpdate** busca un GameObject con una etiqueta específica y activa su componente Mesh Renderer. La única diferencia es que, mientras que los nodos del Script **MeshChanger** especifican cuál es la etiqueta que se debe buscar, el gráfico **FilterUpdater** utiliza la variable **currentGlassesTag** en su lugar.

Mira el video o sigue estas instrucciones para activar la malla actual:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:23Loaded: 17.89%0:00Remaining Time -0:231xPlayback Rate

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

**1.**En la ventana Graph Editor, después del nodo **On Update**, utiliza el buscador de concordancias para agregar un nodo **Game Object Find With Tag (Buscar con etiqueta)**.

**2.**Después del nodo **Find With Tag**, agrega un nuevo nodo **Mesh Renderer Set Enabled**.

**3.**En la ventana Blackboard, ve a la sección **Object Variable** y arrastra la variable **currentGlassesTag** hacia la ventana Graph Editor ubicada debajo del nodo **On Update**.

**4.**Conecta la salida de flujo del nodo **On Update** a la entrada de flujo del nodo **Find With Tag**.

**5.**Conecta la salida de datos del nodo **Get Variable (Obtener variable) currentGlassesTag**a la entrada de etiqueta del nodo **Find With Tag**.

**6.**Conecta la salida de flujo del nodo **Find With Tag** a la entrada de flujo del nodo **Set Enabled**.

**7.**Conecta la salida de resultado (ícono de cubo) del nodo **Find With Tag** a la entrada de objetivo del nodo **Set Enabled**(ícono de cuadrícula con ojo).

**8.**En el nodo **Set Enabled**, marca el booleano de **valor**como verdadero.

[Image: image]

Ahora puedes probar estos cambios.

Marcar paso como completado

## 7. ¿Cómo probar los cambios en el modo Play?

Q&A (0)

Sigue estas instrucciones para probar los cambios en el modo Play:

**1.**Haz clic en el botón **Play** para probar la aplicación en el Editor.

**2.**Verás que el nodo **Find with Tag** se ilumina de color rojo para indicar que encontró un error. El nodo intenta buscar un objeto con una etiqueta específica, pero la etiqueta aún no está asignada (es decir, tiene un valor «null»).

**3.**En la vista de Juego, selecciona uno de los botones de anteojos.

**3.**En la ventana Hierarchy, selecciona el Prefab **GlassesGroup**y elimínalo.

**4.**En la ventana Project (Proyecto), ve a **Assets** > **_InteractiveFaceFilter** > **Prefabs**. Arrastra un nuevo Prefab **GlassesGroup** a la ventana Hierarchy. El nuevo Prefab **GlassesGroup** aparecerá en la vista de Juego y mostrará el último par de anteojos seleccionado.

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

**5.**Sal del modo Play.

Marcar paso como completado

## 8. ¿Cómo guardar una referencia del material actual?

Q&A (0)

Si crearas la aplicación en este momento, verías que los anteojos funcionan de la manera esperada y reaparecen cuando la cámara vuelve a detectar la cara del usuario. Sin embargo, falta algo: aún no se guarda el material seleccionado por el usuario.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:04Loaded: 9.26%0:00Remaining Time -0:041xPlayback Rate

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

Para resolver este problema, deberás crear una variable que guarde el material seleccionado e integrarla en el gráfico **FilterUpdater**.

Sigue estas instrucciones para guardar el material seleccionado:

**1.**En la ventana**Hierarchy**, selecciona el GameObject **Visual Scripts** y luego selecciona el botón **Edit Graph** en el componente Script Machine asociado con el gráfico **MaterialChanger**.

**2.**En la ventana Inspector, busca el componente Script Machine asociado con el gráfico **MaterialChanger**y selecciona **Edit Graph**.

**3.**  En la sección **Object Variable** de la ventana Blackboard, crea una nueva variable llamada «currentMaterial».

**4.**En la opción **Type** de la nueva variable, selecciona **Material**.

[Image: image]

**5.**En la ventana Graph Editor, a la derecha de todos los demás nodos, utiliza el buscador de concordancias para agregar un nodo **Set (Establecer) currentMaterial**.

**Nota**: en lugar de crear un nuevo nodo **Custom Event** para establecer la variable **currentMaterial**, puedes usar el nodo existente **Custom Event ChangeMaterial**, que ya envía el material seleccionado por el usuario.

**6.**  Conecta la última salida de flujo del nodo **Set Material (Establecer material)** a la entrada de flujo del nuevo nodo **Set currentMaterial**.

**7.**Conecta la salida **Arg. 0**del nodo **Custom Event ChangeMaterial** a la nueva entrada de valor del nodo **Set currentMaterial**.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:22Loaded: 6.68%0:00Remaining Time -0:221xPlayback Rate

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

El material asociado con el botón que seleccione el usuario ahora se guardará en la variable **currentMaterial**. Para probar esto en la aplicación, selecciona un botón de material y observa el valor de la variable **currentMaterial**. El valor se debe guardar cada vez que selecciones un nuevo material.

Marcar paso como completado

## 9. ¿Cómo cargar y aplicar el material guardado?

Q&A (0)

El último paso es cargar y aplicar el material guardado cuando se detecte una cara nueva en la Scene (Escena).

Mira el video o sigue estas instrucciones para agregar la variable **currentMaterial** al gráfico **FilterUpdater**:

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

**1.**En la ventana Hierarchy, selecciona el GameObject **Visual Scripts**.

**2.**En la ventana Inspector, busca el componente Script Machine asociado con el gráfico **FilterUpdater**y selecciona **Edit Graph**.

**3.**En la ventana Graph Editor, a la derecha de la secuencia de nodos actual, utiliza el buscador de concordancias para agregar un nodo **Mesh Renderer Set Material**.

**4.**En la ventana Blackboard, ve a la sección **Object Variable** y arrastra la variable **currentMaterial**hacia la ventana Graph Editor.

**5.**Conecta la salida de flujo del nodo **Mesh Renderer Set Enabled**(ubicado al final del gráfico actual) a la entrada de flujo del nuevo nodo **Mesh Renderer Set Material**.

**6.**Conecta la salida de resultado del nodo **Find With Tag** a la entrada de objetivo del nodo **Set Material**.

**7.**Conecta el nodo **Get Variable currentMaterial**a la entrada de material del nodo **Set Material**.

[Image: image]

**8.**Prueba la aplicación en el modo Play.

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

¡Parece que hay un error! Cuando seleccionas un par de anteojos, se muestra en la vista de Juego de color magenta brillante en lugar del color gris predeterminado. Este color magenta significa que no se encontró un material en el GameObject.

Si observas la salida de flujo del nodo **Get Variable currentMaterial**en la ventana Graph Editor, podrás identificar el problema. La variable **currentMaterial** genera un valor «null» hasta que el usuario selecciona un material. El diseño de la aplicación no obliga al usuario a seleccionar un material como primer paso. Para solucionar este problema, debes asignar un valor inicial a **currentMaterial**.

Marcar paso como completado

## 10. ¿Cómo establecer un material inicial y probar la aplicación?

Q&A (0)

Sigue estas instrucciones a fin de establecer un material inicial para los anteojos en la aplicación:

**1.**Si aún no lo haces, sal del modo Play.

**2.** En la ventana Blackboard, busca la variable **currentMaterial**.

**3.**Haz clic en el **selector de objetos (ícono de círculo)** de la propiedad **Value** y elige un material inicial para los anteojos. Puedes elegir uno de los materiales que creaste, o seleccionar **Lambert1**entre los materiales disponibles si quieres usar el gris como color inicial predeterminado.

[Image: image]

**4.**Vuelve a probar la aplicación en el modo Play para asegurarte de que todo funcione de la manera esperada. Cuando termines de hacer pruebas, recuerda salir del modo Play.

**5.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup** y desactívalo en la ventana Inspector.

**6.**  Guarda la Escena.

**7.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**8.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

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

¡La aplicación está completa!

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

¡Felicitaciones por completar el proyecto Filtro facial interactivo! En este proyecto, aprendiste a utilizar scripts visuales a fin de crear elementos interactivos para tus aplicaciones. Hiciste varias rondas de pruebas y corregiste los errores que se presentaron.

¡Ahora tienes una aplicación con características completas creada por ti! Ahora, también puedes trabajar de forma independiente en un filtro facial interactivo de AR (Realidad aumentada) para tu próxima entrega.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
