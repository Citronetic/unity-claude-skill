[Image: image]

# 静态

Tutorial

intermediate

+0XP

5 mins

6

(113)

Unity Technologies

[Image: 静态]Summary

了解如何创建静态变量、方法和类。

Languages available:

简体中文EnglishEspañol日本語简体中文简体中文

## 1. 静态

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

**Enemy**

```csharp
using UnityEngine;
using System.Collections;

public class Enemy
{
    //静态变量是在类的所有实例之间
    //共享的变量。
    public static int enemyCount = 0;

    public Enemy()
    {
        //通过递增静态变量了解
        //已创建此类的多少个对象。
        enemyCount++;
    }
}
```

**Game**

```csharp
using UnityEngine;
using System.Collections;

public class Game
{
    void Start ()
    {
        Enemy enemy1 = new Enemy();
        Enemy enemy2 = new Enemy();
        Enemy enemy3 = new Enemy();

        //可以使用类名和点运算符
        //来访问静态变量。
        int x = Enemy.enemyCount;
    }
}
```

**Player**

```csharp
using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour
{
    //静态变量是在类的所有实例之间
    //共享的变量。
    public static int playerCount = 0;

    void Start()
    {
        //通过递增静态变量了解
         //已创建此类的多少个对象。
        playerCount++;
    }
}
```

**PlayerManager**

```csharp
using UnityEngine;
using System.Collections;

public class PlayerManager : MonoBehaviour
{
    void Start()
    {
        //可以使用类名和点运算符
        //来访问静态变量。
        int x = Player.playerCount;
    }
}
```

**Utilities**

```csharp
using UnityEngine;
using System.Collections;

public static class Utilities
{
    //可以在没有类对象的情况下调用
    //静态方法。请注意，静态方法无法访问
    //非静态成员变量。
    public static int Add(int num1, int num2)
    {
        return num1 + num2;
    }
}
```

**UtilitiesExample**

```csharp
using UnityEngine;
using System.Collections;

public class UtilitiesExample : MonoBehaviour
{
    void Start()
    {
        //可以使用类名和点运算符
        //来访问静态方法。
        int x = Utilities.Add (5, 6);
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
