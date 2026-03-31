[Image: image]

# Invocar

Tutorial

Beginner

+0XP

5 mins

31

(148)

Unity Technologies

[Image: Invocar]Summary

Las funciones Invoke (invocar) te permiten programar invocaciones de métodos para que ocurran en un momento determinado. En este video aprenderás cómo usar las funciones Invoke, InvokeRepeating y CancelInvoke en tus scripts de Unity.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: Ejemplificar

Siguiente: *Arrays*

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Invocar

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

#### **InvokeScript**

```csharp
using UnityEngine;
using System.Collections;

public class InvokeScript : MonoBehaviour
{
    public GameObject target;


    void Start()
    {
        Invoke ("SpawnObject", 2);
    }

    void SpawnObject()
    {
        Instantiate(target, new Vector3(0, 2, 0), Quaternion.identity);
    }
}
```

#### **InvokeRepeating**

```csharp
using UnityEngine;
using System.Collections;

public class InvokeRepeating : MonoBehaviour
{
    public GameObject target;


    void Start()
    {
        InvokeRepeating("SpawnObject", 2, 1);
    }

    void SpawnObject()
    {
        float x = Random.Range(-2.0f, 2.0f);
        float z = Random.Range(-2.0f, 2.0f);
        Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
