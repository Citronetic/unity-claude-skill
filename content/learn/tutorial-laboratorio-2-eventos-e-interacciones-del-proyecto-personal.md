[Image: image]

# Laboratorio 2: Eventos e interacciones del proyecto personal

Tutorial

Beginner

+10XP

120 mins

2

(12)

Unity Technologies

[Image: Laboratorio 2: Eventos e interacciones del proyecto personal]SummarySkills

Al final de este laboratorio, tu proyecto personal tendrá la mayor parte de su funcionalidad básica.

En este laboratorio, aplicarás las habilidades aprendidas en las siguientes lecciones:

Audio & Haptics

Activation Events

Direct & Ray Interactors

User Interface

Este desafío forma parte del

curso: ¿Cómo crear con VR?

Languages available:

EspañolEnglishEspañolEspañol

## 1. Rellena el Design Document (Documento de diseño) para eventos e interacciones

Q&A (0)

Antes de continuar con el trabajo en tu proyecto, debes tener un plan sobre lo que vas a hacer. Continuarás el documento de diseño a fin de tener un plan de acción claro para este laboratorio.

**1.  Continúa donde te quedaste en tu documento de diseño:**

- Vuelve a abrir el documento que creaste durante el [Laboratorio 1](https://learn.unity.com/tutorial/lab-1-vr-personal-project-basics).

**2.  Rellena la sección 4 (Eventos e interacciones) del documento:**

- Determina si vas a utilizar interactores directos, interactores de rayo o ambos, incluida la forma de alternar entre ellos.
- Describe la respuesta táctil y sonora, así como cualquier otro sonido 3D que esperes que aparezca en tu Scene (Escena)
- Enumera la funcionalidad de activación de objetos específicos, donde si el usuario está sosteniendo un objeto y presiona el desencadenador, sucederá algo.
- Describe el menú principal de la aplicación, incluido lo que se puede hacer desde dicho menú.
- Si es pertinente, describe otros elementos de la interfaz de usuario en la Escena.

**3.  (Opcional) Agrega más detalles específicos al documento de diseño:**

- Rellena la sección 6 (Otras características).
- Rellena la sección 7 (Boceto).
- Rellena la sección 8 (Escala de tiempo).

Ahora, la sección 4 de tu documento de diseño debe estar completa y proporcionar una dirección clara para este laboratorio, en el que implementarás la funcionalidad básica de tu aplicación.

**Recursos relacionados:**

- [Documentación para desarrolladores de Oculus](https://developer.oculus.com/documentation/unity/)

Marcar paso como completado

## 2. ¿Cómo agregar tacto y audio?

Q&A (0)

Para todos los interactores configurados en nuestros controles, añade audio y respuesta táctil.

**1.  Añade una respuesta táctil a tus controles:**

- Sigue las instrucciones del [tutorial Audio y tacto](https://learn.unity.com/tutorial/2-1-audio-and-haptics).

**2.  Añade una respuesta sonora a tus controles:**

- Sigue las instrucciones del [tutorial Audio y tacto](https://learn.unity.com/tutorial/2-1-audio-and-haptics).

**3.  Añade una respuesta 3D o ambiental al entorno, incluido el uso de Reverb Zones (Zonas de reverberación):**

- Sigue las instrucciones del [tutorial Audio y tacto](https://learn.unity.com/tutorial/2-1-audio-and-haptics).

Ahora deberías experimentar la respuesta táctil o auditiva de los eventos deseados con tus controles. También debería haber sonido ambiental 3D en tu Escena.

Marcar paso como completado

## 3. ¿Cómo implementar interacciones basadas en eventos?

Q&A (0)

Si tienes planeada alguna interacción basada en eventos para tu aplicación (por ejemplo, cuando pulsas el desencadenador, cuando se carga la Escena, cuando inclinas un objeto, etc.), tómate el tiempo necesario para convertirlas en funcionales ahora.

**1.  Para añadir eventos de activación para determinados objetos de tu aplicación:**

- Sigue las instrucciones descritas en el [tutorial Eventos de activación](https://learn.unity.com/tutorial/2-2-activation-events).

**2.  Para añadir a la Escena una funcionalidad adicional basada en eventos:**

- Añade acciones a otros eventos de interacción como OnHoverEntered, OnSelectEntered, etc.
- Agrega nuevos eventos desde la **Course Library** > **Scripts** como OnButtonPress, OnSceneLoad, OnTilt, etc.

Ahora deberías tener implementada la funcionalidad principal basada en eventos en tu aplicación.

Marcar paso como completado

## 4. ¿Cómo configurar las capas y los interactores del control?

Q&A (0)

Si planeas usar una combinación de interactores directos y de rayo, tendrás que configurarlos para cada mano y, si fuera relevante, también la habilidad de alternar entre ellos.

**1.  Para implementar interactores para cada mano:**

- Sigue las instrucciones descritas en el [tutorial Interactores directos y de rayo](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors).

**2.  Para configurar las capas para que cada interactor solo pueda interactuar con elementos específicos:**

- Sigue las instrucciones descritas en el [tutorial Interactores directos y de rayo](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors).

Debes tener implementados los interactores apropiados para cada mano, incluida la capacidad de alternar entre ellos. Mediante el uso de capas, estos interactores solo deben poder interactuar con los objetos apropiados (es decir, las aberturas solo pueden contener objetos específicos, los rayos no pueden tomar ciertos objetos, etc).

Marcar paso como completado

## 5. ¿Cómo crear una interfaz de usuario del menú principal?

Q&A (0)

Una interfaz de usuario (UI) que casi todas las aplicaciones deberían tener es algún tipo de menú principal.

**1.  Crea una sencilla interfaz de usuario del menú principal:**

- Sigue las instrucciones del [tutorial Interfaz de usuario](https://learn.unity.com/tutorial/2-4-user-interface).

**2.  Para añadir una interfaz de usuario para la pantalla de reinicio:**

- Sigue las instrucciones del [tutorial Interfaz de usuario](https://learn.unity.com/tutorial/2-4-user-interface).

**3.  Para añadir una pantalla de interfaz de usuario adicional en el mundo:**

- Crea canvas adicionales en el espacio del mundo y muéstralos en contextos relevantes para el usuario.

Ahora deberías tener al menos una interfaz de usuario de menú principal en la que el usuario pueda hacer clic para salir, una pantalla de reinicio y cualquier otra interfaz de usuario adicional necesaria para la funcionalidad de tu aplicación.

Marcar paso como completado

## 6. Resumen

Q&A (0)

**Nueva funcionalidad:**

- Respuesta táctil y sonora
- Audio ambiental en 3D.
- Interacciones basadas en eventos, como la activación de objetos.
- Interactores directos y de rayos en los controles.
- Pantallas de interfaz de usuario del espacio mundial.

**Nuevos conceptos y habilidades:**

- Aplicación de interacciones más complejas en tu propia aplicación de VR.

**Siguiente laboratorio:**

- Optimization & Lighting

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
