This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).defaultWebScreenHeight




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static int defaultWebScreenHeight;






### Description



Default vertical dimension of web player window.





[Image: image]


*Custom player settings.*


              


```
using UnityEngine;
using UnityEditor;
// Simple Script that saves and loads custom
// Stand-alone/Web player screen settings among
// Unity Projectsclass CustomSettings : EditorWindow
{    string compName = "";
    string prodName = "";
    int screenWidth = 640;
    int screenHeight = 480;
    int webScreenWidth = 640;
    int webScreenHeight = 480;
    bool fullScreen = false;    [MenuItem("Examples/Custom Settings")]
        static void Init()
    {
        var window = GetWindow<CustomSettings>();
        window.Show();
    }    void OnGUI()
    {
        compName = EditorGUILayout.TextField("Company Name:", compName);
        prodName = EditorGUILayout.TextField("Product Name:", prodName);
        EditorGUILayout.BeginHorizontal();
        screenWidth = EditorGUILayout.IntField("Width:", screenWidth);
        screenHeight = EditorGUILayout.IntField("Web Height:", screenHeight);
        EditorGUILayout.EndHorizontal();
        EditorGUILayout.Space();
        EditorGUILayout.BeginHorizontal();
        webScreenWidth = EditorGUILayout.IntField("Web Width:", webScreenWidth);
        webScreenHeight = EditorGUILayout.IntField("Web Height:", webScreenHeight);
        EditorGUILayout.EndHorizontal();
        fullScreen = EditorGUILayout.Toggle("Full Screen:", fullScreen);
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button("Save Values"))
            SaveSettings();
        if (GUILayout.Button("Load Values"))
            LoadSettings();
        EditorGUILayout.EndHorizontal();
    }    void SaveSettings()
    {
        PlayerSettings.companyName = compName;
        PlayerSettings.productName = prodName;
        PlayerSettings.defaultScreenWidth = screenWidth;
        PlayerSettings.defaultScreenHeight = screenHeight;
        PlayerSettings.defaultWebScreenWidth = webScreenWidth;
        PlayerSettings.defaultWebScreenHeight = webScreenHeight;
        PlayerSettings.defaultIsFullScreen = fullScreen;        EditorPrefs.SetString("CompName", compName);
        EditorPrefs.SetString("ProdName", prodName);
        EditorPrefs.SetInt("ScreenWidth", screenWidth);
        EditorPrefs.SetInt("ScreenHeight", screenHeight);
        EditorPrefs.SetInt("WebScreenWidth", webScreenWidth);
        EditorPrefs.SetInt("WebScreenHeight", webScreenHeight);
    }
    void LoadSettings()
    {
        compName = EditorPrefs.GetString("CompName", "");
        prodName = EditorPrefs.GetString("ProdName", "");
        screenWidth = EditorPrefs.GetInt("ScreenWidth", 640);
        screenHeight = EditorPrefs.GetInt("ScreenHeight", 480);
        webScreenWidth = EditorPrefs.GetInt("WebScreenWidth", 640);
        webScreenHeight = EditorPrefs.GetInt("WebScreenHeight", 480);
    }
}
```


            
