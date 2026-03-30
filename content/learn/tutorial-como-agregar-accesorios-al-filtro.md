[Image: image]

# Add accessories to your filter spanish

Tutorial

Beginner

+10XP

30 mins

1

(56)

Unity Technologies

[Image: Add accessories to your filter spanish]Summary

En términos prácticos, al hacer el seguimiento de la cara del usuario, también monitoreas la posición y rotación de su cabeza. Esto te permite agregar modelos en 3D sobre la cabeza del usuario y alrededor de ella, como una aureola o unos anteojos graciosos.

En este tutorial, harás lo siguiente:

- Agregar accesorios en 3D al rastreador de caras.
- Colocar los accesorios en 3D con el GameObject Face Reference Mesh (Malla de referencia facial) como referencia.
- Obtener información sobre los conceptos básicos de la optimización de mallas y el trabajo con Assets (Recursos) personalizados.
- Crear y probar la aplicación actualizada.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Ya agregaste una textura en 2D a la aplicación, pero puedes hacer mucho más con los filtros en AR (Realidad aumentada). En este tutorial, harás lo siguiente:

- Agregar accesorios en 3D al rastreador de caras.
- Colocar los accesorios en 3D con el GameObject Face Reference Mesh como referencia.
- Obtener información sobre los conceptos básicos de la optimización de mallas y el trabajo con Assets personalizados de FBX.

Al final de este tutorial, podrás empezar a crear tus propios filtros faciales en 3D.

Marcar paso como completado

## 2. ¿Cómo explorar los accesorios en 3D?

Q&A (0)

El paquete que descargaste para este proyecto contiene algunos accesorios prediseñados que puedes agregar a la Scene (Escena). En la ventana Project (Proyecto), ve a **Assets**>**_BasicFaceFilter**>**Prefabs** y dedica algún tiempo a explorar los modelos proporcionados.

[Image: image]Marcar paso como completado

## 3. ¿Cómo agregar un accesorio al rastreador de caras?

Q&A (0)

Antes de agregar uno de estos accesorios en 3D al rastreador de caras, debes agregar una referencia facial visible al GameObject **AR Default Face (Cara predeterminada en AR)** para poder colocarlo adecuadamente.

Sigue estas instrucciones para agregar una referencia facial:

i**1.**  En la ventana Project, asegúrate de haber seleccionado la carpeta**Prefabs**.

**2.**  Haz doble clic en el Prefab **AR Default Face** ubicado en esta carpeta para abrirlo en la vista de Escena.

**3.**  Arrastra el Prefab **Face_Reference_Mesh** desde la ventana Project a la ventana Hierarchy (Jerarquía) para que sirva como referencia. Para acercarte al Prefab**Face_Reference_Mesh**, haz doble clic en él en la ventana Hierarchy.

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

**4.**  Arrastra uno de los accesorios proporcionados al GameObject **AR Default Face** en la ventana Hierarchy. De esta manera, el accesorio se agregará al Prefab como objeto secundario del GameObject.

[Image: image]

**5.**  Utiliza las herramientas del Transform para colocar el accesorio que elegiste en la posición correcta. También puedes ajustar la rotación y el tamaño, si es necesario.

[Image: image]

**Nota**: si necesitas un repaso, [revisa las herramientas del Transform y sus accesos directos](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f2).

**6.**  En la ventana Inspector, desactiva el GameObject **Face_Reference_Mesh**.

[Image: image]

**7.**  Selecciona la flecha hacia atrás ubicada en la esquina superior izquierda de la ventana Hierarchy para salir del modo de edición de Prefabs.

[Image: image]Marcar paso como completado

## 4. ¿Cómo crear y probar la aplicación?

Q&A (0)

Si creas y pruebas la aplicación, el accesorio que agregaste debería aparecer en la posición correcta sobre tu cara. Esto puede requerir un proceso de prueba y error. Si no te satisface la posición del accesorio, vuelve a abrir el Prefab para hacer otros ajustes.

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

Sigue estas instrucciones para crear y probar la aplicación:

**1.**  Guarda la Escena.

**2.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**3.** Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**4.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, la aplicación debería mostrar el accesorio que agregaste (aunque podría no estar en la posición ideal).

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 5. ¿Cómo utilizar tus propios Assets?

Q&A (0)

Las experiencias en AR se suelen ejecutar en hardware móvil, por lo que es indispensable crear y utilizar recursos optimizados para las aplicaciones. La optimización es un tema complejo y las experiencias se pueden optimizar de muchas maneras.

Las experiencias en AR se suelen ejecutar en hardware móvil, por lo que es indispensable crear y utilizar recursos optimizados para las aplicaciones. La optimización es un tema complejo y las experiencias se pueden optimizar de muchas maneras.

