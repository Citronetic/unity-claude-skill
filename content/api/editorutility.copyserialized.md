This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CopySerialized




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

public static void CopySerialized([Object](Object.html) source,
[Object](Object.html) dest);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The object to copy the properties from. |
| dest | The object to copy the properties to. |





### Description



Copies all serialized properties of a Unity Object from one object to another.





This method copies all serialized properties from the `source` object to the `dest` object, overwriting values that are currently in the properties of `dest`. The fields that are included follow the [script-serialization-rules](../Manual/script-serialization-rules.html).

This method is mostly useful when working with objects in assets. It is similar to [Object.Instantiate](Object.Instantiate.html) in that it also copies the serialized properties of an object, but it overwrites an existing object, unlike `Instantiate` which always creates a new object.

Note that [Object.hideFlags](Object-hideFlags.html) are not copied.

If the object being copied derives from [MonoBehaviour](MonoBehaviour.html) or [ScriptableObject](ScriptableObject.html), then `dest` must either be the same type as `source`, or a base class of it. Otherwise, the types of `dest` and `source` must be equal.

Because the Unity serializer is used to copy the values, if the [ISerializationCallbackReceiver.OnBeforeSerialize](ISerializationCallbackReceiver.OnBeforeSerialize.html) method is implemented then it's invoked on the `source` object before copying. If the [ISerializationCallbackReceiver.OnAfterDeserialize](ISerializationCallbackReceiver.OnAfterDeserialize.html) method is implemented, it's invoked on the `dest` object after copying.

The following example shows how this method could be used to reset the properties of an object to match a 'reference' object, instead of manually resetting the properties to hardcoded values.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CreateAssetMenu]
public class CopySerializedExample : ScriptableObject
{
    // Declare some serialized fields
    public int intValue;
    public string stringValue;
    public List<bool> listOfBools;

    #if UNITY_EDITOR
    [ContextMenu("Reset to reference")]
    public void ResetToReference()
    {
        // CopySerialized will overwrite the object name as well; we don't want that
        // so save it to a temporary variable so we can restore it afterwards
        var originalName = this.name;

        var reference = AssetDatabase.LoadAssetAtPath<CopySerializedExample>("Assets/ReferenceAsset.asset");
        EditorUtility.CopySerialized(reference, this);

        // Restore the original name
        this.name = originalName;
    }
    #endif
}
```


            
