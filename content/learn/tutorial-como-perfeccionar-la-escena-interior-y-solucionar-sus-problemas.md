[Image: image]

# ¿Cómo perfeccionar la Scene en interiores y solucionar sus problemas?

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: ¿Cómo perfeccionar la Scene en interiores y solucionar sus problemas?]Summary

Estás casi al final de tu recorrido por la Scene (Escena) interior y al aire libre. Hasta ahora, has iluminado la Escena al aire libre desde cero y has realizado algunas modificaciones menores a la Escena interior. Estás listo para perfeccionar la iluminación en esta Escena.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar la iluminación indirecta para mejorar el nivel de iluminación general en una Escena interior.
- Identificar los problemas comunes de la resolución de problemas de iluminación para principiantes de Unity.
- Mejorar las filtraciones de luz mediante el ajuste exploratorio de las propiedades de iluminación.
- Identificar cuando un modelo importante tiene UV de mapas de luz incorrectos.
- Generar mapas de luz para un modelo importado sin ellos.

Resources

- [Apple_BrokenLightmapUVs.fbx](https://unity-connect-prd.storage.googleapis.com/20211124/2a865f48-d818-4ff2-8106-fcd6dbfa63d9/Apple_BrokenLightmapUVs.fbx?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953972680)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Estás casi al final de tu recorrido por la Escena interior y al aire libre. Hasta ahora, has iluminado la Escena al aire libre desde cero y has realizado algunas modificaciones menores a la Escena interior.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar la iluminación indirecta para mejorar el nivel de iluminación general en una Escena interior.
- Identificar los problemas comunes de la resolución de problemas de iluminación para principiantes de Unity.
- Mejorar las filtraciones de luz mediante el ajuste exploratorio de las propiedades de iluminación.
- Identificar cuando un modelo importante tiene UV de mapas de luz incorrectos.
- Generar mapas de luz para un modelo importado sin ellos.

Marcar paso como completado

## 2. ¿Cómo revisar la configuración de las sombras?

Q&A (0)

Primero, revisa que las sombras estén configuradas adecuadamente en la Escena:

**1.**  En la ventana Hierarchy (Jerarquía), expande el GameObject **Environment (Entorno)** y luego el GameObject **GalleryInterior**. Selecciona todos los GameObjects secundarios dentro de **GalleryInterior**.

**2.**  En el Inspector, habilita la propiedad **Static o Estático**(al lado del campo con el nombre del GameObject).

[Image: image]

**3.** En el Inspector, busca el componente Mesh Renderer (Renderizador de malla) y ve a la sección **Lighting (Iluminación)**.

**4.** Establece la propiedad **Cast Shadows (Proyectar sombras)** en **Two Sided (Dos caras)**.

[Image: image]

Esto significa que los GameObjects del entorno proyectarán sombras desde ambos lados de las mallas de sus GameObjects, lo que hará que se vean más realistas. No utilizar esta configuración puede provocar problemas con la visualización correcta de las sombras si utilizas formas de un solo lado, como los planos, para representar mallas más complejas al construir un entorno.

**5.**En la Hierarchy, selecciona el GameObject **Windows o Ventanas**(secundario de**GalleryInterior**).

Este es el GameObject para los tragaluces de la galería. Para que los GameObjects que representan el vidrio de la ventana funcionen como se espera al integrar un mapa de luz, debes desactivar las sombras antes de realizar el proceso de integración y activarlas de nuevo.

**6.**En el Inspector, establece **Cast Shadows** en **Off (Desactivado)**.

**7.**En la ventana Lighting, selecciona **Generate Lighting (Generar iluminación)**para actualizar el mapa de luz.

**Nota:**Durante el resto de tu tiempo trabajando en esta Escena, dejarás las sombras del tragaluz apagadas para evitar completar este proceso cada vez que vuelvas a integrar el mapa de luz. Si lo deseas, puedes activarlas de nuevo cuando hayas terminado de personalizar esta Escena al final del siguiente tutorial.

Marcar paso como completado

## 3. ¿Cómo aumentar la luz en el espacio?

Q&A (0)

El rayo de luz con emisividad ayuda un poco, pero en general la galería todavía está un poco oscura. No es necesario agregar fuentes de luz adicionales para abordar esto; de hecho, dado el enfoque relativamente naturalista de la Escena, eso no sería ideal.

En su lugar, puedes mejorarlo con iluminación indirecta:

**1.** En la ventana Lighting, ve a la pestaña **Scene**. La sección **Lightmapping Settings (Configuración de lightmapping)**incluye propiedades que puedes configurar para ajustar la iluminación indirecta en la Escena.

**Consejo:** Si la ventana está cerrada actualmente, ve al menú superior y selecciona **Window**> **Rendering**> **Lighting**. Acopla la ventana Lighting al lado del Inspector.

**2.** Establece la propiedad **Max Bounces (Rebotes máximos)** en **4**. Este aumento incluirá más rebotes en los cálculos de la iluminación indirecta integrada de la Escena sin prolongar demasiado los tiempos de integración.

[Image: image]

**Consejo:** Aumentar **Max Bounces** más allá de este valor proporciona poca luz adicional, pero aumenta el tiempo de integración.

**3.** Configura **Indirect Intensity (Intensidad indirecta)** con un valor entre **2**y **2.5**. Este aumento de intensidad hará que el espacio de la galería parezca más luminoso.

[Image: image]

**4.** Selecciona **Generate Lighting** para volver a crear el mapa de luz.

Debes notar que ahora los niveles generales de luz en la sala de la galería han aumentado, lo que hace que sea más fácil ver todo en el espacio.

[Image: image]

**Nota:**Tu propia Escena no tiene que ser tan brillante como la imagen de ejemplo anterior si prefieres mantener el espacio de la galería un poco más oscuro. Encuentra el equilibrio adecuado para ti.

Marcar paso como completado

## 4. ¿Cómo mejorar las filtraciones de luz?

Q&A (0)

**Las filtraciones de luz** se dan si hay luz alrededor de los GameObjects cuando no debería. Esto ocurre cuando la luz pasa por donde no debería, por ejemplo, a través o entre paredes u otra geometría. De acuerdo con la configuración de tu proyecto, puede ser complicado arreglar esto por completo si no eres un experto (recuerda, ser artista de iluminación es un trabajo especializado). Sin embargo, hay cosas que puedes hacer para abordarlo en tu integración ligera.

Debes notar que actualmente hay algo de luz que se filtra a través de la puerta y la pared al lado de la lámpara de pie alta.

[Image: image]

Para reducir las filtraciones de luz en la Escena:

**1.**  En la vista de Escena, dirígete frente a la puerta para observar cómo tus acciones afectan las filtraciones de luz.

**2.**Selecciona **Directional Light (Luz direccional)** en la ventana Hierarchy.

**3.**  En el Inspector, reduce el valor de **Bias Normal (Prejuicio normal)** a **0**lentamente con el deslizador y observa lo que ocurre en la vista de Escena mientras lo haces.

[Image: image]

Tu objetivo es reducir o eliminar por completo la filtración de luz a través de la puerta.

**4.** Experimenta con los deslizadores de valor de las propiedades **Depth (Profundidad)**, **Normal**y **Near Plane (Plano cercano)**. Intenta minimizar las filtraciones de luz, pero encuentra un equilibrio que funcione para ti y tu Escena. [Puedes obtener más información sobre estas propiedades en la documentación](https://docs.unity3d.com/Manual/class-Light.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953972680).

**Consejo:** Al establecer los valores de **Bias (Prejuicio)**, no los pongas demasiado altos. Esto puede provocar sombras que no coincidan con el objeto desde el que se proyectan o que parezcan estar desconectadas, así como hacer que las filtraciones de luz sean visibles.

**5.** En la ventana Lighting, selecciona **Generate Lighting** para volver a crear el mapa de luz.

[Image: image]

A menudo, este es un proceso iterativo e incremental, así que no te preocupes si ajustar las sombras y abordar las filtraciones de luz te lleva un poco de tiempo.

#### Abordaje de las filtraciones de luz en otros proyectos

En este proyecto, los valores de **Bias**de Realtime Shadow (Sombra en tiempo real) se controlan en el GameObject **Directional Light** porque hemos establecido la propiedad **Bias** en **Custom (Personalizado).**Esto significa que los valores son específicos de esta Escena únicamente.

De forma predeterminada, esta configuración se maneja en la sección de configuración **Shadows (Sombras)** del recurso de canal de renderizado. Sin embargo, este recurso se puede aplicar a un proyecto completo; si hubiera un problema en la configuración del recurso, afectaría a todas las Escenas de esta experiencia de aprendizaje.

Para revisar el recurso en tu proyecto, ve a **Assets**> **CreativeCore_Lighting**> **Settings**> **Rendering** y selecciona el recurso**UniversalRP-HighQuality**.

Si intentas abordar los problemas de filtración de luz en una Escena de otro proyecto, puede resultarte útil configurar los valores de **Bias** específicos de la Escena en la Directional Light también.

Marcar paso como completado

## 5. ¿Cómo importar un nuevo modelo?

Q&A (0)

Todos los modelos de esta Escena están configurados para ti, pero es útil poder resolver problemas cuando un modelo que importas los tiene.

Para simular esto, deberás importar un nuevo modelo al proyecto:

**1.** [Descarga el archivo del modelo **Apple_BrokenLightmapUV.fbx** desde Materiales del tutorial](https://unity-connect-prd.storage.googleapis.com/20211124/2a865f48-d818-4ff2-8106-fcd6dbfa63d9/Apple_BrokenLightmapUVs.fbx?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953972680).

**2.** En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**> **Models**.

**3.**  [Importa el nuevo modelo a tu proyecto de Unity](https://learn.unity.com/tutorial/65f8a6e3edbc2a545fc44bd3?uv=2022.3#65f8a6e3edbc2a545fc44be2).

**4.** Coloca el modelo en el medio de tu Escena.

**5.**  Configura el modelo como **Static**, incluidos sus GameObjects secundarios.

**6.** Vuelve a integrar el mapa de luz de la Escena. Deberías notar algo mal con la manzana de inmediato: hay un patrón extraño distorsionado en la mitad del modelo.

[Image: image]

Esto se debe a que el modelo no tiene las [coordenadas UV del mapa de luz](https://learn.unity.com/tutorial/673d115fedbc2a1c0b6b31db?language=es#676f2d94edbc2a27634f643b) correctas. Esto puede provocar problemas de iluminación en una Escena si no se aborda.

Marcar paso como completado

## 6. ¿Cómo revisar la vista de diagnóstico Baked Lightmap?

Q&A (0)

Configurar los modelos de forma adecuada para la iluminación integrada es muy importante. Si no lo haces correctamente, puedes obtener resultados inesperados o no deseados en tu proyecto. Las vistas de diagnóstico pueden ser muy útiles para verificar esto, en especial si el problema no es tan obvio como el actual con el modelo de la manzana.

Para revisar esta Escena y tu nuevo modelo:

**1.**  En la barra de control de la vista de Escena, usa el menú desplegable **Debug** **Draw Mode (Modo de dibujo de depuración)** (parte superior central) para seleccionar **Baked Lightmap (Mapa de luz integrado)**.

[Image: image]

**2.**  Verás que ha aparecido una superposición en la vista de Escena:

[Image: image]

La vista de Draw Mode del Baked Lightmap muestra los mapas de luz integrados aplicados a la geometría de la Escena (mallas) como una superposición a cuadros. Esta vista de diagnóstico puede ayudarte a identificar problemas con los modelos. Puedes utilizar el control **Lighting Exposure (Exposición de la iluminación)** para que sea más fácil ver el efecto de tablero de ajedrez en la Escena.

**3.**  Acerca el modelo que acabas de agregar. ¿Hay alguna diferencia con el patrón de superposición a cuadros?

[Image: image]

Debes notar que el patrón de tablero de ajedrez está significativamente distorsionado en el nuevo modelo de la manzana.

Marcar paso como completado

## 7. ¿Cómo generar coordenadas UV del Lightmap para el modelo?

Q&A (0)

Ahora que identificaste el problema, puedes intentar abordarlo en el Editor de Unity:

**1.** En la ventana Project, selecciona el modelo que importaste.

**2.** En el Inspector, busca la propiedad **Generate Lightmap UVs (Generar coordenadas UV del mapa de luz)** en Model Import Settings (Configuración de importación del modelo). Esta es la última propiedad que aparece en la pestaña **Model (Modelo)**.

[Image: image]

**3.**  Habilita **Generate Lightmap UVs** y luego selecciona **Apply (Aplicar)**.

**4.**  Deberías notar que el patrón de la superposición marcada sobre el modelo en la vista de Escena ahora tiene el aspecto esperado. En la barra de control de la vista de Escena, configura el **Draw Mode** de nuevo a **Shaded (Sombreado)** cuando termines.

**5.** Vuelve a integrar el mapa de luz y guarda los cambios.

**Importante:**Si bien es útil, la función **Generate Lightmap UV**no reemplaza a un artista. Los resultados producidos pueden proporcionar una base de referencia de mejora, pero siempre debes hacer que un artista de UV la revise y arregle la textura cuando sea posible.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

En este tutorial, has realizado una variedad de verificaciones básicas y comunes de resolución de problemas para abordar los problemas en tu Escena. Las filtraciones de luz son un problema particularmente común en las Escenas de interiores debido a la naturaleza del entorno requerido para ellas, pero pueden ocurrir en cualquier Escena.

Los problemas con las sombras y la configuración incorrecta del modelo también pueden suceder en cualquier proyecto. Es una buena Idea ejecutar estas verificaciones si encuentras algún comportamiento inesperado en la iluminación en tu proyecto, antes de pasar a una investigación más profunda.

Esta Escena no está del todo completa; a continuación, trabajarás para corregir los reflejos en la galería.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
