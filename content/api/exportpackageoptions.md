This version of Unity is unsupported.



# ExportPackageOptions





enumeration


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



















### Description



Export package option. Multiple options can be combined together using the | operator.





Additional resources: [AssetDatabase.ExportPackage](AssetDatabase.ExportPackage.html).





### Properties



| Property | Description |
| --- | --- |
| Default | Default mode. Will not include dependencies or subdirectories nor include Library assets unless specifically included in the asset list. |
| Interactive | The export operation will be run asynchronously and reveal the exported package file in a file browser window after the export is finished. |
| Recurse | Will recurse through any subdirectories listed and include all assets inside them. |
| IncludeDependencies | In addition to the assets paths listed, all dependent assets will be included as well. |
| IncludeLibraryAssets | The exported package will include all library assets, ie. the project settings located in the Library folder of the project. |


            
