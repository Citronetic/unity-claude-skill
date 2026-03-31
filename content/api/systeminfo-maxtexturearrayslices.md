This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).maxTextureArraySlices




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












                    public static int maxTextureArraySlices;






### Description



Maximum number of slices in a Texture array (Read Only).





This is the largest Texture array size that your graphics hardware supports. Even if a GPU supports
                    a large Texture array size, it might not have enough memory to create it. For example, 256 slices of 2048x2048x256 2D Texture images at 32 bits per pixel requires 4 gigabytes of data to create.

                    Additional resources: [maxTextureSize](SystemInfo-maxTextureSize.html), [Texture2DArray](Texture2DArray.html).


            
