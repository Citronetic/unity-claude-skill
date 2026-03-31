This version of Unity is unsupported.



# [Animator](Animator.html).SetLayerWeight




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public void SetLayerWeight(int layerIndex,
float weight);






### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The layer index. |
| weight | The new layer weight which is a value between 0 and 1. |





### Description



Changes the weight of the layer at a specific index.





If the specified layer does not exist, this method does nothing.


              


```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[RequireComponent(typeof(Animator))]
public class Weapon : MonoBehaviour
{
    // This example demonstrates how to animate the weight of a layer, from 0 to 1, with a coroutine.
    public float transitionDuration = 2f;
    public string layerName;
    private Animator m_Animator;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
        if (!string.IsNullOrEmpty(layerName) && transitionDuration > Mathf.Epsilon)
        {
            // Get the layer index from the layer name.
            int layerIndex = m_Animator.GetLayerIndex(layerName);
            // The coroutine sets the layer weight at each frame until it reaches 1f.
            StartCoroutine(FadeInWeaponLayer(layerIndex, transitionDuration));
        }
    }

    IEnumerator FadeInWeaponLayer(int layerIndex, float duration)
    {
        float time = 0f;
        // Assume a starting weight of 0f.
        float startingWeight = 0f;
        float targetWeight = 1f;

        while (time < duration)
        {
            // Get the value of the weight between 0 and 1 based on the accumulated time.
            float layerWeight = Mathf.Lerp(startingWeight, targetWeight, time / duration);
            // Set the weight of the layer based on its index.
            m_Animator.SetLayerWeight(layerIndex, layerWeight);
            time += Time.deltaTime;
            // this pauses the coroutine until the next frame.
            yield return null;
        }
        // Finish the coroutine and make sure to set the exact target weight.
        m_Animator.SetLayerWeight(layerIndex, targetWeight);
    }
}
```


            
