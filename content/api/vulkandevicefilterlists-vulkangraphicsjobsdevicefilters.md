This version of Unity is unsupported.



# [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html).vulkanGraphicsJobsDeviceFilters




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












                    public VulkanGraphicsJobsDeviceFilterData[] vulkanGraphicsJobsDeviceFilters;






### Description



Specifies a list of [VulkanGraphicsJobsDeviceFilterData](VulkanGraphicsJobsDeviceFilterData.html) parameters to indicate which Graphics Jobs mode the Android device should use running Unity applications with the Vulkan API. This API is only available in the Unity Editor. The list is immutable at runtime.





Each parameter value in each [VulkanDeviceFilterData](VulkanDeviceFilterData.html) entry is processed using logical AND operation to determine if the device matches the specified filter. The device will use the selected Graphics Jobs mode if the filter passes.

The first passing filter selects the Graphics Jobs mode.


            
