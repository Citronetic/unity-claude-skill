This version of Unity is unsupported.



# [AnimationCurve](AnimationCurve.html).MoveKey




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

public int MoveKey(int index,
[Keyframe](Keyframe.html) key);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the key to move. |
| key | The keyframe containing the new time and value. |





### Returns



**int**
        The index of the keyframe after it is moved.





### Description



Moves the key at `index` to `key.time` and `key.value`.





This method removes the keyframe at `index` and inserts the updated `key` at the correctly sorted position in [AnimationCurve.keys](AnimationCurve-keys.html).

                Use this method to move a keyframe in two dimensions: time and value.

                To use this method as intended, use [AnimationCurve.keys](AnimationCurve-keys.html) to acquire the keyframe, modify the value and/or time, then invoke this method with the updated keyframe. If you use this method with a different keyframe, this method replaces the keyframe with a new one.

                AnimationCurve does not support two keys with the same time. If `key.time` is the same as another keyframe, `key` is reinserted at the time of the keyframe at `index`. This cancels the move operation in the time dimension and keeps the modification in the value dimension.


                See Also: [AnimationCurve.keys](AnimationCurve-keys.html)


            
