This version of Unity is unsupported.



# KeywordRecognizer





class in
          UnityEngine.Windows.Speech



/



Inherits from:[Windows.Speech.PhraseRecognizer](Windows.Speech.PhraseRecognizer.html)



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



KeywordRecognizer listens to speech input and attempts to match uttered phrases to a list of registered keywords.





There can be many keyword recognizers active at any given time, but no two keyword recognizers may be listening for the same keyword.


              


```
using System;
using System.Text;
using UnityEngine;
using UnityEngine.Windows.Speech;public class KeywordScript : MonoBehaviour
{
    [SerializeField]
    private string[] m_Keywords;    private KeywordRecognizer m_Recognizer;    void Start()
    {
        m_Recognizer = new KeywordRecognizer(m_Keywords);
        m_Recognizer.OnPhraseRecognized += OnPhraseRecognized;
        m_Recognizer.Start();
    }    private void OnPhraseRecognized(PhraseRecognizedEventArgs args)
    {
        StringBuilder builder = new StringBuilder();
        builder.AppendFormat("{0} ({1}){2}", args.text, args.confidence, Environment.NewLine);
        builder.AppendFormat("\tTimestamp: {0}{1}", args.phraseStartTime, Environment.NewLine);
        builder.AppendFormat("\tDuration: {0} seconds{1}", args.phraseDuration.TotalSeconds, Environment.NewLine);
        Debug.Log(builder.ToString());
    }
}
```





Keyword recognizer is currently functional only on Windows 10.





### Properties



| Property | Description |
| --- | --- |
| Keywords | Returns the list of keywords which was supplied when the keyword recognizer was created. |





### Constructors



| Constructor | Description |
| --- | --- |
| KeywordRecognizer | Create a KeywordRecognizer which listens to specified keywords with the specified minimum confidence.  Phrases under the specified minimum level will be ignored. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| IsRunning | Tells whether the phrase recognizer is listening for phrases. |






### Public Methods

| Method | Description |
| --- | --- |
| Dispose | Disposes the resources used by phrase recognizer. |
| Start | Makes the phrase recognizer start listening to phrases. |
| Stop | Stops the phrase recognizer from listening to phrases. |







### Events

| Event | Description |
| --- | --- |
| OnPhraseRecognized | Event that gets fired when the phrase recognizer recognizes a phrase. |



### Delegates

| Delegate | Description |
| --- | --- |
| PhraseRecognizedDelegate | Delegate for OnPhraseRecognized event. |


            
