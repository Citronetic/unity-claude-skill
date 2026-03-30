[Image: image]

# Configure one color button spanish

Tutorial

Beginner

+10XP

45 mins

1

(26)

Unity Technologies

[Image: Configure one color button spanish]Summary

Ahora que la función de cambio de malla está completa, tienes todo listo para aplicar diferentes materiales a los anteojos.

En este tutorial, harás lo siguiente:

- Crear un nuevo gráfico de script.
- Crear los materiales y las variables de material.
- Aplicar un solo material a todos los anteojos cuando el usuario presione un botón.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Ahora que la función de cambio de malla está completa, tienes todo listo para aplicar diferentes materiales a los anteojos. En este tutorial, crearás un nuevo gráfico de script, crearás los materiales y aplicarás un solo material a todos los anteojos.

Marcar paso como completado

## 2. ¿Cómo crear un nuevo gráfico de script?

Q&A (0)

Puedes utilizar un solo gráfico de script para crear todas las funciones de la aplicación, pero se saturaría muy pronto y sería difícil leerlo y desplazarte por él. Al crear scripts visuales, la práctica recomendada es crear gráficos de un solo propósito para mantener el proyecto organizado. Esto significa que gráfico realiza una sola función.

Como ya completaste la función de cambio de malla, ahora crearás un nuevo gráfico para la función de cambio de material:

**1.**En la ventana Hierarchy (Jerarquía), selecciona el GameObject **Visual Scripts (Scripts visuales)**.

**2.** En la ventana Inspector, selecciona **Add Component (Agregar componente)** y agrega un componente Script Machine (Máquina de scripts).

**3.**Selecciona **New (Nuevo)**para crear un nuevo gráfico de scripts.

**4.**Asigna el nombre «MaterialChanger» al nuevo gráfico de scripts y guárdalo en la carpeta **Visual Scripts**.

**5.**En el campo **Title (Título)**, escribe «Material Changer».

**6.**En el campo **Summary (Resumen)**, escribe «Changes the material assigned to all of the glasses when the material buttons are selected», lo que indica que cambia el material asignado a todos los anteojos cuando se seleccionan los botones de material.

[Image: image]

**6.**Selecciona **Edit Graph (Editar gráfico)** para abrir el gráfico del Script MaterialChanger.

**Nota**: puedes cambiar rápidamente entre un gráfico de script y otro al seleccionar **Edit Graph** en el componente Script Machine asociado con el gráfico que desees ver.

**7.**Elimina los nodos **On Start (Al inicio)** y **On Update (Al actualizar)**.

Marcar paso como completado

## 3. ¿Cómo crear las variables de los botones de color?

Q&A (0)

En la aplicación, el cambio de color estará controlado por los botones de la interfaz de usuario, al igual que la función de cambio de malla que ya implementaste. Volverás a usar los nodos **On Button Click (Al hacer clic en el botón)**, por lo que necesitarás variables para cada botón de material.

