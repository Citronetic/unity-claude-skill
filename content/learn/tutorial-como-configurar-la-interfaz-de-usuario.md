[Image: image]

# Set up the UI spanish

Tutorial

Beginner

+10XP

30 mins

1

(28)

Unity Technologies

[Image: Set up the UI spanish]Summary

La interfaz de usuario (UI) permite que el usuario interactúe con la aplicación y realice diferentes acciones. En este caso, el usuario utilizará los botones disponibles en la pantalla para seleccionar un par de anteojos y personalizar el color.

En este tutorial, harás lo siguiente:

- Agregar botones predeterminados a la pantalla.
- Personalizar el aspecto de los botones para que combinen con la aplicación.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Tu aplicación tendrá dos filas de botones: una para elegir entre tres pares de anteojos y una para cambiar el color de los anteojos. En este tutorial, configurarás la interfaz de usuario.

Marcar paso como completado

## 2. ¿Cómo agregar el Prefab AR_Canvas?

Q&A (0)

Este proyecto utiliza un sistema de interfaz de usuario llamado **Unity UI (Interfaz de usuario de Unity)** (o **uGUI**). Este sistema organiza las interfaces de usuario mediante un componente Canvas. Deberás crear cada elemento de la interfaz de usuario como elemento secundario de un GameObject con este componente Canvas incluido. Ya hicimos esto en la aplicación, pero deberás configurarlo según tus necesidades específicas.

Sigue estas instrucciones para agregar el Prefab **AR_Canvas** a la Scene (Escena):

**1.**En la ventana Project (Proyecto), ve a **Assets**> **_InteractiveFaceFilter** > **Prefabs**.

**2.**Arrastra el Prefab **AR_Canvas**desde la ventana Project a la ventana Hierarchy (Jerarquía).

[Image: image]

**3.**Si deseas acceder a la vista previa de los cambios sin reproducir la aplicación, abre la vista de Juego.

**4.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup** y actívalo en la ventana Inspector. Cuando hagas esto, los modelos de anteojos deben aparecer en la vista de Juego.

[Image: image]

El Prefab **AR_Canvas** se renderiza (se muestra) con la opción Screen Space (Espacio de pantalla) - Overlay UI o Superposición de interfaz de usuario. Esto significa que el Prefab siempre se renderizará sobre la cámara de la aplicación y aparecerá en la posición exacta que se muestra en la vista de Juego.

**5.**En la ventana Hierarchy, expande el GameObject **AR_Canvas** con el ícono desplegable para mostrar los GameObjects secundarios.

AR_Canvas tiene tres GameObjects secundarios: Glasses Buttons (Botones de anteojos), Materials Buttons (Botones de materiales) y EventSystem. A su vez, los grupos de botones de anteojos y materiales tienen como GameObjects secundarios los botones individuales que aparecen en la Escena. EventSystem es un GameObject que contiene los componentes utilizados por la interfaz de usuario para detectar la entrada de datos del usuario, como cuando el usuario pulsa o hace clic en algún elemento.

Marcar paso como completado

## 3. ¿Cómo personalizar los botones de anteojos?

Q&A (0)

Por ahora, los botones de anteojos son círculos blancos. Sin embargo, en la versión final de la aplicación, los usuarios deberían poder distinguir cuál botón representa cada par de anteojos. Para lograrlo, utilizarás los íconos prediseñados que representan cada par de anteojos.

Los íconos de anteojos se crearon en un software externo y se agruparon en una hoja de Sprites. Una **hoja de Sprites** es un atlas (una imagen que contiene un conjunto de imágenes más pequeñas) que se puede dividir y utilizar de forma individual en el Editor de Unity. El uso de una hoja de Sprites ayuda a optimizar la aplicación: renderizar un solo archivo de imagen es mucho más eficiente que renderizar muchas imágenes individuales. Las hojas de Sprites también son útiles para organizar tu proyecto, ya que  puedes encontrar todos los íconos de anteojos en la misma hoja de Sprites.

