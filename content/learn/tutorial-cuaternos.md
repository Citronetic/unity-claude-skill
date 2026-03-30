[Image: image]

# Cuaternos

Tutorial

intermediate

+0XP

5 mins

35

(99)

Unity Technologies

[Image: Cuaternos]SummarySkills

Cómo se usa el sistema de cuaternos para administrar la rotación de Game Objects.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Cuaternos

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

**MotionScript**

```csharp
using UnityEngine;
using System.Collections;

public class MotionScript : MonoBehaviour
{
    public float speed = 3f;

    void Update ()
    {
        transform.Translate(-Input.GetAxis("Horizontal") * speed * Time.deltaTime, 0, 0);
    }
}
```

**LookAtScript**

```csharp
using UnityEngine;
using System.Collections;

public class LookAtScript : MonoBehaviour
{
    public Transform target;

    void Update ()
    {
        Vector3 relativePos = target.position - transform.position;
        transform.rotation = Quaternion.LookRotation(relativePos);
    }
}
```

**GravityScript**

```csharp
using UnityEngine;
using System.Collections;

public class GravityScript : MonoBehaviour
{
    public Transform target;

    void Update ()
    {
        Vector3 relativePos = (target.position + new Vector3(0, 1.5f, 0)) - transform.position;
        Quaternion rotation = Quaternion.LookRotation(relativePos);

        Quaternion current = transform.localRotation;

        transform.localRotation = Quaternion.Slerp(current, rotation, Time.deltaTime);
        transform.Translate(0, 0, 3 * Time.deltaTime);
    }
}
```

**SomeClass**

```csharp
using UnityEngine;
using System.Collections;

public class SomeClass : MonoBehaviour
{
    void Start ()
    {
        transform.rotation = Quaternion.identity;
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
