[Image: image]

# 覆盖

Tutorial

intermediate

+0XP

5 mins

9

(90)

Unity Technologies

[Image: 覆盖]Summary

如何用子类的成员覆盖基类的成员。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 覆盖

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

**Fruit 类**

```csharp
using UnityEngine;
using System.Collections;

public class Fruit
{
    public Fruit ()
    {
        Debug.Log("1st Fruit Constructor Called");
    }

    //这些方法是虚方法，因此可以在子类中
    //将它们覆盖
    public virtual void Chop ()
    {
        Debug.Log("The fruit has been chopped.");
    }

    public virtual void SayHello ()
    {
        Debug.Log("Hello, I am a fruit.");
    }
}
```

**Apple 类**

```csharp
using UnityEngine;
using System.Collections;

public class Apple : Fruit
{
    public Apple ()
    {
        Debug.Log("1st Apple Constructor Called");
    }

    //这些方法是覆盖方法，因此
    //可以覆盖父类中的任何
    //虚方法。
    public override void Chop ()
    {
        base.Chop();
        Debug.Log("The apple has been chopped.");
    }

    public override void SayHello ()
    {
        base.SayHello();
        Debug.Log("Hello, I am an apple.");
    }
}
```

**FruitSalad 类**

```csharp
using UnityEngine;
using System.Collections;

public class FruitSalad : MonoBehaviour
{
    void Start ()
    {
        Apple myApple = new Apple();

        //请注意，Apple 版本的方法
        //将覆盖 Fruit 版本。另外请注意，
        //由于 Apple 版本使用“base”关键字
        //来调用 Fruit 版本，因此两者都被调用。
        myApple.SayHello();
        myApple.Chop();

        //“覆盖”在多态情况下也很有用。
        //由于 Fruit 类的方法是“虚”的，
        //而 Apple 类的方法是“覆盖”的，因此
        //当我们将 Apple 向上转换为 Fruit 时，
        //将使用 Apple 版本的方法。
        Fruit myFruit = new Apple();
        myFruit.SayHello();
        myFruit.Chop();
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
