[Image: image]

# Deploy your project to iOS or Android spanish

Tutorial

Beginner

+10XP

45 mins

2

(120)

Unity Technologies

[Image: Deploy your project to iOS or Android spanish]Summary

Si pruebas tus aplicaciones de AR (Realidad aumentada) en un dispositivo móvil, el proceso es mucho más emocionante e informativo que si lo haces en el Editor de Unity.

En este tutorial, implementarás tu proyecto de AR en un dispositivo iOS o Android. Al terminar, podrás ver un cubo giratorio en el entorno por medio de la cámara del dispositivo.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Si pruebas tus aplicaciones de AR (Realidad aumentada) en un dispositivo móvil, el proceso es mucho más emocionante e informativo que si lo haces en el Editor de Unity.

En este tutorial, implementarás tu proyecto de AR en un dispositivo iOS o Android. Al terminar, podrás ver un cubo giratorio en el entorno por medio de la cámara del dispositivo. Además de que se verá genial, podrás asegurarte de que el software y tu proyecto estén configurados correctamente para el desarrollo de AR.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:04Loaded: 0%0:00Remaining Time -0:041xPlayback Rate

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

El proceso para crear e implementar aplicaciones varía según el sistema operativo en el que se vayan a publicar (iOS o Android). Por eso, este tutorial está dividido en dos secciones: la primera mitad es para iOS y la segunda es para Android. Para evitar confusiones, cada paso también incluirá las etiquetas [iOS] o [Android].

Si deseas implementar la aplicación en iOS, ve al siguiente paso. Si deseas implementar la aplicación en Android, pasa a la [sección de Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) y continúa desde ahí.

Marcar paso como completado

## 2. ¿Cómo habilitar el complemento de XR llamado ARKit? [iOS]

Q&A (0)

