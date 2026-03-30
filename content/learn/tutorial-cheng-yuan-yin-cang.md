[Image: image]

# 成员隐藏

Tutorial

intermediate

+0XP

5 mins

8

(78)

Unity Technologies

[Image: 成员隐藏]Summary

如何在派生类中实现基成员的隐藏。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 成员隐藏

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

**Humanoid 类**

```csharp
using UnityEngine;
using System.Collections;

public class Humanoid
{
    //Yell 方法的基版本
    public void Yell()
    {
        Debug.Log ("Humanoid version of the Yell() method");
    }
}
```

**Enemy 类**

```csharp
using UnityEngine;
using System.Collections;

public class Enemy : Humanoid
{
    //这会隐藏 Humanoid 版本。
    new public void Yell()
    {
        Debug.Log ("Enemy version of the Yell() method");
    }
}
```

**Orc 类**

```csharp
using UnityEngine;
using System.Collections;

public class Orc : Enemy
{
    //这会隐藏 Enemy 版本。
    new public void Yell()
    {
        Debug.Log ("Orc version of the Yell() method");
    }
}
```

**WarBand 类**

```csharp
using UnityEngine;
using System.Collections;

public class WarBand : MonoBehaviour
{
    void Start ()
    {
        Humanoid human = new Humanoid();
        Humanoid enemy = new Enemy();
        Humanoid orc = new Orc();

        //注意每个 Humanoid 变量如何包含
        //对继承层级视图中
        //不同类的引用，但每个变量都
        //调用 Humanoid Yell() 方法。
        human.Yell();
        enemy.Yell();
        orc.Yell();
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
