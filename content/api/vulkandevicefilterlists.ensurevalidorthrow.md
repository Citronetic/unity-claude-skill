This version of Unity is unsupported.



# [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html).EnsureValidOrThrow




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

public void EnsureValidOrThrow();






### Description



Ensures all filters defined in VulkanDeviceFilterData.vulkanDeviceDenyFilters, VulkanDeviceFilterData.vulkanDeviceAllowFilters, and VulkanDeviceFilterData.vulkanGraphicsJobsDeviceFilters are valid. This API is only available in the Unity Editor.





Use this function to validate that there are no errors defined in any of the filter criteria or else it will throw an exception.


            
