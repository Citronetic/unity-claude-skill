This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# ContentZoomer





class in
          UnityEditor.Experimental.GraphView



/



Inherits from:[UIElements.Manipulator](UIElements.Manipulator.html)


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



















### Description



Manipulator that allows zooming in GraphView.





### Static Properties



| Property | Description |
| --- | --- |
| DefaultMaxScale | Default max zoom level. |
| DefaultMinScale | Default min zoom level. |
| DefaultReferenceScale | Default reference zoom level. |
| DefaultScaleStep | Default zoom step. |





### Properties



| Property | Description |
| --- | --- |
| maxScale | Max zoom level. |
| minScale | Min zoom level. |
| referenceScale | Reference zoom level. |
| scaleStep | Zoom step: percentage of variation between a zoom level and the next. For example, with a value of 0.15, which represents 15%, a zoom level of 200% will become 230% when zooming in. |





### Constructors



| Constructor | Description |
| --- | --- |
| ContentZoomer | ContentZoomer constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| RegisterCallbacksOnTarget | Called to register click event callbacks on the target element. |
| UnregisterCallbacksFromTarget | Called to unregister event callbacks from the target element. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| target | VisualElement being manipulated. |












            
