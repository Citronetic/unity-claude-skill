This version of Unity is unsupported.



# [RenderBuffer](RenderBuffer.html).GetNativeRenderBufferPtr




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

public IntPtr GetNativeRenderBufferPtr();






### Returns



**IntPtr**
        Opaque pointer that you can use in a low-level native plug-in interface.





### Description



Returns the native RenderBuffer: an opaque pointer to a Unity struct that you can use with Unity's low-level native plug-in interface.





The RenderBuffer.GetNativeRenderBufferPtr method retrieves the native pointer to a RenderBuffer. This pointer allows direct interaction with the underlying graphics API.
It provides low-level access to Unity's rendering system, enabling advanced integrations like external plugins.
Use this method when you need precise control over a RenderBuffer, for example, to set up external rendering systems or to implement custom native libraries.
Call GetNativeRenderBufferPtr() on a valid RenderBuffer instance, such as the color or depth target from a RenderTexture.

Additional resources: [RenderBuffer](RenderBuffer.html),[native-plugin-interface](../Manual/native-plugin-interface.html).


            
