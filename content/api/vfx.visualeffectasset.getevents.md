This version of Unity is unsupported.



# [VisualEffectAsset](VFX.VisualEffectAsset.html).GetEvents




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

public void GetEvents(List<string> names);






### Parameters



| Parameter | Description |
| --- | --- |
| names | The List that this function populates with the event system names. |





### Description



Gets the name of every Event connected to a system.





To increase the speed of the retrieval process, preallocate the `names` input list.

Additional resources: [VisualEffect.SendEvent](VFX.VisualEffect.SendEvent.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.VFX;

[ExecuteInEditMode]
class LogEventNames : MonoBehaviour
{
	// Called when the script or GameObject is enabled
    void OnEnable()
    {
        VisualEffect vfx = GetComponent<VisualEffect>();
        if (vfx != null && vfx.visualEffectAsset != null)
        {
            VisualEffectAsset vfxAsset = vfx.visualEffectAsset;
            var eventNames = new List<string>();

            // Retrieve all events from the VisualEffectAsset and store them in the list
            vfxAsset.GetEvents(eventNames);
            if (eventNames.Count == 0)
            {
                Debug.Log($"There are no events listed for asset: {vfxAsset}");
            }

            foreach (var eventName in eventNames)
            {
                Debug.Log($"Event: {eventName}");
            }
        }
        else
        {
            Debug.Log("Unable to retrieve VisualEffect component or VisualEffectAsset is null.");
        }
    }
}
```





This example logs all available events in the attached `VisualEffectAsset`.


            
