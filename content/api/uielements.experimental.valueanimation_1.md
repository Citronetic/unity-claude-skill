This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# ValueAnimation<T0>





class in
          UnityEngine.UIElements.Experimental



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


                  Leave feedback





Implements interfaces:[IValueAnimation](UIElements.Experimental.IValueAnimation.html)




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



Implementation object for transition animations.





### Properties



| Property | Description |
| --- | --- |
| autoRecycle | Returns true if this animation object will be automatically returned to the instance pool after the animation has completed. |
| durationMs | Duration of the animation in milliseconds. |
| easingCurve | Smoothing function related to this animation. Default value is Easing.OutQuad. |
| from | The animation start value. |
| initialValue | Callback invoked when the from field has not been set, in order to retrieve the starting state of this animation. |
| interpolator | Value interpolation method. |
| isRunning | Tells if the animation is currently active. |
| onAnimationCompleted | Callback invoked when this animation has completed. |
| to | The animation end value. |
| valueUpdated | Callback invoked after every value interpolation. |





### Constructors



| Constructor | Description |
| --- | --- |
| ValueAnimation_1 | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| Ease | Sets the easing function. |
| KeepAlive | Will not return the object to the instance pool when the animation has completed. |
| OnCompleted | Sets a callback invoked when this animation has completed. |
| Recycle | Returns this animation object into its object pool. |
| Start | Starts the animation using this object's values. |
| Stop | Stops this animation. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates a new ValueAnimation object or returns an available one from it's instance pool. |


            
