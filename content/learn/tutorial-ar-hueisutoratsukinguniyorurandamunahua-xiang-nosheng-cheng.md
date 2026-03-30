[Image: image]

# AR フェイストラッキングによるランダムな画像の生成

Tutorial

intermediate

+0XP

45 mins

0

Unity Technologies

[Image: AR フェイストラッキングによるランダムな画像の生成]Summary

*コーディングの経験がない方は、まず「[スクリプト入門](https://learn.unity.com/project/beginner-gameplay-scripting)*」*を試してみて、これから書く内容に慣れておくことをお勧めします。特に、「[変数と関数について](https://learn.unity.com/tutorial/variables-and-functions)*」*、「[Awake と Start 関数](https://learn.unity.com/tutorial/awake-and-start?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*や「[Update 関数と FixedUpdate 関数](https://learn.unity.com/tutorial/update-and-fixedupdate?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*、「[Arrays (配列)](https://learn.unity.com/tutorial/arrays-9o?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*はとても参考になります。また、「[If 文](https://learn.unity.com/tutorial/if-statements?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*、「[DeltaTime 関数](https://learn.unity.com/tutorial/delta-time?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*、「[Destroy 関数](https://learn.unity.com/tutorial/destroy-i?uv=2019.3&projectId=5c8920b4edbc2a113b6bc26a&architecture=true)*」*なども同様に役立ちます。*

今回は、AR Face Tracking を使って、人の頭上にある画像をランダムに選択するゲームを作ってみましょう。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

AR Default Face を使って、顔にさまざまなテクスチャを重ねる方法を学びましたが、今度はもう少し難しいものを作ってみましょう。今回のプロジェクトでは、まず使用する画像を探し、その画像を頭上にランダムに表示させるためのちょっとしたコーディングが必要です。

[Image: image]ステップを完了としてマーク

## 2. 生成したい画像を探す

Q&A (0)

AR Face Manager で Face Tracking を使う方法を学んだので、今度は機能を拡張して、頭の上にランダムな画像を生成してみましょう。まず、ランダムな画像を見つけなければなりません。[Asset Store のパッケージ](https://assetstore.unity.com/packages/essentials/asset-packs/ar-face-assets-184187)には、誰かが試せるようにランダムにチュートリアルの画像を用意していますが、最適だと思われる画像を自由に使っていただいて構いません。画像の解像度は、320×180 ピクセルを推奨します。

[Image: image]

これらの画像は、保存したフォルダーからドラッグして、直接 Unity にドロップすることで追加することができます。Project ウィンドウに**Images**という新しいフォルダーを作っておくと、整理しやすくなります。

[Image: image]

自分で作成した画像をインポートした場合は、その画像が Unity で使用できるように設定する必要があります。Project ウィンドウから画像を選択し、Inspector で **Texture Type** を **Sprite (2D と UI)** に設定してください。オプションで **Pixels Per Unit** を**1000**に設定すると、画像の品質が向上します。設定が完了したら、ウィンドウの下部にある**Apply**をクリックしてください。

[Image: image]

画像の 1 つをシーンにドラッグして、**Sprite Renderer**を持つ新しいゲームオブジェクトを作成し、オブジェクトの名前を「Image」に変更します。

[Image: image]

Hierarchy 内で右クリックして **Create Empty** を選択し、シーン内に空のゲームオブジェクトを作成します。名前を「**Image Randomizer**」に変更します。**Image**オブジェクトをドラッグして Image Randomizer オブジェクトの上にドロップすることで、Image オブジェクトを**Image Randomizer**オブジェクトの子として設定します。**Image Randomizer**の横にドロップダウンの矢印があり、その下に **Image**オブジェクトがインデントされているときに、動作したことがわかります。

[Image: image]

Hierarchy で Image を選択し、その情報が Inspector に表示されるようにします。**Transform** コンポーネントを見て、**Position**を**X:0 Y:0.25 Z:0**に変更し、画像が頭の上に表示されるようにします。

[Image: image]ステップを完了としてマーク

## 3. イメージジェネレーターのコード化

Q&A (0)

実際にゲームでランダムな画像を選択するには、その画像が選択されるようにするためのコーディングが必要になります。 Project ウィンドウで、右クリックして**Create > Folder**と選択し、Scripts という新しいフォルダーを作成します。このフォルダーの名前は必ず Scripts にしてください。

**Scripts** フォルダーで、Project ウィンドウの**Create > C# Script** と選択し、右クリックして **ImageRandomizer**という新しい **C# スクリプト**を作成し、その新しいスクリプトをダブルクリックして開きます。

[Image: image]

まず、1) SpriteRenderer を使って画像を表示する方法を把握する、2) 配列で表示する画像を決定する、3) 画像の表示時間と画像が選択されるまでの時間を制御するために、いくつかのパブリック変数が必要になります。

