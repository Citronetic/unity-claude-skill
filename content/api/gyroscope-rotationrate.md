This version of Unity is unsupported.



# [Gyroscope](Gyroscope.html).rotationRate




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












                    public [Vector3](Vector3.html) rotationRate;






### Description



Returns rotation rate as measured by the device's gyroscope.





The rotation rate is given as a Vector3 representing the speed of rotation around each of the three
 axes in radians per second. This is the value as it is reported by the gyroscope hardware - a more
 accurate measurement that has been processed to remove "bias" can be obtained with the
 [rotationRateUnbiased](Gyroscope-rotationRateUnbiased.html) property.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float shakeSpeed;
    public AudioClip shakeSound;
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void Update()
    {
        if (Input.gyro.rotationRate.y > shakeSpeed && !audioSource.isPlaying)
            audioSource.PlayOneShot(shakeSound);
    }
}
```


            
