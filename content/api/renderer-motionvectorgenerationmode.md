This version of Unity is unsupported.



# [Renderer](Renderer.html).motionVectorGenerationMode




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












                    public [MotionVectorGenerationMode](MotionVectorGenerationMode.html) motionVectorGenerationMode;






### Description



Specifies the mode for motion vector rendering.





Motion vectors track the per-pixel object velocity from one frame to the next. Using this information you can apply specific Image Effects such as motion blur or temporal anti-aliasing.

[MotionVectorGenerationMode.Camera](MotionVectorGenerationMode.Camera.html): Use only camera movement to track motion.
[MotionVectorGenerationMode.Object](MotionVectorGenerationMode.Object.html): This object will have a per-object motion vector pass rendered.
[MotionVectorGenerationMode.ForceNoMotion](MotionVectorGenerationMode.ForceNoMotion.html): This object will have zero motion rendered.

Additional resources: [DepthTextureMode.MotionVectors](DepthTextureMode.MotionVectors.html), [SkinnedMeshRenderer.skinnedMotionVectors](SkinnedMeshRenderer-skinnedMotionVectors.html), [PassType.MotionVectors](Rendering.PassType.MotionVectors.html), [SystemInfo.supportsMotionVectors](SystemInfo-supportsMotionVectors.html).


            
