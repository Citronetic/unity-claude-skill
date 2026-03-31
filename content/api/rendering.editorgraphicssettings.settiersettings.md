This version of Unity is unsupported.



# [EditorGraphicsSettings](Rendering.EditorGraphicsSettings.html).SetTierSettings




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

public static void SetTierSettings([Build.NamedBuildTarget](Build.NamedBuildTarget.html) target,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
[Rendering.TierSettings](Rendering.TierSettings.html) settings);






## Declaration

public static void SetTierSettings([BuildTargetGroup](BuildTargetGroup.html) target,
[Rendering.GraphicsTier](Rendering.GraphicsTier.html) tier,
[Rendering.TierSettings](Rendering.TierSettings.html) settings);






### Description



Set the [TierSettings](Rendering.TierSettings.html) for a given build target and [graphics tier](../Manual/graphics-tiers.html).





**Note:** Graphics tiers and tier settings are only supported in the Built-in Render Pipeline.

If you change the [TierSettings](Rendering.TierSettings.html) for the active build target, Unity reloads the shaders so you can see the results immediately.

Additional resources: [Graphics tiers](../Manual/graphics-tiers.html), [GraphicsTier](Rendering.GraphicsTier.html), [TierSettings](Rendering.TierSettings.html).


            
