[Image: image]

# 多态

Tutorial

intermediate

+0XP

5 mins

5

(78)

Unity Technologies

[Image: 多态]Summary

如何使用多态 (Polymorphism)、向上转换 (Upcasting) 和向下转换 (Downcasting) 在继承的类之间创建强大而动态的功能。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 多态

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
    public Fruit()
    {
        Debug.Log("1st Fruit Constructor Called");
    }

    public void Chop()
    {
        Debug.Log("The fruit has been chopped.");
    }

    public void SayHello()
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
    public Apple()
    {
        Debug.Log("1st Apple Constructor Called");
    }

    //Apple 有自己的 Chop() 和 SayHello() 版本。
    //运行脚本时，请注意何时调用
    //Fruit 版本的这些方法以及何时调用
    //Apple 版本的这些方法。
    //此示例使用“new”关键字禁止
    //来自 Unity 的警告，同时不覆盖
    //Apple 类中的方法。
    public new void Chop()
    {
        Debug.Log("The apple has been chopped.");
    }

    public new void SayHello()
    {
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
        //请注意，这里的变量“myFruit”的类型是
        //Fruit，但是被分配了对 Apple 的引用。这是
        //由于多态而起作用的。由于 Apple 是 Fruit，
        //因此这样是可行的。虽然 Apple 引用存储
        //在 Fruit 变量中，但只能像 Fruit 一样使用
        Fruit myFruit = new Apple();

        myFruit.SayHello();
        myFruit.Chop();

        //这称为向下转换。Fruit 类型的变量“myFruit”
        //实际上包含对 Apple 的引用。因此，
        //可以安全地将它转换回 Apple 变量。这使得
        //它可以像 Apple 一样使用，而在以前只能像 Fruit
        //一样使用。
        Apple myApple = (Apple)myFruit;

        myApple.SayHello();
        myApple.Chop();
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
