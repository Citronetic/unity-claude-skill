This version of Unity is unsupported.



# [GridBrushBase](GridBrushBase.html).FloodFill




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

public void FloodFill([GridLayout](GridLayout.html) gridLayout,
[GameObject](GameObject.html) brushTarget,
[Vector3Int](Vector3Int.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| gridLayout | Grid used for layout. |
| brushTarget | Targets of flood fill operation. By default the currently selected GameObject. |
| position | Starting position of the flood fill. |





### Description



Flood fills data onto a grid given the starting coordinates of the cell.





Flood fill all the cells that are logically connected with the starting position.


            
