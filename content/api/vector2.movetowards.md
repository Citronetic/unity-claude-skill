This version of Unity is unsupported.



# [Vector2](Vector2.html).MoveTowards




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

public static [Vector2](Vector2.html) MoveTowards([Vector2](Vector2.html) current,
[Vector2](Vector2.html) target,
float maxDistanceDelta);






### Description



Moves a point `current` towards `target`.





This is essentially the same as [Vector2.Lerp](Vector2.Lerp.html) but instead the function will ensure that the distance never exceeds `maxDistanceDelta`.
Negative values of `maxDistanceDelta` pushes the vector away from `target`.


              


```
using UnityEngine;// 2D MoveTowards example
// Move the sprite to where the mouse is clicked
//
// Set speed to -1.0f and the sprite will move
// away from the mouse click position foreverpublic class ExampleClass : MonoBehaviour
{
    private float speed = 10.0f;
    private Vector2 target;
    private Vector2 position;
    private Camera cam;    void Start()
    {
        target = new Vector2(0.0f, 0.0f);
        position = gameObject.transform.position;        cam = Camera.main;
    }    void Update()
    {
        float step = speed * Time.deltaTime;        // move sprite towards the target location
        transform.position = Vector2.MoveTowards(transform.position, target, step);
    }    void OnGUI()
    {
        Event currentEvent = Event.current;
        Vector2 mousePos = new Vector2();
        Vector2 point = new Vector2();        // compute where the mouse is in world space
        mousePos.x = currentEvent.mousePosition.x;
        mousePos.y = cam.pixelHeight - currentEvent.mousePosition.y;
        point = cam.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, 0.0f));        if (Input.GetMouseButtonDown(0))
        {
            // set the target to the mouse click location
            target = point;
        }
    }
}
```


            
