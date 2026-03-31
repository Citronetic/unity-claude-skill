[Image: image]

# ネスト状のプレハブの紹介

Tutorial

Beginner

+10XP

15 mins

4

Unity Technologies

[Image: ネスト状のプレハブの紹介]Summary

ネスト状のプレハブ（Nested Prefabs）を使用すると、別のプレハブの中にプレハブへの参照を維持することができます。このチュートリアルでは、ネスト状のプレハブを効率的に構築して更新する方法を学び、無駄な時間、リソース、不必要な繰り返しを排除します。

Languages available:

日本語English日本語日本語

## 1. ネスト状のプレハブの概要

Q&A (0)

#### *このチュートリアルは Unity 2019 LTS を使用して検証しています。*

#### Unity では、プレハブ（Prefab）とは、再利用のために準備されたゲームオブジェクトまたはゲームオブジェクトのコレクションのことを指します。Unity 2018.3 で新しく追加されたのは、ネスト状のプレハブです。ネスト状のプレハブ（Nested Prefab）を使用すると、別のプレハブの中にプレハブへの参照を維持することができます。参照されているプレハブへの変更は、プレハブバリアントの場合を除き、その変更が保存されるとすぐに反映されます。プレハブへの変更は、Unity の新機能である Prefab モードで行われます。Prefab モードで行った変更は、元に戻すことも、基本プレハブに適用することもできます。Prefab モードで行った変更を基本プレハブ に適用すると、その基本プレハブのすべての非バリアント型インスタンスに影響を与えます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## 2. ネスト状のプレハブの利点

Q&A (0)

あなたが車のラインを設計しているとしましょう。その車を組み立て済みの部品で組み立てるとします。そこで、すでに組み立て済みの複数のモデルで使用されているスポイラーのスタイリングを変更することにしました。従来の方法で車を組み立て、各モデルごとに 1 つのプレハブにピースをまとめていた場合、各モデルのスポイラーを手動で更新する必要がありました。スポイラープレハブを入れ子にすることで、基本のスポイラーを変更するだけで済みます。スポイラーを参照している非バリアントプレハブはすべて、新しいスタイリングを使用するために自動的に更新されます。

ステップを完了としてマーク

## 3. プレハブバリアント

Q&A (0)

プレハブバリアントは、参照されているプレハブが何らかの方法で変更されて、基本の参照されているプレハブをオーバーライドしているネスト状のプレハブです。いつでも、バリアントを元に戻して、基本プレハブのプロパティを引き継ぐことができます。

ステップを完了としてマーク

## 4. プレハブをネスト状にする

Q&A (0)

ここでは、ネスト状のプレハブの簡単な例を作成しますが、原理は普遍的です。このワークフローでは、Transform 情報のみを変更しますが、プレハブへのスクリプトコンポーネントの追加/削除には同じルールが適用されます。プレハブ用のフォルダーがない場合は、Project ペインを使用して、Assets フォルダーにプレハブ用のフォルダーを作成します。

1. Unity エディターで、ゲームオブジェクトのドロップダウンから **3D Object**> **Sphere**の順に選択します。

2. Hierarchy ペインから Project ペインの Prefabs フォルダーに Sphere をドラッグします。

3. ゲームオブジェクトのドロップダウンから、**3D Object**> **Cube** の順に選択します。

4. Hierarchy ビューで、Cube に Sphere をドラッグアンドドロップします。

5. さらに、Hierarchy ビューで、Sphere をクリックしてハイライトします。

6. Inspector で、Sphere の position を Y と Z で 1.5 に設定します (**画像 01**)。

[Image: image]

7. Cube を Assets フォルダーにドラッグします。シーンの Hierarchy は以下のようになります **(画像 02)**。

[Image: image]

これで、2 つのプレハブができました。Sphere プレハブは、もう一方のプレハブ、Cube-Sphere の組み合わせでネスト状にされています。次に、Cube プレハブを数回複製してから、Sphere プレハブも使用する新しいネスト状のプレハブを作成して複製します。これは、ネスト状のプレハブに変更を適用するためのさまざまなオプションを説明するのに役立ちます。

1. Hierarchy ビューで、Cube を右クリックして **Duplicate** を選択します。

2. 移動ツール（**W**）を使用するか、Inspector の Position の値を変更して、この複製されたキューブを移動します。

3. キューブプレハブを数回複製して移動させます **(画像 03)**。

[Image: image]

4. ゲームオブジェクトのドロップダウンから、**3D Object > Capsule** の順に選択します。

5. Assets フォルダーから、Sphere を Capsule にドラッグアンドドロップします。

6. 球体とカプセルの両方が表示されるように、前のセクションのステップ 6 のように、Y と Z で子の Sphere を移動します。

7. Hierarchy ビューの Capsule を Prefabs フォルダーにドラッグします。これで、Sphere プレハブを使用する 2 つのネスト状のプレハブができました。

