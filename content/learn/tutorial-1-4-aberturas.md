[Image: image]

# 1.4: Aberturas

Tutorial

Beginner

+10XP

90 mins

1

(78)

Unity Technologies

[Image: 1.4: Aberturas]SummarySkills

En esta lección, aprenderás cómo configurar aberturas en las que se pueden encajar objetos en VR (Realidad virtual). Al finalizar esta lección, sabrás cómo colgar sombreros en ganchos, ¡e incluso podrás ponértelos!

Esta lección forma parte del

curso ¿Cómo crear con VR?

.

Languages available:

EspañolEnglishEspañolEspañol

## 1. ¿Cómo agregar a la Escena sombreros que se pueden tomar?

Q&A (0)

Antes de hacer un gancho funcional para los sombreros, primero necesitamos algunos sombreros que se puedan tomar.

**1.   Agrega algunos sombreros a tu Escena:**

- Abre la carpeta **Course Library**>**Prefabs**>**Objects**> **Hats**.
- Arrastra dos sombreros que te gusten hacia una superficie que esté cerca del espejo.
- **Nota:** Si aún no tienes un conjunto de ganchos en tu Escena, dirígete a la carpeta **Course Library** > **Prefabs** > **Hooks** y agrega uno.

**2.  Haz que los sombreros obedezcan las leyes de la física:**

- Utiliza las teclas Ctrl o Cmd para seleccionar ambos sombreros en la Hierarchy (Jerarquía).
- Agrega componentes Rigidbody a los objetos de sombrero que seleccionaste.
- En la propiedad Collision Detection (Detección de colisiones), elige **Continuous Dynamic (Dinámica continua)** para evitar que los objetos caigan a través del suelo.

**3.  Haz que los sombreros se puedan tomar:**

- Agrega componentes XR Grab Interactable (XR Grab con el que se puede interactuar) a cada sombrero.
- Si lo deseas, habilita las propiedades **Smooth Position (Posición suave)** y **Smooth Rotation (Rotación suave)** para reducir la vibración.

**4.  Prepárate para hacer pruebas:**

- Reubica y reorienta el **XR Rig (Rig de XR)** para que esté frente al espejo, cerca de los ganchos y los sombreros.

[Image: image]

Ahora, deberías poder tomar correctamente los sombreros.

Marcar paso como completado

## 2. ¿Cómo convertir el gancho en una abertura simple?

Q&A (0)

Para poder colgar el sombrero en un gancho, el gancho debe comportarse como una abertura.

**1.  Coloca la abertura en la posición correcta:**

- En la Hierarchy, haz clic derecho en el objeto **Hook (Gancho)**y crea un objeto secundario**Empty (Vacío)**.
- Cambia el nombre del objeto secundario a «Socket 1».
- Mueve el objeto **Socket 1 (Abertura 1)** hacia la punta del gancho, que será el soporte para el sombrero.

**2.  Define el área de detección del Trigger (Desencadenador) para la abertura:**

- Agrega un componente Sphere Collider (Colisionador de esfera) al objeto Socket 1.
- Haz clic en el botón **Edit Collider (Editar colisionador)** y reduce el **Radius (Radio)** a 0.1.
- Marca la casilla **Is Trigger**para evitar que colisione con el sombrero.

**3.  Haz que el objeto Socket 1 se comporte como una abertura:**

- Agrega un componente XR Socket Interactor (Interactor de abertura de XR) al objeto.

**4.  Haz que el sombrero apunte hacia abajo cuando esté unido a la abertura:**

- Crea un objeto secundario Empty de Socket 1 y  cambia su nombre a «Attach».
- Gira el objeto Attach (Unir) hasta que esté orientado hacia abajo.
- Asigna el objeto Attach a la propiedad **Attach Transform (Transform de unión)**del componente Socket Interactor.
- **Nota:** El eje Z local del punto de unión debe estar alineado con la dirección hacia adelante del sombrero, y el eje Y local debe estar alineado con la dirección hacia arriba del sombrero.

[Image: image]

Ahora, deberías poder tomar cualquiera de tus sombreros y colocarlo en la abertura que configuraste.

Marcar paso como completado

## 3. ¿Cómo duplicar las aberturas y unir los sombreros de forma predeterminada?

Q&A (0)

Ahora que tienes una abertura totalmente funcional, puedes duplicarla para las demás ubicaciones donde se pueden colgar sombreros en los ganchos y hacer que los sombreros aparezcan sobre los ganchos cuando se carga la Escena.

**1.  Crea aberturas para todas las ubicaciones donde se pueden colgar los sombreros:**

- En la Hierarchy, duplica el objeto Socket 1 dos veces.
- Cambia el nombre de los objetos copiados a «Socket 2» y «Socket 3».
- Reubica las aberturas que copiaste hacia las otras dos ubicaciones donde se pueden colgar sombreros en los ganchos.

**2.  Haz que tus sombreros aparezcan sobre los ganchos de forma predeterminada:**

