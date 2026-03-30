[Image: image]

# Add a face texture spanish

Tutorial

Beginner

+10XP

30 mins

1

(58)

Unity Technologies

[Image: Add a face texture spanish]Summary

Una de las características más comunes de las aplicaciones de filtros faciales en AR (Realidad aumentada) es la capacidad para cubrir la cara del usuario con un nuevo material o una nueva textura. Esto se puede usar para aplicar una máscara graciosa o visualizar el diseño de un tatuaje.

En este tutorial, harás lo siguiente:

- Agregar una superposición de malla en 3D que abarque la cara del usuario.
- Aplicar un tinte de color simple a la superposición facial.
- Aplicar una textura más compleja a la superposición facial.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1.  Descripción general

Q&A (0)

En el tutorial anterior, seguiste el proceso para crear un filtro facial simple. En este tutorial, harás lo siguiente:

- Agregar una textura personalizada al filtro facial que creaste.
- Explorar el GameObject Face_Reference_Mesh.
- Crear una textura personalizada para mostrarla sobre la cara.
- Explorar las prácticas recomendadas para la creación de texturas personalizadas.

Marcar paso como completado

## 2. ¿Cómo agregar la malla de referencia facial?

Q&A (0)

Una de las limitaciones del Prefab **AR Default Face (Cara predeterminada en AR)** es que solo se hace visible cuando la aplicación está en ejecución y se detecta una cara. Esta restricción convierte la depuración y la iteración de diseño en tareas tediosas, ya que es necesario crear el proyecto para ver los resultados.

Para resolver este problema, AR Foundation ofrece un modelo que está incluido en los Assets (Recursos) que importaste anteriormente (Face_Reference_Mesh). Una **malla** es un modelo en 3D. Puedes colocar el GameObject Face Reference Mesh (Malla de referencia facial) en la Scene (Escena) para utilizarlo como marcador de posición mientras experimentas con diferentes texturas, accesorios y efectos.

Sigue estas instrucciones para agregar el GameObject Face Reference Mesh a la Escena:

**1.**Si aún no lo has hecho, abre el proyecto de modelo de AR en Unity y luego abre la Escena BasicFaceFilter.

**2.**En la ventana Project (Proyecto), ve a **Assets**>**_BasicFaceFilter**>**Prefabs.**

**3.**Arrastra el Prefab **Face_Reference_Mesh**desde la ventana Project a la ventana Hierarchy (Jerarquía) o a la vista de Escena.

**4.**Para ver bien la malla de cara, haz doble clic en Face_Reference_Mesh en la ventana Hierarchy. De esta manera, la malla se mostrará resaltada en la vista de Escena.

[Image: image]Marcar paso como completado

## 3. ¿Cómo crear un nuevo material?

Q&A (0)

El **mapa base** (también conocido como Albedo) representa el color que tiene un objeto antes de que cualquier luz entre en contacto con él. Una de las características más divertidas de la creación de filtros faciales en AR es que te permite diseñar nuevos estilos para tu cara. ¡Es hora de crear un nuevo look!

Sigue estas instrucciones a fin de crear un nuevo material para tu filtro:

**1.**  En la ventana Project, ve a **Assets**>**_BasicFaceFilter**>**Materials**.

**2.**  Haz clic derecho en la carpeta y selecciona **Create**>**Material** en el menú contextual para crear un nuevo material.

**3.**  Asigna el nombre «FaceTexture» al nuevo material.

[Image: image]

**4.**  En la ventana Inspector, haz clic en el selector de objetos (ícono del círculo) ubicado junto a la propiedad **Base Map (Mapa base)**.

[Image: image]

**5.**  Busca la opción «FaceTexture_Waves**»** y selecciónala. La imagen que seleccionaste ahora está aplicada al material como el mapa de color (Albedo).

[Image: image]

**6.**  En la ventana Hierarchy, selecciona el ícono desplegable (flecha) que está a la izquierda del GameObject **Face_Reference_Mesh** para mostrar los GameObjects secundarios.

**7.**  Arrastra el material **FaceTexture**desde la ventana Project al GameObject **facemesh (Malla de cara)** para aplicar el material.  En la vista de Escena, el patrón de olas ahora estará visible en el GameObject **Face_Reference_Mesh**.

[Image: image]Marcar paso como completado

## 4. ¿Cómo asignar un tinte al material?

Q&A (0)

Cuando seleccionas un color en la propiedad Base Map, este se aplica como color liso al material. Si también agregas una textura en la propiedad Base Map, el color seleccionado se usa como tinte en la textura de la imagen.

Sigue estas instrucciones para cambiar el tinte de la propiedad Base Map:

