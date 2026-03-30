[Image: image]

# Input Manager

Tutorial

Beginner

+10XP

5 mins

3

Unity Technologies

[Image: Input Manager]Summary

Input Manager (入力マネージャー) は、様々な入力デバイスを設定するのに最適な方法です。これには、キーボード入力、マウス入力、ゲームコントローラー入力などがあります。本チュートリアルでは、Input Manager について学びます。

Languages available:

日本語English日本語日本語

## 1. Input Manager の使用

Q&A (0)

本チュートリアルは、Unity 2019.4.10f1 LTS を使用して検証されています。

Input Manager (入力マネージャー) は、様々な入力デバイスを設定するのに最適な方法です。これには、キーボード入力、マウス入力、ゲームコントローラ入力などがあります。Input Manager には、入力マッピングの名前と、それを関連付ける一連のボタンまたは軸が必要です (**画像 01**)。これらの名前は文字列（スクリプティングでは人間が読めるテキスト変数）で、入力が Unity のゲームオブジェクトに対して実際に行うことをスクリプトに記述します。ここで重要なのは、Input Manager の文字列名は、スクリプト内の文字列と大文字と小文字の区別やスペルが正確に一致していなければならないということです。入力マッピングについての詳細は、[Unity のドキュメント](https://docs.unity3d.com/Manual/class-InputManager.html)をご覧ください。

1. メニューバーで、**Edit**>**Project Settings** >**Input Manager**の順にクリックする
2. Inspector で、Axes を展開する
3. Size パラメーターを増やし、新しい Input パラメーターのためのスペースを確保する
4. 新しい入力軸を展開する
5. 入力軸の名前を変更する
6. 正しい Positive ボタンを入力する
7. Type を必要な入力タイプに設定する
8. 必要に応じて Axis と Joy Num を変更する (**画像 01**)

[Image: image]

以下のコードは、「Jump」入力軸の使用方法を示しています。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Jump : MonoBehaviour
{

    private bool isGrounded = false;

    // Update is called once per frame
    void Update ()
    {
        if (!isGrounded) //Only jump if the player is grounded
        {
            if (Input.GetButton("Jump")) //Jump is set up in the Input Manager
            {
                //Add jump code here
            }
        }
     }
}
```

ステップを完了としてマーク

## 2. まとめ

Q&A (0)

これで、Input Manager に移動して、様々な入力デバイスを設定する方法がわかりました。このチュートリアルでは、Input Manager で新しい入力を作成する方法と、現在の入力を編集する方法を学びました。また、各入力には「名前」があり、名前はスクリプトでその入力を呼び出したり、入力がトリガーされたときにイベントを作成したりするための文字列であることも学びました。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
