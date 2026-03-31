This version of Unity is unsupported.



# [Vector3](Vector3.html).LerpUnclamped




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

public static [Vector3](Vector3.html) LerpUnclamped([Vector3](Vector3.html) a,
[Vector3](Vector3.html) b,
float t);






### Parameters



| Parameter | Description |
| --- | --- |
| a | Start value. This value is returned when t = 0. |
| b | End value. This value is returned when t = 1. |
| t | Value used to interpolate between or beyond a and b. |





### Returns



**Vector3**
        Interpolated value. This value always lies on a line that passes through points `a` and `b`.





### Description



Interpolates linearly between two vectors, allowing extrapolation beyond the end points.





Unclamped linear interpolation allows for values of `t` less than zero or greater than one, such that the returned vector can lie outside of the points `a` and `b`.

                This method is useful for finding a point some constant rate along the line through two endpoints. For example, to move an object gradually beyond and through those points.

                The returned value **V** equals

                **V** = **A** + (**B** − **B**) × t


The method interpolates between points `a` and `b`, such that:



          - When `t` ≤ 0, this method returns a vector that points along the line through `a` and `b` but in fornt of `a`.

          - When 0 < `t0` > 1, this method returns a vector that points along the line between `a` and `b`. The distance along the line corresponds to the fraction represented by `t`.

          - When `t` > 1, this this method returns a vector that points along the line through `a` and `b` but beyond `b`.






              


```
// This example creates three primitive cubes. Using linear interpolation, one cube moves along the line that passes through the others.
// Because the interpolation is not clamped to the start and end points, the moving cube passes the end cube after the interpolation frame limit is reached.
// Attach this script to any GameObject in your scene. using UnityEngine;public class LerpUnclampedExample : MonoBehaviour
{
    // Number of frames in which to completely interpolate between the positions
    int interpolationFramesCount = 300;
    int elapsedFrames = 0;    // Number of frames to reset the moving cube to the start position
    int maxFrameReset = 900;    GameObject CubeStart;
    GameObject CubeEnd;
    GameObject CubeMove;
    void Start()
    {
        // Create the cubes
        CubeStart = GameObject.CreatePrimitive(PrimitiveType.Cube);
        CubeStart.transform.position = new Vector3(-5,0,0);        CubeEnd = GameObject.CreatePrimitive(PrimitiveType.Cube);
        CubeEnd.transform.position = new Vector3(5,0,0);        CubeMove = GameObject.CreatePrimitive(PrimitiveType.Cube);
        CubeMove.transform.position =  CubeStart.transform.position;
    }    void Update()
    {
        float interpolationRatio = (float)elapsedFrames / interpolationFramesCount;        // Interpolate position of the moving cube, based on the ratio of elapsed frames
        CubeMove.transform.position = Vector3.LerpUnclamped(CubeStart.transform.position, CubeEnd.transform.position, interpolationRatio);

        // Reset elapsedFrames to zero after it reaches maxFrameReset
        elapsedFrames = (elapsedFrames + 1) % (maxFrameReset);      }
}
```





Additional resources: [Lerp](Vector3.Lerp.html) [SlerpUnclampes](Vector3.SlerpUnclampes.html)


            
