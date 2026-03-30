[Image: image]

# ¿Cómo integrar un mapa de luz a tu Scene?

Tutorial

Beginner

+10XP

35 mins

1

Unity Technologies

[Image: ¿Cómo integrar un mapa de luz a tu Scene?]Summary

Ahora que has configurado la iluminación en tiempo real en tu Scene (Escena) al aire libre, estás listo para configurar el segundo tipo de iluminación para tu proyecto: iluminación integrada. Cuando hayas implementado esto y hayas realizado algunos ajustes en la configuración de iluminación en toda tu Escena, habrás abarcado los aspectos básicos de la iluminación de un espacio exterior.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar adecuadamente las fuentes de luz para que se puedan integrar.
- Crear un nuevo recurso de Lighting Settings (Configuración de iluminación).
- Explicar por qué cualquier cambio en la iluminación integrada requiere una actualización del mapa de luz.
- Personalizar las propiedades del mapa de luz para tu Escena.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora que has configurado la iluminación en tiempo real en tu Scene (Escena) al aire libre, estás listo para configurar el segundo tipo de iluminación para tu proyecto: iluminación integrada. Cuando hayas implementado esto y hayas realizado algunos ajustes en la configuración de iluminación en toda tu Escena, habrás abarcado los aspectos básicos de la iluminación de un espacio exterior.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar adecuadamente las fuentes de luz para que se puedan integrar.
- Crear un nuevo recurso de Lighting Settings (Configuración de iluminación).
- Explicar por qué cualquier cambio en la iluminación integrada requiere una actualización del mapa de luz.
- Personalizar las propiedades del mapa de luz para tu Escena.

Marcar paso como completado

## 2. ¿Qué es la iluminación integrada?

Q&A (0)

Como aprendiste antes, existen dos enfoques diferentes de la iluminación en Unity: **iluminación en tiempo real** e **iluminación integrada**. Dediquemos un momento a repasar ambos enfoques.

#### Iluminación en tiempo real

Unity calcula la iluminación en tiempo real en el tiempo de ejecución (cuando se ejecuta un juego u otra experiencia en tiempo real). La Directional Light (Luz direccional) y otras fuentes de luz que creaste en los tutoriales anteriores son todas luces en tiempo real.

Estas luces se calculan una vez por fotograma, lo que significa que pueden responder muy bien a los personajes en movimiento y otros elementos de tu Escena. Sin embargo, cuando las escenas se vuelven más complejas, estas luces pueden requerir mucha memoria, lo que puede resultar en un rendimiento reducido, en especial para los jugadores o los usuarios con hardware de menor especificación.

#### Iluminación integrada

Unity calcula previamente la iluminación integrada antes del tiempo de ejecución (antes de que los usuarios interactúen con tu experiencia). Esto significa que todo lo que Unity debe hacer en el tiempo de ejecución es aplicar los datos de iluminación a la Escena. No puedes cambiar las propiedades de las luces que se han integrado en el tiempo de ejecución y tales propiedades no responderán a los GameObjects dinámicos (como un personaje que pasee por tu Escena).

