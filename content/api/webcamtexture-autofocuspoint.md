This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).autoFocusPoint




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












                    public Nullable<Vector2> autoFocusPoint;






### Description



This property allows you to set/get the auto focus point of the camera. This works only on **Android** and **iOS** devices.





[Vector2.x](Vector2-x.html) and [Vector2.y](Vector2-y.html) components are relative values in the range 0..1 with the origin (0, 0) positioned at the bottom left corner of the texture.
This property can be set when the current texture is playing (after [WebCamTexture.Play](WebCamTexture.Play.html) method has been called). After a new value has been set, the device camera automatically refocuses using the new auto focus point.
After refocusing, the camera focus is then locked. In order to disable use of the focus point and switch back to continuous auto-focus mode, the autoFocusPoint property should
be set to **null**. If this feature is not supported by the camera device or if it is currently not possible to focus (for example because the previous focus attempt has not yet finished)
then the previous value for the focus point setting is not changed. Setting this property to a value where either x or y is outside of the range 0..1 causes the focus point to be reset to null
and the camera to be switched back to continuous auto-focus mode.

**Note:** this feature may not be supported by front-facing camera devices.

Additional resources: [WebCamDevice.isAutoFocusPointSupported](WebCamDevice-isAutoFocusPointSupported.html).


            
