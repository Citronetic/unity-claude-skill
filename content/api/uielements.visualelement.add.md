This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).Add




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

public void Add([UIElements.VisualElement](UIElements.VisualElement.html) child);






### Parameters



| Parameter | Description |
| --- | --- |
| child | The child element to add to the content container. |





### Description



Adds an element to the [contentContainer](UIElements.VisualElement-contentContainer.html) of this element.





Adds the child element to the [hierarchy](UIElements.VisualElement-hierarchy.html) if this element is the content container; otherwise, adds the child element to the content container of this element.

 Exits without performing any action if the child element is `null`.

 Throws an InvalidOperationException if the contentContainer is `null`.


The following example shows how to add a [Button](UIElements.Button.html) to a visual element.


              


```
using UnityEngine;
using UnityEngine.UIElements;[UxmlElement]
public partial class MyElement : VisualElement
{
    public MyElement()
    {
        var button = new Button { name = "my-button", text = "Click me!" };
        button.clicked += ButtonClicked;        // Add the button to the visual element
        Add(button);
    }    void ButtonClicked()
    {
        Debug.Log("Button clicked!");
    }
}
```


            
