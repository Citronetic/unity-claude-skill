This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).isPlaying




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




                [Switch to Manual](../Manual/class-ParticleSystem.html)







                    public bool isPlaying;






### Description



Determines whether the Particle System is playing.





[isPlaying](ParticleSystem-isPlaying.html) is `true` from when the Particle System begins to play until its last live particle dies. [isPlaying](ParticleSystem-isPlaying.html) is `false` when the Particle System is no longer spawning particles and is not simulating any live particles. (Read Only).


              


```
using UnityEngine;// A particle sprite example of isPlaying. A button is created
// that shows whether the Particle System is running.  If not, then
// it can be started.  If it is running then it can be stopped.using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    public Texture2D tex;
    private ParticleSystem ps;
    private Sprite sprite;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        sprite = Sprite.Create(tex, new Rect(0.0f, 0.0f, tex.width, tex.height), Vector2.zero);        var textureSheetAnimation = ps.textureSheetAnimation;
        textureSheetAnimation.enabled = true;
        textureSheetAnimation.mode = ParticleSystemAnimationMode.Sprites;
        textureSheetAnimation.AddSprite(sprite);
    }    void OnGUI()
    {
        if (ps.isPlaying)
        {
            if (GUI.Button(new Rect(10, 70, 150, 50), "Stop and clear"))
            {
                ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            }
        }
        else
        {
            if (GUI.Button(new Rect(10, 70, 150, 50), "Play"))
            {
                ps.Play(false);
            }
        }
    }
}
```


            
