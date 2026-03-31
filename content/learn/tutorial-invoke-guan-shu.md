[Image: image]

# Invoke 関数

Tutorial

Beginner

+0XP

5 mins

2

(13)

Unity Technologies

[Image: Invoke 関数]Summary

Invoke 関数を使用すると、メソッドの呼び出しを後で実行するようにスケジュールすることができます。この動画では、Unity スクリプトで Invoke 関数、InvokeRepeating 関数、CancelInvoke 関数を使用する方法を学びます。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

前回のチュートリアルは：[Arrays](https://learn.unity.com/tutorial/arrays-9o?projectId=5c8920b4edbc2a113b6bc26a)

次のチュートリアルは：[Enumerations](https://learn.unity.com/tutorial/enumerations?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. Invoke 関数

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