```csharp
public SpriteRenderer randomSpriteRenderer; //The sprite renderer that will display the random image
 public Sprite[] randomSprites;              //An Array of sprites that will be used for the image randomization

 public float timeBetweenChange = 0.2f;      //The amount of time between switching the image
 public float timeUntilStopping = 3.0f;      //The total amount of time until randomization stops
```

`次に、現在表示している画像と、画像が変わるまでの時間を追跡するために、いくつかのプライベート変数が必要になります。`

```csharp
private int RandomImageIndex = 0;           //Keep track of which image we're currently displaying
private float ImageChangeTimer;             //How much time is left until we switch to new image
```

**Start()**メソッドで、タイマー変数を設定して、経過時間を追跡できるようにしましょう。

```csharp
void Start()
    {
        // Set this timer variable as soon as the script starts so it's ready for the update function
        ImageChangeTimer = timeBetweenChange;
    }
```

**Update()**では、まず Time.deltaTime を使って経過時間を把握する必要があります。次に、**If 文**を使って、時間切れになった場合、最終的な画像を表示することを確認します。**Update()** では、まず Time.deltaTime を使って経過時間を把握する必要があります。次に、**If 文**を使って、時間切れになった場合、最終的な画像を表示することを確認します。また、別の**If 文**を使って画像変更タイマーを管理し、タイマーが切れたら新しい画像を表示するようにします。

```csharp
void Update()
    {
 // Remove delta time from both active timers. This subtracts a small amount of time from the
 // overall time we described in "timeBetweenChange" and "timeUntilStopping"
        ImageChangeTimer -= Time.deltaTime;
        timeUntilStopping -= Time.deltaTime;

 // If we've fully run out of time we need to select a final random image
 if(timeUntilStopping <= 0.0f)
        {
 // The final image will be selected at random
            randomSpriteRenderer.sprite = randomSprites[Random.Range(0, randomSprites.Length)];

 // Destroy this script immediately stopping it from running anymore in the future
            DestroyImmediate(this);

 // Return so no other code runs in this Update function call
 return;
        }

 // If RandomizationTimer is less than or equal to zero it's time for a new image
 if(ImageChangeTimer <= 0.0f)
        {
 // To ensure we see all the images we increase the RandomImageIndex to see the next
 // image in the array
            RandomImageIndex++;

 // If our index has gone past the end of the array, reset it to zero so the cycle
 // can start again
 if(RandomImageIndex >= randomSprites.Length)
            {
                RandomImageIndex = 0;
            }

 //Assign the new sprite to the sprite renderer
            randomSpriteRenderer.sprite = randomSprites[RandomImageIndex];

 //Reset the "RandomizationTimer" to start counting down again
            ImageChangeTimer = timeBetweenChange;
        }
    }
```

これらのコードを追加したら、Windows では CTRL + S、Mac では CMD + S を使ってコードを保存してください。

ステップを完了としてマーク

## 4. イメージジェネレーターの設定の完了

Q&A (0)

Random Image Generator のコードが完成したので、あとは設定をするだけです。Unity で、「Image Randomizer」というゲームオブジェクトを選択し、Add Component Button を選択して Image Randomizer スクリプトを追加します。Image Randomizer スクリプトを検索して選択します。

[Image: image]

Hierarchy 内の**Image**子オブジェクトを **Random Sprite Renderer**の**変数スロット**にドラッグアンドドロップして、Random Sprite Renderer を設定します。インポートした**ランダムな画像をそれぞれ** **Random Sprites** **の配列に設定**します。追加した画像の数に合わせて**サイズを変更**し、各 **Element** スロットに画像をドラッグアンドドロップします。

[Image: image]

画像の表示時間を長くしたり、最終的な結果を表示するまでの時間を長くしたい場合は、**Time Between Change**と **Time Until Decision** をお好みで調整してください。

すべての値を設定したら、**Image Randomizer ゲームオブジェクト**全体を Prefabs フォルダーにドラッグして、新しいプレハブを作成します。その後、シーン内の original のゲームオブジェクトを削除できます。

[Image: image]

Image Randomizer プレハブを新しい Face Manager プレハブとして設定すれば、頭上に画像が表示されるようになります。アプリケーションをビルドして実行し、ランダムな画像が選択されることを確認してください。

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
