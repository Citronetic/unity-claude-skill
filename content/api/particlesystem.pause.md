This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).Pause




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










## Declaration

public void Pause();






## Declaration

public void Pause(bool withChildren = true);






### Parameters



| Parameter | Description |
| --- | --- |
| withChildren | Pause all child Particle Systems as well. |





### Description



Pauses the system so no new particles are emitted and the existing particles are not updated.





Additional resources: [Play](ParticleSystem.Play.html), [Stop](ParticleSystem.Stop.html) functions.

The following example creates a GUI window for manipulating a Particle System.


              


```
using UnityEngine;public class ParticleSystemControllerWindow : MonoBehaviour
{
    ParticleSystem system
    {
        get
        {
            if (_CachedSystem == null)
                _CachedSystem = GetComponent<ParticleSystem>();
            return _CachedSystem;
        }
    }
    private ParticleSystem _CachedSystem;    public Rect windowRect = new Rect(0, 0, 300, 120);    public bool includeChildren = true;    void OnGUI()
    {
        windowRect = GUI.Window("ParticleController".GetHashCode(), windowRect, DrawWindowContents, system.name);
    }    void DrawWindowContents(int windowId)
    {
        if (system)
        {
            GUILayout.BeginHorizontal();
            GUILayout.Toggle(system.isPlaying, "Playing");
            GUILayout.Toggle(system.isEmitting, "Emitting");
            GUILayout.Toggle(system.isPaused, "Paused");
            GUILayout.EndHorizontal();            GUILayout.BeginHorizontal();
            if (GUILayout.Button("Play"))
                system.Play(includeChildren);
            if (GUILayout.Button("Pause"))
                system.Pause(includeChildren);
            if (GUILayout.Button("Stop Emitting"))
                system.Stop(includeChildren, ParticleSystemStopBehavior.StopEmitting);
            if (GUILayout.Button("Stop & Clear"))
                system.Stop(includeChildren, ParticleSystemStopBehavior.StopEmittingAndClear);
            GUILayout.EndHorizontal();            includeChildren = GUILayout.Toggle(includeChildren, "Include Children");            GUILayout.BeginHorizontal();
            GUILayout.Label("Time(" + system.time + ")");
            GUILayout.Label("Particle Count(" + system.particleCount + ")");
            GUILayout.EndHorizontal();
        }
        else
            GUILayout.Label("No Particle System found");        GUI.DragWindow();
    }
}
```


            
