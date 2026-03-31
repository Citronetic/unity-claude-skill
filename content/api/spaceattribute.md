This version of Unity is unsupported.



# SpaceAttribute





class in
          UnityEngine



/



Inherits from:[PropertyAttribute](PropertyAttribute.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Use this [PropertyAttribute](PropertyAttribute.html) to add some spacing in the Inspector.





The spacing is done using a [DecoratorDrawer](DecoratorDrawer.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    int health = 0;
    int maxHealth = 100;    [Space(10)] // 10 pixels of spacing here.    int shield = 0;
    int maxShield = 0;
}
```





### Properties



| Property | Description |
| --- | --- |
| height | The spacing in pixels. |





### Constructors



| Constructor | Description |
| --- | --- |
| SpaceAttribute | Use this DecoratorDrawer to add some spacing in the Inspector. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| applyToCollection | Makes attribute affect collections instead of their items. |
| order | Optional field to specify the order that multiple DecorationDrawers should be drawn in. |












            
