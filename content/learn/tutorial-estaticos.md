[Image: image]

# Estáticos

Tutorial

intermediate

+0XP

5 mins

25

(132)

Unity Technologies

[Image: Estáticos]Summary

Aprende cómo crear variables, métodos y clases estáticos.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Estáticos

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

**Enemy**

```csharp
using UnityEngine;
using System.Collections;

public class Enemy
{
    //Static variables are shared across all instances
    //of a class.
    public static int enemyCount = 0;

    public Enemy()
    {
        //Increment the static variable to know how many
        //objects of this class have been created.
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

        //You can access a static variable by using the class name
        //and the dot operator.
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
    //Static variables are shared across all instances
    //of a class.
    public static int playerCount = 0;

    void Start()
    {
        //Increment the static variable to know how many
         //objects of this class have been created.
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
        //You can access a static variable by using the class name
        //and the dot operator.
        int x = Player.playerCount;
    }
}
```

**Utilidades**

```csharp
using UnityEngine;
using System.Collections;

public static class Utilities
{
    //A static method can be invoked without an object
    //of a class. Note that static methods cannot access
    //non-static member variables.
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
        //You can access a static method by using the class name
        //and the dot operator.
        int x = Utilities.Add (5, 6);
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
