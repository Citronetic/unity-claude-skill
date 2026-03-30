[Image: image]

# Add a UI with rotation buttons spanish

Tutorial

Beginner

+10XP

60 mins

3

(36)

Unity Technologies

[Image: Add a UI with rotation buttons spanish]Summary

Hacer que un objeto aparezca en el entorno del usuario es emocionante, pero la experiencia resulta mucho más atractiva si el usuario puede interactuar de alguna manera con el objeto.

En este tutorial, agregarás una interfaz de usuario a la Scene (Escena) con botones para girar el modelo. En los tutoriales posteriores, agregarás más características a esta interfaz de usuario.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Hacer que un objeto aparezca en el entorno del usuario es emocionante, pero la experiencia resulta mucho más atractiva si el usuario puede interactuar de alguna manera con el objeto. Para hacerlo, crearás una interfaz de usuario llamada **superposición de espacio en pantalla** (se llama así porque siempre está frente a la cámara y visible en la pantalla). Las superposiciones de espacio en pantalla son útiles cuando quieres que los usuarios vean la interfaz de usuario sin importar qué otra cosa visualicen en el dispositivo.

En este tutorial, agregarás una interfaz de usuario a la Escena con botones para girar el modelo. En los tutoriales posteriores, agregarás más características a esta interfaz de usuario.

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

## 2. ¿Cómo configurar los botones?

Q&A (0)

Unity utiliza un tipo de GameObject especial llamado **Canvas**para mostrar imágenes en 2D en la interfaz de usuario. En este proyecto, el Canvas mostrará algunos botones que el usuario podrá presionar.

Sigue estas instrucciones para agregar el Canvas a la Escena:

**1.** En la ventana Project (Proyecto), ve a **Assets**>**_ARMarker**>**Prefabs**>**UI**, y luego haz clic en el Prefab **Button_Canvas** y arrástralo a la ventana Hierarchy (Jerarquía). El Canvas se ve muy grande en la vista de Escena, pero no te preocupes: así es como Unity maneja las superposiciones de espacio en pantalla.

**Nota**: si aparece la ventana TMP Importer (Importador de TMP), selecciona el botón **Import TMP Essentials o Importar elementos básicos de TMP** y cierra la ventana. [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953054613)(TMP) te permite controlar el formato y diseño del texto. Por ahora, no es necesario que selecciones Import TMP Examples & Extras (Importar ejemplos y elementos adicionales de TMP).

[Image: image]

**2.**Vea la vista de Juego para previsualizar la manera en que aparecerán los cuatro botones predeterminados en la aplicación.

[Image: image]

**3.**  En la ventana Hierarchy, expande el GameObject **ButtonCanvas** y cambia el nombre de los GameObjects secundarios **Button1 (Botón 1)** y **Button2** a «ButtonRotateLeft» y «ButtonRotateRight», respectivamente.

**4.**  En la ventana Hierarchy, selecciona el GameObject secundario **Text (TMP) o Texto (TMP)** del GameObject **ButtonRotateLeft**. En la ventana Inspector, cambia el valor del campo **Text Input (Entrada de texto)** de TextMeshPro a «<». Repite el proceso para el GameObject **ButtonRotate Right** y cambia el valor del campo **Text Input** a «>».

[Image: image]

**5.**  Personaliza el texto al seleccionar las propiedades **Font Asset (Recurso de fuente)**, **Font Size (Tamaño de fuente)** y **Font Style o Estilo de fuente** que te parezcan más adecuadas.

**Nota**: si deseas obtener otros estilos y fuentes adicionales, ve a **Window**> **TextMeshPro** > **Import TMP Examples and Extras**.

**6.**  Si deseas ajustar el tamaño de los botones, utiliza la herramienta **Rect**.

[Image: image]Marcar paso como completado

## 3. ¿Cómo crear un nuevo script visual?

Q&A (0)

Ahora que los botones están en la pantalla, llegó el momento de hacer que funcionen. Utilizarás scripts visuales para controlar el comportamiento de la aplicación cuando el usuario presione los botones. Crearás un GameObject para todos tus scripts visuales con la finalidad de que sean más fáciles de encontrar.

