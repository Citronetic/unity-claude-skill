This version of Unity is unsupported.



# [CustomObjectIndexerAttribute](Search.CustomObjectIndexerAttribute.html).type




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












                    public Type type;






### Description



Each time an object of a specific type is indexed, the registered function is called.


              


```
[CustomObjectIndexer(typeof(Shader), version = 2)]
internal static void ShaderIndexing(CustomObjectIndexerTarget context, ObjectIndexer indexer)
{
    if (!(context.target is Shader shader) || !indexer.settings.options.properties)
        return;

    var ownerPropertyType = typeof(Shader);
    for (int i = 0, end = shader.GetPropertyCount(); i != end; ++i)
    {
        var label = shader.GetPropertyName(i);

        // Keep some property name patterns
        if (s_IgnorePropertyNameRx.IsMatch(label))
            continue;

        var name = label.ToLowerInvariant();
        if (name.Length > 0 && name[0] == '_')
            name = name.Substring(1);
        switch (shader.GetPropertyType(i))
        {
            case ShaderPropertyType.Color:
                var v = shader.GetPropertyDefaultVectorValue(i);
                IndexColor(name, new Color(v.x, v.y, v.z, v.w), indexer, context.documentIndex, label, ownerPropertyType);
                break;
            case ShaderPropertyType.Vector:
                v = shader.GetPropertyDefaultVectorValue(i);
                IndexVector(name, v, indexer, context.documentIndex, label, ownerPropertyType);
                break;
            case ShaderPropertyType.Float:
                indexer.IndexNumber(context.documentIndex, name, shader.GetPropertyDefaultFloatValue(i));
                break;
        }
    }
}
```


            
