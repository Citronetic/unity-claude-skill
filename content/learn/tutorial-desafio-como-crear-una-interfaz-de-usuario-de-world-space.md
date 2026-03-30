[Image: image]

# Desafío: ¿Cómo crear una interfaz de usuario de World Space?

Tutorial

Beginner

+60XP

30 mins

2

Unity Technologies

[Image: Desafío: ¿Cómo crear una interfaz de usuario de World Space?]Summary

Una interfaz de usuario (UI) de World Space puede existir en el mundo tridimensional, como cualquier otro GameObject. Esto te permite, como diseñador de UI, crear tipos de interacciones completamente diferentes en comparación con una UI de Screen Space tradicional. En este tutorial, aprenderás más sobre los casos de uso de las interfaces de usuario de World Space y luego diseñarás una nueva versión de tu UI ahí.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar los casos de uso para los diferentes modos de renderizado de Canvas: superposición de Screen Space, cámara de Screen Space y World Space.
- Demostrar tus nuevas habilidades en cuanto a interfaces de usuario.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Hasta este punto, has diseñado una UI de **Screen Space**. Una UI de Screen Space aparece plana en la pantalla y renderizada sobre todo lo demás en el entorno, independientemente de la posición de la cámara.

[Image: image][Image: image]

Una UI de **World Space**, por su parte, puede moverse y girar dentro del entorno en 3D, como cualquier otro objeto de la Scene (Escena).

[Image: image]

En este desafío, diseñarás una versión actualizada de tu UI en **World Space**.

Marcar paso como completado

## 2. ¿Por qué utilizar una UI de World Space?

Q&A (0)

Una UI de World Space puede ser muy eficaz si intentas integrarla en el mundo físico en 3D, como con un panel de control en el juego.

[Image: image]

Keep talking and nobody explodes. © 2015 - Steel Crate Games. Imagen extraída del [kit de prensa](https://www.keeptalkinggame.com/presskit/sheet.php?p=keep_talking_and_nobody_explodes).

Esto es lo que se conoce como UI **diegética**, donde la interfaz está integrada en el mundo del juego y es visible para los personajes. Las UI de Screen Space, por su parte, suelen ser **extradiegéticas**, ya que no son parte del mundo del juego y los personajes de este no pueden verlas.

En las experiencias de VR, las UI de Screen Space casi nunca se usan, ya que parecería que los elementos de la UI están pegados a tu cara. Más bien, las UI en VR se establecen en World Space y el usuario suele utilizar un rayo para seleccionar las opciones.

[Image: image]

Los ejemplos anteriores ilustran la UI **diegética**, donde la interfaz está integrada en el mundo del juego y es visible para los personajes. Las UI de Screen Space, por su parte, suelen ser **extradiegéticas**, ya que no son parte del mundo del juego y los personajes de este no pueden verlas.

Marcar paso como completado

## 3. ¿Cómo configurar un Canvas de World Space?

Q&A (0)

Antes de realizar cambios importantes a tu UI, haz un duplicado de la Escena para que puedas experimentar libremente.

**1**. En la ventana Project, selecciona tu Escena actual y presiona**Ctrl**+**D** (Windows) o **Cmd**+**D** (macOS) para duplicarla, luego cámbiale el nombre a «UI_Worldspace» y ábrela. Esto mantendrá tu UI de Screen Space original guardada de forma segura en una Escena diferente.

**2.**Selecciona el objeto Canvas. En el componente Canvas, cambia el **Canvas Render Mode (Modo de renderizado del canvas)** a **World Space**y asigna tu Main Camera (Cámara principal) a la propiedad **Event Camera (Cámara de evento)**.

[Image: image]

Al hacerlo, parecerá que toda tu UI desaparece. No te preocupes, todavía está ahí; solo que es gigantesca y está fuera del campo de visión.

[Image: image]

**3.**En el componente Rect Transform (Transformar rectángulo) del Canvas, reduce el tamaño a X=0.03, Y=0.03, Z=0.03 y restablece su posición a X=0, Y=0, Z=0.

[Image: image]

Esto hará que el Canvas tenga un tamaño adecuado para tu Escena y esté centrado cerca del entorno.

[Image: image]

**Nota:**Además del modo de renderizado de World Space, existen dos tipos de renderizado de Screen Space: **superposición** y **cámara**.

- **La superposición de Screen Space, que es lo que hemos usado hasta este momento**, superpone la UI en la parte superior de la pantalla, sin importar lo que haya detrás.
- **La cámara de Screen Space** coloca la UI a una distancia establecida de la cámara, pero se mueve cuando la cámara se mueve.

Si te interesa, puedes leer más sobre las diferencias de estos modos en el [**Manual (en inglés})**](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954617800).

