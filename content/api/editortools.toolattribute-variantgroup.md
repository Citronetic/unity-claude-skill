This version of Unity is unsupported.



# [ToolAttribute](EditorTools.ToolAttribute.html).variantGroup




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel












                    public Type variantGroup;






### Description



Tool variants are used to group logically similar tools into a single button in the Tools Overlay.





The variantGroup type acts a key to specify groups of tools that should be considered a group in the UI.


              


```
using System;
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine;

namespace GlobalToolVariants
{
    // Define 3 tools that should be shown as a single button in the Tools Overlay.
    struct ShapeVariantGroup {}

    [EditorTool("Line (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 2)]
    [Icon("Assets/Examples/Icons/Variant-Line.png")]
    class Line : EditorTool {}

    [EditorTool("Circle (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 1)]
    [Icon("Assets/Examples/Icons/Variant-Circle.png")]
    class Circle : EditorTool {}

    [EditorTool("Square (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 0)]
    [Icon("Assets/Examples/Icons/Variant-Square.png")]
    class Square : EditorTool {}
}
```


            
