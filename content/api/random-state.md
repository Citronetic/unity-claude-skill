This version of Unity is unsupported.



# [Random](Random.html).state




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







                    public static [Random.State](Random.State.html) state;






### Description



Gets or sets the full internal state of the random number generator.





This property can be used to save and restore a previously saved state of the random number generator. Note that `state` is serializable, so that [determinism](https://en.wikipedia.org/wiki/Deterministic_algorithm) can be preserved across sessions. Determinism is an important trait in many scenarios, such as multiplayer games, reproducible simulations, and unit testing.

Generator state can be (re)-initialized in two ways:



          1. Call [InitState](Random.InitState.html) with a simple integer "seed". This is a one-way operation and cannot be retrieved.

          2. Setting [state](Random-state.html) using a [State](Random.State.html) previously retrieved from this same property. This type cannot be constructed by the user.





See the following example for an explanation of how these work.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        const int initialSeed = 1234;        Random.InitState(initialSeed); // cannot be retrieved        PrintRandom("Step 1");
        PrintRandom("Step 2");        Random.State stateBeforeStep3 = Random.state; // can be serialized        PrintRandom("Step 3");
        PrintRandom("Step 4");        Random.state = stateBeforeStep3;        PrintRandom("Step 5");
        PrintRandom("Step 6");        Random.InitState(initialSeed);        PrintRandom("Step 7");
        PrintRandom("Step 8");
    }    static void PrintRandom(string label) =>
        Debug.Log($"{label} - RandomValue {Random.Range(0, 100)}");
}/*
Output:Step 1 - RandomValue 38
Step 2 - RandomValue 76
Step 3 - RandomValue 69
Step 4 - RandomValue 11
Step 5 - RandomValue 69
Step 6 - RandomValue 11
Step 7 - RandomValue 38
Step 8 - RandomValue 76
*/
```





The values from step 5 and 6 will be equal to those from step 3 and 4 because the internal [state](Random-state.html) of the generator was restored to what we saved in `stateBeforeStep3`. Also, the values from step 7 and 8 will be equal to those from step 1 and 2 because we are resetting the generator state with `initialSeed` via [InitState](Random.InitState.html), which leaves the generator in the exact same state as right before step 1.


            
