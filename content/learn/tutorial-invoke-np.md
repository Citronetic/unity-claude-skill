[Image: image]

# Invoke

Tutorial

Beginner

+0XP

5 mins

12

(155)

Unity Technologies

[Image: Invoke]Summary

Invoke 函数可用于安排在以后的时间进行方法调用。在本视频中，您将学习如何在 Unity 脚本中使用 Invoke、InvokeRepeating 和 CancelInvoke 函数。

本教程包含在“[初级编程](https://learn.unity.com/project/chu-ji-bian-cheng?language=zh)”项目中。

上一教程：[数组](https://learn.unity.com/tutorial/shu-zu-7x?language=zh&projectId=5e3afd88edbc2a2998252c77)

下一教程：[枚举](https://learn.unity.com/tutorial/mei-ju-vf?language=zh&projectId=5e3afd88edbc2a2998252c77)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. Invoke

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

Mark step as complete

## Complete this Tutorial

Mark all steps complete
