[Image: image]

# Destroy

Tutorial

Beginner

+0XP

5 mins

9

(190)

Unity Technologies

[Image: Destroy]Summary

如何在运行时使用 Destroy() 函数删除游戏对象和组件。

本教程包含在“[初级编程](https://learn.unity.com/project/chu-ji-bian-cheng?language=zh)”项目中。

上一教程：[线性插值](https://learn.unity.com/tutorial/xian-xing-cha-zhi?language=zh&projectId=5e3afd88edbc2a2998252c77)

下一教程：[GetButton 和 GetKey](https://learn.unity.com/tutorial/getbutton-he-getkey?language=zh&projectId=5e3afd88edbc2a2998252c77)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. Destroy

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

#### **DestroyBasic**

```csharp
using UnityEngine;
using System.Collections;

public class DestroyBasic : MonoBehaviour
{
    void Update ()
    {
        if(Input.GetKey(KeyCode.Space))
        {
            Destroy(gameObject);
        }
    }
}
```

#### **DestroyOther**

```csharp
using UnityEngine;
using System.Collections;

public class DestroyOther : MonoBehaviour
{
    public GameObject other;


    void Update ()
    {
        if(Input.GetKey(KeyCode.Space))
        {
            Destroy(other);
        }
    }
}
```

#### **DestroyComponent**

```csharp
using UnityEngine;
using System.Collections;

public class DestroyComponent : MonoBehaviour
{
    void Update ()
    {
        if(Input.GetKey(KeyCode.Space))
        {
            Destroy(GetComponent<MeshRenderer>());
        }
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