**1.**  En la ventana Project, selecciona el material **FaceTexture**(en **Assets**>**_BasicFaceFilter**> **Materials**).

**2.**  En la ventana Inspector, haz clic en el selector de color de la propiedad **Base Map**.

[Image: image]

**3.** Utiliza los selectores de la ventana de diálogo Color para cambiar el color del tinte.

[Image: image]

**4.**  Experimenta con diferentes colores y selecciona un tinte que te guste. Si quieres quitar el tinte, cambia el color a blanco.

Marcar paso como completado

## 5. ¿Cómo ajustar la transparencia?

Q&A (0)

La transparencia de un material depende de la información disponible en su canal Alpha (Alfa). **Los mapas Alpha** son mapas en escala de grises que controlan la translucencia del material, donde los píxeles más oscuros son más transparentes y los píxeles más claros son más opacos. Estos mapas no afectan el color del material.

Debido a que los mapas Alpha solo utilizan valores de la escala de grises, no necesitan tres canales, como los valores de color RGB, y pueden ocupar un solo canal. Unity utiliza los valores de la escala de grises del canal Alpha de la imagen Base Map para controlar la transparencia.

Sigue estas instrucciones para ajustar la transparencia del material:

**1.**  Revisa que el material **FaceTexture** siga seleccionado en la ventana Project.

**2.**  En la ventana Inspector, cambia la propiedad **Surface Type (Tipo de superficie)** a **Transparent (Transparente)**.

**3.**En la vista de Escena, el modelo de cara ahora debería tener transparencia en las áreas ubicadas alrededor del contorno para crear un efecto de olas.

[Image: image]Marcar paso como completado

## 6. ¿Cómo aplicar el material a la cara predeterminada?

Q&A (0)

Ya creaste un material y lo aplicaste al GameObject**Face_Reference_Mesh** en la Escena. Sin embargo, para poder verlo en la aplicación, debes aplicarlo al Prefab **AR Default Face** que creaste anteriormente. El GameObject**Face_Reference_Mesh** presente en la Escena solo sirve como referencia, por lo que debes hacerlo invisible al crear la aplicación.

Sigue estos pasos para aplicar el material al Prefab:

**1.**  En la ventana Project, ve a **Assets**>**_BasicFaceFilter**>**Prefabs**.

**2.**  Haz doble clic en el Prefab **AR Default Face** ubicado en esta carpeta para abrirlo en la vista de Escena.

**3.**  En la ventana Inspector, busca el componente Mesh Renderer (Renderizador de mallas).

**4.**  En la sección Materials, haz clic en el selector de objetos (ícono de círculo) de **Element 0**.

[Image: image]

**5.**  Selecciona el material **FaceTexture**.

[Image: image]

**6.**  Selecciona la flecha hacia atrás ubicada en la esquina superior izquierda de la ventana Hierarchy para salir del modo de edición de Prefabs.

[Image: image]

**7.**  En la ventana Hierarchy, haz clic derecho en el GameObject **Face_Reference_Mesh** y desactívalo en la ventana Inspector. Ya no necesitas este GameObject porque ya aplicaste el material al Prefab. (No querrás que aparezcan dos caras si solo debe haber una en la Escena).

[Image: image]Marcar paso como completado

## 7. ¿Cómo crear y probar la aplicación?

Q&A (0)

Si pruebas la aplicación ahora, debe mostrar el material que creaste y aplicarlo en cualquier cara que detecte.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:06Loaded: 6.60%0:00Remaining Time -0:061xPlayback Rate

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

Sigue estas instrucciones para crear y probar la aplicación:

**1.**  Guarda la Escena.

**2.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**3.** Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)** para crear la aplicación en el dispositivo.

**4.** La aplicación se abrirá automáticamente en el dispositivo. La nueva textura debería aparecer sobre tu cara en la aplicación.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 8. Consejos de optimización de imágenes

Q&A (0)

La **optimización**es el proceso para hacer que la aplicación sea lo más eficiente posible. Si usas texturas sin optimizar, la aplicación se podría ver lenta.

La optimización es indispensable para las experiencias de AR porque estas se ejecutan en dispositivos móviles, los cuales tienen una capacidad de procesamiento menor que otros dispositivos. Al crear texturas para AR, debes tomar en cuenta el tipo y el tamaño de la imagen, además de decidir si deben tener transparencia.

#### Tamaño de la imagen

Las texturas que utilizas para las aplicaciones de AR (o para cualquier proyecto de Unity) son imágenes. Puedes elegir el tamaño de la textura para equilibrar la calidad y el rendimiento. Si la textura es demasiado pequeña, la experiencia del usuario en la aplicación podría ser negativa, especialmente si el principal objetivo es mostrar elementos visuales atractivos. Si la textura es demasiado grande, la aplicación podría ser demasiado lenta y la experiencia del usuario podría ser frustrante.

