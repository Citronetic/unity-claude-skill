[Image: image]

# 動作コンポーネントとしてのスクリプト

Tutorial

Beginner

+0XP

5 mins

0

(73)

Unity Technologies

[Image: 動作コンポーネントとしてのスクリプト]Summary

Unity のスクリプトとは？Unity の動作コンポーネントであるスクリプトについて、その作成方法とオブジェクトへのアタッチ方法をご紹介します。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

次のチュートリアルは：[Variables and Functions](https://learn.unity.com/tutorial/variables-and-functions?projectId=5c8920b4edbc2a113b6bc26a)

[このトピックについて詳しく知りたいですか？エキスパートとオンラインで 1：1 レッスンを受けてみませんか？](https://livehelp.unity.com/?utm_source=learn&utm_medium=learncourse&utm_campaign=livehelp-relaunch&_gl=1*1f12l01*_ga*MTQ2NjM3MDQ2NC4xNTUzMDYwMjcx*_ga_1S78EFL1W5*MTYyNTcxMjE2My4xODAuMS4xNjI1NzEyOTYwLjU5&_ga=2.18065401.1763310355.1625616839-1466370464.1553060271)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. 動作コンポーネントとしてのスクリプト

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

public class ExampleBehaviourScript : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer> ().material.color = Color.red;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
