This version of Unity is unsupported.



# [Collider2D](Collider2D.html).contactMask




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












                    public [LayerMask](LayerMask.html) contactMask;






### Description



Calculates the effective [LayerMask](LayerMask.html) that the [Collider2D](Collider2D.html) will use when determining if it can contact another [Collider2D](Collider2D.html).





The returned mask is calculated using a combination of the layer collision matrix and both the [Rigidbody2D](Rigidbody2D.html) and [Collider2D](Collider2D.html) layer overrides.; more detail is provided in the code example below:

Additional resources: [Collider2D.CanContact](Collider2D.CanContact.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
         var myCollider = GetComponent<Collider2D>();

         Debug.Log(myCollider.contactMask);
         Debug.Log(CalculateContactMask(myCollider));
    }    LayerMask CalculateContactMask(Collider2D collider)
    {
        Rigidbody2D body = collider.attachedRigidbody;        LayerMask layerCollisionMask = Physics2D.GetLayerCollisionMask(collider.gameObject.layer);
        LayerMask includeMask = collider.includeLayers | (body ? body.includeLayers : new LayerMask());
        LayerMask excludeMask = collider.excludeLayers | (body ? body.excludeLayers : new LayerMask());        return (layerCollisionMask | includeMask) & ~excludeMask;
    }
}
```


            
