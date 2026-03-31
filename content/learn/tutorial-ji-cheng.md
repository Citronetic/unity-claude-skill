[Image: image]

# 继承

Tutorial

intermediate

+0XP

5 mins

9

(93)

Unity Technologies

[Image: 继承]Summary

如何使用继承来重用代码并在相关类之间建立牢固的关系。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 继承

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

//这是基类，
//也称为父类。
public class Fruit
{
    public string color;

    //这是 Fruit 类的第一个构造函数，
    //不会被任何派生类继承。
    public Fruit()
    {
        color = "orange";
        Debug.Log("1st Fruit Constructor Called");
    }

    //这是 Fruit 类的第二个构造函数，
    //不会被任何派生类继承。
    public Fruit(string newColor)
    {
        color = newColor;
        Debug.Log("2nd Fruit Constructor Called");
    }

    public void Chop()
    {
        Debug.Log("The " + color + " fruit has been chopped.");
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

//这是派生类，
//也称为子类。
public class Apple : Fruit
{
    //这是 Apple 类的第一个构造函数。
    //它立即调用父构造函数，甚至
    //在它运行之前调用。
    public Apple()
    {
        //注意 Apple 如何访问公共变量 color，
        //该变量是父 Fruit 类的一部分。
        color = "red";
        Debug.Log("1st Apple Constructor Called");
    }

    //这是 Apple 类的第二个构造函数。
    //它使用“base”关键字指定
    //要调用哪个父构造函数。
    public Apple(string newColor) : base(newColor)
    {
        //请注意，该构造函数不会设置 color，
        //因为基构造函数会设置作为参数
        //传递的 color。
        Debug.Log("2nd Apple Constructor Called");
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
        //让我们用默认构造函数
        //来说明继承。
        Debug.Log("Creating the fruit");
        Fruit myFruit = new Fruit();
        Debug.Log("Creating the apple");
        Apple myApple = new Apple();

        //调用 Fruit 类的方法。
        myFruit.SayHello();
        myFruit.Chop();

        //调用 Apple 类的方法。
        //注意 Apple 类如何访问
        //Fruit 类的所有公共方法。
        myApple.SayHello();
        myApple.Chop();

        //现在，让我们用读取字符串的
        //构造函数来说明继承。
        Debug.Log("Creating the fruit");
        myFruit = new Fruit("yellow");
        Debug.Log("Creating the apple");
        myApple = new Apple("green");

        //调用 Fruit 类的方法。
        myFruit.SayHello();
        myFruit.Chop();

        //调用 Apple 类的方法。
        //注意 Apple 类如何访问
        //Fruit 类的所有公共方法。
        myApple.SayHello();
        myApple.Chop();
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
