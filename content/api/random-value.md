This version of Unity is unsupported.



# [Random](Random.html).value




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




                [Switch to Manual](../Manual/class-random.html)







                    public static float value;






### Description



Returns a random float within [0.0..1.0] (range is inclusive) (Read Only).





**Important**: Both the lower and upper bounds are **inclusive**. Any given float value between 0.0 and 1.0, *including both 0.0 and 1.0*, will appear on average approximately once every ten million random samples.

See [Random](Random.html) for more examples of how `UnityEngine.Random` may be different from other random number generators.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Color randomColor = RandomColor();
    }    // Generate a random color value.
    Color RandomColor()
    {
        // A different random value is used for each color component (if
        // the same is used for R, G and B, a shade of grey is produced).
        return new Color(Random.value, Random.value, Random.value);
    }
}
```


            
