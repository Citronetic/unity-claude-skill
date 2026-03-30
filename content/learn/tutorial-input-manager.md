[Image: image]

# Input Manager

Tutorial

Beginner

+10XP

5 mins

212

(298)

Unity Technologies

[Image: Input Manager]Summary

The Input Manager is a great way to set up various input devices. This may include keyboard input, mouse input, and game controller input. In this tutorial, you will learn about the Input Manager.

Languages available:

日本語English日本語日本語

## 1. Using the Input Manager

Q&A (0)

This tutorial has been verified using Unity 2019.4.10f1 LTS

The Input Manager is a great way to set up various input devices. This may include keyboard input, mouse input, and game controller input. The Input Manager requires a name for the input mapping and a set of buttons or axes to associate them to (**Figure 01**).  These names are strings (human-readable text variables in scripting) that are written into scripts to create what the inputs actually do to a GameObject in Unity. It is important to know that the string name in the Input Manager must match the string in the script exactly in capitalization and spelling. For more information about mapping Input, check out the [Unity documentation](https://docs.unity3d.com/Manual/class-InputManager.html).

1. In the Menu Bar, click **Edit**>**Project Settings** >**Input Manager**
2. In the Inspector, expand Axes
3. Increase the Size parameter to make room for the new Input parameters
4. Expand the new Input Axis
5. Rename the Input Axis
6. Enter the correct Positive button
7. Set the Type to the necessary Input Type desired
8. Change the Axis and Joy Num as necessary (**Figure 01**)

[Image: image]

The following code shows how the “Jump” Input Axis is used.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Jump : MonoBehaviour
{

    private bool isGrounded = false;

    // Update is called once per frame
    void Update ()
    {
        if (!isGrounded) //Only jump if the player is grounded
        {
            if (Input.GetButton("Jump")) //Jump is set up in the Input Manager
            {
                //Add jump code here
            }
        }
     }
}
```

ステップを完了としてマーク

## 2. Conclusion

Q&A (0)

You now know how to navigate to the Input Manager and use it to set up various input devices. In this tutorial, you learned how to create new inputs in the Input Manager as well as how to edit current ones. You also learned that each input has a “Name” and the names are strings in which you can use in your scripts to call that input and create events when the input is triggered.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