El proceso de cálculo de la iluminación implica la generación de coordenadas UV para toda la Escena, al igual que[las coordenadas UV que se utilizan para mapear la textura en un material](https://learn.unity.com/tutorial/673d115fedbc2a1c0b6b31db?language=es#676f2d94edbc2a27634f643b). Este mapa de texturas se llama mapa de luz y el proceso para crearlo se llama Lightmapping o integración.

La iluminación integrada puede ser mucho más eficiente, pero también se puede utilizar para implementar una iluminación mucho más realista y atractiva para los usuarios.

Marcar paso como completado

## 3. ¿Cómo cambiar el Light Mode?

Q&A (0)

La configuración **Light Mode (Modo de iluminación)** te permite seleccionar el enfoque de la iluminación que quieres adoptar en tu proyecto de Unity:

- Integrado
- En tiempo real
- Mixto

Por el momento, todas las luces de la Escena son en tiempo real. Antes de poder crear una integración, debes cambiar su Light Mode:

**1.**  Abre el proyecto**Habilidades básicas para creadores artísticos: Iluminación**en el Editor de Unity, si aún no lo has hecho.

**2.**  En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**>**Scenes** y abre **TutorialScene_Lighting_Outdoor**.

**3.**  En la ventana Hierarchy (Jerarquía), expande el GameObject **Lighting (Iluminación)** y selecciona **Directional Light**.

**4.**  En el Inspector, busca la propiedad **Mode (Modo)** en el componente Light (Iluminación).

[Image: image]

**5.**  Configura **Mode** en **Baked (Integrado)**.

**6.**  Selecciona los GameObjects de las otras fuentes de luz que has agregado a la Escena y establece sus propiedades **Mode**en **Baked** de la misma manera.

**Consejo:** Puedes utilizar la ventana Light Explorer o Explorador de Iluminación (menú superior: **Windows**> **Rendering**> **Light Explorer**) para cambiarlos rápidamente.

Marcar paso como completado

## 4. ¿Cómo configurar tus fuentes de luz como estáticas?

Q&A (0)

Si un GameObject no se mueve en el tiempo de ejecución, se considera estático. Puedes marcar estos GameObjects como estáticos con la propiedad **Static (Estático)**. Entonces, Unity podrá calcular previamente los datos antes del tiempo de ejecución, incluidos los datos almacenados en un mapa de luz para la iluminación global.

Antes de crear el mapa de luz, debes marcar las fuentes de luz en tu Escena como estáticas:

**1.**  En la Hierarchy, selecciona el GameObject **Environment (Ambiente)**. En el Inspector, habilita su propiedad **Static**.

[Image: image]

**2.** En la ventana emergente Change Static Flags que aparece, selecciona **Yes, change children (Sí, cambiar elementos secundarios)**.

[Image: image]

Esto establecerá el entorno del plano y el anfiteatro como estáticos.

**3.** Selecciona cualquier otro GameObject de utilería de iluminación que hayas agregado a tu Escena y habilita la propiedad **Static**.

**4.**  [Agrega dos Prefabs StreetLamp adicionales](https://learn.unity.com/tutorial/677403d9edbc2a3eed0d2250?language=es#67740405edbc2a39956c6a32) al centro del espacio del anfiteatro para la prueba. Configura solo uno de ellos como **estático**.

Ahora estás listo para integrar un mapa de luz.

Marcar paso como completado

## 5. ¿Cómo integrar un mapa de luz?

Q&A (0)

Hasta ahora, no has percibido ningún impacto visible de los cambios en este tutorial porque no has generado un mapa de luz para almacenar los datos de iluminación. Ya estás listo para hacerlo.

**Importante**: En este proyecto de aprendizaje, todas las mallas tienen mapas de luz en UV. Si importaras una nueva malla sin un mapa de luz en UV, tendrías que [crear una o hacer que Unity generara una de forma automática](https://docs.unity3d.com/Manual/LightingGiUvs-GeneratingLightmappingUVs.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953744889) antes de integrar un mapa de luz.

#### Antes de que empieces a integrar el mapa de luz

Puedes elegir entre dos motores para el Progressive Lightmapper. El motor predeterminado, Progressive CPU Lightmapper, es un motor para el Progressive Lightmapper que utiliza la CPU de tu computadora y la memoria RAM del sistema. El Progressive GPU Lightmapper es un motor para el Progressive Lightmapper que utiliza la GPU de tu computadora y la memoria VRAM.

El Progressive GPU Lightmapper (en vista previa) puede tener un impacto significativamente positivo en la velocidad del lightmapping. Sin embargo, esto solo funcionará bien si tu computadora cumple con [los requisitos de hardware y software del lightmapper](https://docs.unity3d.com/Manual/GPUProgressiveLightmapper.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953744889). Verifica esto ahora antes de continuar con este paso.

#### Integra tu mapa de luz

Para crear un mapa de luz, haz lo siguiente:

**1.**  En la ventana Lighting (menú superior: **Window**> **Rendering**> **Lighting**), ve a la pestaña **Scene**. Selecciona **New Lighting Settings (Nueva configuración de iluminación)**.

[Image: image]

**2.**  Establece la propiedad **Lighting Mode** en **Baked Indirect (Integración indirecta)**. Si cumples con [los requisitos de hardware y software](https://docs.unity3d.com/Manual/GPUProgressiveLightmapper.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953744889), también puedes configurar la propiedad Lightmapper en Progressive GPU (Vista previa) ahora.

**3.**  En la ventana Project, asigna el nombre «Baked Lighting» a tu nuevo recurso y muévelo a **Assets**>**CreativeCore_Lighting** > **Settings** > **Lighting**. .

**4.**De vuelta en la ventana Lighting, selecciona **Generate Lighting (Generar iluminación)** en la parte inferior de la ventana para integrar un mapa de luz. Verás el progreso de la integración en el lado derecho del pie de página de la ventana del Editor de Unity.

[Image: image]

**Nota:** Esto puede tardar algún tiempo en procesarse y tu computadora se pondrá algo lenta, en especial la primera vez que integres el mapa de luz. Este es un comportamiento normal.

**5.**  Presta atención a las dos farolas en el centro del anfiteatro. Deberías notar que la farola que no configuraste como estática no emite luz como podrías esperar.

**6.**  Intenta mover el farol que integraste en el centro del anfiteatro. Tal como observaste en [**¿Cómo comenzar a usar los sistemas de iluminación de Unity?**](https://learn.unity.com/tutorial/673d2ab0edbc2a15d3c92c15?language=es#), deberías ver que cuando mueves el GameObject StreetLamp, la luz y las sombras están fijas en un lugar.

A continuación, mejorarás más tu Escena con luces adicionales.

Marcar paso como completado

## 6. ¿Cómo agregar una Area Light?

Q&A (0)

Las Area Lights (Luces de área) son rectángulos que emiten luz desde un lado del rectángulo de manera uniforme en el área de la superficie de ese lado. Puedes obtener efectos sutiles con estas luces porque pueden iluminar objetos desde varias direcciones a la vez.

En el tutorial anterior, no tenías la opción de agregar una Area Light porque solo funcionan cuando la iluminación está integrada. Pueden ser particularmente útiles para pequeñas fuentes de luz, como las luces del interior de una casa. Las Area Lights pueden ser más eficaces que las Point Lights (Luces de punto) al usar ese tipo de utilería si quieres que una Escena se sienta realista.

Usa las Area Lights para agregar algunas características de iluminación al aire libre al anfiteatro:

**1.**  En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**> **Prefabs.**Selecciona el Prefab **LongLight (Luz larga)**y crea una instancia en la Escena.

**2.**Coloca el **LongLight** en el anfiteatro; un buen punto de partida es directamente en el entorno en uno de los niveles altos, tal como se organizaron en la Escena de ejemplo.

[Image: image]

**3.**  En el Inspector, cambia la propiedad **Color** de la Area Light a algo que te sea fácil de identificar en la Escena. Un color brillante saturado puede ser útil para eso.

**4.**  Configura las propiedades **Rango (Alcance)**, **Intensity o Intensidad**e**Indirect Multiplier (Multiplicador indirecto)**. Por ahora, intenta hacer de tu Area Light una luz brillante con un alcance amplio para que puedas evaluar el impacto que produce en la Escena. Puedes utilizar el gizmo de guía en la vista de Escena para observar el impacto al ajustar estas propiedades.

**Nota:**Si necesitas repasar estas propiedades, [revisa el tutorial anterior](https://learn.unity.com/tutorial/677403d9edbc2a3eed0d2250?language=es).

**5.** En la ventana Lighting, selecciona **Generate Lighting** para actualizar tu integración y ver la luz.

**6.** Si deseas realizar más ajustes o agregar más Area Lights, asegúrate de actualizar tu integración para que puedas ver su impacto en la Escena.

Marcar paso como completado

## 7. ¿Cómo configurar el Light Mode en Mixed?

Q&A (0)

Por el momento, los faroles de la Escena están integrados. Puedes establecer el **Light Mode** en **Mixed** para crear **Mixed Lights (Luces mixtas)**. Combinan sombras dinámicas (en tiempo real) con iluminación integrada de la misma fuente de luz. Esto requiere más procesamiento cuando los usuarios exploran tu experiencia, pero puede mejorar la calidad de tus sombras. Para un proyecto relativamente pequeño y liviano como este, a menudo vale la pena el costo de rendimiento.

En general, usarías una combinación de iluminación mixta, en tiempo real y horneada si estuvieras creando un juego o una aplicación para plataformas de escritorio. Sin embargo, puede ser más fácil demostrar resultados perceptibles usando solo iluminación horneada, lo cual es útil para una experiencia de aprendizaje.

Si estás trabajando en un proyecto relativamente pequeño y ligero como este, a menudo vale la pena el costo de rendimiento utilizar iluminación mixta.

Para cambiar los faroles a Mixed Lights, debes ajustar el Light Mode:

**1.**En la Hierarchy, expande un GameObject de **StreetLamp**y selecciona su GameObject **Spot Light (Foco de luz)** secundario.

**2.**  En el Inspector, busca la propiedad **Mode (Modo)** en el componente Light (Iluminación).

**3.** Configura el **Mode** en **Mixed**.

[Image: image]

**4.**Repite este proceso para las otras luces que has agregado a la Escena.

**5.**  En la ventana Lighting, selecciona **Generate Lighting** para actualizar tu integración.

**6.**  Revisa las sombras en tu Escena. ¿Tu cambio tiene un impacto notorio? Puede que no lo sea en esta situación particular, pero las Mixed Lights son una herramienta útil para tener a tu disposición.

**7.**Configura las luces que has cambiado de nuevo al modo horneado (Baked Mode) y vuelve a hornear la iluminación.

**8.**  Guarda los cambios.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

Ahora que has configurado la iluminación integrada y en tiempo real, estás listo para completar las últimas etapas del trabajo de iluminación en la Escena al aire libre. A continuación, utilizarás **Sondas de luz** para mejorar la iluminación integrada y ajustarás el aspecto general de la Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
