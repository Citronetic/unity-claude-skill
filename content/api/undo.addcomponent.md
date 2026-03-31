This version of Unity is unsupported.



# [Undo](Undo.html).AddComponent




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















## Declaration

public static [Component](Component.html) AddComponent([GameObject](GameObject.html) gameObject,
Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The game object you want to add the component to. |
| type | The type of component you want to add. |





### Returns



**Component**
        The newly added component.





### Description



Adds a component to the game object and registers an undo operation for this action.





If the undo is performed, the newly added component will be destroyed.




---








## Declaration

public static T AddComponent([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The game object you want to add the component to. |





### Returns



**T**
        The newly added component.





### Description



Generic version.


            
