This version of Unity is unsupported.



# SceneTemplateAsset





class in
          UnityEditor.SceneTemplate



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



An Asset that stores everything required to instantiate a new Scene from a templated Scene.





### Properties



| Property | Description |
| --- | --- |
| addToDefaults | Use this field to add this template to the list of default templates in the New scene dialog. |
| badge | The Scene template's badge. |
| dependencies | Lists Scene dependencies, and specifies whether to clone or reference each one. |
| description | A description of the Scene template. This description can be long. In the Unity editor, it appears on multiple lines. |
| isValid | Specifies whether the Scene template is valid. Invalid templates do not appear in the New Scene dialog. |
| preview | The Scene template's preview image or icon. |
| templateName | A user-defined name for the Scene template Asset. By default, this is the template's file name. |
| templatePipeline | A script that derives from ISceneTemplatePipeline. It allows you to execute custom code when a template is instantiated. |
| templateScene | The Scene that is copied when the Scene template is instantiated. |





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




            
