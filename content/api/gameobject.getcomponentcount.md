This version of Unity is unsupported.



# [GameObject](GameObject.html).GetComponentCount




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

public int GetComponentCount();






### Returns



**int**
        The number of components on the GameObject as an Integer value.





### Description



Retrieves the total number of components currently attached to the GameObject.





You can use `GetComponentCount` to iterate through component indices, which is especially convenient if used together with [GameObject.GetComponentAtIndex](GameObject.GetComponentAtIndex.html). For example, you can iterate through the indices to find the index of a particular component you're interested in and then save the index for later use.


              


```
using UnityEngine;public class IterateComponents : MonoBehaviour
{
int m_SavedComponentIndex = -1;    void Start()
    {
        //Iterate through components  on the GameObject
        for (int i = 0; i < gameObject.GetComponentCount(); i++)
        {
            var currComponent = gameObject.GetComponentAtIndex(i);

            //Check if it is a Rigidbody component
            if (currComponent.GetType() == typeof(Rigidbody) )
            {
                m_SavedComponentIndex = i;
            }
        }        Debug.Log(m_SavedComponentIndex != -1 ? $"Found component at index: {m_SavedComponentIndex}" : "Could not find component");
    }
}
```





Additional resources: [GameObject.GetComponentAtIndex](GameObject.GetComponentAtIndex.html)


            
