This version of Unity is unsupported.



# [ContentFile](Unity.Loading.ContentFile.html).GlobalTableDependency




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












                    public static [Unity.Loading.ContentFile](Unity.Loading.ContentFile.html) GlobalTableDependency;






### Description



This [ContentFile](Unity.Loading.ContentFile.html) can be passed as a dependency to [ContentLoadInterface.LoadContentFileAsync](Unity.Loading.ContentLoadInterface.LoadContentFileAsync.html) or [ContentLoadInterface.LoadSceneAsync](Unity.Loading.ContentLoadInterface.LoadSceneAsync.html) to indicate that the external file dependencies should be resolved through the global PersistentManager table. For example, this could be used when the [ContentFile](Unity.Loading.ContentFile.html) references a file loaded through the PersistentManager such as "unity default resources".


            
