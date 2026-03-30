This version of Unity is unsupported.



# [GraphicsDevice](NVIDIA.GraphicsDevice.html).CreateGraphicsDevice




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

public static [NVIDIA.GraphicsDevice](NVIDIA.GraphicsDevice.html) CreateGraphicsDevice();






## Declaration

public static [NVIDIA.GraphicsDevice](NVIDIA.GraphicsDevice.html) CreateGraphicsDevice(string projectID);






## Declaration

public static [NVIDIA.GraphicsDevice](NVIDIA.GraphicsDevice.html) CreateGraphicsDevice(string projectID,
string appDir);






### Parameters



| Parameter | Description |
| --- | --- |
| projectID | The projectID of the Unity project. Only the first call to this function uses this ID. |
| appDir | Specifies the directory in which the NVIDIA DLLS are located at. When not used, the system will locate the DLLs right next to the executable of the editor. |





### Returns



**GraphicsDevice**
        The Device API object to access NVIDIA features. If you call this function again, the function returns the same device, regardless of whether you pass in a different projectID.





### Description



Creates the main API object. Call this method only once in your application.





This function will instantiate the [GraphicsDevice](NVIDIA.GraphicsDevice.html). It's safe to execute at any point when the application is alive. Since the device is a direct representation of the hardware graphics card, this method returns the same device if you call it again. If you pass in an appDir or projectID, only the first call to this method instantiates the device object using these parameters.


            
