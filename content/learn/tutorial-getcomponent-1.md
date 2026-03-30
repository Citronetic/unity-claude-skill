[Image: image]

# GetComponent

Tutorial

Beginner

+0XP

5 mins

15

(169)

Unity Technologies

[Image: GetComponent]Summary

如何使用 GetComponent 函数来处理其他脚本或组件的属性。

本教程包含在“[初级编程](https://learn.unity.com/project/chu-ji-bian-cheng?language=zh)”项目中。

上一教程：[OnMouseDown](https://learn.unity.com/tutorial/onmousedown-1?language=zh&projectId=5e3afd88edbc2a2998252c77)

下一教程：[Delta Time](https://learn.unity.com/tutorial/deltatime?language=zh&projectId=5e3afd88edbc2a2998252c77)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. GetComponent

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 简体中文

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### **UsingOtherComponents**

```csharp
using UnityEngine;
using System.Collections;

public class UsingOtherComponents : MonoBehaviour
{
    public GameObject otherGameObject;


    private AnotherScript anotherScript;
    private YetAnotherScript yetAnotherScript;
    private BoxCollider boxCol;


    void Awake ()
    {
        anotherScript = GetComponent<AnotherScript>();
        yetAnotherScript = otherGameObject.GetComponent<YetAnotherScript>();
        boxCol = otherGameObject.GetComponent<BoxCollider>();
    }


    void Start ()
    {
        boxCol.size = new Vector3(3,3,3);
        Debug.Log("The player's score is " + anotherScript.playerScore);
        Debug.Log("The player has died " + yetAnotherScript.numberOfPlayerDeaths + " times");
    }
}
```

#### **AnotherScript**

```csharp
using UnityEngine;
using System.Collections;

public class AnotherScript : MonoBehaviour
{
    public int playerScore = 9001;
}
```

#### **YetAnotherScript**

```csharp
using UnityEngine;
using System.Collections;

public class YetAnotherScript : MonoBehaviour
{
    public int numberOfPlayerDeaths = 3;
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
