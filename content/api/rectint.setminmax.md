This version of Unity is unsupported.



# [RectInt](RectInt.html).SetMinMax




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

public void SetMinMax([Vector2Int](Vector2Int.html) minPosition,
[Vector2Int](Vector2Int.html) maxPosition);






### Description



Sets the bounds to the `min` and `max` value of the rect.





Use this function to set both the minimum and maximum value of the [RectInt](RectInt.html) at the same time, faster than setting the values separately.

This function resolves for the minimum value first, then for the maximum value. When the function resolves for the minimum value, if you enter a minimum value that is greater than the current maximum value, then the entered value becomes the new maximum value and the previous maximum value becomes the new minimum value.

However when the function resolves for the maximum value, it only compares the original entered maximum value against the resolved minimum value, and ignores the new maximum value. If you entered a maximum value that is less than the resolved minimum value, then the entered value becomes the new minimum value and the resolved minimum value becomes the new maximum value.

The position and size of the [RectInt](RectInt.html) is then adjusted based on the final resolved minimum and maximum values.


            
