[Image: image]

# ¿Cómo programar la funcionalidad de escaneo?

Tutorial

intermediate

+10XP

60 mins

1

Unity Technologies

[Image: ¿Cómo programar la funcionalidad de escaneo?]SummarySkills

Para trabajar en el desarrollo de VR, es importante entender bien lo que son los vectores en 3D y cómo trabajar con ellos. Deberás calcular distancias, ángulos y direcciones con frecuencia, y una de las técnicas más útiles para obtener estos valores es la emisión de rayos.

En este tutorial, harás lo siguiente:

- Utilizar la emisión de rayos para identificar el objeto hacia el que apunta el escáner.
- Consultar la documentación en línea para utilizar el código de acuerdo con las prácticas recomendadas para el desarrollo de VR

Languages available:

EspañolEnglishEspañol한국어Español

## 1. Descripción general

Q&A (0)

El objetivo principal de la funcionalidad del escáner es mostrar el nombre y la posición del objeto al que apunta.

Para hacerlo correctamente, debes encontrar un procedimiento que te permita determinar a qué objeto apunta el escáner y obtener la información relevante de ese GameObject a fin de mostrarla en la pantalla del escáner. Para esto, deberás utilizar la emisión de rayos.

La **emisión de rayos** es una técnica esencial que dispara una línea recta invisible y detecta con qué objeto choca esa línea. Esta técnica es muy útil para detectar los impactos en los juegos de disparos, para la detección de proximidad, para la interfaz de usuario y, en este caso, para las interacciones con objetos a distancia.

Marcar paso como completado

## 2. ¿Cómo hacer que el texto aparezca y desaparezca con el láser?

Q&A (0)

En primer lugar, necesitas un procedimiento para mostrar la información en la pantalla del escáner, por lo que debes configurar el texto que se actualizará al escanear un objeto. Afortunadamente, ya tenemos algunos objetos TextMeshPro colocados en un canvas en la pantalla. Por lo tanto, solo tienes que seguir estos pasos para hacer que el texto aparezca y desaparezca cuando se presione el desencadenador:

**1.**  Para poder utilizar la biblioteca TextMeshPro, agrega el espacio de nombres TMPro al script.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.Interaction.Toolkit;
using TMPro; // add this line of code
```

**2.**  Agrega dos nuevas variables para poder hacer referencias a los GameObjects de TextmeshPro.

```csharp
[Header("Scanner Data")]
public Animator animator;
public LineRenderer laserRenderer;
public TextMeshProUGUI targetName; //add this line of code
public TextMeshProUGUI targetPosition; //add this line of code
```

**3.**  Guarda el script y regresa al Editor de Unity. Las dos nuevas variables aparecerán como casillas vacías en la ventana Inspector del escáner. Asigna los GameObjects **Name (Nombre)** y **Position (Posición)** a esos campos nuevos al arrastrarlos desde la ventana Hierarchy.

[Image: image]

Actualmente, cuando se carga la Escena, el texto predeterminado aparece en la pantalla del escáner antes de escanear cualquier objeto. El texto solo debería aparecer cuando se utilice el escáner.

**4.**  Utiliza el siguiente código en la función Awake (Activo) para desactivar los dos objetos de texto cuando se inicie la aplicación.

```csharp
protected override void Awake()
{
  base.Awake();
  laserRenderer.gameObject.SetActive(false);
  targetName.gameObject.SetActive(false); // add this line
  targetPosition.gameObject.SetActive(false); // add this line
}
```

**5.**  Para hacer que el texto vuelva a aparecer cuando se presione el desencadenador, establece el estado activo como true (verdadero) para ambos campos de texto en la función OnActivated.

```csharp
protected override void OnActivated(ActivateEventArgs args)
{
  base.OnActivated(args);
  laserRenderer.gameObject.SetActive(true);
  targetName.gameObject.SetActive(true);
  targetPosition.gameObject.SetActive(false);
}
```

**6.** Para hacer que el texto vuelva a desaparecer cuando se suelte el desencadenador, establece el estado activo como false (falso) para ambos campos de texto en la función OnDeactivated.

```csharp
protected override void OnDeactivated(DeactivateEventArgs args)
{
  base.OnDeactivated(args);
  laserRenderer.gameObject.SetActive(false);
  targetName.gameObject.SetActive(false);
  targetPosition.gameObject.SetActive(false);
}
```

Guarda el script y vuelve a probar la aplicación. Ahora, el texto debe aparecer y desaparecer, junto con el láser, al presionar el desencadenador.

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

## 3. ¿Cómo limpiar el código redundante?

Q&A (0)

Al mantener el código limpio, puedes iterar con mayor rapidez, administrar de manera más sencilla y escalar mejor a largo plazo.

Al revisar este código, verás que hay muchas líneas repetidas para establecer los GameObjects como activos o inactivos. Sigue estos pasos para limpiar el código redundante:

**1.**  Crea un nuevo método con el nombre «ScannerActivated» que reciba un parámetro booleano. Utilizarás este parámetro para activar o desactivar todos los GameObjects correspondientes, según el booleano enviado.

Agrega el siguiente código al script para lograrlo:

```csharp
private void ScannerActivated (bool isActivated)
{
  laserRenderer.gameObject.SetActive(isActivated);
  targetName.gameObject.SetActive(isActivated);
  targetPosition.gameObject.SetActive(isActivated);
}
```

**2.**  A continuación, reemplaza el código de tus métodos Awake, OnActivated y OnDeactivated por el método ScannerActivated, que es mucho más sencillo. Ese parámetro booleano únicamente debe estar establecido como true en OnActivated (es decir, cuando se presione el desencadenador).

```csharp
protected override void Awake()
{
  base.Awake();
  ScannerActivated(false);
}

