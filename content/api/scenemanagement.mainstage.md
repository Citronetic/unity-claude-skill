This version of Unity is unsupported.



# MainStage





class in
          UnityEditor.SceneManagement



/



Inherits from:[SceneManagement.Stage](SceneManagement.Stage.html)


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



The Main Stage contains all the currently open regular Scenes and is always available.





The Main Stage also includes the DontDestroyOnLoad Scene, which the Hierarchy sometimes shows during Play Mode, as well as every GameObject marked with the HideFlags.HideAndAndDontSave HideFlags. It includes these GameObjects because, by default, these GameObjects do not belong to any particular Scene but Unity renders them together with the Main Stage objects in the SceneView.

Other Stage types exists for Editor tooling purposes. For example, you can use [PreviewSceneStage](SceneManagement.PreviewSceneStage.html) as a base class for custom Stages.





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |
| assetPath | The path of the Asset file associated with the stage, relative to the project root folder. |
| stageHandle | The StageHandle struct for this stage. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |
| FindComponentOfType | Returns the first active loaded object of the given type. |
| FindComponentsOfType | Returns a list of all active loaded objects of the given type. |
| GetCombinedSceneCullingMaskForCamera | Gets the Scene culling mask from this Stage. |



### Protected Methods

| Method | Description |
| --- | --- |
| CreateHeaderContent | Creates the header content for this Stage. Both the Hierarchy window header and Scene view breadcrumb bar use this content. |
| GetHashForStateStorage | Unity calls this method to get a hash code that is used to save the state of the Stage to disk. |
| OnCloseStage | Unity calls this method when the Stage is closed. Classes that inherit from Stage should implement cleanup logic in this method. |
| OnDisable | See ScriptableObject.OnDisable. |
| OnEnable | See ScriptableObject.OnEnable. |
| OnFirstTimeOpenStageInSceneView | Unity calls this method the first time a Stage is opened for a specific Asset, for a specific Scene view. |
| OnOpenStage | Unity calls this method when the Stage is opened. Classes that inherit from Stage should implement initialization logic in this method. |
| OnReturnToStage | Unity calls this method when you return to a Stage that is already open. |



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




            
