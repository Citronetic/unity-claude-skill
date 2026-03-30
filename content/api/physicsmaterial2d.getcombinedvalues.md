This version of Unity is unsupported.



# [PhysicsMaterial2D](PhysicsMaterial2D.html).GetCombinedValues




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

public static float GetCombinedValues(float valueA,
float valueB,
[PhysicsMaterialCombine2D](PhysicsMaterialCombine2D.html) materialCombineA,
[PhysicsMaterialCombine2D](PhysicsMaterialCombine2D.html) materialCombineB);






### Parameters



| Parameter | Description |
| --- | --- |
| valueA | Friction or bounciness value used by one Collider2D. |
| valueB | Friction or bounciness value used by another Collider2D. |
| materialCombineA | The combined mode used by one Collider2D. |
| materialCombineB | The combined mode used by another Collider2D. |





### Returns



**float**
        The effective friction or bounciness value used in the collision response.





### Description



Calculates the effective value used when two [Collider2D](Collider2D.html) come into contact with their own [PhysicsMaterial2D](PhysicsMaterial2D.html).





You can use this method to determine the exact friction or bounciness value applied when two [Collider2D](Collider2D.html) come into contact.


            
