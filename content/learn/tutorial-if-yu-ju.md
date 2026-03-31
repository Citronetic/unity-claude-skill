[Image: image]

# IF 语句

Tutorial

Beginner

+0XP

5 mins

12

(312)

Unity Technologies

[Image: IF 语句]Summary

如何使用 IF 语句在代码中设置条件。

本教程包含在“[初级编程](https://learn.unity.com/project/chu-ji-bian-cheng?language=zh)”项目中。

上一教程：[约定和语法](https://learn.unity.com/tutorial/yue-ding-he-yu-fa?language=zh&projectId=5e3afd88edbc2a2998252c77)

下一教程：[循环](https://learn.unity.com/tutorial/xun-huan?language=zh&projectId=5e3afd88edbc2a2998252c77)

Languages available:

简体中文EnglishEspañol日本語한국어简体中文简体中文

## 1. IF 语句

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

```csharp
using UnityEngine;
using System.Collections;

public class IfStatements : MonoBehaviour
{
    float coffeeTemperature = 85.0f;
    float hotLimitTemperature = 70.0f;
    float coldLimitTemperature = 40.0f;


    void Update ()
    {
        if(Input.GetKeyDown(KeyCode.Space))
            TemperatureTest();

        coffeeTemperature -= Time.deltaTime * 5f;
    }


    void TemperatureTest ()
    {
        // 如果咖啡的温度高于最热的饮用温度...
        if(coffeeTemperature > hotLimitTemperature)
        {
            // ... 执行此操作。
            print("Coffee is too hot.");
        }
        // 如果不是，但咖啡的温度低于最冷的饮用温度...
        else if(coffeeTemperature < coldLimitTemperature)
        {
            // ... 执行此操作。
            print("Coffee is too cold.");
        }
        // 如果两者都不是，则...
        else
        {
            // ... 执行此操作。
            print("Coffee is just right.");
        }
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
