This version of Unity is unsupported.



# [Animator](Animator.html).StringToHash




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public static int StringToHash(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The string to convert to an id. |





### Returns



**int**
        The hash of the input string.





### Description



Generates a parameter id from a string.





This method uses CRC32 to generate an id from a string. Use a generated id to optimize assigning and retrieving parameters. A generated id is valid as long as the input string doesn't change. This means that a generated id persists between sessions and can be used for networking.


              


```
using UnityEngine;

// Press the space key in Play Mode to switch to the Bounce state.

[RequireComponent(typeof(Animator))]
public class AnimatorPlayExample : MonoBehaviour
{
    // The Animator component on the GameObject this script is attached to.
    Animator m_Animator;

    // Cache the hash of the bounce state.
    int m_BounceStateHash;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
        m_BounceStateHash = Animator.StringToHash("Base Layer.Bounce");
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Play Bounce but start at a quarter of the way through
            m_Animator.Play(m_BounceStateHash, 0, 0.25f);
        }
    }
}
```


            
