This version of Unity is unsupported.



# [AudioClip](AudioClip.html).PCMReaderCallback




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




                [Switch to Manual](../Manual/class-AudioClip.html)










## Declaration

public delegate void PCMReaderCallback(float[] data);






### Parameters



| Parameter | Description |
| --- | --- |
| data | Array of floats containing data read from the clip. |





### Description



Unity calls this delegate each time [AudioClip](AudioClip.html) reads data.





The AudioClip stores this raw sample data in an array of floats that range from -1 to 1.
For non-streamed clips, Unity calls this delegate when it creates the audio clip. If the clip is longer than the callback's maximum amount of samples, Unity calls the delegate multiple times so the engine can get all the clip's samples. Streamed clips call this delegate continuously, and takes various samples at varied intervals.
When you use [AudioClip.Create](AudioClip.Create.html) to create a clip, you can use this delegate as a parameter and define what happens whenever the audio reads data.

Additional resources: [AudioClip.Create](AudioClip.Create.html).


              


```
// This script creates an audio clip, sets its data and creates a sinusoid graph when it reads the data and changes positions.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public int position = 0;
    public int samplerate = 44100;
    public float frequency = 440;   void Start()
    {
        AudioClip myClip = AudioClip.Create("MySinusoid", samplerate * 2, 1, samplerate, true, OnAudioRead, OnAudioSetPosition);
        AudioSource aud = GetComponent<AudioSource>();
        aud.clip = myClip;
        aud.Play();
    }// When Unity calls PCMReaderCallback, create a graph from the audio clip’s data.
   void OnAudioRead(float[] data)
    {
        int count = 0;
        while (count < data.Length)
        {
            data[count] = Mathf.Sin(2 * Mathf.PI * frequency * position / samplerate);
            position++;
            count++;
        }
    }
//When Unity calls PCMSetPositionCallback, update the position variable.
   void OnAudioSetPosition(int newPosition)
    {
        position = newPosition;
    }
}
```


            
