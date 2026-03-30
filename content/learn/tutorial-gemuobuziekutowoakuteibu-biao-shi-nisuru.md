[Image: image]

# ゲームオブジェクトをアクティブ（表示）にする

Tutorial

Beginner

+0XP

5 mins

4

(15)

Unity Technologies

[Image: ゲームオブジェクトをアクティブ（表示）にする]Summary

SetActive や activeSelf / activeInHierarchy を使って、シーン内のゲームオブジェクトのアクティブな状態を、単独またはヒエラルキー内で処理する方法を学びます。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

前のチュートリアルは：[Enabling and Disabling GameObjects](https://learn.unity.com/tutorial/enabling-and-disabling-components?projectId=5c8920b4edbc2a113b6bc26a)

次のチュートリアルは：[Translate and Rotate](https://learn.unity.com/tutorial/translate-and-rotate?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. ゲームオブジェクトをアクティブ（表示）にする

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 2:25Loaded: 0.00%0:00Remaining Time -2:251xPlayback Rate

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
