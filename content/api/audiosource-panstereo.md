This version of Unity is unsupported.



# [AudioSource](AudioSource.html).panStereo




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




                [Switch to Manual](../Manual/class-AudioSource.html)







                    public float panStereo;






### Description



Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.





This pan is applied before 3D panning calculations are considered. In other words, stereo panning affects the left right balance of the sound before it is spatialised in 3D.

Mono sounds are panned from left to right using constant power panning (non linear fade). This means when pan = 0.0, the balance for the sound in each speaker is 71% left and 71% right, not 50% left and 50% right. This gives (audibly) smoother pans.

Stereo sounds heave each left/right value faded up and down according to the specified pan position. This means when pan = 0.0, the balance for the sound in each speaker is 100% left and 100% right. When pan = -1.0, only the left channel of the stereo sound is audible, when pan = 1.0, only the right channel of the stereo sound is audible.

Values range from -1.0 to 1.0.

-1.0 = Full left
0.0 = center
1.0 = full right

Default = 0.0.


              


```
no example available in C#
```


            
