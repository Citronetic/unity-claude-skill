[Image: image]

# Ejemplificar

Tutorial

Beginner

+0XP

5 mins

23

(135)

Unity Technologies

[Image: Ejemplificar]Summary

Cómo usar Instantiate (ejemplificar) para crear clones de un Prefab durante el runtime.How to use Instantiate to create clones of a Prefab during runtime.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: Ejemplificar

Siguiente: *Arrays*

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Ejemplificar

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

#### **UsingInstantiate (Usar ejemplificar)**

```csharp
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody rocketPrefab;
    public Transform barrelEnd;


    void Update ()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            Rigidbody rocketInstance;
            rocketInstance = Instantiate(rocketPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
            rocketInstance.AddForce(barrelEnd.forward * 5000);
        }
    }
}
```

#### **RocketDestruction (Destrucción de cohetes)**

```csharp
using UnityEngine;
using System.Collections;

public class RocketDestruction : MonoBehaviour
{
    void Start()
    {
        Destroy (gameObject, 1.5f);
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
