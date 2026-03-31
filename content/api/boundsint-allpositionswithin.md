This version of Unity is unsupported.



# [BoundsInt](BoundsInt.html).allPositionsWithin




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












                    public [BoundsInt.PositionEnumerator](BoundsInt.PositionEnumerator.html) allPositionsWithin;






### Description



A BoundsInt.PositionCollection that contains all positions within the [BoundsInt](BoundsInt.html).





Positions within the BoundsInt are not inclusive of the positions on the upper limits of the BoundsInt. This iterator will only return positions of size greater than zero for each axis.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Create a BoundsInt of a cube with a
    // bottom-left coordinate of (0, 0, 0),
    // and a height, width and depth of 4,
    // and log its contained points to the console.
    void Start()
    {
        // bounds is a cube where every edge has exactly four points.
        // It has 4 * 4 * 4 = 64 points.
        // min = (0,0,0), max = (3,3,3).
        var bounds = new BoundsInt(new Vector3Int(0, 0, 0), new Vector3Int(4, 4, 4));        // Iterate through each point, and log it to the Debug Console.
        foreach (var point in bounds.allPositionsWithin)
        {
            Debug.Log(point.ToString());
        }        // The 64 unique integer 3-dimensional points that fall within this Bounds will be logged to the Debug Console.
    }
}
```


            
