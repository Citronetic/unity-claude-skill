[Image: image]

# コンベンションとシンタックス

Tutorial

Beginner

+0XP

5 mins

2

(24)

Unity Technologies

[Image: コンベンションとシンタックス]Summary

ドット演算子、セミコロン、インデント、コメントなど、コードを書く上での基本的な規則や構文について学びます。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

前のチュートリアルは：[Variables and Functions](https://learn.unity.com/tutorial/variables-and-functions?projectId=5c8920b4edbc2a113b6bc26a)

次のチュートリアルは：[If Statements](https://learn.unity.com/tutorial/if-statements?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. コンベンションとシンタックス

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

```csharp
using UnityEngine;
using System.Collections;

public class BasicSyntax : MonoBehaviour
{
    void Start ()
    {
        Debug.Log(transform.position.x);

        if(transform.position.y <= 5f)
        {
            Debug.Log ("I'm about to hit the ground!");
        }
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
