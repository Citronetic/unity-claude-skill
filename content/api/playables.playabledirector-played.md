This version of Unity is unsupported.



# [PlayableDirector](Playables.PlayableDirector.html).played




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



Event that is raised when a PlayableDirector component has begun playing.





Add an event handler, to this event, to receive a notification when a PlayableDirector begins playing. The handler also receives the PlayableDirector that is playing.

When using [PlayableBehaviour](Playables.PlayableBehaviour.html), this event is raised after [PlayableBehaviour.OnPlayableCreate](Playables.PlayableBehaviour.OnPlayableCreate.html) and before [PlayableBehaviour.OnGraphStart](Playables.PlayableBehaviour.OnGraphStart.html) and [PlayableBehaviour.OnBehaviourPlay](Playables.PlayableBehaviour.OnBehaviourPlay.html).

This event will not be raised if the PlayableDirector is automatically played with [PlayableDirector.playOnAwake](Playables.PlayableDirector-playOnAwake.html).


              


```
using UnityEngine;
using UnityEngine.Playables;public class PlayableDirectorCallbackExample : MonoBehaviour
{
    public PlayableDirector director;    void OnEnable()
    {
        director.played += OnPlayableDirectorPlayed;
    }    void OnPlayableDirectorPlayed(PlayableDirector aDirector)
    {
        if (director == aDirector)
            Debug.Log("PlayableDirector named " + aDirector.name + " is now playing.");
    }    void OnDisable()
    {
        director.played -= OnPlayableDirectorPlayed;
    }
}
```





Additional resources: [PlayableDirector.paused](Playables.PlayableDirector-paused.html), [PlayableDirector.stopped](Playables.PlayableDirector-stopped.html).


            
