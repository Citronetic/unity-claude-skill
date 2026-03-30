[Image: image]

# ¿Cómo comenzar a usar la animación?

Tutorial

Beginner

+10XP

20 mins

1

(14)

Unity Technologies

[Image: ¿Cómo comenzar a usar la animación?]Summary

En este tutorial, aprenderás sobre la función y las responsabilidades de los animadores y configurarás tu proyecto para comenzar a animar. Al finalizar este tutorial, podrás hacer lo siguiente:

- Definir los diferentes tipos de esquemas de animación y sus usos.

Resources

- [CreativeCore_Animation_U6.zip](https://unity-connect-prd.storage.googleapis.com/20241002/a0d81e3b-e469-4430-a682-58e28b1e385c/CreativeCore_Animation_U6.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953043267)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ya sea que se utilice como mecánica de jugabilidad, para contar una historia o como una forma de transición entre los paneles de la interfaz de usuario (UI), la animación es una parte importante para hacer realidad cualquier proyecto de Unity. Hay dos tipos principales de animación con los que trabajarás en Unity: las animaciones que importas desde otro programa y las que creas en el propio Editor. En este proyecto, aprenderás sobre ambas y cómo puedes aplicarlas a tus propios proyectos personales.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

#### ¿No tienes experiencia con Unity?

Si no tienes experiencia con Unity, te damos la bienvenida. El [**trayecto de aprendizaje Aspectos básicos de Unity**](https://learn.unity.com/pathway/unity-essentials) está diseñado para prepararte para crear en el Editor de Unity. Te recomendamos completar este trayecto antes de continuar con Habilidades básicas para creadores artísticos: Animación.

#### Actualiza el Unity Hub

Antes de empezar a configurar tu proyecto de Unity, considera la opción de actualizar el Unity Hub a la versión más reciente. Si utilizas una versión anterior, es posible que encuentres diferencias entre la orientación proporcionada y tu experiencia.

#### Revisa los fundamentos del Editor de Unity

Si necesitas repasar los fundamentos del Editor de Unity, puedes revisar el tutorial [**¿Cómo explorar el Editor de Unity?**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) en cualquier momento.

#### Configura tu proyecto de Unity

Para configurar tu proyecto de Unity, haz lo siguiente:

**1.** [Instala **Unity 6**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa) si aún no lo has hecho.

**2.** Descarga [el proyecto](https://unity-connect-prd.storage.googleapis.com/20241002/a0d81e3b-e469-4430-a682-58e28b1e385c/CreativeCore_Animation_U6.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953043267) de esta experiencia de aprendizaje.

**3.**  Identifica una ubicación adecuada en tu computadora y descomprime la carpeta del proyecto ahí. Elimina la carpeta del proyecto de Unity de su carpeta primaria vacía.

**4.**  [Agrega el proyecto de Unity al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f15).

**5.**  Abre el proyecto desde el Unity Hub.

**6.** En la ventana Project del Editor de Unity, busca la carpeta Scenes (Escenas) y luego abre la Escena **TutorialScene_Animation_Outdoor.**

**7.**Abre el Editor de animación. Para ello, dirígete al menú desplegable de la ventana y dirígete a **Animation**> **Animation.**

**8.** Arrastra el Editor de animación hacia abajo, al lado de la ventana Project, para acoplarlo en la mitad inferior del Editor.

[Image: image]

Tu proyecto ya está listo para usar.

Marcar paso como completado

## 3. Te damos la bienvenida a Habilidades básicas para creadores artísticos: Animación

Q&A (0)

#### ¿Cuál es el objetivo de Habilidades básicas para creadores artísticos: Animación?

El objetivo de esta experiencia de aprendizaje es presentarte las formas más comunes en que se usa la animación de Unity para varias experiencias interactivas. Podrás utilizar lo que aprendas aquí para aplicar la animación a tus propios proyectos, tanto si eres un aficionado como si eres un creador profesional en cualquier disciplina.

#### ¿Qué haré en esta experiencia de aprendizaje?

Al trabajar en estos tutoriales, crearás tus primeras animaciones en el Editor mediante los mismos ejercicios que se han usado para enseñar animación tradicional durante años. También aprenderás a integrar animaciones en experiencias interactivas al crear objetos que se animen de forma diferente, según la entrada de datos del usuario. Además de crear animaciones desde cero, también aprenderás a configurar y trabajar con animaciones importadas que se crearon en herramientas externas de creación de contenido digital, como Maya. Terminarás la experiencia con la creación de tu propia Escena animada.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### ¿Cuáles serán mis resultados de aprendizaje?

Al final de esta experiencia de aprendizaje, habrás trabajado con todos los principales componentes comunes involucrados en la creación de animaciones de Unity. Podrás implementar secuencias de animación básicas en tu proyecto.

Estarás listo para aplicar estas habilidades para animar el proyecto guiado que elegiste y tu proyecto independiente (si estás completando el trayecto Habilidades básicas para creadores artísticos), o cualquier otro prototipo de experiencia en tiempo real creada con Unity.

Marcar paso como completado

## 4. ¿Qué hace un animador de Unity?

Q&A (0)

#### Antecedentes

Los animadores de Unity son responsables de animar objetos para la experiencia interactiva, que van desde personajes y utilería hasta entornos e incluso interfaces. Prácticamente cualquier cosa en Unity se puede animar.

Por lo general, los objetos muy complicados o las animaciones más detalladas se crean en aplicaciones externas de creación de contenidos digitales (**Digital Content Creation**, DCC), como Autodesk Maya o Blender. Estas DCC tienen conjuntos de herramientas de animación sólidos para simplificar el proceso de creación para el animador. Por lo general, incluyen herramientas para crear **esquemas de animación** (la estructura esquelética subyacente para animar a los personajes), dinámicas como el cabello y el pelaje, las poses guardadas y más.

Es por esta razón que la animación en el Editor se guarda para objetos más simples o cuando la animación está vinculada a una Escena específica; por ejemplo, una plataforma que se mueve entre dos puntos en un nivel de juego. Es extremadamente común que las animaciones creadas externa e internamente se utilicen en el mismo proyecto.

Tómate un momento para escuchar a algunos de nuestros creadores sobre el tipo de actitud que necesitas para ser un animador de Unity exitoso:

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### Responsabilidades

Al igual que otras funciones, lo que hace un animador de Unity depende en gran medida del equipo en que se encuentre. Puede pasar gran parte de su tiempo trabajando fuera de Unity en otros programas o trabajando por completo en Unity.

Según el equipo, un animador de Unity debe estar familiarizado con la importación y configuración de animaciones en el Editor, e incluso puede necesitar saber cómo configurar los Controladores del animador, que son los componentes que determinan cuando una animación hace transición a otra. Por estas razones, es útil que un animador tenga un gran conocimiento de todos los componentes de animación de Unity, y puede ser especialmente útil para ellos tener también algunos conocimientos básicos de creación de scripts. Es menos probable que un animador necesite escribir scripts para hacer que sus animaciones se ejecuten, pero a menudo implementará scripts creados para ellas por los programadores del equipo.

#### Herramientas

Además de Unity, los animadores suelen utilizar otro software para producir animaciones, el cual puede incluir las siguientes herramientas:

- [Autodesk Maya](https://www.autodesk.com/products/maya/features): Considerado durante mucho tiempo el estándar de la industria para la creación de animación en cine, televisión, funciones animadas y juegos. Maya es una sólida herramienta de creación de arte digital que también puede utilizarse para muchos fines además de la animación, como la generación de modelos y los efectos visuales.
- [Autodesk 3ds Max](https://www.autodesk.com/products/3ds-max/overview): Al igual que Maya, 3ds Max es una herramienta de creación de arte digital multifuncional, e históricamente fue el software elegido por la industria de los juegos.
- [Blender](https://www.blender.org/): Completamente gratuito y de código abierto, Blender ha sido durante mucho tiempo una opción popular para los creadores de la comunidad independiente, pero también está empezando a ganar terreno en los mercados profesionales. Al igual que Max y Maya, Blender es una herramienta multiusos que cuenta con una sólida colección de herramientas de animación.

Marcar paso como completado

## 5. ¿Por qué es importante la animación?

Q&A (0)

A veces, se hace referencia a la animación como la ilusión de la vida. Los seres vivos tienen energía y esto a menudo se traduce en alguna forma de movimiento controlado. Los pájaros vuelan, la gente baila, los guepardos corren... y se pueden recrear todas estas acciones digitalmente mediante el uso de animación.

La animación no es necesariamente solo movimiento, ya que el movimiento se puede lograr a través de otros métodos, como el uso de la física. Una roca que cae al suelo no necesita animación para llegar del punto A al punto B; un sistema físico puede calcular matemáticamente la fuerza gravitacional para lograr ese objetivo. Es en el movimiento con intención donde la animación entra en juego: la física no puede simular el proceso de una persona que camina.

Mira el video a continuación para aprender sobre la importancia de la animación de la mano de los creadores de la industria hoy.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

En este tutorial, configuraste tu proyecto y aprendiste sobre la función que desempeña un animador en una producción. En el siguiente tutorial, crearás tu primera animación en 3D.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
