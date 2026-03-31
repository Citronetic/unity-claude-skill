This version of Unity is unsupported.



# [IUnityLinkerProcessor](Build.IUnityLinkerProcessor.html).GenerateAdditionalLinkXmlFile




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

public string GenerateAdditionalLinkXmlFile([Build.Reporting.BuildReport](Build.Reporting.BuildReport.html) report,
[UnityLinker.UnityLinkerBuildPipelineData](UnityLinker.UnityLinkerBuildPipelineData.html) data);






### Parameters



| Parameter | Description |
| --- | --- |
| report | The current built report. |
| data | Information about the current run of UnityLinker. |





### Returns



**string**
        The file path to the generated link.xml file. If the path is relative, GenerateAdditionalLinkXmlFile combines it with the working directory to make an absolute path.





### Description



Generates additional link.xml files for preserving additional types and their members.


            