Sigue estas instrucciones para crear un script visual:

**1.**  En la ventana Hierarchy, crea un nuevo GameObject vacío y nómbralo «VisualScripts».

**2.**  En la ventana Inspector, agrega un componente Script Machine (Máquina de scripts) a **VisualScripts**.

**3.**  Selecciona **New (Nuevo)** para crear un nuevo gráfico.

**4.**  Cuando aparezca el explorador de archivos, abre la carpeta **_ARMarker**, crea una nueva carpeta llamada «VisualScripts» en su interior y guarda el gráfico con el nombre «RotateObject».

[Image: image]

**5.**  En la ventana Inspector, escribe el título «Rotate Object» y, en el campo de resumen, escribe «Rotates the AR object using rotate UI buttons», lo que indica que el Script gira el objeto de AR (Realidad aumentada) con los botones de rotación de la interfaz de usuario.

**6.**  Selecciona **Edit Graph (Editar gráfico)** para abrir el gráfico del Script visual.

[Image: image]

**Nota**: la primera vez que abras el gráfico, se mostrará en una ventana flotante. Si lo prefieres, puedes acoplarlo en el Editor de Unity.

Marcar paso como completado

## 4. ¿Cómo crear las variables requeridas?

Q&A (0)

El Script utilizará variables para hacer referencia a los botones y al GameObject que estos afectarán.

Sigue estas instrucciones a fin de crear las variables para el Script visual:

**1.**  En el gráfico RotateObject, elimina los nodos **On Start (Al inicio)** y **On Update (Al actualizar)**.

**2.**  En la ventana Blackboard (Pizarra), selecciona la pestaña de variables **Object (Objeto)**.

**3.**  Crea una nueva variable llamada «buttonRotateLeft» y, en el campo **Type (Tipo)**, selecciona **Button**.

**4.**  En el campo **Value (Valor)**, utiliza el selector de objetos (círculo) para seleccionar el GameObject **ButtonRotateLeft**.

**5.**  Repite este proceso para crear una variable llamada «buttonRotateRight» con el GameObject **ButtonRotateRight**.

**7.**  Crea una nueva variable llamada «modelObject» y, en el campo **Type**, selecciona **GameObject**.

**8.**  Asigna el modelo dentro del Editor ubicado en la ventana Hierarchy a la variable modelObject.

[Image: image]Marcar paso como completado

## 5. ¿Cómo girar a la izquierda y a la derecha?

Q&A (0)

Ahora que tienes las variables necesarias, el siguiente paso es crear en los gráficos la lógica que controlará la rotación del modelo cuando el usuario presione un botón.

Mira el video o sigue estas instrucciones para lograr que el Script visual haga girar el modelo cuando presiones un botón:

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

**1.**  En la ventana Graph Editor (Editor de gráficos), agrega un nodo**On Button Click (Al hacer clic en el botón)**.

**2.**Arrastra la variable buttonRotateLeft hacia el gráfico ubicado a la izquierda del nodo **On Button Click** y conéctalos.

**3.**  En la ventana Graph Editor, agrega un nodo **Transform Rotate** (X Angle, Y Angle, Z Angle) o Girar (ángulo X, ángulo Y, ángulo Z) y asigna los siguientes valores: **X Angle** = **0**, **Y Angle** = **15**, **Z Angle** = **0**.

**Importante**: si pruebas el marcador en un monitor y utilizas un modelo girado, deberás girar sobre el eje Z en lugar del eje Y.

**4.**  Conecta el nodo **On Button Click** a la entrada de flujo del nodo **Transform Rotate**.

**5.** Arrastra la variable modelObject a la ventana Graph Editor y conéctala a la entrada de Transform del nodo **Transform Rotate**.

[Image: image]

**6.** En la ventana Hierarchy, selecciona el modelo dentro del Editor. En la ventana Inspector, actívalo para que aparezca en la vista de Escena.

**7.**  Haz clic en el botón **Play (Reproducir)**en el Editor para probar el Script. Podrás seleccionar el botón ButtonRotateLeft en la vista de Escena y ver cómo el modelo gira a la izquierda. Luego, sal del modo Play.

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

