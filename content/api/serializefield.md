This version of Unity is unsupported.



# SerializeField





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Force Unity to serialize a private field.





Unity only serializes public fields by default. To serialize private fields, add the `[SerializeField]` attribute to them.

Unity serializes all your script components, reloads the new assemblies, and recreates your script components from the serialized versions. This serialization is done with an internal Unity serialization system; not with .NET's serialization functionality.

For a full reference of what Unity can serialize, refer to [Serialization rules](../Manual/script-serialization-rules.html).

Additional resources: [SerializeReference](SerializeReference.html)


              


```
using UnityEngine;public class SomePerson : MonoBehaviour
{
    //This field gets serialized because it is public.
    public string firstName = "John";    //This field does not get serialized because it is private.
    private int age = 40;    //This field gets serialized even though it is private
    //because it has the SerializeField attribute applied.
    [SerializeField]
    private bool hasHealthPotion = true;    void Start()
    {
        if (hasHealthPotion)
            Debug.Log("Person's first name: " + firstName + " Person's age: " + age);
    }
}
```


            
