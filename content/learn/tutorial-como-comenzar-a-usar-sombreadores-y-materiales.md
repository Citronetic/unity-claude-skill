[Image: image]

# ¿Cómo comenzar a usar sombreadores y materiales?

Tutorial

Beginner

+10XP

15 mins

0

Unity Technologies

[Image: ¿Cómo comenzar a usar sombreadores y materiales?]Summary

Los sombreadores y materiales son a una escena en 3D lo que la pintura es a una obra de arte: son el medio para expresar el aspecto y la sensación artística de tus proyectos en 3D en tiempo real. En este tutorial, te familiarizarás con el proyecto de la galería de arte que usaremos en esta experiencia de aprendizaje.

Resources

- [CreativeCore_Shaders_U6.zip](https://unity-connect-prd.storage.googleapis.com/20241002/1fdc9ca5-e207-47ea-b16e-df8027bccd66/CreativeCore_Shaders_U6.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953066721)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Los sombreadores y materiales te permiten definir cómo se verán tus objetos en 3D: sus colores, reflectancia y textura física. Con los sombreadores y materiales, puedes dar realismo a tus proyectos o expresar tu propio estilo artístico.

En este tutorial y los siguientes, explorarás los sombreadores y materiales de nuestra galería de sombreadores y materiales, una exhibición de arte que demuestra todos los conceptos clave. Sin embargo, no solo serás un visitante de esta galería, serás un artista. Crearás nuevas obras originales para mostrarlas.

[Image: image]

En este tutorial, ingresarás a la galería y verás de primera mano lo que hacen los sombreadores.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

#### ¿No tienes experiencia con Unity?

Si no tienes experiencia con Unity, te damos la bienvenida. El [**trayecto de aprendizaje Aspectos básicos de Unity**](https://learn.unity.com/pathway/unity-essentials) está diseñado para prepararte para crear en el Editor de Unity. Te recomendamos completar este trayecto antes de continuar con la misión Habilidades básicas para creadores artísticos.

#### Actualiza el Unity Hub

Antes de empezar a configurar tu proyecto de Unity, considera la opción de actualizar el Unity Hub a la versión más reciente. Si utilizas una versión anterior, es posible que encuentres diferencias entre la orientación proporcionada y tu experiencia.

#### Revisa los fundamentos del Editor de Unity

Si necesitas repasar los fundamentos del Editor de Unity, puedes revisar el tutorial[**¿Cómo explorar el Editor de Unity?**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) en cualquier momento.

Marcar paso como completado

## 3. Te damos la bienvenida a Habilidades básicas para creadores artísticos: Sombreadores y materiales

Q&A (0)

#### ¿Cuál es el objetivo de Habilidades básicas para creadores artísticos: sombreadores y materiales?

El objetivo de esta experiencia de aprendizaje es presentarte los conceptos básicos que necesitarás para usar los sombreadores y materiales en Unity. Si conoces estos conceptos, podrás utilizar muchos de los sombreadores que se proporcionan con las plantillas de Unity y expresar tu visión artística mediante los objetos, los personajes y los entornos en 3D que crees. El conocimiento y las habilidades que desarrolles aquí te serán útiles tanto si eres un aficionado como si eres un aspirante a artista profesional en 3D.

#### ¿Qué haré en esta experiencia de aprendizaje?

En estos tutoriales, se te guiará por las propiedades de los sombreadores y materiales más utilizados, y los conceptos detrás de ellos. Aprenderás a expresar el color, la reflectancia, la suavidad, la transparencia, las variaciones de las superficies y otras propiedades de una superficie en 3D mediante el uso de sombreadores y materiales. En el proceso, crearás piezas para un proyecto de arte final, para así demostrar tus nuevas habilidades. También crearás tu propio sombreador con el **Shader Graph (Gráfico de sombreado)**, que te permite generar el código para un Script Shader con una interfaz gráfica.

#### ¿Cuáles serán mis resultados de aprendizaje?

Cuando termines, tendrás las habilidades para crear y configurar muchos sombreadores y materiales en Unity. También tendrás los recursos para explorar estos temas y ampliar más tus habilidades.

Podrás aplicar estas habilidades en el proyecto guiado que hayas elegido y en tu proyecto independiente (si estás completando el trayecto Habilidades básicas para creadores artísticos), o cualquier otro prototipo de experiencia en tiempo real creada con Unity.

Marcar paso como completado

## 4. Te damos la bienvenida a la galería

Q&A (0)

Ingresemos de inmediato a la galería de sombreadores y materiales. Para configurar tu proyecto de Unity, haz lo siguiente:

**1.** [Instala **Unity 6**](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f13) si aún no lo has hecho.

**2.** Descarga y descomprime [el proyecto](https://unity-connect-prd.storage.googleapis.com/20241002/1fdc9ca5-e207-47ea-b16e-df8027bccd66/CreativeCore_Shaders_U6.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953066721) de esta experiencia de aprendizaje.

**3.**  Mueve la carpeta del proyecto a una ubicación adecuada en tu computadora.

**4.** [Agrega el proyecto de Unity al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f15).

**5.**  Abre el proyecto desde el Unity Hub.

**6.** En la ventana Project (Proyecto) del Editor de Unity, abre la carpeta **Scenes (Escenas)**y abre la Escena **TutorialScene_Shaders**.

**7.**En la Hierarchy (Jerarquía), selecciona el GameObject **Banana**. Haz doble clic en Hierarchy o selecciona la vista de Escena y presiona la tecla F para orientar la vista dentro de la galería.

Mira a tu alrededor. Mantente en la vista de Escena: no hay controles para moverte en la vista de Juego. Observa cada obra de arte. Revisarás algunos de estos elementos como ejemplos y manipularás otros a medida que desarrolles las habilidades de un artista. Crearás una nueva composición de varias piezas individuales y trabajarás en el medio de sombreadores y materiales.

Marcar paso como completado

## 5. Tu obra de arte

Q&A (0)

Tu contribución a la galería de sombreadores y materiales será una composición de naturaleza muerta, como el ejemplo a continuación, «Naturaleza muerta con candelabro»:

[Image: image]

La tuya puede ser completamente diferente si usas objetos de este proyecto, otros proyectos o la [Tienda de recursos de Unity](http://assetstore.unity.com/).

En estos tutoriales, utilizarás sombreadores y materiales para hacer que objetos como estos se vean realistas y atractivos. Una vez que hayas adquirido estas habilidades, tendrás libertad artística para reunir tu propia colección de temas en tu composición final. Para crear tu trabajo, te hemos proporcionado una mesa de trabajo llena de objetos y un pedestal vacío para que muestres tu composición final.

[Image: image]

Antes de comenzar, estas son algunas maneras en que puedes configurar tu proyecto, si lo prefieres:

**1.** Verás algunos íconos que indican las funciones de iluminación sobre las que aprenderás en otras experiencias de aprendizaje de Habilidades básicas para creadores artísticos. Para ocultarlos, abre el menú desplegable **Gizmos (Dispositivos)**en la parte superior derecha de la ventana de la vista de Escena y ajusta **los íconos 3D** al valor más bajo. Mantén **los íconos 3D** habilitados.

**2.** Para ocultar o ver la malla, usa el alternador de la vista de malla en la parte superior de la barra de control de la vista de Escena. El ícono tiene una malla y una **Y** para el plano Y.

A continuación, analicemos algunos conceptos y tareas básicos para orientarte.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Has configurado tu proyecto de sombreadores y materiales. A continuación, analizaremos algunos conceptos básicos que proporcionarán los conocimientos necesarios para el uso de sombreadores y materiales.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