protected override void OnActivated(ActivateEventArgs args)
{
  base.OnActivated(args);
  ScannerActivated(true);
}

protected override void OnDeactivated(DeactivateEventArgs args)
{
  base.OnDeactivated(args);
  ScannerActivated(false);
}
```

Tu código debe funcionar de la misma manera que antes, pero ahora tiene una estructura más limpia y con un tamaño ajustable.

Marcar paso como completado

## 4. ¿Cómo utilizar la emisión de rayos para obtener el nombre y la posición del objeto?

Q&A (0)

Como se explica en [su documentación](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (en inglés), la emisión de rayos funciona al disparar un rayo desde un punto de origen hacia una dirección determinada, el cual tiene una longitud específica y detecta cualquier colisionador con el que choca.

Si has utilizado mucho la emisión de rayos en proyectos anteriores, esto te parecerá bastante sencillo. Si es la primera vez que utilizas esta técnica, asegúrate de seguir cuidadosamente este paso.

Sigue estos pasos para disparar un rayo invisible desde el escáner y detectar el nombre y la posición del objeto con el que choca:

**1.**  Primero, crea un nuevo método private void (privado vacío) llamado ScanForObjects y agrega una llamada a ese método en el método OnActivated.

```csharp
protected override void OnActivated(ActivateEventArgs args)
{
  base.OnActivated(args);
  ScannerActivated(true);

  ScanForObjects(); // add this line
}


private void ScanForObjects() // add this new method
{

}
```

**2.**  En el nuevo método ScanForObjects, declara una nueva variable local de tipo RaycastHit llamada «hit».

```csharp
private void ScanForObjects()
{
  RaycastHit hit;
}
```

Las variables de tipo [RaycastHit](https://docs.unity3d.com/ScriptReference/RaycastHit.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (documentación en inglés) proporcionan información sobre el objeto con el que chocó un rayo.

A continuación, agregarás un enunciado condicional if que revise si la emisión de rayos choca con algún elemento mediante el [método Physics.Raycast](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (documentación en inglés), que muestra el resultado «true» si algún objeto recibe un impacto.

**3.**  Agrega el siguiente código para emitir el rayo desde su posición original hacia adelante y revisar si se produce alguna colisión.

```csharp
private void ScanForObjects()
{
  RaycastHit hit;

  if (Physics.Raycast(laserRenderer.transform.position, laserRenderer.transform.forward, out hit))
  {

  }

}
```

Si es la primera vez que utilizas este método, tal vez te confunda la sintaxis **out hit (impacto de salida)**. Este método pasa la información **out (de salida)** sobre el colisionador más cercano con el que chocó (su «hitInfo»), lo que resulta muy útil porque lo puedes almacenar en tu variable local **hit (impacto)**. Esto te permite obtener acceso al colisionador que recibió el impacto y el nombre y la posición del objeto que tiene el colisionador.

**4.**  En esta revisión de la emisión de rayos, agrega el siguiente código para establecer los valores de TargetName y TargetPosition con el nombre y la posición del colisionador con el que chocó la emisión de rayos:

```csharp
RaycastHit hit;

