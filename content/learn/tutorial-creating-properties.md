[Image: image]

# Creating Properties

Tutorial

intermediate

+10XP

5 mins

746

(3095)

Unity Technologies

[Image: Creating Properties]SummarySkills

How to create properties to access the member variables (fields) in a class.

Languages available:

EnglishEnglishEspañol日本語简体中文English

## 1. Properties

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

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

Mark step as complete

## Complete this Tutorial

Mark all steps complete
