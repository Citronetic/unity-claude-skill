[Image: image]

# Input クラスの GetButton と GetKey 関数

Tutorial

Beginner

+0XP

5 mins

1

(13)

Unity Technologies

[Image: Input クラスの GetButton と GetKey 関数]Summary

本チュートリアルでは、Unity プロジェクトで入力用のボタンやキーを取得する方法と、これらの軸がどのように動作するか、また Unity Input マネージャーでどのように変更できるかを説明します。

本チュートリアルは [Beginner Scripting プロジェクト](https://learn.unity.com/project/beginner-gameplay-scripting)に含まれています。

前回のチュートリアルは：[Destroy](https://learn.unity.com/tutorial/destroy-i?projectId=5c8920b4edbc2a113b6bc26a)

次のチュートリアルは：[GetAxis](https://learn.unity.com/tutorial/getaxis-o?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. GetButton と GetKey 関数

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### **KeyInput**

```csharp
using UnityEngine;
using System.Collections;

public class KeyInput : MonoBehaviour
{
    public GUITexture graphic;
    public Texture2D standard;
    public Texture2D downgfx;
    public Texture2D upgfx;
    public Texture2D heldgfx;

    void Start()
    {
        graphic.texture = standard;
    }

    void Update ()
    {
        bool down = Input.GetKeyDown(KeyCode.Space);
        bool held = Input.GetKey(KeyCode.Space);
        bool up = Input.GetKeyUp(KeyCode.Space);

        if(down)
        {
            graphic.texture = downgfx;
        }
        else if(held)
        {
            graphic.texture = heldgfx;
        }
        else if(up)
        {
            graphic.texture = upgfx;
        }
        else
        {
            graphic.texture = standard;
        }

        guiText.text = " " + down + "\n " + held + "\n " + up;
    }
}
```

#### **ButtonInput**

```csharp
using UnityEngine;
using System.Collections;

public class ButtonInput : MonoBehaviour
{
    public GUITexture graphic;
    public Texture2D standard;
    public Texture2D downgfx;
    public Texture2D upgfx;
    public Texture2D heldgfx;

    void Start()
    {
        graphic.texture = standard;
    }

    void Update ()
    {
        bool down = Input.GetButtonDown("Jump");
        bool held = Input.GetButton("Jump");
        bool up = Input.GetButtonUp("Jump");

        if(down)
        {
            graphic.texture = downgfx;
        }
        else if(held)
        {
            graphic.texture = heldgfx;
        }
        else if(up)
        {
            graphic.texture = upgfx;
        }
        else
        {
            graphic.texture = standard;
        }

        guiText.text = " " + down + "\n " + held + "\n " + up;
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