if (Physics.Raycast(laserRenderer.transform.position, laserRenderer.transform.forward, out hit))
{

  targetName.SetText(hit.collider.name); //add this
  targetPosition.SetText(hit.collider.transform.position.ToString()); //add this
}
```

Prueba la aplicación ahora. Al presionar el desencadenador, el texto debe aparecer con el nombre y la posición del elemento con el que chocó.

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

## 5. ¿Cómo cambiar dinámicamente el tamaño del láser?

Q&A (0)

La emisión de rayos funciona correctamente, pero la representación visual real del rayo aún no tiene el tamaño adecuado. El rayo se mantiene del mismo tamaño, independientemente del objeto hacia el que lo apuntes. Sigue estos pasos para corregirlo:

**1.**  En el método ScanForObjects que creaste anteriormente, crea una nueva variable de posición de tipo Vector3 llamada **worldHit (impacto en el mundo)**, la cual estará a 1000 unidades de distancia en la dirección que apunta el láser.

```csharp
RaycastHit hit;

Vector3 worldHit = laserRenderer.transform.position + laserRenderer.transform.forward * 1000.0f; // new line
```

Este será el extremo predefinido del láser si no choca con ningún objeto. La distancia debe ser suficiente para que parezca que el rayo es infinito.

A continuación, debes configurar el componente de procesador de líneas para que utilice esa variable de tipo Vector3 como el extremo visual del láser.

**2.**  Utiliza el método [LineRenderer.SetPosition](https://docs.unity3d.com/ScriptReference/LineRenderer.SetPosition.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (documentación en inglés) para establecer la posición del segundo vértice de la línea en esa nueva variable worldHit. Agrega la siguiente línea de código después de la revisión de Physics.Raycast:

```csharp
private void ScanForObjects()
{
  RaycastHit hit;

  Vector3 worldHit = laserRenderer.transform.position + laserRenderer.transform.forward * 1000.0f;

  if (Physics.Raycast(laserRenderer.transform.position, laserRenderer.transform.forward, out hit))
  {
    targetName.SetText(hit.collider.name);
    targetPosition.SetText(hit.collider.transform.position.ToString());
  }

  laserRenderer.SetPosition(1, laserRenderer.transform.InverseTransformPoint(worldHit)); // new line
}
```

El primer parámetro establece el valor de 1 para el índice, lo que especifica el segundo punto de la línea. El método InverseTransformPoint es necesario para transformar la posición de worldHit y hacer que utilice coordenadas en el espacio del mundo en lugar de coordenadas locales.

Al probar la aplicación, verás que el láser ahora llega muy lejos, pero mantiene una longitud determinada y atraviesa los objetos. El rayo debe terminar en el punto en el que choca con otro objeto.

**3.**  Para corregir el problema en el que el láser atraviesa los objetos, utiliza la siguiente línea de código a fin de configurar la variable worldHit con la ubicación del nuevo impacto cada vez que la emisión de rayos choque con algún objeto.

```csharp
if (Physics.Raycast(laserRenderer.transform.position, laserRenderer.transform.forward, out hit))
{
  worldHit = hit.point; // new line

  targetName.SetText(hit.collider.name);
  targetPosition.SetText(hit.collider.transform.position.ToString());
}
```

Ahora, cuando se detecte un impacto, el extremo del láser se debe establecer en ese punto de colisión y la longitud del láser se debe actualizar con el valor correspondiente.

Sin embargo, aún hay un problema. Cuando el láser choca con un objeto, mantiene la misma longitud, incluso si lo apuntas hacia otra parte. Esto se debe a que el escaneo únicamente se lleva a cabo en el momento en que se presiona el desencadenador, cuando se debería realizar durante todo el tiempo que se mantenga presionado.

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

## 6. ¿Cómo escanear para ver si hay objetos en cada fotograma?

Q&A (0)

Para escanear constantemente, lo normal sería llamar a ScanForObjects en el método Update (Actualizar). Sin embargo, al leer la documentación, probablemente notaste que la Interfaz de programación de aplicaciones o API del kit de herramientas de interacción de XR o Realidad extendida tiene su propia versión especial del método Update, llamada [ProcessInteractable()](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.XRGrabInteractable.html#UnityEngine_XR_Interaction_Toolkit_XRGrabInteractable_ProcessInteractable_UnityEngine_XR_Interaction_Toolkit_XRInteractionUpdateOrder_UpdatePhase_?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (documentación en inglés).

El desarrollo para XR requiere aplicaciones altamente optimizadas. Al decidir cómo se procesan las actualizaciones, los desarrolladores pueden controlar mejor los momentos y la frecuencia con que las cosas suceden en su código. Sigue estos pasos para implementar el método ProcessInteractable en lugar del método Update en el código:

**1.**  Busca la declaración del método base ProcessInteractables en la [clase XRInteractionManager](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.XRInteractionManager.html#UnityEngine_XR_Interaction_Toolkit_XRInteractionManager_ProcessInteractables_UnityEngine_XR_Interaction_Toolkit_XRInteractionUpdateOrder_UpdatePhase_?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (en inglés) y lee su descripción.

La documentación dice: «this method is automatically called each frame to process all interactables registered with this manager», lo que indica que se envía automáticamente una llamada al método en cada fotograma para procesar todos los objetos con los que se pueda interactuar que estén registrados con este administrador. Este elemento requiere un parámetro para especificar su [fase de actualización](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.XRInteractionUpdateOrder.UpdatePhase.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219) (documentación en inglés), que es muy similar a las distinciones entre Update, FixedUpdate y LateUpdate.

**2.** Para utilizar este método, copia la declaración de [ProcessInteractable()](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.XRGrabInteractable.html#UnityEngine_XR_Interaction_Toolkit_XRGrabInteractable_ProcessInteractable_UnityEngine_XR_Interaction_Toolkit_XRInteractionUpdateOrder_UpdatePhase_?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953819219), pégala en el código y llama al método base, como lo has hecho al anular otros métodos.

```csharp
public override void ProcessInteractable(XRInteractionUpdateOrder.UpdatePhase updatePhase)
{
  base.ProcessInteractable(updatePhase);
}
```

Si no llamas al método base, el objeto con el que se puede interactuar no funcionará, ya que no heredará ninguno de los comportamientos predeterminados de sus clases base para procesar cada fotograma.

**3.**  A continuación, llama al método ScanForObjects pero, por razones de optimización, hazlo únicamente cuando el láser esté activo. No es necesario escanear nada cuando el láser esté inactivo.

```csharp
base.ProcessInteractable(updatePhase);

