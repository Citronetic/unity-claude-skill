[Image: image]

# GetComponent の使い方

Tutorial

Beginner

+0XP

5 mins

1

(14)

Unity Technologies

[Image: GetComponent の使い方]Summary

GetComponent 関数を使って他のスクリプトやコンポーネントのプロパティを指定する方法を学びます。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

Previous: [OnMouseDown](https://learn.unity.com/tutorial/onmousedown?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Delta Time](https://learn.unity.com/tutorial/delta-time?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. GetComponent 関数

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
