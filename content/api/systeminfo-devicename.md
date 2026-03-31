This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).deviceName




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












                    public static string deviceName;






### Description



The user defined name of the device (Read Only).





This is typically the name of the device as it appears on the networks.

**Android**: There's no API for returning the device name. Therefore, Unity attempts to read `device_name` and `bluetooth_name` from secure system settings. If no value is found, `<unknown>` string is returned.

Will return [SystemInfo.unsupportedIdentifier](SystemInfo-unsupportedIdentifier.html) on platforms which don't support this property.

Additional resources: [deviceModel](SystemInfo-deviceModel.html).


            
