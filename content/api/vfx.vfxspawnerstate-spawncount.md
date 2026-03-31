This version of Unity is unsupported.



# [VFXSpawnerState](VFX.VFXSpawnerState.html).spawnCount




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












                    public float spawnCount;






### Description



The current Spawn count.





The Spawn count is relative to a unique frame. If this custom block is the first one in the stack, the Spawn count is 0.0f.

The Spawn system accumulates the Spawn count. Remaining integer values are consumed by a particles system.

For example, the internal constant Spawn rate is implemented this way:


              


```
state.spawnCount += currentRate * state.deltaTime
```


            