if (laserRenderer.gameObject.activeSelf) // new if-statement
ScanForObjects(); // new line
```

**4.** Ahora puedes eliminar la llamada al método ScanForObjects que realizaste inicialmente en el método OnActivated. Ya no la necesitas porque, a partir de ahora, el escaneo se llevará a cabo en ProcessInteractable.

```csharp
protected override void OnActivated(ActivateEventArgs args)
{
  base.OnActivated(args);
  ScannerActivated(true);
  //ScanForObjects(); line removed
}
```

Prueba la aplicación. El texto y el láser ahora deben responder dinámicamente y cambiar conforme apuntas a diferentes objetos con el desencadenador presionado.

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

## 7. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de [Fácil], [Medio] o [Difícil] para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### [Fácil] Agrega texto cuando no se escanea ningún elemento

Por ahora, las pantallas aparecen en blanco cuando no se escanea ningún elemento. En lugar de esto, la pantalla debería mostrar algún texto, por ejemplo: «Listo para escanear».

#### [Medio] Obtén información adicional sobre el objeto que se escanea

Puedes mostrar todo tipo de información sobre el objeto que se escanea. Puedes mostrar la distancia a la que se encuentra del usuario, su tamaño o el ángulo en el que el rayo hace contacto con él. Piensa en otros datos interesantes que puedes mostrar en el escáner.

#### [Difícil] Cambia el material del objeto escaneado

Para visualizar con mayor facilidad el objeto escaneado, este podría cambiar de material.

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

## 8. Próximos pasos

Q&A (0)

¡Felicitaciones!

Exploraste exitosamente la API y ahora debes entender mejor la manera en que puedes usarla en tus propios proyectos. Incluso aprendiste sobre la implementación personalizada que ofrece el kit de herramientas de interacción de XR para una función Update que se ejecuta en cada fotograma. Si no tenías experiencia con la emisión de rayos, aprendiste a utilizar rayos para detectar e interactuar con los objetos a distancia.

En el siguiente tutorial, aprenderás a acceder al control activo y crear interacciones relevantes basadas en entradas más específicas mientras inflas globos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
