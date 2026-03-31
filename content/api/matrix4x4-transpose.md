This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).transpose




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












                    public [Matrix4x4](Matrix4x4.html) transpose;






### Description



Returns the transpose of this matrix (Read Only).





The transposed matrix is the one that has the Matrix4x4's columns exchanged with its rows.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // You construct a Matrix4x4 by passing in four Vector4 objects
    // as being COLUMNS and not ROWS
    Matrix4x4 matrix = new Matrix4x4(
        new Vector4(1, 2, 3, 4),
        new Vector4(5, 6, 7, 8),
        new Vector4(9, 10, 11, 12),
        new Vector4(13, 14, 15, 16));
    void Start()
    {
        Debug.Log(matrix);
        // This outputs
        // 1, 5, 9, 13,
        // 2, 6, 10, 14,
        // 3, 7, 11, 15,
        // 4, 8, 12, 16
        Debug.Log(matrix.transpose);
        // This outputs
        // 1, 2, 3, 4,
        // 5, 6, 7, 8,
        // 9, 10, 11, 12,
        // 13, 14, 15, 16
    }
}
```


            
