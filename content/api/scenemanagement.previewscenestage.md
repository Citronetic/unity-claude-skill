This version of Unity is unsupported.



# PreviewSceneStage





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



The PreviewSceneStage class represents an editing context based on a single preview Scene.





You can create a custom type of Stage by implementing a class that inherits from the abstract PreviewSceneStage class. Your custom Stage should ensure any content it controls is moved into the preview Scene that the stage controls.

Your custom Stage class should implement [OnOpenStage](SceneManagement.PreviewSceneStage.OnOpenStage.html) and [OnCloseStage](SceneManagement.PreviewSceneStage.OnCloseStage.html). Unity calls those methods when your stage is opened and closed; you should not call them yourself. To open a Stage of your custom type, use [StageUtility.GoToStage](SceneManagement.StageUtility.GoToStage.html).





### Properties



| Property | Description |
| --- | --- |
| scene | The preview Scene this stage controls. Stage content should be moved into this Scene. |
| stageHandle | See Stage.stageHandle. |





### Protected Methods



| Method | Description |
| --- | --- |
| OnCloseStage | Unity calls this method when the Stage is closed. Classes that inherit from PreviewSceneStage should implement cleanup logic in this method. |
| OnOpenStage | Unity calls this method when the Stage is opened. Classes that inherit from PreviewSceneStage should implement initialization logic in this method. |





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
| OnDisable | See ScriptableObject.OnDisable. |
| OnEnable | See ScriptableObject.OnEnable. |
| OnFirstTimeOpenStageInSceneView | Unity calls this method the first time a Stage is opened for a specific Asset, for a specific Scene view. |
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




            