**8.** En la ventana Script Graph, haz clic y arrastra el cursor para seleccionar todos los nodos del gráfico existente.

**9**. Presiona Ctrl + D (macOS: Cmd + D) para duplicar el gráfico. Arrastra el nuevo gráfico para colocarlo debajo del gráfico anterior sin que se superpongan.

**10.**  En el nuevo gráfico, cambia la variable del nodo **Get Variable** a buttonRotateRight y cambia el valor de **Y Angle** a **-15** (o cambia el valor de X Angle si vas a probar el marcador en un monitor vertical).

[Image: image]

**11.**  Prueba la aplicación en el modo Play del Editor de Unity para asegurarte de que ambos botones funcionen.

**Nota**: si pruebas la aplicación en un dispositivo, verás que funciona en el modelo dentro del Editor, pero no funciona en el modelo generado por el marcador. No te preocupes, resolverás este problema en los siguientes pasos.

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

## 6. ¿Cómo agregar una etiqueta para identificar el modelo?

Q&A (0)

Ahora, los botones para girar funcionan, pero solo con el modelo dentro del Editor en la Escena.

¿Cómo puedes escribir un script para girar un GameObject que no existirá sino hasta que se ejecute la aplicación? Deberás aplicar una etiqueta al Prefab que también exista en las instancias del Prefab generadas. En el Script, cuando la cámara vea el marcador y genere un modelo del Prefab, la aplicación buscará un GameObject que tenga esa etiqueta. Las **etiquetas** ayudan a identificar GameObjects para fines de programación.

Sigue estas instrucciones para agregar la etiqueta que te permitirá encontrar el modelo cuando este se genere en la aplicación:

**1.**  En la ventana Hierarchy, selecciona el modelo dentro del Editor y desactívalo en la ventana Inspector.

**2.**  En la ventana Project, busca el Prefab del modelo y haz doble clic en él para abrirlo en modo Prefab.

**3.**En la ventana Inspector, abre el menú desplegable **Tag (Etiqueta)** y selecciona **Add Tag (Agregar etiqueta)**.

[Image: image]

**4.**  Selecciona el botón **Add**(**+**), escribe «modelObject» y selecciona **Save (Guardar)**.

[Image: image]

**5.**En la ventana Hierarchy, selecciona el GameObject secundario **Mesh (Malla)** del Prefab que seleccionaste y utiliza el menú desplegable **Tag** para asignarle la etiqueta **modelObject**.

[Image: image]

**Importante**: no podrás girar el GameObject primario ubicado en el nivel más alto del Prefab. Asegúrate de asignar la etiqueta al GameObject secundario **Mesh**. El GameObject primario no debe tener ninguna etiqueta. Si utilizas tu propio modelo en 3D, deberás asignar la etiqueta a un GameObject secundario que contenga la malla del GameObject.

**6.**  Sal del modo Prefab.

**7.**Asegúrate de que los cambios se hayan aplicado correctamente al Prefab. Revisa que la etiqueta modelObject aparezca en el modelo dentro del Editor y en el Prefab ubicado en la ventana Project.

Debido a que editaste el Prefab, el modelo dentro del Editor basado en ese Prefab ahora también tendrá esta etiqueta en el GameObject secundario **Mesh**. Por lo tanto, puedes utilizar el modelo dentro del Editor para probar el Script que escribirás en el siguiente paso.

Marcar paso como completado

## 7. ¿Cómo crear un nuevo gráfico de script de configuración?

Q&A (0)

A continuación, crearás un nuevo script que buscará constantemente cualquier GameObject que tenga la etiqueta modelObject. Si se detecta el GameObject etiquetado, se asignará a una variable para que el Script RotateObject lo pueda utilizar. Cuando la nueva variable esté asignada correctamente, podrás controlar el modelo que se genere en la Escena.

Sigue estas instrucciones para preparar un nuevo gráfico de configuración:

**1.** En la ventana Hierarchy, selecciona el GameObject **VisualScripts**.

