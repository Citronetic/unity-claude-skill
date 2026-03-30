[Image: image]

# ¿Cómo probar un Sistema de partículas?

Tutorial

Beginner

+0XP

10 mins

1

(6)

Unity Technologies

[Image: ¿Cómo probar un Sistema de partículas?]SummarySkills

Los efectos más complejos, como una fogata, en realidad pueden estar formados por múltiples Sistemas de partículas individuales. El fuego puede tener llamas, humo y chispas. En este tutorial, explorarás los elementos individuales del fuego y luego probarás con las propiedades de esos elementos para producir un resultado único.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar cómo se pueden combinar los Sistemas de partículas individuales para crear efectos más complejos.
- Comprender el propósito de los tres módulos predeterminados en un Sistema de partículas: emisión, forma y renderizador.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora estás familiarizado con lo que son los VFX en general. En este tutorial, explorarás los componentes del Sistema de partículas del fuego para ver cómo funciona realmente. Luego, configurarás los módulos y las propiedades del fuego para que se vea aún mejor.

Marcar paso como completado

## 2. ¿Cómo habilitar el elemento de chispas?

Q&A (0)

Los VFX más complejos a menudo están hechos de múltiples Sistemas de partículas individuales. Cuando se combinan, estos sistemas individuales pueden producir un resultado más interesante. Agreguemos un elemento adicional a este fuego: algunas chispas.

**1.**En la Hierarchy (Jerarquía), expande el objeto **VFX_Fire** y selecciona su objeto secundario inactivo llamado**VFX_Sparks.**

[Image: image]

**2.**Marca el **VFX_Sparks** como activo en la casilla de selección junto al nombre del GameObject en el Inspector, y luego presiona **Restart (Reiniciar)** en la ventana Particle Effect (Efecto de partícula). Ahora verás las chispas en el centro del fuego.

[Image: image]

Las chispas del fuego mejoran mucho el conjunto, pero por ahora son muy simplistas. Son solo pequeños puntos blancos que flotan hacia arriba. Vamos a hacer que se vean más como chispas reales.

Marcar paso como completado

## 3. ¿Cómo habilitar módulos adicionales para las chispas?

Q&A (0)

Para cambiar el aspecto o el comportamiento de un Sistema de partículas, debes activar y editar sus **módulos**. Un Sistema de partículas está formado por muchos módulos diferentes**,**cada uno controla un aspecto diferente de la partícula (por ejemplo, su color, tamaño, velocidad, etc.).

**1.**En la Hierarchy, selecciona **Fire_ParticleSystem_Prefab** > **VFX_Sparks.** Observa que los únicos módulos habilitados actualmente en el Inspector son **Emission o Emisión**, **Shape (Forma)**y **Renderer (Renderizador)**.

[Image: image]

Los módulos Emission, Shape y Renderer están habilitados de forma predeterminada en todos los Sistemas de partículas; controlan la cantidad de partículas que se emiten, de dónde se emiten y cómo se ven, respectivamente. Puedes expandir un módulo si haces clic en su nombre.

**2.**Para hacer que las chispas cambien de color con el tiempo, habilita y expande el módulo **Color over Lifetime (Color durante ciclo de vida)**.

**3.**  Para hacer que las chispas cambien de tamaño con el tiempo, habilita y expande el módulo **Size over Lifetime** (Tamaño durante ciclo de vida).

**4.**Para hacer que las chispas vibren de forma aleatoria mientras flotan hacia arriba, habilita el módulo **Noise (Ruido)**.

Verás que estos cambios entran en vigencia de inmediato en la vista de Escena mientras se reproduce el efecto de partículas; no es necesario reiniciar el efecto.

[Image: image]

Al usar módulos adicionales, las chispas son mucho más dinámicas, con cambios de color, tamaño y dirección.

Ten en cuenta que estos módulos ya estaban preconfigurados con ajustes que tenían sentido para estas chispas. Aprenderás a trabajar con estos módulos en un tutorial posterior.

Marcar paso como completado

## 4. Explora: ¿Cómo jugar con fuego?

Q&A (0)

De seguro te dijeron desde pequeño que no jugaras con fuego. Bueno, olvídate de eso. Este fuego no puede hacerte daño.

**1.** Antes de comenzar a experimentar, selecciona el objeto **VFX_Fire** en la Hierarchy y **duplícalo** con **Ctrl**+**D** (Windows) o **Cmd**+**D** (macOS). Esto te permitirá experimentar sin miedo a perder los cambios realizados en la hoguera original.

[Image: image]

**2.**Experimenta con la configuración de los distintos módulos habilitados. No te preocupes si aún no entiendes exactamente lo que hace cada uno; lo veremos en los próximos tutoriales.

Estas son algunas cosas específicas que puedes probar al experimentar:

- Habilitar y deshabilitar los módulos para ver su efecto.
- Aumentar o reducir la propiedad **Rate Over Time (Tasa en el tiempo)** en el módulo Emission.
- Editar la propiedad **Color** en el módulo Color over Lifetime.

[Image: image]

A medida que realices cambios, es posible que debas presionar el botón **Restart** en el panel Particle System (Sistema de partículas) de nuevo para ver el efecto.

También puedes cambiar el color de la Luz de punto adjunta a tu fuego.

Cuando termines de experimentar, deja solo tu hoguera favorita activa en la Escena y marca las otras dos como inactivas en el Inspector.

Marcar paso como completado

## 5. Próximos pasos

Q&A (0)

En este tutorial, jugaste con un Sistema de partículas existente para entender cómo estaba configurado. A continuación, crearás un nuevo Sistema de partículas desde cero.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
