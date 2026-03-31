This version of Unity is unsupported.



# [GameObject](GameObject.html).CompareTag




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




                [Switch to Manual](../Manual/class-GameObject.html)










## Declaration

public bool CompareTag(string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | The tag to check for on the GameObject. |





### Returns



**bool**

          `true` if the GameObject has the given tag, `false` otherwise.





### Description



Checks if the specified tag is attached to the GameObject.





The example below calls `CompareTag` on a [Collider](Collider.html) to check if it has the `Player` tag.


              


```
// Immediate death trigger.
// Destroys any colliders that enter the trigger, if they are tagged "Player".
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            Destroy(other.gameObject);
        }
    }
}
```





Additional resources: [GameObject.FindWithTag](GameObject.FindWithTag.html)




---








## Declaration

public bool CompareTag([TagHandle](TagHandle.html) tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | A TagHandle representing the tag to check for on the GameObject. |





### Returns



**bool**

          `true` if the GameObject has the given tag, `false` otherwise.





### Description



Checks if the specified tag is attached to the GameObject.





This overload of the method, which takes a [TagHandle](TagHandle.html), can be faster than the overload which takes a string, particularly if the same `TagHandle` can be reused for many calls.

The example below calls `CompareTag` with a `TagHandle` on a [Collider](Collider.html) to check if it has the `Player` tag:


              


```
// Immediate death trigger.
// Destroys any colliders that enter the trigger, if they are tagged "Player".
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private TagHandle _playerTag;
    public void OnEnable()
    {
        _playerTag = TagHandle.GetExistingTag("Player");
    }    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag(_playerTag))
        {
            Destroy(other.gameObject);
        }
    }
}
```





Additional resources: [TagHandle](TagHandle.html)


            