**2.** En la ventana Inspector, selecciona **Add Component (Agregar componente)** y crea un nuevo Script Machine llamado «Setup» con el título «Setup» y la descripción «Initializes variables», lo que indica que sirve para inicializar variables.  Luego, selecciona **Edit Graph**.

[Image: image]

**3.**  En la sección Blackboard de la ventana Graph Editor, selecciona la pestaña **Object**. Luego, busca el campo **Value** de la variable modelObject y utiliza el selector de objetos (círculo) para seleccionar **None (Ninguno)**. El Script asignará el valor de esta variable.

[Image: image]Marcar paso como completado

## 8. ¿Cómo girar el modelo generado por el marcador?

Q&A (0)

Ahora que el script de configuración y la variable están listos, puedes crear el gráfico. Mira el video o sigue estas instrucciones para buscar el GameObject etiquetado y asignarlo a la variable modelObject cuando se detecte el objeto:

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

**1.**  Elimina el nodo de evento**On Start**.

**2.**  En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo**Find Game Object With Tag (Buscar GameObject con etiqueta)**.

**Nota**: asegúrate de seleccionar el nodo **Find Game Object**en singular y no el nodo **Find Game Objects (Buscar GameObjects)**en plural**.**

**3**.  En el campo **Tag**, escribe «modelObject».

**4.**Conecta la salida de **On Update** a la entrada del nodo **Find Object with Tag**.

**5.**  En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Set Object Variable (Establecer variable de objeto)**al gráfico.

**6.**Conecta la salida de flujo del nodo **Find Game Object With Tag** a la entrada de flujo del nodo **Set Variable**. Luego, conecta la salida de objeto a la entrada inferior del objeto **Set Variable**, que no tiene ninguna etiqueta.

[Image: image]

El campo **New Value (Nuevo valor)**establece el nuevo valor de la variable, el cual puede ser cualquier tipo de datos.

Cuando se ejecute el Script, el GameObject secundario de un modelo que tenga la etiqueta especificada se asignará a la variable modelObject. El Script buscará el modelo dentro del Editor cuando hagas pruebas en el Editor y buscará el modelo generado en el marcador cuando lo ejecutes en la aplicación.

**7.** En la ventana Hierarchy, selecciona el modelo dentro del Editor y actívalo en la ventana Inspector para hacer pruebas.

**8.**  Selecciona **Play** y observa el Script visual. Verás que el nodo **Find Game Object With Tag** encuentra el GameObject y asigna el valor de la variable modelObject.

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

**9.**En la ventana Hierarchy, selecciona el modelo dentro del Editor y desactívalo en la ventana Inspector.

**10.** Crea la aplicación en el dispositivo y prueba los botones en ella.

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

## 9. ¿Cómo optimizar con una revisión de valor nulo?

Q&A (0)

Un paso importante del desarrollo de aplicaciones es asegurarte de que estén optimizadas. La optimización resulta especialmente importante al crear aplicaciones para dispositivos móviles y suele ser más sencilla si la realizas desde el principio de tus diseños.

En la versión actual, el nodo **Find Game Object With Tag**busca continuamente el modelo, como lo puedes ver en el video del paso anterior. El Script busca constantemente todos los GameObjects presentes en la Escena y no se detiene al encontrar el GameObject que tiene la etiqueta. Es posible que el impacto en el rendimiento no sea muy significativo si tienes pocos GameObjects. Pero, conforme aumente el número de GameObjects en la Escena, este impacto puede ser mucho mayor. Para optimizar el Script, agregarás una **revisión de valor nulo**, la cual detendrá la búsqueda en cuanto el Script encuentre la etiqueta.

Implementarás la revisión de valor nulo con el nodo **Null Check (Revisión de valor nulo)**. Este nodo prueba si la variable modelObject tiene algún valor, lo que indica que el GameObject ya se generó en la Escena y el Script ya encontró la etiqueta. El Script seguirá en ejecución si el GameObject aún no se genera (es decir, si la revisión de valor nulo es verdadera) y dejará de ejecutarse en cuanto se genere el GameObject (es decir, si la revisión de valor nulo es falsa).

