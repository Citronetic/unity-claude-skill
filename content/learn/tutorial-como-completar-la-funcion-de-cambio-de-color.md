[Image: image]

# Complete the color switching functionality spanish

Tutorial

Beginner

+10XP

45 mins

2

(26)

Unity Technologies

[Image: Complete the color switching functionality spanish]Summary

Ya completaste la funcionalidad de un botón de un solo color. Ahora, ampliarás la funcionalidad a los botones de los demás colores. Para hacerlo de manera eficiente, conocerás un nuevo concepto de scripting que es muy importante: los argumentos.

En este tutorial, harás lo siguiente:

- Crear un nuevo evento personalizado que requiera un argumento.
- Utilizar el nuevo evento personalizado para completar la funcionalidad del botón de color.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Como aprendiste en los tutoriales de cambio de material, las secuencias de nodos que se usan varias veces se pueden convertir en eventos personalizados. En el gráfico de script anterior, no era necesario realizar ninguna modificación en la secuencia de nodos. Sin embargo, en este caso, la secuencia de nodos repetida requiere una entrada de material única para cada botón. En este tutorial, aprenderás cómo utilizar los argumentos con eventos personalizados para modularizar aún más los gráficos.

Marcar paso como completado

## 2. ¿Cómo separar el gráfico para crear un evento personalizado?

Q&A (0)

Primero, debes separar todos los nodos **Find With Tag (Buscar con etiqueta)** y **Set Material (Establecer material)** para convertirlos en un evento personalizado al que se pueda llamar cada vez que el usuario presione un botón de material.

Mira el video o sigue estas instrucciones para crear el evento personalizado:

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

**1.**Si cerraste el Editor de Unity después de terminar el tutorial anterior y antes de comenzar este, asegúrate de que el gráfico de script **MaterialChanger** esté abierto en la ventana Script Graph (Gráfico de script).

**2.**En la ventana Graph Editor o Editor de gráficos, desconecta la salida del nodo **On Button Click (Al hacer clic en el botón)** del primer nodo **Find With Tag** (haz clic derecho en la flecha de salida de **On Button Click**).

**3.**Desconecta el nodo **Get Variable (Obtener variable) material1** de todos los nodos **Set Material** al hacer clic derecho en el conector de salida de **Get Variable material1**.

**4.**Mueve la secuencia de**Find With Tag** y **Set Material** hacia la derecha para tener suficiente espacio donde puedas comenzar un nuevo nodo.

**5.**Utiliza el buscador de concordancias para agregar un nuevo nodo **Custom Event (Evento personalizado)** al principio de la secuencia de nodos conectados.

**6.**Asigna el nombre «ChangeMaterial» al evento personalizado.

**7.**  Conecta la salida del nodo **Custom Event** a la entrada del primer nodo **Find With Tag**.

Marcar paso como completado

## 3. ¿Qué son los argumentos?

Q&A (0)

Para este script visual, deberás utilizar argumentos. Es importante entender el concepto antes de utilizarlos.

Los **argumentos** son datos adicionales que puedes enviar a un evento o una función para personalizar el resultado. Para mayor claridad, veamos un ejemplo de la vida cotidiana.

Imagina que todos los días visitas un restaurante de sándwiches y ordenas un sándwich personalizado. Podríamos decir que esta rutina diaria es un evento llamado **Preparar un sándwich**. No obtendrías el resultado que deseas si solo entraras al restaurante y gritaras «Preparar un sándwich», ¿verdad? Los empleados tendrían que hacerte otras preguntas, como «¿De qué lo quieres?», «¿Con qué tipo de pan?», «¿Lo quieres con pan tostado?», etc. Estos datos (o argumentos) adicionales son necesarios para ejecutar correctamente el evento.

Como verás, el evento **Preparar un sándwich**no es tan simple, pues requiere otros datos adicionales. En lenguaje de programación, el evento tendría un aspecto similar al siguiente:

**Preparar un sándwich**(**Ingredientes**lista**, Pan** tipo, **Tostado**booleano).

Si tienes estos argumentos, puedes utilizar el evento para crear todo tipo de sándwiches diferentes. El evento **Preparar un sándwich** podría generar un sándwich de jamón y queso tostado con pan integral, o un sándwich de vegetales asados sin tostar con pan de hamburguesa. Los argumentos permiten la generación de resultados mucho más variados y específicos, lo que es necesario para las funciones más complejas.

