This version of Unity is unsupported.



# [JsonUtility](JsonUtility.html).ToJson




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

public static string ToJson(object obj);






## Declaration

public static string ToJson(object obj,
bool prettyPrint);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to convert to JSON form. |
| prettyPrint | If true, format the output for readability. If false, format the output for minimum size. Default is false. |





### Returns



**string**
        The object's data in JSON format.





### Description



Generate a JSON representation of the public fields of an object.





Internally, this method uses the Unity serializer. The object you pass in and all its fields must meet the requirements for serialization by the Unity serializer. For the full list of these requirements, refer to [Serialization rules](../Manual/script-serialization-rules.html) in the manual.

`ToJson` supports any plain class or structure and classes derived from MonoBehaviour or ScriptableObject. Other engine types are not supported. In the Editor only, you can use [EditorJsonUtility.ToJson](EditorJsonUtility.ToJson.html) to serialize other engine types to JSON.

If the object contains fields with references to other Unity objects, those references are serialized by recording the InstanceID for each referenced object. Because the Instance ID acts like a handle to the in-memory object instance, the JSON string can only be deserialized back during the same session of the Unity engine.

Note that while `ToJson` acccepts primitive types, instead of serializing them directly, it attempts to serialize their public instance fields, producing an empty object as a result. Similarly, passing an array does not produce a JSON array containing each element, but an object containing the public fields of the array object itself (of which there are none). To serialize the actual content of an array or primitive type, you must wrap it in a class or struct.

`ToJson` can be called from background threads. You should not alter the object that you pass to this function while it is still executing.

Additional resources: [MonoBehaviour](MonoBehaviour.html), [ScriptableObject](ScriptableObject.html), [Object.GetInstanceID](Object.GetInstanceID.html)


              


```
using UnityEngine;public class PlayerState : MonoBehaviour
{
    public string playerName;
    public int lives;
    public float health;    public string SaveToString()
    {
        return JsonUtility.ToJson(this);
    }    // Given:
    // playerName = "Dr Charles"
    // lives = 3
    // health = 0.8f
    // SaveToString returns:
    // {"playerName":"Dr Charles","lives":3,"health":0.8}
}
```


            