Como ya seguiste este proceso en un tutorial anterior, las instrucciones ahora serán un poco más generales. Intenta completar los pasos con las siguientes instrucciones condensadas. Si necesitas ayuda, puedes consultar las instrucciones más detalladas en el tutorial **[¿Cómo activar los anteojos con botones?](https://learn.unity.com/tutorial/turn-on-the-glasses-with-buttons).**

Mira el video o sigue estas instrucciones para crear las nuevas variables:

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

**1.**Crea una nueva variable **Object (Objeto)** llamada «material1Button».

**Importante**: recuerda seleccionar la pestaña **Object** de la ventana Graph Inspector (Inspector de gráficos) para acceder a las variables Object.

**2.**En la opción **Type (Tipo)** de la variable, selecciona **Button (Botón)**.

**3.**En la propiedad **Value o Valor**, elige **Material 1 Button (Botón de material 1)** con el **selector de objetos**(ícono de círculo).

[Image: image]

**4.**Repite este proceso otras dos veces y asigna los nombres «material2Button» y «material3Button» a las demás variables.

Marcar paso como completado

## 4. ¿Cómo crear los nuevos materiales?

Q&A (0)

Cuando configuraste el GameObject **AR_Canvas** en un tutorial anterior, agregaste un color a los botones de material. Durante el siguiente proceso para crear los materiales que se aplicarán a los anteojos, puedes conservar los colores que habías elegido o los puedes cambiar.

**Importante**: si decides cambiar el color de tus materiales, recuerda actualizar la interfaz de usuario para que también refleje los cambios.

Sigue estas instrucciones para crear los nuevos materiales:

**1.**En la ventana Project (Proyecto), crea una nueva carpeta dentro de **_InteractiveFaceFilter** y dale el nombre «Materials».

**2.**En la carpeta **Materials (Materiales)**, crea un nuevo material y dale el nombre «Material1».

**3.**En la ventana Inspector, configura el color de **Base Map (Mapa base)** y las demás propiedades de **Material1** como quieras.

**4.**  Repite este proceso para crear otros dos materiales y dales los nombres «Material2» y «Material3».

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear las variables de material?

Q&A (0)

Al igual que los botones, los materiales necesitarán referencias de variables **Object** en el gráfico de script **Material Changer (Cambiador de material)**.

Sigue estas instrucciones para crear más variables:

**1.**Regresa a la ventana Script Graph (Gráfico de script) y revisa que el gráfico **Material Changer** esté abierto.

**2.**En la sección **Object Variable (Variable Object)** de la ventana Blackboard, crea una nueva variable llamada «material1».

**3.**En el campo **Type**, selecciona **Material.**

**4.**En la propiedad **Value**, elige **Material 1** con el **selector de objetos** (ícono de círculo).

**5.**Repite este proceso otras dos veces y asigna los nombres «material2» y «material3» a las nuevas variables.

[Image: image]Marcar paso como completado

## 6. ¿Cómo detectar un clic en un botón?

Q&A (0)

El proceso para detectar un clic en un botón y buscar un par de anteojos es igual que en el caso del gráfico **MeshChanger**.

Primero, debes detectar si el usuario selecciona un botón de color:

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

**1.**Selecciona la variable **material1Button** en la ventana Blackboard y arrástrala a la ventana Graph Editor (Editor de gráficos). También puedes agregar un nodo **Get Variable (Obtener variable) Object** al gráfico y asignarle la variable **material1Button**.

**2.** En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **On Button Click**.

**3.**Repite este proceso para agregar un nodo **Game Object: Find With Tag (Tag) o Buscar con etiqueta (Etiqueta)**.

**4.**Conecta la salida (ícono de punto) del nodo **Get Variable material1Button** a la entrada (ícono de cubo) del nodo **On Button Click**.

**5.**Conecta la salida de flujo (ícono de flecha) del nodo **On Button Click** a la entrada de flujo (ícono de flecha) del nodo **Find With Tag**.

**6.**En el nodo **Find with Tag**, escribe la etiqueta asignada al primer par de anteojos.

[Image: image]

Ahora, el gráfico podrá encontrar el primer par de anteojos en el Prefab **GlassesGroup**. Selecciona el botón **Play (Reproducir)**para probar la aplicación y monitorea el gráfico de script al seleccionar la interfaz de usuario Material 1 Button en la vista de Juego.

**Nota**: si el GameObject **GlassesGroup** se quedó desactivado después de una prueba anterior, selecciónalo en la ventana Hierarchy y actívalo en la ventana Inspector.

Marcar paso como completado

## 7. ¿Cómo establecer un material para la malla de anteojos?

Q&A (0)

Ahora, debes acceder a los materiales de la malla. Los materiales se administran en el componente Mesh Renderer (Renderizador de mallas) de un GameObject, como el que utilizaste en el gráfico anterior. Sin embargo, en esta ocasión, deberás acceder a un elemento específico del renderizador en lugar de utilizar el componente completo.

Mira el video o sigue estas instrucciones para configurar el primer botón a fin de establecer un material para la primera malla de anteojos:

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

**1.**En la ventana Graph Editor, abre el buscador de concordancias y agrega un nodo **Mesh Renderer: Set Material (Establecer material)**.

**Importante**: fíjate bien cuando selecciones esta opción, pues también existe un nodo **Mesh Renderer: Set Materials** (en plural). Para este gráfico, debes utilizar la versión en singular del nodo.

[Image: image]

El nodo **Set Material**tiene dos entradas de datos obligatorios: una referencia al GameObject que desees modificar y el material que quieras aplicar. Puedes enviar la referencia del GameObject desde el nodo **Find With Tag**, como lo hiciste anteriormente con el nodo **Set Enabled (Establecer como activado)**. Para el material, utilizarás la referencia de la variable **material1**que creaste.

**2.**Conecta la salida de flujo del nodo **Find With Tag** a la entrada de flujo del nodo **Set Material**.

**3.**  Conecta la salida de resultado (ícono de cubo) del nodo **Find With Tag** a la entrada de objetivo (ícono de cuadrícula con ojo) del nodo **Set Material**.

**4.**Selecciona la variable **material1** en la ventana Blackboard y arrástrala a la ventana Graph Editor.

**5.**Conecta el nodo **Get Variable material1** a la entrada de material del nodo **Set Material**.

[Image: image]Marcar paso como completado

## 8. ¿Cómo probar las funciones actuales?

Q&A (0)

Ahora, el primer botón de color está configurado para aplicar el primer material al primer par de anteojos.

Sigue estas instrucciones para probar el script visual:

**1.**Si el GameObject **GlassesGroup** se quedó desactivado después de una prueba anterior, selecciónalo en la ventana Hierarchy y actívalo en la ventana Inspector.

**2.** Selecciona el botón **Play** para ingresar al modo Play.

**3.**Selecciona el botón del primer par de anteojos para hacer que aparezca en la Scene (Escena).

**4.**Selecciona el primer botón de color.

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

**5.**Selecciona el siguiente botón de anteojos.

Observa que el cambio de material únicamente se aplica al primer par de anteojos. Esto tiene sentido, pues únicamente estableciste el material en el primer par. En el siguiente paso, aplicarás el material a los demás pares.

**6.**Vuelve a seleccionar el botón **Play** para salir del modo Play.

Marcar paso como completado

## 9. ¿Cómo establecer los materiales de las demás mallas?

Q&A (0)

Una vez implementada la función para aplicar un material al primer par de anteojos, puedes duplicar el gráfico para aplicar el mismo color a los tres pares.

Mira el video o sigue estas instrucciones para aplicar el primer material a los demás anteojos:

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

**1.**En la ventana Graph Editor, selecciona y duplica los nodos **Find With Tag** y **Set Material**.

**2.**Mueve los nodos duplicados hacia un lado para que no se superpongan al gráfico existente y luego vuelve a duplicarlos.

**3.**Coloca el segundo conjunto de nodos duplicados en un lugar donde no se superpongan a los demás.

**4.**Conecta la salida de flujo del primer nodo **Set Material** a la entrada de flujo del segundo nodo**Find with Tag**.

**5.**Conecta la salida de flujo del segundo nodo **Set Material** a la entrada de flujo del tercer nodo **Find with Tag**.

**6.**Actualiza las etiquetas de los dos últimos nodos **Find With Tag** para que coincidan con las otras dos etiquetas del Prefab **GlassesGroup**.

**7.**Conecta la salida del nodo **Get Variable material1** a la entrada de material de los dos  últimos nodos**Set Material**.

Podrías haber duplicado el nodo **Get Variable material1**junto con los demás. Sin embargo, los nodos de variable se pueden conectar a varios nodos, lo que te permite ahorrar espacio en el gráfico de script.

**8.**Ingresa al modo Play y prueba las actualizaciones. Ahora, cuando selecciones el primer botón de color, el primer material se aplicará a todos los pares de anteojos.

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

**9.**Cuando termines de hacer pruebas, sal del modo Play.

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

Ahora, el primer botón de material funciona de la manera esperada. En el siguiente tutorial, aplicarás la función a los otros dos botones de color y aprenderás a modularizar aún más los gráficos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
