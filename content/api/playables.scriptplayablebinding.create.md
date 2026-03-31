This version of Unity is unsupported.



# [ScriptPlayableBinding](Playables.ScriptPlayableBinding.html).Create




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

public static [Playables.PlayableBinding](Playables.PlayableBinding.html) Create(string name,
[Object](Object.html) key,
Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| key | A reference to a UnityEngine.Object that acts as a key for this binding. |
| type | The type of object that will be bound to the ScriptPlayableOutput. |
| name | The name of the ScriptPlayableOutput. |





### Returns



**PlayableBinding**
        Returns a [PlayableBinding](Playables.PlayableBinding.html) that contains information that is used to create a [ScriptPlayableOutput](Playables.ScriptPlayableOutput.html).





### Description



Creates a [PlayableBinding](Playables.PlayableBinding.html) that contains information representing a [ScriptPlayableOutput](Playables.ScriptPlayableOutput.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;public class CustomPlayableAsset : PlayableAsset
{
    public override Playable CreatePlayable(PlayableGraph graph, GameObject owner)
    {
        return Playable.Create(graph);
    }    public override IEnumerable<PlayableBinding> outputs
    {
        get { yield return ScriptPlayableBinding.Create("ScriptPlayableOutput", this, typeof(Renderer)); }
    }
}
```


            