Marcar paso como completado

## 4. ¿Cómo agregar un argumento al evento personalizado?

Q&A (0)

Ahora que entiendes el concepto, vamos a implementar algunos argumentos en el script visual.

Examina el evento **ChangeMaterial** que acabas de crear.

[Image: image]

Los tres nodos **Set Material**requieren una entrada de datos de material. El resultado deseado es que cada botón que presione el usuario aplique un material diferente.

Puedes agregar una salida de datos al nodo **Custom Event**, lo que se conoce como un **argumento**, para enviar diferentes datos a esos nodos **Set Material**.

Mira el video o sigue estas instrucciones para agregar un argumento al gráfico:

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

**1.**En la parte superior del nodo **Custom Event ChangeMaterial**, cambia el valor del parámetro **Arguments (Argumentos)** a **1**.

[Image: image]

Si agregas un argumento a un nodo**Custom Event**, se agrega una salida de datos al nodo. La salida de datos se llama **Arg. 0**. En casi todos los paradigmas de programación, las listas de elementos empiezan con 0.

**2.**Conecta la salida de **Arg. 0** a las entradas de material de los tres nodos **Set Material**.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear el nodo Custom Event Trigger?

Q&A (0)

Para poder llamar al nodo **Custom Event ChangeMaterial**, también debes agregar un **Custom Event Trigger (Desencadenador)**. Este desencadenador también necesitará un parámetro de argumento.

Mira el video o sigue estas instrucciones para crear un nodo **Custom Event Trigger**:

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

**1.**En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Trigger Custom Event**.

**2.**En el campo **Name (Nombre)**, escribe «ChangeMaterial».

**3.**En la propiedad **Arguments**, elige **1**.

[Image: image]

En este nodo, **Arg. 0** es una entrada de datos en lugar de una salida de datos.

**4.**Mueve el nodo **Custom Event Trigger** y colócalo junto al nodo **On Button Click** (el que separaste de la secuencia al principio de este tutorial).

**5.**Conecta la salida de flujo del nodo **On Button Click**a la entrada de flujo del nodo **Custom Event Trigger**.

**6.**Conecta la salida de datos del nodo **Get Variable material1** a la entrada **Arg. 0** del nodo **Custom Event Trigger**.

[Image: image]

**7.**Prueba los cambios en el Editor de Unity. La aplicación debe funcionar de la misma manera que antes: puedes aplicar el primer material a los tres pares de anteojos.

**8.** Cuando termines de probar la aplicación, sal del modo Play (Reproducir).

Marcar paso como completado

## 6. ¿Cómo llamar al evento personalizado con todos los botones de colores?

Q&A (0)

¡Ya casi terminas! Ahora puedes llamar a los demás materiales con la misma secuencia de cuatro nodos que configuraste para el primer botón. De esta manera, completarás la función de cambio de color.

Mira el video o sigue estas instrucciones para terminar el gráfico de script:

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

**1.**En la ventana Graph Editor, selecciona los nodos **Get Variable material1Button**, **On Button Click**, **Get Variable material1** y **Custom Event Trigger ChangeMaterial** (haz clic y arrastra el cursor sobre ellos). Recuerda que puedes alejar la vista si es necesario.

**2.**Duplica el grupo de nodos un par de veces. Coloca los duplicados en dos filas debajo de los nodos originales.

**3.**En el primer conjunto de nodos duplicado, utiliza los menús desplegables para establecer los siguientes parámetros:

- En el primer nodo **Get Variable** (para el botón), elige **material2Button**.
- En el segundo nodo **Get Variable**(para el material), elige **material2**.

**4.**Repite este proceso para el segundo conjunto de nodos duplicado y cambia las variables a **material3Button** y **material3**.

**5.**Prueba la aplicación en el Editor y revisa que cada botón aplique un material diferente a los anteojos. Cuando termines de hacer pruebas, recuerda salir del modo Play.

**6.**En la ventana Hierarchy (Jerarquía), selecciona el Prefab **GlassesGroup** y desactívalo en la ventana Inspector.

**7.**Guarda la Scene (Escena).

**8.**Crea la aplicación y pruébala en el dispositivo móvil.

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

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

¡La funcionalidad básica de la aplicación está completa! En el siguiente tutorial, revisarás lo que creaste, probarás la aplicación para detectar errores y finalizarás la funcionalidad para asegurarte de obtener los resultados deseados.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
