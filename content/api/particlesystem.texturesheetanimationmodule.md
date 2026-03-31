This version of Unity is unsupported.



# TextureSheetAnimationModule





struct in
          UnityEngine



/



Implemented in:[UnityEngine.ParticleSystemModule](UnityEngine.ParticleSystemModule.html)


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




                [Switch to Manual](../Manual/class-ParticleSystem.html)














### Description



Script interface for the TextureSheetAnimationModule.





This module allows you to add animations to your particle textures. To author an animation, you must use a flipbook Texture.

[Image: image]

*A flipbook texture sheet that contains eight sub-images of the numbers 1-8 across two rows of four columns. The first row contains the numbers 1-4 and the second row contains the numbers 5-8.*

Each numbered region represents a frame of the animation, which you must distribute evenly across the Texture.
Select a variable below to see script examples. You may want to use this Texture on your Particle System with each example, to see how the module works.

Additional resources: [ParticleSystem](ParticleSystem.html), [ParticleSystem.textureSheetAnimation](ParticleSystem-textureSheetAnimation.html).





### Properties



| Property | Description |
| --- | --- |
| animation | Specifies the animation type. |
| cycleCount | Specifies how many times the animation loops during the lifetime of the particle. |
| enabled | Specifies whether the TextureSheetAnimationModule is enabled or disabled. |
| fps | Control how quickly the animation plays. |
| frameOverTime | A curve to control which frame of the Texture sheet animation to play. |
| frameOverTimeMultiplier | The frame over time mutiplier. |
| mode | Select whether the animated Texture information comes from a grid of frames on a single Texture, or from a list of Sprite objects. |
| numTilesX | Defines the tiling of the Texture in the x-axis. |
| numTilesY | Defines the tiling of the texture in the y-axis. |
| rowIndex | Explicitly select which row of the Texture sheet to use. The system uses this property when ParticleSystem.TextureSheetAnimationModule.rowMode is set to Custom. |
| rowMode | Select how particles choose which row of a Texture Sheet Animation to use. |
| speedRange | Specify how particle speeds are mapped to the animation frames. |
| spriteCount | The total number of sprites. |
| startFrame | Define a random starting frame for the Texture sheet animation. |
| startFrameMultiplier | The starting frame multiplier. |
| timeMode | Select whether the system bases the playback on mapping a curve to the lifetime of each particle, by using the particle speeds, or if playback simply uses a constant frames per second. |
| uvChannelMask | Choose which UV channels receive Texture animation. |





### Public Methods



| Method | Description |
| --- | --- |
| AddSprite | Add a new Sprite. |
| GetSprite | Get the Sprite at the given index. |
| RemoveSprite | Remove a Sprite from the given index in the array. |
| SetSprite | Set the Sprite at the given index. |


            