Marcar paso como completado

## 4. ¿Cómo diseñar la interfaz de usuario de World Space?

Q&A (0)

Rediseña tu UI en World Space. Ahora, deberías poder mover, girar y cambiar el tamaño de todo el Canvas o de los elementos individuales de la UI, como lo harías con cualquier otro objeto en 3D.

[Image: image]

Para crear algo que se vea bien, es posible que debas reorientar la cámara o reorganizar los objetos en la Escena.

Cuando termines, tu UI podría verse como uno de los siguientes ejemplos o completamente diferente.

[Image: image][Image: image][Image: image]

Es posible que debas invertir al menos 30 minutos en este desafío.

Si te interesa un desafío de programación, también puedes intentar el movimiento suave de la cámara que se muestra aquí, que resalta aún más el aspecto del espacio del mundo de tu UI.

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

Marcar paso como completado

## 5. Requisitos del desafío

Q&A (0)

Para completar con éxito este desafío, la UI de World Space debe hacer lo siguiente:

- Utilizar un modo de renderizado de World Space.
- Estar diseñada y ubicada de formas interesantes en el espacio del mundo.
- Mantener todas sus funciones (el botón de configuración muestra el menú correspondiente y todos los elementos del menú funcionan).

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

¡Felicitaciones! Has completado el aprendizaje requerido para Habilidades básicas para creadores artísticos: Interfaz de usuario (UI).

Tienes las habilidades y el conocimiento básicos para una de las áreas creativas principales dentro del motor de Unity.

Ahora estás listo para aplicar estas habilidades en otros proyectos. Queremos ver lo que puedes crear.

Marcar paso como completadoPaso opcional

## 7. ¿Cómo enviar tu proyecto?

Q&A (0)

Cuando hayas completado este desafío, envía y comparte tu proyecto. Este no es un requisito para completar esta misión, pero es una gran oportunidad para compartir tu progreso y aprender del trabajo de los demás.

Haz lo siguiente para enviar tu proyecto:

**1.** Revisa la guía específica para este desafío (arriba) y tu proyecto para asegurarte de haber alcanzado los requisitos del desafío. Recuerda, no hay fecha límite para las entregas; puedes tomarte el tiempo que necesites para hacerlo.

**2.** [Crea y publica una versión WebGL de tu proyecto](https://learn.unity.com/tutorial/create-and-publish-webgl-builds). Puedes publicar tu envío en Unity Play o en otras plataformas de alojamiento de terceros.

**3.** Agrega el enlace a tu versión WebGL alojada en el formulario de envío que aparece al final de este paso.

**4.** Agrega un título y una descripción al envío. Si tienes detalles adicionales para compartir sobre tu proceso o el proyecto que has creado, también puedes compartirlos en la descripción.

**5.** Configura quién puede ver tu envío.

- **Público:** Cualquiera que vea este tutorial.
- **Privado:** Solo tú.

**6.** Selecciona **Save and preview submission (Guardar y previsualizar el envío)**.

**7.** Revisa la vista previa de tu entrega, completa la prueba CAPTCHA y selecciona **Submit and continue (Enviar y continuar)**.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
