This version of Unity is unsupported.



# FixedJoint





class in
          UnityEngine



/



Inherits from:[Joint](Joint.html)



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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




                [Switch to Manual](../Manual/class-FixedJoint.html)














### Description



The Fixed joint groups together 2 rigidbodies, making them stick together in their bound position.





Additional resources: [CharacterJoint](CharacterJoint.html), [HingeJoint](HingeJoint.html), [SpringJoint](SpringJoint.html), [ConfigurableJoint](ConfigurableJoint.html).





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| gameObject | The game object this component is attached to. A component is always attached to a game object. |
| tag | The tag of this game object. |
| transform | The Transform attached to this GameObject. |
| anchor | The Position of the anchor around which the joints motion is constrained. |
| autoConfigureConnectedAnchor | Should the connectedAnchor be calculated automatically? |
| axis | The Direction of the axis around which the body is constrained. |
| breakForce | The force that needs to be applied for this joint to break. |
| breakTorque | The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint. |
| connectedAnchor | Position of the anchor relative to the connected Rigidbody. |
| connectedArticulationBody | A reference to an articulation body this joint connects to. |
| connectedBody | A reference to another rigidbody this joint connects to. |
| connectedMassScale | The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints. |
| currentForce | The force applied by the solver to satisfy all constraints. |
| currentTorque | The torque applied by the solver to satisfy all constraints. |
| enableCollision | Enable collision between bodies connected with the joint. |
| enablePreprocessing | Toggle preprocessing for this joint. |
| massScale | The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| BroadcastMessage | Calls the method named methodName on every MonoBehaviour in this game object or any of its children. |
| CompareTag | Checks the GameObject's tag against the defined tag. |
| GetComponent | Gets a reference to a component of type T on the same GameObject as the component specified. |
| GetComponentInChildren | Gets a reference to a component of type T on the same GameObject as the component specified, or any child of the GameObject. |
| GetComponentIndex | Gets the index of the component on its parent GameObject. |
| GetComponentInParent | Gets a reference to a component of type T on the same GameObject as the component specified, or any parent of the GameObject. |
| GetComponents | Gets references to all components of type T on the same GameObject as the component specified. |
| GetComponentsInChildren | Gets references to all components of type T on the same GameObject as the component specified, and any child of the GameObject. |
| GetComponentsInParent | Gets references to all components of type T on the same GameObject as the component specified, and any parent of the GameObject. |
| SendMessage | Calls the method named methodName on every MonoBehaviour in this game object. |
| SendMessageUpwards | Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. |
| TryGetComponent | Gets the component of the specified type, if it exists. |
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



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |



### Messages

| Message | Description |
| --- | --- |
| OnJointBreak | Called when a joint attached to the same game object broke. |




            
