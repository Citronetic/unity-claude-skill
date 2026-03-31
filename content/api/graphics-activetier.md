This version of Unity is unsupported.



# [Graphics](Graphics.html).activeTier




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












                    public static [Rendering.GraphicsTier](Rendering.GraphicsTier.html) activeTier;






### Description



The [GraphicsTier](Rendering.GraphicsTier.html) for the current device.





**Note:** Graphics tiers are only supported in the Built-in Render Pipeline.

Unity auto-detects this value, and sets it during startup. This value determines which [TierSettings](Rendering.TierSettings.html) are in use, and which tier variants Unity loads when it loads shaders. Changing this value affects any subsequently loaded shaders. For more information, see [Graphics tiers](../Manual/graphics-tiers.html).

Additional resources: [Graphics tiers](../Manual/graphics-tiers.html), [TierSettings](Rendering.TierSettings.html), [GraphicsTier](Rendering.GraphicsTier.html), [EditorGraphicsSettings.GetTierSettings](Rendering.EditorGraphicsSettings.GetTierSettings.html), [EditorGraphicsSettings.SetTierSettings](Rendering.EditorGraphicsSettings.SetTierSettings.html).


            
