This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).Reinit




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

public void Reinit();






### Description



Reintialize visual effect.





- Restores every system to its initial state.

- Resets the internal total time to zero.

- If [VisualEffect.resetSeedOnPlay](VFX.VisualEffect-resetSeedOnPlay.html) is true, this method recomputes a new random seed for the random value generator.

- Invokes [VisualEffect.SendEvent](VFX.VisualEffect.SendEvent.html) with [VisualEffect.initialEventID](VFX.VisualEffect-initialEventID.html).


            