Mira el video o sigue estas instrucciones para agregar una revisión de valor nulo al Script visual:

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

**1.**Si aún no está abierto, abre el Script Machine **Setup**.

**2.** En la ventana Graph Editor, agrega un nodo**Null Check**hacia el principio del gráfico.

**3.**  Inserta el nodo **Null Check**en el flujo del gráfico, entre los nodos **On Update**y**Find Game Object With Tag**. Conecta la salida Null (Valor nulo) al nodo **Find Game Object With Tag**.

**4.**  Arrastra la variable modelObject desde la ventana Blackboard a la ventana Graph Editor, con lo que se creará un nodo **Get Variable (Obtener variable)**.

**5.**  Conecta la salida del nodo **Get Variable** a la entrada de material del nodo **Null Check**.

[Image: image]

**6.**  Activa el modelo dentro del Editor y prueba el Script en el Editor para asegurarte de que la revisión de valor nulo funcione correctamente.

Esto sucederá demasiado rápido como para que lo puedas ver, pero, en el primer fotograma, el nodo **Null Check** detectará que la variable modelObject tiene un valor nulo y permitirá que se ejecute el resto del Script. Después de eso, verás que el valor de la variable modelObject es el GameObject **Mesh** y el nodo **Null Check** impide que el resto del Script se vuelva a ejecutar.

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

**7.**Desactiva el modelo dentro del Editor, crea la aplicación y pruébala en el dispositivo. Aunque los cambios en el rendimiento no sean muy perceptibles, siempre se recomienda hacer esto para asegurarte de que los scripts estén optimizados.

Marcar paso como completado

## 10. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Cada actividad tiene una etiqueta de Fácil, Medio o Difícil para indicar su nivel de dificultad.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: personaliza el estilo de los botones

[Image: image]

Si quieres mejorar el estilo de los botones, cambia el Sprite a uno de los Sprites de botones proporcionados o crea tu propia versión. Una interfaz de usuario personalizada hace que una aplicación se vea más pulida y profesional. Puedes utilizar el siguiente ejemplo como inspiración para crear tu propia interfaz de usuario. Para editar el Sprite del botón, busca el componente Image (Imagen) del mismo y haz clic en el selector de objetos (círculo) de la propiedad **Source Image o Imagen de origen**.

#### Medio: ajusta la posición del modelo al presionar un botón

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

Una de las opciones para interactuar con el modelo es hacer que el modelObject gire. Otra opción para interactuar con el modelo es crear botones que te permitan mover el modelo hacia arriba o hacia abajo al presionarlos.

Crea nuevos botones para la interfaz de usuario y un script visual que te permita mover el objeto un poco hacia arriba y abajo o hacia la izquierda y derecha.

#### Difícil: gira el modelo como si estuviera en una mesa giratoria

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

Por ahora, debes presionar repetidamente el botón para girar el modelo. Una mejor opción para la interfaz de usuario sería presionar el botón una vez a fin de que el modelo empiece a girar y volver a presionarlo para que se detenga. Edita el Script visual Rotate Object para hacer que el modelo gire por sí mismo cuando presiones un botón.

Si necesitas ayuda para completar este desafío, utiliza la siguiente guía:

- Los valores booleanos pueden servir para activar y desactivar comportamientos.
- Hay un nodo especial llamado **Negate (Negar)**.
- Las transformaciones y las revisiones de booleanos deberán llevarse a cabo de forma continua.

**Consejo**: una opción para resolver este desafío es crear algunas variables booleanas que cambien cuando el usuario presione los botones. ¿Cómo se comportará el Script si el usuario empieza a girar el modelo en una dirección y luego cambia a la otra?

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

Ahora, los usuarios pueden hacer girar el modelo a la izquierda y a la derecha con los botones disponibles en el Canvas de la interfaz de usuario. En el siguiente tutorial, harás que la información adicional sobre el modelo aparezca y desaparezca cuando el usuario presione un botón. Podrás ampliar la funcionalidad de tus experiencias de AR al permitir que los usuarios elijan la información, los modelos, los efectos visuales y otro contenido que deseen mostrar cuando la aplicación detecte el marcador.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
