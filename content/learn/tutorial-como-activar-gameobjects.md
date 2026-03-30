[Image: image]

# Cómo activar GameObjects

Tutorial

Beginner

+0XP

5 mins

26

(191)

Unity Technologies

[Image: Cómo activar GameObjects]Summary

Cómo manejar el estado activo de los GameObjects dentro de la escena independientemente y a través de jerarquías o Hierarchies usando SetActive y activeSelf o activeinHierarchy.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: [Cómo habilitar y deshabilitar componentes](https://learn.unity.com/tutorial/habilitar-y-deshabilitar-componentes?language=es&publish=true)

Siguiente:  Translate y Rotate

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Cómo activar GameObjects

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### **ActiveObjects**

```csharp
using UnityEngine;
using System.Collections;

public class ActiveObjects : MonoBehaviour
{
    void Start ()
    {
        gameObject.SetActive(false);
    }
}
```

#### **CheckState**

```csharp
using UnityEngine;
using System.Collections;

public class CheckState : MonoBehaviour
{
    public GameObject myObject;


    void Start ()
    {
        Debug.Log("Active Self: " + myObject.activeSelf);
        Debug.Log("Active in Hierarchy" + myObject.activeInHierarchy);
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
