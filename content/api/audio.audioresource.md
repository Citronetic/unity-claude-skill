This version of Unity is unsupported.



# AudioResource





class in
          UnityEngine.Audio



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.AudioModule](UnityEngine.AudioModule.html)


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



Represents an audio resource asset that you can play through an [AudioSource](AudioSource.html).





**Note**: Audio resources don’t provide direct access to properties like `length`. However, if your audio resource is an [AudioClip](AudioClip.html), you can access these properties through [AudioSource.clip](AudioSource-clip.html). Other types of resources might not provide direct access to these properties because the resources are dynamic or the values might change every time you play the audio.

Additional resources: [AudioClip](AudioClip.html), AudioRandomContainer.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Audio;// Play an AudioClip, then an AudioResource, through an AudioSource.
[RequireComponent(typeof(AudioSource))]
public class ExampleClass : MonoBehaviour
{
    public AudioClip m_Clip;
    public AudioResource m_Resource;    IEnumerator Start()
    {
        AudioSource audioSource = GetComponent<AudioSource>();
        audioSource.resource = m_Clip;
        audioSource.Play();        yield return new WaitForSeconds(audioSource.clip.length);        audioSource.resource = m_Resource;
        audioSource.Play();
    }
}
```





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