**Importante**: si creaste tus propios pares de anteojos, deberás [crear íconos para ellos.](https://learn.unity.com/tutorial/set-up-the-ui#63441ce0edbc2a14a3872b7f)

Sigue estas instrucciones para personalizar los botones de anteojos:

**1.**En la ventana Project, ve a **Assets** > **_InteractiveFaceFilter** > **Sprites**.

**2.**Busca la hoja de Sprites **UI_Icon_Glasses** y selecciona la flecha ubicada en el lado derecho de la miniatura para mostrar los Sprites individuales.

[Image: image]

**Nota**: si las miniaturas de las imágenes del proyecto se ven pequeñas o en forma de lista, utiliza el deslizador ubicado en la esquina inferior derecha del panel para aumentar el tamaño.

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

**3.**En la ventana Hierarchy, expande el GameObject **Glasses Buttons** con el ícono desplegable para mostrar los GameObjects secundarios.

**4.**Selecciona el GameObject **Glasses 1 Button (Botón de anteojos 1)**.

**5.**Elige cuál de los tres pares de anteojos que seleccionaste para la aplicación estará representado por el primer botón de la interfaz de usuario.

**6.**Arrastra el ícono de los anteojos que seleccionaste desde la ventana Project a la ventana Inspector y asígnalo a la propiedad **Source Image (Imagen de origen)**.

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

**7.**Repite este proceso con los otros dos GameObjects de botones de anteojos para que todos los pares de anteojos que seleccionaste estén representados en la interfaz de usuario.

[Image: image]Marcar paso como completado

## 4. ¿Cómo personalizar los botones de material?

Q&A (0)

En un tutorial posterior, crearás los materiales que cambiarán el color de los anteojos. Por ahora, puedes decidir qué colores quieres. Si cambias de opinión más adelante, no te preocupes: puedes regresar a estos pasos y actualizar los colores que seleccionaste.

Sigue estas instrucciones para cambiar el color de los botones:

**1.**  En la ventana Hierarchy, selecciona la flecha desplegable junto a **Materials Buttons**para mostrar los GameObjects secundarios.

**2.**Selecciona el GameObject **Material 1 Button (Botón de material 1)**.

**3.**  En la ventana Inspector, ve al componente Image (Imagen) y haz clic en el selector de propiedades **Color**.

[Image: image]

**4.**Elige un color para el primer botón.

**5.**Repite este proceso para los otros dos botones de material.

**6.**Guarda la Escena.

[Image: image]Marcar paso como completado

## 5. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Medio: edita el diseño de la interfaz de usuario

Puedes mover los botones dentro de la interfaz de usuario para que se puedan presionar con mayor facilidad o para que sea menos probable que obstruyan ciertas partes del filtro que tengan efectos específicos. Intenta mover los botones de color o los botones de anteojos a la parte superior de la pantalla. Para esto, deberás modificar el componente Rect Transform del grupo de íconos a fin de moverlo a una ubicación adecuada de la pantalla.

Si necesitas ayuda, explora los tutoriales útiles de [**Habilidades básicas para creadores artísticos: interfaz de usuario**](https://learn.unity.com/project/creative-core-ui).

[Image: image]

#### Difícil: crea nuevos íconos de anteojos

Si creaste tus propios pares de anteojos, deberás crear íconos para representarlos en la interfaz de usuario. Incluimos un archivo PSD llamado **UI_Icon_Glasses_Template**, donde puedes encontrar la hoja de Sprites de anteojos y una versión PNG por si no puedes utilizar archivos PSD. Ambos archivos contienen la hoja de Sprites tal y como aparece en Unity.

Sigue estas instrucciones para editar la hoja de Sprites en el editor de imágenes de tu preferencia e importar tus nuevos íconos en Unity:

**1.**En la ventana Project, ve a **Assets** > **_InteractiveFaceFilter** > **Resources**.

**2.**Haz clic derecho en el formato de archivo que prefieras y selecciona **Show in Explorer (Mostrar en el explorador)** (macOS: **Reveal in Finder o Mostrar en Finder**). Se abrirá una ventana que muestra la ubicación del archivo en el proyecto.

[Image: image]

**3.**Haz doble clic en el archivo PSD o PNG para abrirlo en el editor de imágenes que prefieras.

El archivo PSD tiene los diferentes íconos de anteojos ordenados en carpetas de grupos en la paleta de capas. Al final de la lista hay un grupo Empty Circle (Círculo vacío). Puedes usar este grupo para crear tu propio ícono de anteojos. Si creaste más de un par de anteojos, elimina uno de los íconos de anteojos que no planees usar en la aplicación y reemplázalo con tu propio diseño.

**Advertencia**: ¡no muevas los íconos! Están ordenados en un formato específico para que Unity los pueda dividir en Sprites individuales.

[Image: image]

Para crear tus propios íconos con imágenes, puedes dibujar los anteojos, hacer una captura de pantalla o renderizar los anteojos que creaste en el programa de modelado en 3D y agregar la imagen al archivo PSD. El contorno oscuro de los íconos es un efecto de imagen que se puede copiar a tus propias capas.

**4.**Cuando termines de editar los íconos, desactiva la capa blanca ubicada en la parte inferior de la paleta de capas.

**5.**En el programa de modelado en 3D, ve al menú principal y selecciona **Save As o Guardar como**.

**6.**Ve a la carpeta donde guardaste el proyecto de Unity y busca la carpeta **Sprites**. La ruta debe ser similar a esta: **[Tu proyecto de Unity]\Assets\_InteractiveFaceFilter\Sprites**.

**7.**Selecciona el archivo**UI_Icon_Glasses.png** y luego selecciona **Save o Guardar**.

**8.**Cuando se te pregunte si deseas sobrescribir el archivo guardado, **confirma la acción**.

**9.**Regresa al Editor de Unity y ve a la carpeta **Sprites** para ver el archivo actualizado.

[Image: image]Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

En este tutorial, agregaste la interfaz de usuario de la aplicación y la personalizaste según tus necesidades específicas. Ya creaste todos los Assets (Recursos) visuales para la aplicación y tienes todo listo para pasar a las funciones básicas. En el siguiente tutorial, crearás tu primer script visual para detectar cuando el usuario presione un botón.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
