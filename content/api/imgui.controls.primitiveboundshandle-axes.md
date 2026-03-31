This version of Unity is unsupported.



# [PrimitiveBoundsHandle](IMGUI.Controls.PrimitiveBoundsHandle.html).axes




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












                    public [IMGUI.Controls.PrimitiveBoundsHandle.Axes](IMGUI.Controls.PrimitiveBoundsHandle.Axes.html) axes;






### Description



Flags specifying which axes should display control handles.





By default, all axes are enabled. You can use bitwise operations to enable or disable individual axes. Disabled axes are flattened out.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.IMGUI.Controls;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // create a 2D box handle that only works on the x- and y-axes
        BoxBoundsHandle box = new BoxBoundsHandle("MyBox".GetHashCode());
        box.axes = PrimitiveBoundsHandle.Axes.X | PrimitiveBoundsHandle.Axes.Y;
    }
}
```


            
