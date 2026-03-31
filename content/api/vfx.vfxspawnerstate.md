This version of Unity is unsupported.



# VFXSpawnerState





class in
          UnityEngine.VFX


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



The spawn state of a Spawn system.





This class is useful for debugging a Visual Effect's spawner. For example, you can see if the effect is currently playing, the number of loops the spawner has processed, as well as the current [state](VFX.VFXSpawnerLoopState.html) of the spawner.

                To access the state of a Visual Effect's Spawn system, either use [VisualEffect.GetSpawnSystemInfo](VFX.VisualEffect.GetSpawnSystemInfo.html) or, in a class that inherits from [VFXSpawnerCallbacks](VFX.VFXSpawnerCallbacks.html), override the [OnUpdate](VFX.VFXSpawnerCallbacks.OnUpdate.html) method.


              


```
using UnityEngine;
using UnityEngine.VFX;class ConstantRateEquivalent : VFXSpawnerCallbacks
{
    public class InputProperties
    {
        [Min(0), Tooltip("Sets the number of particles to spawn per second.")]
        public float Rate = 10;
    }    static private readonly int rateID = Shader.PropertyToID("Rate");    public sealed override void OnPlay(VFXSpawnerState state, VFXExpressionValues vfxValues, VisualEffect vfxComponent)
    {
    }    public sealed override void OnUpdate(VFXSpawnerState state, VFXExpressionValues vfxValues, VisualEffect vfxComponent)
    {
        if (state.playing)
        {
            float currentRate = vfxValues.GetFloat(rateID);
            state.spawnCount += currentRate * state.deltaTime;
        }
    }    public sealed override void OnStop(VFXSpawnerState state, VFXExpressionValues vfxValues, VisualEffect vfxComponent)
    {
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| delayAfterLoop | The current delay time that the VFXSpawner waits for after it finishes a loop. |
| delayBeforeLoop | The current delay time that the VFXSpawner waits for before it starts a loop. |
| deltaTime | The current delta time. |
| loopCount | The current loop count. |
| loopDuration | The duration of the looping state. |
| loopIndex | The current index of loop. |
| loopState | The current state of VFXSpawnerState. |
| newLoop | This boolean indicates if a new loop has just started. |
| playing | The current playing state. |
| spawnCount | The current Spawn count. |
| totalTime | The accumulated delta time since the last Play event. |
| vfxEventAttribute | Gets the modifiable current event attribute (Read Only). |


            
