This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).vulkanEnableLateAcquireNextImage




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







                    public static bool vulkanEnableLateAcquireNextImage;






### Description



Delays acquiring the swapchain image until after the frame is rendered.





If enabled, the Vulkan renderer delays acquiring the backbuffer until after it renders the frame. The Vulkan renderer will use a staging image to achieve this.
Enabling this setting causes an extra blit when presenting the backbuffer. This setting can also cause some performance degradation, especially on tile-based GPUs.


            