- En cada uno de los componentes XR Socket Interactor de los objetos de abertura, asigna uno de tus sombreros a la propiedad **Starting Selected Interactable (Objeto con el que se puede interactuar seleccionado al inicio)**.
- **Nota:** Si solo tienes dos sombreros, una de las aberturas debe tener el valor «None» en la propiedad Starting Interactable.

[Image: image]

Ahora, tus tres aberturas deberían ser totalmente funcionales y los sombreros deberían aparecer sobre los ganchos al principio de la Escena.

Marcar paso como completado

## 4. ¿Cómo convertir tu cabeza en una abertura para los sombreros?

Q&A (0)

Para que los sombreros y el espejo sean útiles, debes poder ponerte los sombreros en la cabeza.

**1.  Coloca el objeto de abertura de la cabeza en la posición correcta:**

- En la Hierarchy,  haz clic derecho en **XR Rig**>**Camera Offset**>**Main Camera**y crea un objeto secundario **Empty**.
- Cambia el nombre de este nuevo objeto secundario a «Socket»
- Cambia el valor de **Y** **Position (Posición en el eje Y)** del objeto Socket a 0.1 para que el sombrero aparezca sobre tus ojos.

**2.  Agrega un área de detección del Trigger para la abertura:**

- Agrega un componente Sphere Collider al objeto **Socket**.
- Haz clic en el botón **Edit Collider** y cambia el valor de la propiedad **Radius**a 0.2.
- Marca la casilla **Is Trigger**.

**3.  Permite que los sombreros se encajen en esta abertura:**

- Agrega un componente XR Socket Interactor**.**

[Image: image]

Ahora, deberías poder ponerte los sombreros en la cabeza y verte en el espejo.

Marcar paso como completado

## 5. ¿Cómo evitar que otros objetos se comporten como sombreros?

Q&A (0)

Por ahora, puedes ponerte todos los objetos en la cabeza o colocarlos en los ganchos como si fueran sombreros. Puedes utilizar Interaction Layers (Capas de interacción) para controlar cuáles objetos pueden o no pueden interactuar entre sí.

**1.  Agrega una nueva Layer (Capa) con el nombre «Hats» para los sombreros:**

- Selecciona un objeto de sombrero.
- En el componente XR Grabbable Interactable, en el menú desplegable **Interaction Layer Mask (Máscara de capa de interacción)**, selecciona Add Layer, o Agregar capa.
- Agrega una nueva capa con el nombre «Hats» en el primer espacio vacío disponible.
- **Nota:** Tu sombrero aún no estará asignado a esa capa. Hasta este momento, solo has creado la capa.

**2.  Coloca los sombreros en tu nueva capa «Hats»:**

- En la Hierarchy, selecciona todos tus objetos **Hat** con Ctrl/Cmd + Clic.
- En el componente XR Grab Interactable, en el menú desplegable **Interaction Layer Mask**, selecciona **Nothing (Nada)**para limpiar las capas.
- En el menú desplegable, selecciona tu nueva capa **Hats** para habilitar únicamente esa capa.

**3.  Asegúrate de que las aberturas de los ganchos y la cabeza solo puedan interactuar con los objetos asignados a la capa «Hats»:**

- En la propiedad **Interaction Layer Mask** de todos los objetos de abertura de los ganchos y la cabeza, elige únicamente la capa **Hats**.

**4.  Asegúrate de que otros objetos no se puedan usar como sombreros:**

- Selecciona todos los demás objetos que se pueden tomar.
- En el menú desplegable **Interaction Layer Mask**, asegúrate de que la capa **Default (Predeterminada)** sea la única que esté habilitada.
- Al hacer esto, evitarás que los objetos interactúen con las aberturas asignadas a la capa **Hats**.

[Image: image][Image: image][Image: image]

Ahora, solo deberías poder colocar los sombreros (y ningún otro objeto que se puede tomar) sobre tu cabeza y sobre los ganchos.

Marcar paso como completado

## 6. Resumen

Q&A (0)

**Nuevas características:**

- Se agregaron los sombreros
- Puedes colgar los sombreros en los ganchos
- Puedes ponerte los sombreros en la cabeza

**Nuevos conceptos y habilidades**

- Interactores de aberturas
- Triggers para detectar la interacción
- Interaction Layer Masks

**Siguiente lección:**

- Audio y háptica

Marcar paso como completado

## 7. Extensiones

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Agrega obras de arte que se puedan reubicar [Medio]**

Permite que el usuario cambie la posición de las obras de arte colgadas en la pared:

- Para hacer un gancho sencillo, crea un objeto vacío con un componente Socket Interactor, y luego crea un objeto secundario de cubo primitivo, con su tamaño modificado y girado adecuadamente para representar la malla.
- Para hacer que las obras de arte aparezcan a la altura adecuada, tal vez debas agregar un Attach Transform en la posición del marco donde se debería colgar.

**2.  Agrega libros que se puedan reubicar [Difícil]**

Agrega libros en un estante que se puedan reacomodar perfectamente en cualquier orden que elija el usuario:

- Para hacer que los libros aparezcan con la orientación que deseas, intenta crear un objeto Empty con la orientación correcta y luego convertir el objeto de libro en un objeto secundario.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
