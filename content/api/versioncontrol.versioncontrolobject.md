This version of Unity is unsupported.



# VersionControlObject





class in
          UnityEditor.VersionControl



/



Inherits from:[ScriptableObject](ScriptableObject.html)


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



The abstract base class for representing a version control system.





You can add support for a custom VCS by creating a new class derived from VersionControlObject and applying the [VersionControlAttribute](VersionControl.VersionControlAttribute.html).


              


```
using UnityEditor.VersionControl;
using UnityEngine;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject
{
    public override void OnActivate()
    {
        Debug.Log("Custom VCS activated.");
    }    public override void OnDeactivate()
    {
        Debug.Log("Custom VCS deactivated.");
    }
}
```





Using the example above, a new VCS option called *Custom* will show up in Version Control settings window. You should only perform VCS operations when a VersionControlObject is activated. [OnActivate](VersionControl.VersionControlObject.OnActivate.html) and [OnDeactivate](VersionControl.VersionControlObject.OnDeactivate.html) methods are called on your class to notify your code about the change.

Any persistent settings that must survive between Unity sessions (for example, the username or password) must be handled either by the underlying VCS, by using [EditorUserSettings](EditorUserSettings.html), or stored in a file. This is because the VersionControlObject is not serialized to disk and a new instance is created every time Unity starts up or when the VCS is activated.

The VersionControlObject is derived from [ScriptableObject](ScriptableObject.html). This makes [domain reloading](../Manual/domain-reloading.html) handling simpler. You can add [ScriptableObject.OnEnable](ScriptableObject.OnEnable.html) method to restore the state if needed.

You can use [AssetModificationProcessor](AssetModificationProcessor.html) and [AssetPostprocessor.OnPostprocessAllAssets](AssetPostprocessor.OnPostprocessAllAssets.html) to get notifications from Unity when it wants to edit, add or remove assets.

Additional resources: [VersionControlAttribute](VersionControl.VersionControlAttribute.html), [VersionControlManager](VersionControl.VersionControlManager.html), [EditorUserSettings](EditorUserSettings.html), [ScriptableObject](ScriptableObject.html), [AssetModificationProcessor](AssetModificationProcessor.html), [AssetPostprocessor](AssetPostprocessor.html).





### Properties



| Property | Description |
| --- | --- |
| isConnected | Tests whether the VersionControlObject is connected to an underlying version control system. |





### Public Methods



| Method | Description |
| --- | --- |
| GetExtension | Gets optional extension object. |
| OnActivate | Called when your version control system is activated. |
| OnDeactivate | Called when your version control system is deactivated. |
| Refresh | Called when the cached state should be discarded and the new state should be retrieved from the underlying VCS. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |
| CreateInstance | Creates an instance of a scriptable object. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |



### Messages

| Message | Description |
| --- | --- |
| Awake | Called when an instance of ScriptableObject is created. |
| OnDestroy | This function is called when the scriptable object will be destroyed. |
| OnDisable | This function is called when the scriptable object goes out of scope. |
| OnEnable | This function is called when the object is loaded. |
| OnValidate | Editor-only function that Unity calls when the script is loaded or a value changes in the Inspector. |
| Reset | Reset to default values. |




            