El proyecto ya está configurado para AR a nivel general. Ahora, debes configurarlo para que sea compatible con iOS. Para esto, debes instalar [**ARKit**](https://developer.apple.com/documentation/arkit/), que es el marco de AR de Apple. El paquete equivalente para los dispositivos Android se llama [**ARCore**](https://developers.google.com/ar/develop).

ARKit es la interfaz de programación de aplicaciones (API) que proporciona acceso a las cámaras, los sensores y los demás componentes de hardware que permiten ejecutar experiencias de AR en dispositivos iOS.

Sigue estas instrucciones para instalar ARKit en tu proyecto:

**1.**En el menú principal, selecciona **Edit**> **Project Settings** y luego selecciona **XR Plug-in Management (Administración de complementos de XR)** en el panel izquierdo.

**2.**Selecciona la pestaña **iOS**en el panel de **XR Plug-in Management**.

**3.**Revisa la lista de proveedores de complementos y asegúrate de que **ARKit**esté habilitado.

[Image: image]Marcar paso como completado

## 3. ¿Cómo asignar un identificador único a la aplicación? [iOS]

Q&A (0)

Para poder implementar un proyecto en un dispositivo iOS, la aplicación debe tener un identificador único. Para los proyectos de iOS, este se conoce como identificador de paquete (y cada proyecto debe tener un identificador único). Este **identificador** es una combinación de un nombre de empresa y un nombre de producto. Aunque no tengas una empresa en este momento, debes asignar un nombre de empresa a tu proyecto para poder crear correctamente la aplicación.

Sigue estos pasos para asignar un identificador de paquete único:

**1.**  En el menú principal del Editor de Unity, ve a **Edit** > **Project Settings**.

**2.**  En la barra lateral de navegación ubicada del lado izquierdo de la ventana Project Settings, selecciona **Player (Reproductor)**.

**3.**  En la propiedad **Company Name (Nombre de la empresa)**, agrega el nombre personalizado que desees.

**Importante**: el identificador no puede incluir espacios ni caracteres especiales. Solo puedes usar letras mayúsculas y minúsculas. Si incluyes caracteres especiales, no se podrá crear la aplicación.

**4.** Si lo deseas, modifica la propiedad **Product Name (Nombre del producto)** y agrega el nombre personalizado que desees. Si ya escribiste un nombre de empresa único, este paso no es obligatorio.

[Image: image]

**5.**Desplázate hacia abajo en el panel **Player**y busca la sección **Identification (Identificación)**. Como puedes ver, el campo **Bundle Identifier (Identificador de paquete)** se llena automáticamente con el valor**com.CompanyName.ProductName**.

[Image: image]

**6.**Asegúrate de que el **identificador de paquete** único no incluya espacios ni caracteres especiales antes de continuar.

Marcar paso como completado

## 4. ¿Cómo configurar los ajustes de creación? [iOS]

Q&A (0)

Antes de crear tu proyecto, debes completar algunos pasos más. Sigue estas instrucciones para configurar los ajustes de creación:

**1.**En el menú principal, selecciona **File** > **Build Settings**.

**2.**Selecciona **Add Open Scenes (Agregar Escenas abiertas)** para asegurarte de que se incluya la Scene (Escena) que tienes abierta.

**3.**En el panel **Platform (Plataforma)**, selecciona **iOS** y luego selecciona **Switch Platform (Cambiar plataforma).**Este proceso puede tardar un poco.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear y ejecutar en Xcode? [iOS]

Q&A (0)

En el tutorial anterior, se te pidió que descargaras Xcode, el entorno de desarrollo integrado (IDE) personalizado de Apple. Si aún no lo haces, o si la descarga sigue en curso, deberás esperar hasta que se complete este paso para continuar.

Cuando seleccionas **Build and Run (Crear y ejecutar)** para implementar un proyecto de Unity en un dispositivo iOS, se inicia el siguiente proceso de tres pasos:

1. Se crea un nuevo proyecto de Xcode (es decir, un archivo **.xcodeproj** con todos sus archivos complementarios).
2. Xcode abre automáticamente el nuevo proyecto.
3. Xcode ejecuta automáticamente el proyecto en un dispositivo objetivo conectado.

La primera vez que intentes realizar este proceso, se presentarán varios problemas que evitarán que se complete el tercer paso. A continuación, seguirás los pasos y resolverás todos los problemas esperados durante el proceso:

**1.**Abre una ventana de Finder, ve a la carpeta **Aplicaciones** y haz doble clic en **Xcode** para abrirlo. Cuando hagas esto, deberías ver la ventana de bienvenida de Xcode.

**2.**Conecta el dispositivo iOS objetivo a la computadora con un cable y desbloquea la pantalla del dispositivo.

**3.**En el menú Build Settings de Unity, selecciona **Build and Run**. Finder mostrará el contenido de la carpeta principal del proyecto.

**4.**Crea una nueva carpeta llamada «Builds» para guardar todas las versiones de este proyecto, luego crea otra carpeta en su interior llamada «AR Template» para guardar esta versión y selecciona **Choose (Elegir)**.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:23Loaded: 12.23%0:00Remaining Time -0:231xPlayback Rate

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

**5.**Cuando termine el proceso de creación, Xcode se abrirá automáticamente en una pantalla casi vacía y mostrará un ícono de error en una esquina.

[Image: image]Marcar paso como completado

## 6. ¿Cómo familiarizarte con Xcode? [iOS]

Q&A (0)

Si esta es la primera vez que utilizas Xcode, puede parecerte abrumador. Ahora, dedicarás unos minutos a explorar la interfaz y familiarizarte con ella. Si ya tienes experiencia con Xcode, puedes omitir este paso.

Sigue estos pasos para explorar tu proyecto en Xcode:

**1.**En la parte superior del área de navegación de la barra lateral izquierda, selecciona **Unity-iPhone**. Este es el nombre del proyecto de Xcode generado automáticamente en Unity.

**2.** Verás que el área del editor (en el centro) y el área del inspector (en la barra lateral derecha) ahora están llenas de opciones e información.

**3.**Explora las pestañas ubicadas en la parte superior del área del editor (General, Signing & Capabilities o Firmas y capacidades, etc.) y revisa las opciones disponibles en cada una.

La mayoría de las opciones de configuración disponibles en este proyecto son muy técnicas y probablemente te resultarán desconocidas, pero no tienes que preocuparte mucho por ellas. Sin embargo, mientras exploras el proyecto, intenta identificar la causa de los errores. Busca los términos que te resulten familiares, como la configuración de orientación, las versiones de iOS o los íconos de aplicaciones.

[Image: image]

Al explorar Xcode, probablemente notarás que su interfaz es parecida a la de Unity. Tal vez te resulte más fácil utilizar Xcode si tomas en cuenta las siguientes similitudes:

- El panel izquierdo es el **área de navegación**, donde puedes seleccionar los archivos que desees editar, como lo harías en la ventana Hierarchy (Jerarquía) de Unity.
- El espacio grande del centro es el **área del editor**, donde harás la mayor parte del trabajo, al igual que en la vista de Escena de Unity.
- El panel derecho es el **área del inspector**, donde puedes editar las propiedades de un archivo en particular... ¡al igual que en la ventana Inspector de Unity!

Si lo deseas, puedes obtener más información sobre la interfaz en la [documentación oficial de Xcode](https://developer.apple.com/documentation/xcode/configuring-the-xcode-project-window).

Marcar paso como completado

## 7. ¿Cómo resolver los errores de Xcode? [iOS]

Q&A (0)

Ahora que tienes un mayor dominio de Xcode, puedes resolver los errores esperados.

Los errores de este proyecto no tienen nada que ver con la funcionalidad de la aplicación. Todos están relacionados con las firmas. La **firma** de la aplicación es como la firma que pones al final de un documento: sirve para indicar a Xcode que tú creaste la aplicación y te haces responsable de ella. Si no incluyes toda la información de firmas correspondiente, se generarán errores y Xcode se negará a implementar la aplicación en el dispositivo.

Sigue estos pasos para revisar y resolver el problema:

**1.** Selecciona la pestaña **Signing & Capabilities** en el área del editor.

[Image: image]

**2.**  Revisa los cuatro campos que aparecen en la pestaña Signing & Capabilities. Estos campos se deben configurar correctamente para resolver los errores y ejecutar la aplicación:

- **Team (Equipo)**: la persona o empresa responsable de la aplicación.
- **Bundle Identifier**: el identificador único del proyecto.
- **Provisioning Profile (Perfil de aprovisionamiento)**: un elemento que se instala en un dispositivo a fin de poder utilizarlo para probar aplicaciones.
- **Signing Certificate (Certificado de firma)**: el permiso que Apple te otorga para desarrollar aplicaciones dirigidas a sus dispositivos.

Si todo esto te parece abrumador, no te preocupes: te ayudaremos con todos los pasos necesarios.

**3.**  Marca la casilla de selección **Automatically manage signing (Administrar automáticamente las firmas)**y luego selecciona **Enable Automatic (Habilitar proceso automático)**cuando se te indique. Esta opción permite que Xcode configure automáticamente todo lo necesario.

[Image: image]

**4.**  Ahora, debes asignar un **equipo**. El error en inglés dice «Signing for "Unity-iPhone" requires a development team», lo que significa que debes asignar un equipo para poder firmar el proyecto. Selecciona **Add Account (Agregar cuenta)** junto al campo Team. Aparecerá una nueva ventana titulada Accounts (Cuentas) y se te pedirá que inicies sesión con tu ID de Apple y contraseña. Cuando hagas esto, iniciarás sesión en Xcode con tu ID de Apple. Puedes cerrar la ventana Accounts después de iniciar sesión.

[Image: image]

**5.**En el nuevo menú desplegable **Team**, que actualmente tiene seleccionada la opción **None (Ninguno)**, selecciona **Your Name (Personal Team) o Tu nombre, equipo personal**.

**6.**Asegúrate de que hayan desaparecido todos los errores en la ventana Signing & Capabilities.

[Image: image]Marcar paso como completado

## 8. ¿Cómo ejecutar la aplicación en el dispositivo? [iOS]

Q&A (0)

Después de resolver todos los errores relacionados con las firmas, tendrás todo listo para implementar y probar la aplicación en el dispositivo. Para hacerlo, sigue estos pasos:

**1.**Asegúrate de que el dispositivo esté conectado y tenga la pantalla desbloqueada.

**2.**En la barra de herramientas de la parte superior, elige el dispositivo iOS conectado como destino para la ejecución.

[Image: image]

**3.**Selecciona el botón de reproducción ubicado en la parte superior de Xcode (o presiona Cmd + R) para ejecutar el proyecto.

[Image: image]

**4.**Monitorea el progreso de la creación en la barra de herramientas y espera a que la aplicación se ejecute en el dispositivo.

[Image: image]

**5.**Si se te pide que permitas que codesign acceda al certificado de desarrollo de Apple, escribe la contraseña de la computadora y selecciona **Permitir siempre.**

[Image: image]

**6.**  Mientras se crea la aplicación, aparecerán muchas advertencias en el área de navegación de Xcode. Estas solo son relevantes cuando quieres enviar la aplicación a App Store (tienen que ver con el ícono de la aplicación, la localización y otras opciones de distribución). Puedes ignorarlas por ahora.

[Image: image]

**7.**Tu dispositivo móvil podría mostrar una advertencia de que la aplicación no se puede abrir (porque no proviene de un desarrollador de confianza). En el dispositivo, ve a **Configuración** > **General** > **VPN y administración de dispositivos**. En la sección Aplicación del desarrollador, selecciona la aplicación **Desarrollo de Apple: [tu ID de Apple]** y luego selecciona **Confiar**.

[Image: image]

**Nota:**  si la red a la que te conectaste tiene una configuración de seguridad estricta, el dispositivo podría tener problemas para conectarse a los servidores de Apple a fin de validar el nivel de confianza de tu certificado de desarrollador. Tal vez debas conectarte a otra red o usar datos móviles para completar este paso.

**8.**  Vuelve a ejecutar el dispositivo en Xcode. Cuando la aplicación se abra en el dispositivo, toma el dispositivo y apunta la cámara hacia el entorno.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:16Loaded: 0.00%0:00Remaining Time -0:161xPlayback Rate

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

Antes de orientar el dispositivo, toma en cuenta que el cubo giratorio se generará directamente enfrente, en la dirección hacia donde apunte la cámara en el momento en que se ejecute la aplicación. El cubo no se mantendrá fijo en el mismo lugar, pero debería permanecer en una misma área aproximada del espacio donde te encuentres.

**9.**Cuando termines de probar la aplicación, selecciona **Stop (Detener)** en Xcode para cerrar completamente la aplicación. También puedes deslizar el dedo hacia arriba desde la parte inferior de la pantalla, mantener pulsado y soltar. Luego, desliza la aplicación hacia arriba para cerrarla por completo.

**Importante**: asegúrate de detener o cerrar la aplicación en lugar de solo minimizarla. Si únicamente minimizas la aplicación, se mantendrá en ejecución en segundo plano y los cambios que realices en Unity podrían no crearse en el dispositivo.

¡Felicitaciones! Implementaste correctamente un proyecto de AR en el dispositivo iOS.

Marcar paso como completado

## 9. ¿Cómo configurar las preferencias relacionadas con las firmas en Unity? [iOS]

Q&A (0)

Al desarrollar tus aplicaciones, las crearás varias veces con Xcode, por lo que debes asegurarte de que este proceso sea lo más eficiente posible. Si volvieras a crear la aplicación en este momento, tendrías que repetir los pasos anteriores para resolver los errores relacionados con las firmas.

Afortunadamente, puedes preconfigurar tus preferencias relacionadas con las firmas en Unity para evitar que esos errores aparezcan en Xcode.

**Nota**: durante este proceso, es probable que aparezca varias veces una ventana de Acceso a Llaveros para pedirte que escribas la contraseña de la computadora. Este es un comportamiento normal.

Sigue estos pasos para configurar tus preferencias relacionadas con las firmas en Unity:

**1.**En la computadora, utiliza la función de búsqueda de Spotlight para abrir la aplicación Acceso a Llaveros.

**2.**En la barra lateral izquierda, selecciona el filtro de **inicio de sesión** y luego, en las pestañas ubicadas en la parte superior, selecciona **Mis certificados**. De esta manera, se debería mostrar el certificado de desarrollo de Apple que Xcode generó automáticamente.

[Image: image]

**3.**Haz doble clic en el certificado para abrirlo, busca la propiedad Unidad organizacional, selecciónala y copia el ID asociado con ella. Deberás pegar este valor más adelante.

[Image: image]

**4.** En Unity, presiona Cmd + Coma (,) para abrir la ventana de diálogo Preferences (Preferencias) de Unity.

**5.**En la barra de navegación lateral, selecciona **External Tools (Herramientas externas)**.

**6.**En la sección Xcode Default Settings (Configuración predeterminada de Xcode), habilita la casilla de selección **Automatically Sign (Firmar automáticamente)**.

**7.**En el campo de propiedad **Signing Team Id (ID del equipo que firma)**pega el ID de la unidad organizacional que copiaste antes.

[Image: image]Marcar paso como completado

## 10. ¿Cómo volver a crear una nueva versión de la aplicación? [iOS]

Q&A (0)

Ahora deberías poder crear un proyecto con Xcode directamente desde Unity e implementarlo sin errores en el dispositivo. Antes de volver a crear, haz un pequeño cambio en tu proyecto para asegurarte de que se ejecute la nueva versión de la aplicación.

Sigue estos pasos para hacer un pequeño cambio y volver a crear la aplicación:

**1.**En la ventana Hierarchy, selecciona el GameObject **Cube (Cubo)**.

**2.**En la ventana Inspector, cambia la escala de los valores X, Y o Z para convertir el cubo en un prisma rectangular.

[Image: image]

**3.**Presiona Cmd + B. De esta manera, tu proyecto existente de Xcode se sobrescribirá automáticamente y se ejecutará en el dispositivo conectado.

Si creaste correctamente una nueva versión de la aplicación, deberías ver un prisma rectangular que flota en el espacio en lugar de un cubo.

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

Marcar paso como completado

## 11. ¿Cómo configurar la relación de aspecto de la vista de Juego? [iOS]

Q&A (0)

Cuando ejecutas aplicaciones en el teléfono, estas se abren en modo vertical u horizontal. La relación entre la anchura y la altura de una pantalla se conoce como **relación de aspecto**. Cuando pruebas una aplicación en Unity, es importante que la vista de Juego refleje con precisión la relación de aspecto del dispositivo. Esto te permitirá visualizar mejor cómo se verá la aplicación cuando se ejecute en el dispositivo.

Sigue estos pasos para configurar la relación de aspecto de la vista de Juego:

**1.**Selecciona **Play (Reproducir)** para acceder a la vista previa de la aplicación en Unity. Observa que toda la vista de Juego tiene un fondo negro.

[Image: image]

**2.**En la barra de herramientas de la vista de Juego, utiliza el menú desplegable de **relación de aspecto** para cambiar la opción Free Aspect (Aspecto libre) a una de las opciones de modo Portrait (Vertical) para dispositivos iOS. No hay problema si el dispositivo específico no aparece en la lista.

[Image: image]

**3.**La relación de aspecto de la vista de Juego ahora se parece mucho a lo que ves al sostener el dispositivo móvil en modo vertical.

[Image: image]

Con esto terminamos la sección de iOS de este tutorial. Los siguientes pasos explican cómo crear e implementar aplicaciones en dispositivos Android. Si tienes un dispositivo Android y quieres usarlo para hacer pruebas, puedes seguir estos pasos. Sin embargo, si solo quieres hacer pruebas en iOS, ve directamente al [último paso de este tutorial.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d5c65edbc2a5038b718a3)

Marcar paso como completado

## 12. ¿Cómo habilitar el complemento de XR llamado ARCore? [Android]

Q&A (0)

Este es el primer paso de las instrucciones de configuración específicas para Android. Si planeas utilizar un dispositivo Android, llegaste al lugar adecuado.

El proyecto ya está configurado para AR a nivel general. Ahora, debes configurarlo para que sea compatible con Android. Para esto, debes instalar [**ARCore**](https://developers.google.com/ar/develop), que es el marco de AR de Android. El paquete equivalente para los dispositivos iOS se llama [**ARKit**](https://developer.apple.com/documentation/arkit/).

ARCore es la interfaz de programación de aplicaciones (API) que proporciona acceso a las cámaras, los sensores y los demás componentes de hardware que permiten ejecutar experiencias de AR en dispositivos Android.

Sigue estos pasos para instalar ARCore en tu proyecto:

**1.**En el menú principal, selecciona **Edit**> **Project Settings** y luego selecciona **XR Plug-in Management (Administración de complementos de XR)** en el panel izquierdo.

**2.**Selecciona la pestaña **Android**en el panel de XR Plug-in Management.

**3.**Revisa la lista de proveedores de complementos y asegúrate de que la casilla de selección de **ARCore**esté habilitada.

[Image: image]Marcar paso como completado

## 13. ¿Cómo configurar los ajustes de creación? [Android]

Q&A (0)

Antes de crear tu proyecto, debes completar algunos pasos más.

Sigue estos pasos para configurar los ajustes de creación:

**1.**En el menú superior, selecciona **File** > **Build Settings**.

**2.**Selecciona **Add Open Scenes (Agregar Escenas abiertas)** para asegurarte de que se incluya la Scene (Escena) modelo que tienes abierta.

**3.**En el panel Platform (Plataforma), selecciona **Android** y luego selecciona **Switch Platform (Cambiar plataforma).**Este proceso puede tardar un poco.

[Image: image]Marcar paso como completado

## 14. ¿Cómo habilitar la depuración USB en el dispositivo? [Android]

Q&A (0)

Si habilitas la **depuración USB** en el dispositivo Android, Unity podrá implementar aplicaciones directamente en el dispositivo móvil mediante una conexión con cable USB.

Sigue los pasos descritos en esta [documentación de Android](https://developer.android.com/studio/debug/dev-options) para habilitar la depuración USB en el dispositivo.

Marcar paso como completado

## 15. ¿Cómo ejecutar la aplicación en el dispositivo? [Android]

Q&A (0)

Después de seleccionar Android como la plataforma de creación, tendrás todo listo para implementar la aplicación directamente en el dispositivo con Unity. Sigue estos pasos para completar el proceso:

**1.**Conecta el dispositivo a la computadora con un cable.

**2.**En la ventana Build Settings, selecciona**Refresh (Actualizar)** junto a la opción **Run Device (Dispositivo para ejecución)**a fin de ver una lista de dispositivos conectados y selecciona el dispositivo conectado.

[Image: image]

**Nota**: si no ves el dispositivo en la lista, intenta seguir algunos pasos básicos de resolución de problemas, como desconectar y volver a conectar el dispositivo, asegurarte de que la depuración USB esté habilitada o reiniciar Unity. Si aún no ves el dispositivo, es posible que el teléfono no cumpla con los requisitos mínimos. Si quieres ver otras sugerencias para resolver el problema, revisa la [documentación de configuración para Android](https://docs.unity3d.com/Manual/android-sdksetup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953800443) de Unity.

**3.**Selecciona **Build and Run (Crear y ejecutar)**. Cuando hagas esto, se abrirá la ventana del explorador de archivos para que selecciones dónde deseas guardar la aplicación (como archivo .apk).

**4.**En la ventana del explorador de archivos, crea una nueva carpeta llamada «Builds» dentro de la carpeta del proyecto para guardar todas las versiones del mismo, escribe el nombre del archivo, que puede ser algo como «AR_Template.apk», y selecciona **Save (Guardar)**.

[Image: image]

**5.**Cuando la aplicación se abra automáticamente en el dispositivo, toma el dispositivo y apunta la cámara hacia el entorno. Tal vez debas permitir que la aplicación acceda a la cámara.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:16Loaded: 0.00%0:00Remaining Time -0:161xPlayback Rate

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

Antes de orientar el dispositivo, toma en cuenta que el cubo giratorio se generará directamente enfrente, en la dirección hacia donde apunte la cámara en el momento en que se ejecute la aplicación. El cubo no se mantendrá fijo en el mismo lugar, pero debería permanecer en una misma área aproximada del espacio donde te encuentres.

**6.**Cuando termines de probar la aplicación, cierra completamente la aplicación. Para hacerlo, desliza el dedo hacia arriba desde la parte inferior de la pantalla, mantén pulsado y suelta. Luego, desliza la aplicación hacia arriba para cerrarla por completo.

**Nota**: si únicamente minimizas la aplicación, se mantendrá en ejecución en segundo plano y los cambios que realices en Unity podrían no crearse en el dispositivo.

¡Felicitaciones! Implementaste correctamente una aplicación de AR en el dispositivo Android.

Marcar paso como completado

## 16. ¿Cómo volver a crear una nueva versión de la aplicación? [Android]

Q&A (0)

Para familiarizarte mejor con el proceso y revisar que todo funcione correctamente, crea y ejecuta una nueva versión de la aplicación. Antes de volver a crearla, haz un pequeño cambio en el proyecto a fin de asegurarte de que se ejecute una nueva versión.

Sigue estos pasos para hacer un pequeño cambio y volver a crear la aplicación:

**1.**En la ventana Hierarchy (Jerarquía), selecciona **Cube (Cubo)**.

**2.**En la ventana Inspector, cambia la escala de los valores X, Y o Z para convertir el **cubo** en un prisma rectangular.

[Image: image]

**3.**Presiona Ctrl + B (macOS: Cmd + B). De esta manera, tu proyecto existente se sobrescribirá automáticamente y se ejecutará en el dispositivo conectado.

Si creaste correctamente una nueva versión de la aplicación, deberías ver un prisma rectangular que flota en el espacio en lugar de un cubo.

Marcar paso como completado

## 17. ¿Cómo configurar la relación de aspecto de la vista de Juego? [Android]

Q&A (0)

Cuando ejecutas aplicaciones en el teléfono, estas se abren en modo vertical u horizontal. La relación entre la anchura y la altura de una pantalla se conoce como **relación de aspecto**. Cuando pruebas una aplicación en Unity, es importante que la vista de Juego refleje con precisión la relación de aspecto del dispositivo. Esto te permitirá visualizar mejor cómo se verá la aplicación cuando se ejecute en el dispositivo.

Sigue estos pasos para configurar la relación de aspecto de la vista de Juego:

**1.**Selecciona **Play (Reproducir)** para acceder a la vista previa de la aplicación en Unity. Observa que toda la vista de Juego tiene un fondo negro.

[Image: image]

**2.**En la barra de herramientas de la vista de Juego, utiliza el menú desplegable de **relación de aspecto** para cambiar la opción Free Aspect (Aspecto libre) a **16:9 Portrait (16:9 Vertical)**. Esta es la relación de aspecto aproximada de una gran variedad de teléfonos Android.

[Image: image]

**3.**La relación de aspecto de la vista de Juego ahora se parece mucho a lo que ves al sostener el dispositivo móvil en modo vertical.

[Image: image]Marcar paso como completado

## 18. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que conozcas el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### (Medio) Personaliza la pantalla de inicio

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

La pantalla de inicio es lo primero que aparece cuando se abre la aplicación. Con frecuencia, la pantalla de inicio tiene el logotipo de los creadores de la aplicación. Esta pantalla puede hacer que la aplicación se vea como un producto de software terminado.

Puedes cambiar el color de fondo, la imagen de fondo y el tiempo durante el que se muestra el logotipo. Si tienes una licencia personal, la pantalla de inicio siempre incluirá «Made with Unity» y el logotipo de Unity. Si adquiriste una licencia profesional, tendrás la opción para deshabilitar el logotipo y texto de Unity. Si deseas obtener más información sobre las pantallas de inicio, explora la [sección del manual de Unity relacionada con los ajustes del reproductor para la imagen de bienvenida](https://docs.unity3d.com/Manual/class-PlayerSettingsSplashScreen.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953800443).

Marcar paso como completado

## 19. Próximos pasos

Q&A (0)

En este tutorial, implementaste el proyecto modelo predeterminado en el dispositivo iOS o Android. De esta manera, verificaste que el entorno de desarrollo de AR esté perfectamente configurado.

El siguiente paso del trayecto Desarrollo de AR es empezar a crear una nueva aplicación de filtros faciales, lo que será mucho más emocionante que un cubo giratorio.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
