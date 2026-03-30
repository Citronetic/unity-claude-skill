This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Object](Object.html).FindObjectsOfTypeIncludingAssets




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




                [Switch to Manual](../Manual/class-Object.html)








                        **Obsolete**
                        use Resources.FindObjectsOfTypeAll instead.




## Declaration

public static Object[] FindObjectsOfTypeIncludingAssets(Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of object or asset to find. |





### Returns



**Object[]**
        The array of objects and assets found matching the type specified.





### Description



Returns a list of all active and inactive loaded objects of Type `type`, including assets.





In addition to all active and inactive Scene objects, this function also returns assets that match the type specified (meshes, textures, prefabs, etc.). This does not return objects that have [HideFlags.DontSave](HideFlags.DontSave.html) set.

Be aware that when running in the editor, this function will also return hidden objects used by Unity itself such as the Scene view camera and preview camera.

Please note that this function is very slow. It is not recommended to use this function every frame.
In most cases you can use the singleton pattern instead.


            
