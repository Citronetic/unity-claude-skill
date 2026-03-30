This version of Unity is unsupported.



# [PlayableDirector](Playables.PlayableDirector.html).paused




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



Event that is raised when a PlayableDirector component has paused.





Add an event handler, to this event, to receive a notification when a PlayableDirector is paused. The handler also receives the PlayableDirector that is paused.

When using [PlayableBehaviour](Playables.PlayableBehaviour.html), this event is raised before [PlayableBehaviour.OnBehaviourPause](Playables.PlayableBehaviour.OnBehaviourPause.html).


              


```
using UnityEngine;
using UnityEngine.Playables;public class PlayableDirectorCallbackExample : MonoBehaviour
{
    public PlayableDirector director;
    void OnEnable()
    {
        director.paused += OnPlayableDirectorPaused;
    }    void OnPlayableDirectorPaused(PlayableDirector aDirector)
    {
        if (director == aDirector)
            Debug.Log("PlayableDirector named " + aDirector.name + " is now paused.");
    }    void OnDisable()
    {
        director.paused -= OnPlayableDirectorPaused;
    }
}
```





Additional resources: [PlayableDirector.played](Playables.PlayableDirector-played.html), [PlayableDirector.stopped](Playables.PlayableDirector-stopped.html).


            
