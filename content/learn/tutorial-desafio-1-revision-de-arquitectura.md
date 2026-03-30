[Image: image]

# Desafío 1: Revisión de arquitectura

Tutorial

Beginner

+10XP

60 mins

1

(39)

Unity Technologies

[Image: Desafío 1: Revisión de arquitectura]SummarySkills

En este desafío, aplicarás las habilidades que obtuviste al crear tu espacio de VR en una aplicación de revisión de arquitectura. En este prototipo, el usuario puede examinar un edificio a escala real, revisar un modelo 3D miniatura y un plano del edificio, e incluso utilizar una barra de medir para tomar medidas durante su recorrido.

Este desafío sirve para evaluar las habilidades aprendidas en las siguientes lecciones:

Traslado en VR

Objetos que se pueden tomar

Aberturas

Este desafío forma parte del

curso: ¿Cómo crear con VR?

.

Languages available:

EspañolEnglishEspañolEspañol

## 1. Descripción paso a paso del desafío

Q&A (0)Marcar paso como completado

## 2. ¿Cómo empezar?

Q&A (0)

**1.  Abre la Scene (Escena) del prototipo de revisión de arquitectura que no funciona:**

- En la ventana **Project (Proyecto)**, expande **Assets** > **Challenges** > **01_Architecture** > **Scenes**
- Haz doble clic en la Escena **Architecture_Prototype_Broken** para abrirla.

**2.  Comienza a trabajar en las tareas del desafío:**

- Realiza las tareas descritas en los siguientes pasos.
- Si deseas expandir aún más tus habilidades, intenta completar también las tareas opcionales del desafío adicional.
- Si sientes que no puedes avanzar, puedes utilizar las pistas para cada tarea que aparezca en la parte inferior de la página.

Marcar paso como completado

## 3. Tareas del desafío

Q&A (0)

**1.  La barra de medir y el portapapeles no se están uniendo adecuadamente a la muñeca izquierda.**

- El portapapeles debería estar volteado y la barra de medir debería encajarse en el punto que está a la izquierda del portapapeles.

**2.  El modelo de la casa se encaja al pedestal desde muy lejos.**

- El modelo de la casa se debería encajar al pedestal cuando lo colocas sobre el pedestal.

**3.  Actualmente, puedes encajar la barra de medir y el portapapeles en el pedestal, y el modelo de la casa en la muñeca izquierda.**

- El modelo de la casa solo debería poder colocarse en el pedestal, mientras que el portapapeles y la barra de medir solo deberían poder encajarse en la muñeca.

**4.  La mesa del comedor es demasiado alta.**

- La mesa debería medir exactamente 0.74 metros (o 29 pulgadas) de altura.

**5.  El Anchor (Delimitador) de teletransportación ubicado junto al pedestal hace que el jugador se ponga de cabeza y se oriente hacia el lado opuesto del pedestal.**

- Al teletransportarse hacia este lugar, el jugador debería aparecer en una posición normal y orientado hacia el pedestal.

Marcar paso como completado

## 4. Tareas adicionales

Q&A (0)

**6.  El rayo de la mano derecha tiene todos los ajustes predeterminados.**

- Cambia la forma del rayo a una curva de Bézier fluida para hacer que la teletransportación sea más sencilla, y edita los colores válidos y no válidos para que se desvanezcan de transparente a opaco.

**7.  La Escena debe tener algún tipo de sonido ambiental.**

- Agrega un sonido ambiental de viento en el fondo y sonidos de aves aleatorios que parezcan provenir de diferentes ubicaciones alrededor de la casa.

Marcar paso como completado

## 5. Pistas

Q&A (0)

**Pistas de la tarea principal:**

**1.**Fíjate en la posición y la rotación de los Attach Transforms (Transforms de unión) para las aberturas de tu mano izquierda.

**2.** Fíjate en el tamaño del Sphere Collider (Colisionador de esfera) en la abertura del pedestal.

**3.**Fíjate en las Layer Masks (Máscaras de capas) de las aberturas y los objetos que se pueden tomar.

**4.**Intenta crear una barra de medir que tenga la altura exacta requerida y colocarla junto a la mesa.

**5.**Fíjate en la orientación local del Anchor y en la configuración Match Orientation (Orientación de emparejamiento) de su componente Teleportation Anchor o Delimitador de teletransportación.

**Pistas de la tarea adicional:**

**6.**Revisa el componente XR Ray Interactor para editar la forma de la línea, y revisa el componente XR Interactor Line Visual para editar sus colores.

**7.**Asegúrate de que tu Audio Source (Fuente de audio) esté configurada con la opción Spatial Blend (Mezcla espacial) en 3D y, si lo deseas, utiliza los componentes OnTimedInterval y PlaySoundsFromList para hacer que los sonidos de aves se reproduzcan de forma aleatoria.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
