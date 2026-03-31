This version of Unity is unsupported.



# [Random](Random.html).InitState




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










## Declaration

public static void InitState(int seed);






### Parameters



| Parameter | Description |
| --- | --- |
| seed | Seed used to initialize the random number generator. |





### Description



Initializes the random number generator state with a seed.





The random number generator is not truly random, but produces numbers in a preset sequence (the values in the sequence "jump" around the range in such a way that they appear random for most purposes).

The point in the sequence where a particular run of pseudo-random values begins is selected using an integer called the *seed* value. This prevents the same run of values from occurring each time a game is played and thus avoids predictable gameplay. It is sometimes useful to produce the same run of pseudo-random values on demand by setting the seed yourself.

You might set your own seed, for example, when you generate a game level procedurally. You can use randomly-chosen elements to make the Scene look arbitrary and natural but set the seed to a preset value before generating. This will make sure that the same "random" pattern is produced each time the game is played. This can often be an effective way to reduce a game's storage requirements - you can generate as many levels as you like procedurally and store each one using nothing more than an integer seed value.

The seed is randomly initialized at startup (see [Random](Random.html) for more information on this) but if you want to randomize it later on, you can use
`Random.InitState((int)DateTime.Now.Ticks)`.

The seed cannot be retrieved once set - the pseudorandomization algorithm stores its internal state in a more complex set of numbers. However, this state can be loaded and stored via the [state](Random-state.html) property, which works with the opaque but serializable [State](Random.State.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private float[] noiseValues;
    void Start()
    {
        Random.InitState(42);
        noiseValues = new float[10];
        for (int i = 0; i < noiseValues.Length; i++)
        {
            noiseValues[i] = Random.value;
            Debug.Log(noiseValues[i]);
        }
    }
}
```


            