La **optimización de mallas** es una de las principales maneras en las que puedes mejorar el rendimiento de los juegos y las aplicaciones. Las mallas de todos los modelos utilizados en un juego o una aplicación (como el accesorio que acabas de agregar a la aplicación de AR) están formadas por polígonos. El número de polígonos de los Assets presentes en el juego influye en el rendimiento del mismo. Si la cantidad de polígonos es alta, se deben realizar muchos cálculos y otros procesos de administración en tiempo real, lo que provoca una disminución de la frecuencia de imagen.

Un promedio de entre 300 y 1500 polígonos por malla suele generar buenos resultados para el hardware móvil, mientras que el rango ideal para las plataformas de escritorio es de entre 1500 y 4000 polígonos. Recuerda que estas solo son recomendaciones generales. La cantidad de polígonos general de la Escena también es muy importante. Por ejemplo, si hay muchos personajes en la Escena, los modelos deberían tener menos polígonos.

Si deseas obtener más información sobre la optimización de mallas, puedes explorar los siguientes recursos:

- [Arm y Unity presentan: optimización del arte en 3D para aplicaciones móviles](https://learn.unity.com/course/3d-art-optimization-for-mobile-gaming-5474), que es un curso intermedio para el desarrollo móvil.
- [Documentación de Unity sobre los mapas normales (en inglés)](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterNormalMap.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952878583), que sirve para dar detalles de muchos polígonos a los modelos que tienen pocos polígonos.

Marcar paso como completadoPaso opcional

## 6. ¿Cómo importar archivos FBX?

Q&A (0)

Si creas tus propios Assets y los exportas a Unity en formato FBX, la aplicación de modelado suele integrar los materiales y las texturas en el modelo durante el proceso de exportación. Algunos ejemplos de estas aplicaciones son [Blender](https://www.blender.org/) y [Maya](https://www.autodesk.com/products/maya/overview).  Cuando importas estos modelos en Unity, los materiales y las texturas muchas veces no están visibles y el modelo se muestra de color gris.

Para corregir esto, debes extraer los materiales y las texturas integrados después de importar el modelo:

**1.**  En la ventana Project, ve a la carpeta **Assets** y selecciona el modelo FBX que importaste.

**2.**  En la ventana Inspector, selecciona la pestaña **Materials (Materiales)**.

[Image: image]

**3.**  Selecciona **Extract textures (Extraer texturas)** y elige la carpeta donde desees que se guarde la textura.

**4.**  Selecciona **Extract materials (Extraer materiales)** y elige la carpeta donde desees que se guarden los materiales.

Marcar paso como completado

## 7. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: importa accesorios desde la Asset Store

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

La Asset Store (Tienda de recursos) de Unity tiene muchos tipos de Assets diferentes que puedes usar en las aplicaciones. Recuerda utilizar modelos con pocos polígonos para garantizar un buen rendimiento en dispositivos móviles. El paquete de Assets de Unity llamado [Hats pack - 3D Microgames Add-Ons (Paquete de sombreros: complementos para microjuegos en 3D)](https://assetstore.unity.com/packages/3d/hats-pack-3d-microgames-add-ons-163011) es un excelente punto de partida.

Puedes hacer lo siguiente para mejorar el proyecto:

- Buscar Assets con pocos polígonos en la Asset Store de Unity.
- Importarlos al proyecto.
- Agregar el modelo o Prefab del accesorio a la aplicación con los pasos que seguiste en una sección anterior de este tutorial.

#### Difícil: crea nuevos accesorios

Existen muchos métodos diferentes para crear tus propios accesorios en 3D dentro de Unity y en otras aplicaciones externas, como [Blender](https://www.blender.org/), [3dsMax](https://www.autodesk.com/products/3ds-max/free-trial) o [Maya](https://www.autodesk.com/products/maya/free-trial). En Unity, puedes combinar formas primitivas (cubos, esferas, cápsulas, etc.) como elementos secundarios del mismo GameObject vacío para crear nuevos aspectos y objetos. También puedes usar algunas herramientas de Unity, como [ProBuilder](https://learn.unity.com/tutorial/working-with-shapes-in-probuilder#), para crear formas más complejas en el Editor.

Cuando tengas todo listo para crear tu propia obra maestra en 3D, recuerda utilizar el GameObject Face Reference Mesh como referencia para la posición, la rotación y el tamaño de tus propios accesorios en 3D.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

En este tutorial, aprendiste cómo agregar accesorios en 3D adicionales a un filtro facial. En el siguiente tutorial, agregarás efectos especiales para que la aplicación se vea aún más interesante.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
