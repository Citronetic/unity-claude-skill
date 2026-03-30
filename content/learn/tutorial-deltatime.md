[Image: image]

# DeltaTime

Tutorial

Beginner

+0XP

5 mins

13

(158)

Unity Technologies

[Image: DeltaTime]Summary

什么是 Delta Time？如何在游戏中将其用于对值进行平滑和解释？

本教程包含在“[初级编程](https://learn.unity.com/project/chu-ji-bian-cheng?language=zh)”项目中。

上一教程：[GetComponent](https://learn.unity.com/tutorial/getcomponent-1?language=zh&projectId=5e3afd88edbc2a2998252c77)

下一教程：[数据类型](https://learn.unity.com/tutorial/shu-ju-lei-xing?language=zh&projectId=5e3afd88edbc2a2998252c77)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. DeltaTime

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### **UsingDeltaTimes**

```csharp
using UnityEngine;
using System.Collections;

public class UsingDeltaTime : MonoBehaviour
{
    public float speed = 8f;
    public float countdown = 3.0f;


    void Update ()
    {
        countdown -= Time.deltaTime;
        if(countdown <= 0.0f)
            light.enabled = true;

         if(Input.GetKey(KeyCode.RightArrow))
            transform.position += new Vector3(speed * Time.deltaTime, 0.0f, 0.0f);
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
