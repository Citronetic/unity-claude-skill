This version of Unity is unsupported.



# [EditorCurveBinding](EditorCurveBinding.html).SerializeReferenceCurve




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

public static [EditorCurveBinding](EditorCurveBinding.html) SerializeReferenceCurve(string inPath,
Type inType,
long refID,
string inPropertyName,
bool isPPtr,
bool isDiscrete);






### Parameters



| Parameter | Description |
| --- | --- |
| inPath | The transform path to the object to animate. |
| inType | The type of the MonoBehaviour managing the SerializeReference instance to animate. |
| refID | The reference id of the SerializeReference instance to animate. Additional resources: ManagedReferenceUtility.GetManagedReferenceIdForObject. |
| inPropertyName | The name of the property to animate on the object. |
| isPPtr | If true, the binding represents an object reference curve. |
| isDiscrete | If true, the binding represents a discrete value curve. Enabled by default if %%isPPtr%% is true. |





### Returns



**EditorCurveBinding**
        The new [EditorCurveBinding](EditorCurveBinding.html).





### Description



Creates a preconfigured binding for a curve that points to a [SerializeReference](SerializeReference.html) instance field.





Fields on objects referenced with SerializeReference can be animated when the host object is derived from [MonoBehaviour](MonoBehaviour.html). The animation binding to the referenced object will be based on the reference id instead of the property path, which makes it possible to correctly resolve the animation even when there are changes in the path leading to the referenced object. For example, if the object is referenced from within an array, the animation is retained even if the position of the object within the array changes.


            
