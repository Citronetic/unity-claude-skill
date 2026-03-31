This version of Unity is unsupported.



# [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html).vulkanDeviceDenyFilters




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












                    public VulkanDeviceFilterData[] vulkanDeviceDenyFilters;






### Description



Specifies a list of [VulkanDeviceFilterData](VulkanDeviceFilterData.html) parameters to restrict Android devices from using Vulkan API when running Unity applications. This API is only available in the Unity Editor. The list is immutable at runtime.





Each parameter value in each [VulkanDeviceFilterData](VulkanDeviceFilterData.html) entry is processed using logical AND operation to determine if the device matches the specified filter. The device is restricted from using Vulkan if its [VulkanDeviceFilterData.vulkanApiVersionString](VulkanDeviceFilterData-vulkanApiVersionString.html) and [VulkanDeviceFilterData.driverVersionString](VulkanDeviceFilterData-driverVersionString.html) values are less than or equal to the specified filter values, and it meets the other specified filter values.

If you enter the same values in the VulkanDeviceFilterLists.vulkanAllowFilterList and `VulkanDeviceFilterLists.vulkanDenyFilterList` lists, Unity ignores the filter.


            
