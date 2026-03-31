This version of Unity is unsupported.



# [PackedAssets](Build.Reporting.PackedAssets.html).contents




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












                    public PackedAssetInfo[] contents;






### Description



An array of [PackedAssetInfo](Build.Reporting.PackedAssetInfo.html) objects that holds information about the content portion of the referenced file.





A Serialized File is made up of a header section, and then a flat list of the objects, in their binary serialized form.
Each entry in the PackedAssetInfo array corresponds to one of these serialized objects, in the order they are saved in the file.

Similarly a .resS or .resource file is made of a sequence of binary blobs of audio, video, texture, mesh or other large data types. The PackedAssetInfo array has an entry for each of these blobs.


            
