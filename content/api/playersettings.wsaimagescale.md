This version of Unity is unsupported.



# WSAImageScale





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




                [Switch to Manual](../Manual/class-PlayerSettings.html)














### Description



Options for the set of sizing values to apply to the Universal Windows Platform logo and icon images. These options specify variations for different screen sizes and resolutions.





A Universal Windows Platform application must specify [icon and logo images](PlayerSettings.WSAImageType.html) as part of the package before you can submit it to the Microsoft Store. Since these images are bitmaps, they do not scale well on different display types. Because of this, applications should include different versions of these images at different scales and sizes so the icon/logo always displays correctly. Unity exposes two sets of sizing values to use:



          - Scaling values: Indicates that an image asset is scaled by a certain factor from the base image size.

          - Target size: Indicates that the application icon is for a specific pixel size. This is only applicable for the Square44x44Logo type.





Target size assets are for surfaces that don't use the scaling plateau system:



          - Start jump list (desktop).

          - Start in the lower corner of the tile (desktop).

          - Shortcuts (desktop).

          - Control Panel (desktop).





For information on Universal Windows Platform application icons and logos, see [Microsoft's documentation](https://docs.microsoft.com/en-us/windows/uwp/design/style/app-icons-and-logos).
**Important:** Unity writes image types to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.





### Properties



| Property | Description |
| --- | --- |
| _100 | Uses a scale factor of 100%. |
| _125 | Uses a scale factor of 125%. |
| _150 | Uses a scale factor of 150%. |
| _200 | Uses a scale factor of 200%. |
| _400 | Uses a scale factor of 400%. |
| Target16 | Targets a size of 16x16 pixels. |
| Target24 | Targets a size of 24x24 pixels. |
| Target32 | Targets a size of 32x32 pixels. |
| Target48 | Targets a size of 48x48 pixels. |
| Target256 | Targets a size of 256x256 pixels. |


            
