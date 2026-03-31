This version of Unity is unsupported.



# InstantiateParameters





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Parameters for Object.Instantiate and Object.InstantiateAsync.





This structure is used in [Object.Instantiate](Object.Instantiate.html) and [Object.InstantiateAsync](Object.InstantiateAsync.html) in order to provide maximum flexibility in the parameters you provide.
It has the added benefit of unifying the meaning of the parameters in both methods.

The behaviour of the different parameter combinations is:



          - **Default**: The instance will have the same local position and rotation as the original, it won't have a parent and it will be in the active scene.

          - `worldSpace`: The instance will have the same world position and rotation as the original.

          - **Default, method takes position and rotation**: Sets those values to the transform of the instance in local space.

          - `worldSpace`
            **, method takes position and rotation**: Sets those values to the transform of the instance in world space.

          - `parent`: The instance will be a child of `parent` and will have the same local position and rotation as the original.

          - `parent` **and** `worldSpace`: The instance will be a child of `parent` and will have the same world position and rotation as the original.

          - `parent`
            **, method takes position and rotation**: The instance will be a child of `parent` and the values will be set as local.

          - `parent` **and** `worldSpace`**, method takes position and rotation**: The instance will be a child of `parent` and the values will be set as world space.

          - `scene` **and any combination of position, rotation and** `worldSpace`: The same behaviour as that combination, but the instance will be in `scene`.

          - `scene` **and** `parent`: `scene` will be ignored because child objects are always in the same scene as the `parent`.







### Properties



| Property | Description |
| --- | --- |
| originalImmutable | It tells the InstantiateAsync if it's safe to do the serialization step async. |
| parent | The desired parent. |
| scene | The desired scene. |
| worldSpace | Choose between world space or local space. |


            
