[Image: image]

# Atributos

Tutorial

intermediate

+0XP

5 mins

33

(100)

Unity Technologies

[Image: Atributos]SummarySkills

Los atributos te permiten anexar comportamientos adicionales a los métodos y variables que crees. En este vídeo aprenderás el formato de los atributos y también a cómo usar los atributos «Range» y «ExecuteInEditMode».

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Atributos

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

**SpinScript**

```csharp
using UnityEngine;
using System.Collections;

public class SpinScript : MonoBehaviour
{
    [Range(-100, 100)] public int speed = 0;

    void Update ()
    {
        transform.Rotate(new Vector3(0, speed * Time.deltaTime, 0));
    }
}
```

**ColorScript**

```csharp
using UnityEngine;
using System.Collections;

[ExecuteInEditMode]
public class ColorScript : MonoBehaviour
{
    void Start()
    {
        renderer.sharedMaterial.color = Color.red;
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
