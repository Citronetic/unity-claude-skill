This version of Unity is unsupported.



# [IPropertyDatabaseView](Search.IPropertyDatabaseView.html).IsPersistableType




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

public bool IsPersistableType(Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | A type. |





### Returns



**bool**
        True if the type can be persisted in the file, false otherwise.





### Description



Returns a boolean indicating if a type can be persisted into the backing file.





Only certain types can be persisted in the backing file to survive a domain reload and quitting Unity. However, any type can be stored without backing in the [PropertyDatabase](Search.PropertyDatabase.html). You can always decompose your custom objects into smaller properties that can be persisted if you absolutely need persistence.


              


```
// Any object can be stored in the property database, but only
// some of them will be persisted in the database file. All others
// will disappear after the current Unity session. If you absolutely need your
// data to be persisted, you can decompose your it into smaller properties that can
// be serialized.
using (var view = propertyDatabase.GetView())
{
    var customTypeValue = new MyCustomType(42, "myValue");
    if (view.IsPersistableType(typeof(MyCustomType)))
    {
        var stored = view.Store("path/to/my/asset", "m_customTypeValue", customTypeValue);
        if (!stored)
            Debug.LogWarning("Property m_customTypeValue did not store.");
    }
    else
    {
        var stored = view.Store("path/to/my/asset", "m_customTypeValue.value", customTypeValue.value);
        if (!stored)
            Debug.LogWarning("Property m_customTypeValue.value did not store.");
        stored = view.Store("path/to/my/asset", "m_customTypeValue.name", customTypeValue.name);
        if (!stored)
            Debug.LogWarning("Property m_customTypeValue.name did not store.");
    }
}
```





Additional resources: [PropertyDatabaseType](Search.PropertyDatabaseType.html).


            
