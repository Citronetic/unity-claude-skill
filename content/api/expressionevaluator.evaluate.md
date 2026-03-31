This version of Unity is unsupported.



# [ExpressionEvaluator](ExpressionEvaluator.html).Evaluate




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

public static bool Evaluate(string expression,
out T value);






### Parameters



| Parameter | Description |
| --- | --- |
| expression | A string containing a mathematical expression (e.g. "4+3"). |
| value | The result of the expression evaluation. Supported types are: int, float, long, double. |





### Returns



**bool**
        Indicates whether expression could be evauated successfully.





### Description



Evaluates a math expression and returns the result.





The expressions that can be evaluated support:



          - arithmetic operators `a+b`, `a-b`, `a*b`, `a/b`,

          - power (`a^b`) and modulo (`a%b`) operators,

          - parentheses,

          - math functions `sqrt(a)`, `floor(a)`, `ceil(a)`, `round(a)`,

          - trigonometic functions `cos(a)`, `sin(a)`, `tan(a)` (argument expressed in radians), and a constant `pi`.





If the expression can not be evaluated, the function returns `false` and the result value is set to zero.


              


```
using UnityEditor;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    [MenuItem("Example/Int Expression")]
    public static void IntExample()
    {
        ExpressionEvaluator.Evaluate("2+3", out int result);
        // prints 5
        Debug.Log(result);
    }    [MenuItem("Example/Float Expression")]
    public static void FloatExample()
    {
        ExpressionEvaluator.Evaluate("sqrt(cos(pi/3))", out float result);
        // prints 0.7071068
        Debug.Log(result);
    }
}
```


            
