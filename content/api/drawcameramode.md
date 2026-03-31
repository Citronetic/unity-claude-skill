This version of Unity is unsupported.



# DrawCameraMode





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



Drawing modes for [Handles.DrawCamera](Handles.DrawCamera.html).





### Properties



| Property | Description |
| --- | --- |
| UserDefined | A custom mode defined by the user. |
| Normal | Draw the camera like it would be drawn in-game. This uses the clear flags of the camera. |
| Textured | Draw the camera textured with selection wireframe and no background clearing. |
| Wireframe | Draw the camera in wireframe and no background clearing. |
| TexturedWire | Draw the camera where all objects have a wireframe overlay. and no background clearing. |
| ShadowCascades | The camera is set to draw directional light shadow map cascades. |
| RenderPaths | The camera is set to draw color coded render paths. |
| AlphaChannel | The camera is set to display the alpha channel of the rendering. |
| Overdraw | The camera is set to display Scene overdraw, with brighter colors indicating more overdraw. |
| Mipmaps | The camera is set to display the texture resolution, with a red tint indicating resolution that is too high, and a blue tint indicating texture sizes that could be higher. |
| DeferredDiffuse | Draw diffuse color of Deferred Shading G-buffer. |
| DeferredSpecular | Draw specular color of Deferred Shading G-buffer. |
| DeferredSmoothness | Draw smoothness value of Deferred Shading G-buffer. |
| DeferredNormal | Draw world space normal of Deferred Shading G-buffer. |
| RealtimeCharting | Draw objects with different colors for each real-time chart (UV island). |
| Systems | Draw objects with different color for each GI system. |
| RealtimeAlbedo | Draw objects with the Enlighten Realtime Global Illumination albedo component only. |
| RealtimeEmissive | Draw objects with the Enlighten Realtime Global Illumination emission component only. |
| RealtimeIndirect | Draw objects with the Enlighten Realtime Global Illumination indirect light only. |
| RealtimeDirectionality | Draw objects with the Enlighten Realtime Global Illumination  directionality component only. |
| BakedLightmap | Draw objects with the baked lightmap only. |
| Clustering | Draw with different colors for each cluster. |
| LitClustering | Draw lit clusters. |
| ValidateAlbedo | The camera is set to draw a physically based, albedo validated rendering. |
| ValidateMetalSpecular | The camera is set to draw a physically based, metal or specular validated rendering. |
| ShadowMasks | The camera is set to display colored ShadowMasks, coloring light gizmo with the same color. |
| LightOverlap | The camera is set to show in red static lights that fall back to 'static' because more than four light volumes are overlapping. |
| BakedAlbedo | Draw objects with the baked albedo component only. |
| BakedEmissive | Draw objects with the baked emission component only. |
| BakedDirectionality | Draw objects with the baked directionality component only. |
| BakedTexelValidity | Draw objects with baked texel validity only. |
| BakedIndices | Draw objects with baked indices only. |
| BakedCharting | Draw objects with different colors for each baked chart (UV island). |
| SpriteMask | The camera is set to display SpriteMask and SpriteRenderer with SpriteRenderer.maskInteraction set. |
| BakedUVOverlap | Draw objects with overlapping lightmap texels highlighted. |
| TextureStreaming | The camera is set to run in texture streaming debug mode. |
| BakedLightmapCulling | Draw objects with visible lightmap texels highlighted. |
| GIContributorsReceivers | Draw Mesh Renderers and Terrains in different colors to show their StaticEditorFlags.ContributeGI  / ReceiveGI properties. With default colors: Yellow means 'ContributeGI' is off. Blue means that 'ContributeGI' is on and the object receives GI from lightmaps. Additional resources: ReceiveGI.Lightmaps Red means that 'ContributeGI' is on, but that the object receives GI from Light Probes instead. Additional resources: ReceiveGI.LightProbes.All colors can be adjusted under Preferences > Colors. |


            
