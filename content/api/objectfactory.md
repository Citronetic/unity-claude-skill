This version of Unity is unsupported.



# ObjectFactory





class in
          UnityEditor


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



Use the DefaultObject to create a new UnityEngine.Object in the editor.





The creation process handles Undo registration and applies default values from your project.





### Static Methods



| Method | Description |
| --- | --- |
| AddComponent | Creates a new component and adds it to the specified GameObject. |
| CreateGameObject | Creates a new GameObject. |
| CreateInstance | Create a new instance of the given type. |
| CreatePrimitive | Creates a GameObject primitive with Undo support. The created primitive will have any existing Preset applied to it, see Preset Manager. |
| PlaceGameObject | Place the given GameObject in the Scene View using the same preferences as built-in Unity GameObjects. |





### Events



| Event | Description |
| --- | --- |
| componentWasAdded | This is invoked every time a new Component or MonoBehaviour is added to a GameObject using the ObjectFactory. |


            