Tal vez hayas notado que los tamaños de las texturas se suelen presentar en potencias de dos. Por ejemplo, 512 x 512, 1024 x 1024, 2048 x 2048 (2K) y 4096 x 4096 (4K).

Las tarjetas de gráficos antiguas necesitan estos tamaños para tener un buen rendimiento en el tiempo de ejecución. Aunque la mayoría de las tarjetas de gráficos modernas no tienen esta restricción, aún se recomienda utilizar tamaños en potencias de dos.

#### Tipo de imagen

El tipo de imagen también influye mucho en la optimización. Al tomar una decisión, debes tomar en cuenta los siguientes factores:

- El espacio de almacenamiento disponible en la plataforma objetivo.
- La velocidad de lectura (es decir, la velocidad con la que la plataforma objetivo puede llevar la imagen del disco a la memoria del sistema).
- La velocidad de lectura de la memoria del sistema a la GPU.
- La memoria RAM que la plataforma objetivo puede asignar a la reproducción de video.

Estas son algunas ventajas potenciales que puedes obtener al utilizar diferentes tipos de imágenes en tus creaciones:

- **PNG**: este formato conserva la calidad y su tamaño es relativamente pequeño. Sin embargo, los archivos PNG están comprimidos, por lo que el proceso de lectura debe incluir la descompresión. El beneficio del tamaño reducido de los archivos PNG suele ser mayor que el tiempo adicional requerido para leerlos, por lo que este es un tipo de archivo ideal para la mayoría de los casos.
- **TGA**: esta es una buena opción para favorecer la calidad, ya que los archivos no están comprimidos e incluyen un canal Alpha. Sin embargo, los archivos TGA son bastante grandes, por lo que pueden tardar mucho en cargarse. El tipo de archivo TGA es una buena opción para las texturas que se pueden precargar, como las imágenes de fondo de una aplicación en AR.
- **JPG**: este tipo de archivo es bastante pequeño, pero cada compresión del proceso genera una pérdida de calidad. Los archivos JPG no contienen un mapa Alpha, por lo que no se pueden utilizar en ningún proceso que requiera transparencia.

Marcar paso como completado

## 9. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: edita un material

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

Los materiales contienen varias propiedades con las que puedes personalizar la apariencia y sensaciones que transmite (look and feel) un objeto. Además de cambiar el color de un material, como lo hiciste en estos tutoriales, puedes modificar otras propiedades.

Intenta modificar las siguientes propiedades del material en la sección Surface Inputs de la ventana Inspector cuando esté seleccionado:

- **Metallic Map (Mapa metálico):** entre más alto sea su valor, más metálico se verá el material. Entre más metálico sea, más luz reflejará.
- **Smoothness (Suavidad):** entre más alto sea su valor, más suave se verá el material. Entre más suave sea, más luz reflejará.
- **Emission (Emisión):** esta propiedad determina si el material brilla. Si activas esta propiedad, verás un selector de color disponible.

[Image: image]

Si deseas más información sobre cómo ajustar los materiales, puedes explorar la sección [**Habilidades básicas para creadores artísticos: sombreadores y materiales**](https://learn.unity.com/project/creative-core-shaders-and-materials).

#### Medio: modifica una textura

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

Duplica una de las texturas proporcionadas y edítala para crear tu propia versión. Por ejemplo, puedes eliminar diferentes secciones de la textura o agregar una línea de otro color.

[Gimp](https://www.gimp.org/) es un software de código abierto que, al igual que Adobe® [Photoshop](https://www.adobe.com/products/photoshop.html)®, sirve para crear, modificar y exportar gráficos. [Descarga Gimp](https://www.gimp.org/) si no tienes Photoshop. Si necesitas ayuda para usar el software de edición de texturas que elegiste, puedes encontrar muchos tutoriales en Internet.

#### Difícil: crea tu propia textura

Crea tu propia textura desde cero y empieza a diseñar tus propios filtros. Utiliza el archivo [canonical_face_texture.psd](https://github.com/google-ar/arcore-android-sdk/tree/master/assets) como base para crear tus propias texturas y aplicarlas al GameObject **Face_Reference_Mesh**.

**Importante**: la textura de olas proporcionada en los archivos de muestra es un ejemplo de textura con transparencia. Si quieres usar transparencia en tus filtros faciales, deberás guardar la imagen de textura en un formato de archivo que tenga un canal Alpha, como PNG.

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

En este tutorial, creaste un material personalizado para agregar más colores y patrones al filtro facial. ¡Pero aún puedes hacer más! En el siguiente tutorial, agregarás algunos accesorios al filtro.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
