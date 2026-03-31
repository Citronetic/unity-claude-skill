This version of Unity is unsupported.



# [PlayableGraph](Playables.PlayableGraph.html).Connect




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

public bool Connect(U source,
int sourceOutputPort,
V destination,
int destinationInputPort);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The source playable or its handle. |
| sourceOutputPort | The port used in the source playable. |
| destination | The destination playable or its handle. |
| destinationInputPort | The port used in the destination playable. If set to -1, a new port is created and connected. |





### Returns



**bool**
        Returns true if connection is successful.





### Description



Connects two [Playable](Playables.Playable.html) instances.





The connections determine the topology of the [PlayableGraph](Playables.PlayableGraph.html) and how it is evaluated.

Playables can be connected together to form a tree structure. Each Playable has a set of inputs and a set of outputs. These can be viewed as “slots” where other Playables can be attached to.

                    When a Playable is first created, its input count is reset to 0, meaning that it has no children Playables attached. Outputs behave a little differently—every Playable has a default output created when first created.

                    You connect Playables together using the method [PlayableGraph.Connect](Playables.PlayableGraph.Connect.html), and you can disconnect them from each other using [PlayableGraph.Disconnect](Playables.PlayableGraph.Disconnect.html).

                    There is no limit set on the amount of inputs a Playable can have.


              


```
using UnityEngine;
using UnityEngine.Animations;
using UnityEngine.Playables;public class GraphCreationSample : MonoBehaviour
{
    PlayableGraph m_Graph;
    public AnimationClip clipA;
    public AnimationClip clipB;    void Start()
    {
        // Create the PlayableGraph.
        m_Graph = PlayableGraph.Create();        // Add an AnimationPlayableOutput to the graph.
        var animOutput = AnimationPlayableOutput.Create(m_Graph, "AnimationOutput", GetComponent<Animator>());        // Add an AnimationMixerPlayable to the graph.
        var mixerPlayable = AnimationMixerPlayable.Create(m_Graph, 2);        // Add two AnimationClipPlayable to the graph.
        var clipPlayableA = AnimationClipPlayable.Create(m_Graph, clipA);
        var clipPlayableB = AnimationClipPlayable.Create(m_Graph, clipB);        // Create the topology, connect the AnimationClipPlayable to the
        // AnimationMixerPlayable.
        m_Graph.Connect(clipPlayableA, 0, mixerPlayable, 0);
        m_Graph.Connect(clipPlayableB, 0, mixerPlayable, 1);        // Use the AnimationMixerPlayable as the source for the AnimationPlayableOutput.
        animOutput.SetSourcePlayable(mixerPlayable);        // Set the weight for both inputs of the mixer.
        mixerPlayable.SetInputWeight(0, 1);
        mixerPlayable.SetInputWeight(1, 1);        // Play the graph.
        m_Graph.Play();
    }    private void OnDestroy()
    {
        // Destroy the graph once done with it.
        m_Graph.Destroy();
    }
}
```


            
