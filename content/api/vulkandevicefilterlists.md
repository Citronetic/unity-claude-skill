This version of Unity is unsupported.



# VulkanDeviceFilterLists





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



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



Set of parameters used to define an Android device or group of Android devices.





Specify a list of parameters to identify an Android device or set of Android devices. Enter values for one or multiple parameters. The parameter values are processed using logical AND operation to check if the device properties match with all the specified values.

Unity ignores the filter if all parameters are empty.





### Properties



| Property | Description |
| --- | --- |
| vulkanDeviceAllowFilters | Specifies a list of VulkanDeviceFilterData parameters to allow Android devices to always use Vulkan API when running Unity applications. This API is only available in the Unity Editor. The list is immutable at runtime. |
| vulkanDeviceDenyFilters | Specifies a list of VulkanDeviceFilterData parameters to restrict Android devices from using Vulkan API when running Unity applications. This API is only available in the Unity Editor. The list is immutable at runtime. |
| vulkanGraphicsJobsDeviceFilters | Specifies a list of VulkanGraphicsJobsDeviceFilterData parameters to indicate which Graphics Jobs mode the Android device should use running Unity applications with the Vulkan API. This API is only available in the Unity Editor. The list is immutable at runtime. |





### Constructors



| Constructor | Description |
| --- | --- |
| VulkanDeviceFilterLists | Create a VulkanDeviceFilterLists. |





### Public Methods



| Method | Description |
| --- | --- |
| EnsureValidOrThrow | Ensures all filters defined in VulkanDeviceFilterData.vulkanDeviceDenyFilters, VulkanDeviceFilterData.vulkanDeviceAllowFilters, and VulkanDeviceFilterData.vulkanGraphicsJobsDeviceFilters are valid. This API is only available in the Unity Editor. |





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



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
