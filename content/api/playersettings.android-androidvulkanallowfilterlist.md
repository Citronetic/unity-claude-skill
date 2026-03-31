This version of Unity is unsupported.


                  **Method group is Obsolete**





# [PlayerSettings.Android](PlayerSettings.Android.html).androidVulkanAllowFilterList




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)








                        **Obsolete**
                        androidVulkanAllowFilterList is deprecated, and is replaced by androidVulkanDeviceFilterListAsset.

                    public static AndroidDeviceFilterData[] androidVulkanAllowFilterList;






### Description



Specifies a list of AndroidDeviceFilterData parameters to allow Android devices to always use Vulkan API when running Unity applications.





Each parameter value in each AndroidDeviceFilterData entry is processed using logical AND operation to determine if the device matches the specified filter. The device is allowed to use Vulkan if its AndroidDeviceFilterData.vulkanApiVersionString and AndroidDeviceFilterData.driverVersionString values are greater than or equal to the specified filter values, and it meets the other specified filter values.

If you enter the same values in the `PlayerSettings.Android.androidVulkanAllowFilterList` and PlayerSettings.Android.androidVulkanDenyFilterList lists, Unity ignores the filter.


            
