This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).playRate




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












                    public float playRate;






### Description



A multiplier that Unity applies to the delta time when it updates the VisualEffect. The default value is 1.0f.





To play the visual effect faster than normal, set this property to a value greater than 1.0f. To play the visual effect slower than normal, set this property to a value between 0.0f and 1.0f.
                Unity does not serialize this property. This means that, after loading, it automatically resets to the default value.


            
