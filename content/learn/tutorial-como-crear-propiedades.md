[Image: image]

# Cómo crear propiedades

Tutorial

intermediate

+0XP

5 mins

50

(268)

Unity Technologies

[Image: Cómo crear propiedades]SummarySkills

Cómo se crean propiedades para acceder a las variables miembros (campos) en una clase.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Propiedades

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

**Player**

```csharp
using UnityEngine;
using System.Collections;

public class Player
{
    //Member variables can be referred to as
    //fields.
    private int experience;

    //Experience is a basic property
    public int Experience
    {
        get
        {
            //Some other code
            return experience;
        }
        set
        {
            //Some other code
            experience = value;
        }
    }

    //Level is a property that converts experience
    //points into the leve of a player automatically
    public int Level
    {
        get
        {
            return experience / 1000;
        }
        set
        {
            experience = value * 1000;
        }
    }

    //This is an example of an auto-implemented
    //property
    public int Health{ get; set;}
}
```

**Game**

```csharp
using UnityEngine;
using System.Collections;

public class Game : MonoBehaviour
{
    void Start ()
    {
        Player myPlayer = new Player();

        //Properties can be used just like variables
        myPlayer.Experience = 5;
        int x = myPlayer.Experience;
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
