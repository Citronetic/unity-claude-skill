This version of Unity is unsupported.



# [GameObject](GameObject.html).layer




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public int layer;






### Description



Integer identifying the layer the GameObject is assigned to.





This is the standard integer value which identifies the layer, not the [LayerMask](LayerMask.html). You can use layers for selective rendering from cameras or to ignore Raycasts. Unity generates 32 layers, identified by standard integers from 0 to 31, and reserves some layers for its own systems. Refer to [Create functional layers in Unity](../Manual/create-layers.html) for a list of predefined layers and how to create your own new ones.

To convert this `layer` identifier to a [LayerMask](LayerMask.html), refer to [Set a layerMask](../Manual/layermask-set.html). To obtain the `string` name of the layer from this `layer` identifier, use [LayerMask.LayerToName](LayerMask.LayerToName.html). Refer to [Layers](../Manual/Layers.html) in the Manual for a comprehensive guide to using layers.


              


```
// Put the GameObject in the ignore raycast layer (2)using UnityEngine;[ExecuteInEditMode]
public class ExampleClass : MonoBehaviour
{
    void Awake()
    {
        //gameObject.layer uses only integers, but we can turn a layer name into a layer integer using LayerMask.NameToLayer()
        int LayerIgnoreRaycast = LayerMask.NameToLayer("Ignore Raycast");
        gameObject.layer = LayerIgnoreRaycast;
        Debug.Log("Current layer: " + gameObject.layer);
    }
}
```





Additional resources: [LayerMask](LayerMask.html)


            