8. Capsule プレハブを数回複製して移動させます **(画像 04)**。

[Image: image]

9. 今のシーンを保存しておけば、後でこの状態に戻りやすいようにしておきましょう。

変更が加えられ、保存され、更新されて、元に戻されるときのネスト状のプレハブ間の関係を探ってみましょう。

1. 編集用に基本プレハブを開く方法はいくつかあり、すべて Hierarchy ビューから始まります。以下のいずれかを選択してください：

- クリックして、Sphere の任意のインスタンスを選択します。Inspector の上部にある Prefab と書かれた行で、**Open**をクリックします**(画像 05)**。

[Image: image]

- Sphere の右にある「**>**」をクリックして Prefab モードに入ります **(画像 06)**。

[Image: image]

2. Scene ビューの内容は変わりますが、実際にはシーンではなく、基本となる Sphere プレハブを編集しています。Scene ビューの右上には、Auto Save と書かれたチェックボックスがあります **(画像 07)**。ボックスがチェックされていない場合、左に Save という名前のボタンが表示されます。一度保存されると、ここで行われた変更は、シーン内のすべての球体に継承されます。

[Image: image]

3. Inspector または Scale ツールを使用して、Sphere のスケールを X 単位で 3 に変更します。

4. Auto Save にチェックが入っていない場合は、今すぐ Save ボタンをクリックしてください。

5. 矢印「**<**」または Scenes ボタン (**画像 08**) をクリックして、メインの Hierarchy ビューに戻ります。

[Image: image]

6. この変更は、Sphere のすべてのインスタンスに適用されていることにご注意ください。

7. 基本のプレハブを直接変更するのではなく、プレハブのインスタンスを変更して基本へ変更を適用することもできます。Hierarchy ビューで、Sphere の任意のインスタンスをクリックして選択します。これが Capsule の子か Cube の子か、特に注意してください。Sphere の Inspector で、そのスケールを X, Y, Z のいずれかで変更します。基本の Sphere からスケールが変更されたところでは、オーバーライドの値が**太字**で表示され、Inspector の左端で線が強調表示されていることに注意してください (**画像 09**)。この Sphere プレハブは、現在、プレハブバリアントになっています。変更が適用されるまでは、この球体だけが異なるスケールを持つことになります。

[Image: image]

8. Inspector で、Sphere の Inspector で変更されたスケールの寸法を右クリックします。たとえば、Xのスケールを変更した場合は、文字 X を右クリックします **(画像 10)**。

[Image: image]

以下に示すように、3つの選択肢があります：

**Apply as Override in Prefab ‘Cube’**(または「Capsule」を選択した場合)

Capsule プレハブと Cube プレハブのいずれかにある Spheres は変更されますが、両方では変更されません。これは、Sphere のスケールの変更が、Sphere そのものではなく、親 プレハブの基本へのオーバーライドとして保存されるためです。先ほどの自動車の設計の使用例の続きですが、車両の特定のモデル（この例では Cube や Capsule）のパーツのすべてのインスタンスを変更したい場合は、このオプションを選択します。

**Apply to Prefab ‘Sphere’**

これは、基本となる Sphere プレハブにスケールの変更を適用し、Capsule プレハブと Cube プレハブ両方の Sphere に反映します。パーツ自体を変更したい場合はこのオプションを選択し、現在の構成の球体を反映させるために、すべての非バリアントの参照を変更します。

**Revert**

これは、Sphere のスケールを基本の Sphere プレハブのスケールに戻します。標準パーツに戻したい場合はこれを選択します。

9. **Ctrl-Z** (Mac では Command-Z) を使用して、オーバーライドとして、基本の Sphere プレハブに変更を適用してみたり、クリーンな状態に戻るために必要に応じてシーンをリロードしてみてください。

先ほどの例では、ネスト状のプレハブの子を変更しました。今度は親を変更します。

1. Hierarchy で、Cube を選択して、Scale を変更します。

2. 直接球体のスケールを変更しなかったとしても、球体自体のスケールがその親の Transform のスケールと相対的であることにご注意ください。

3. Inspector で変更したスケールを右クリックして、この変更を親のプレハブの種類（この場合はキューブ）にのみ適用できることにご注意ください。あるいは、変更を元に戻すことができます **(画像 11)**。****

[Image: image]

これは、実際には Sphere を変更していないからです。親プレハブに対する相対的なスケールを変更しただけです。キューブやカプセルの車の全モデルにスポイラーの相対位置を変更したい場合は、この変更を適用することを選択するかもしれません。

4. **Revert**（元に戻す）を選択します。

ステップを完了としてマーク

## 5. まとめ

Q&A (0)

ここでは、ネスト状のプレハブと Prefab モードについて比較的基本的なことを紹介しましたが、オブジェクトの再利用が多いプロジェクトでは、これらの機能が威力を発揮します。Unity を使って作業していくうちに、あなたのニーズに合った多くの用途を見つけることができるでしょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
