This version of Unity is unsupported.



# [XcScheme](iOS.Xcode.XcScheme.html).ReadFromFile




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

public void ReadFromFile(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path of the file. |





### Description



Reads the scheme from a file identified by the given path.





The existing values of this XcScheme instance are discarded and replaced with the values read from the file.

Get the path to the Unity project build folder containing your Xcode project using a post-process build callback function. XcScheme files are stored within the Xcode project package under the `xcshareddata` folder.
Additional resources: [PostProcessBuildAttribute](Callbacks.PostProcessBuildAttribute.html).


            
