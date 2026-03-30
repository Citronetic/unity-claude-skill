[Image: image]

# 3.3 - ライティング

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 3.3 - ライティング]Summary

このレッスンでは、VR 用にライティングを最適化するために、ライトモード、ライトマッピング、ライトプローブの使い方を学びます。このレッスンを終える頃には、作成したシーンのライティングは、美しさと性能を兼ね備えたものになっていることでしょう。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. ライティングの設定を試す

Q&A (0)

シーンのライティングの編集を始める前に、新しい Lighting 設定アセットを作成して、自由に使える設定に慣れておきます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  レンダーパイプラインの設定にアクセスする：**

- Project ウィンドウで、「UniversalRenderPipelineAsset」を検索して選択します。

**2.  レンダーパイプラインの設定を試す：**

- URP アセットの Inspector の **Lighting**セクションで、設定を使って再生します。
- 複雑なライティングに課せられる制限を理解するために、**Per Object Limit** スライダーを試してみることもお勧めします。

**3.  シーンの Lighting Settings を新規に作成する：**

- **Window**> **Rendering**>**Lighting** の順にクリックして、Lighting ウィンドウを開きます。
- Inspector の隣にあるウィンドウをドッキングし、**New Lighting Settings** ボタンをクリックして新しいプロファイルを作成します。

**4.  シーンの環境ライティングを試す：**

- Lighting ウィンドウの上部にある **Environment** タブを選択します。
- 設定を変えて、シーンに与える影響を試してみましょう。

[Image: image][Image: image]

これで、Lighting ウィンドウと URP アセットの中で、ライティング設定を見つけて調整できるようになりました。

**関連リソース：**

- [Universal Render Pipeline Asset](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.0/manual/universalrp-asset.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)

ステップを完了としてマーク

## 2. 最初のライトマップの準備とベイク

Q&A (0)

いよいよ初めてライトマップのベイクに挑戦する時が来ました。事前にいくつかのステップを踏む必要があります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  すべてのライトをベイクすることができる：**

- シーンの中で、動かない、またはオン/オフしないライトを探して選択します。Hierarchy の検索バーで 「t:light」を検索すると、この作業ができます。
- その Light コンポーネントで、**Mode**の設定を **Realtime**から**Baked**に変更します。

**2.  シーン内のオブジェクトにライトをベイクできるようにする：**

- Hierarchy で、動かない static オブジェクトをすべて選択します。
- Inspector の上部で、**Static**チェックボックスが選択されていることを確認します。
- **注意：**Lighting セクションのオブジェクト（ランプ、燭台、シャンデリアなど）を選択してください。

**3.  ライトマップから背景と前景のオブジェクトを削除することで、ベイク時間を短縮できる：**

- 大きな背景のオブジェクトを選択します。
- Mesh Renderer コンポーネントの**Lightmapping** セクションで、**Scale in Lightmap** プロパティを 0 にします。

**4.  ライトをベイクしてみよう：**

- **Lighting**ウィンドウに移動します。
- **Scene** タブの下部にある**Generate Lighting** をクリックします。
- **注意：**ベイキングがフリーズしたり、クラッシュするような場合は、Lightmapper の Baking システムを Progressive CPU ではなく Progressive GPU に変更してみてください。

**5.  ライトマップの生成にかかる時間を一時的に短縮する：**

- **Lightmap Resolution** を 5～10 の間の値に下げる。
- ライトマップの品質に寄与するその他の値（サンプル、バウンスなど）を減らします。

[Image: image][Image: image][Image: image]

これで、シーンに低解像度のベイクしたライトマップができました。

**関連リソース：**

- [Light modes: Baked, Mixed, Realtime](https://docs.unity3d.com/Manual/LightModes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)

ステップを完了としてマーク

## 3. シーンのライティングの調整とリベイク

Q&A (0)

さて、初めてのベイクを試みたので、時間をかけてシーンを適切にライティングして、もう一度挑戦してみましょう。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  ライトマップをクリアして、ライティングの変化をリアルタイムに表示する：**

- Lighting ウィンドウの下部にある Generate Lighting の隣の**ドロップダウン**をクリックします。
- **Clear Baked Data**を選択します。

**2.  できるだけ多くのライトの効果を見る：**

- **UniversalRenderPipelineAsset**を選択します。
- 一時的に **Additional Light Per Object Limit**が最大値になります。

**3.  Room プレハブに付属しているデフォルトのライトを削除する：**

- Hierarchy で、Room_[style] プレハブを展開します。
- 2 つの子 Point Lights を削除します。
- **注意：**ライトを削除するには、部屋のプレハブを開く必要があります。

**4.  シーン中の実際の光源から、よりリアルなライティングを加える：**

- **Course Library** > **Prefabs** > **Lighting** フォルダーから、シーンを照らすのに十分な数の発光オブジェクトがあることを確認します。
- それらのライティング要素に子 Light オブジェクトを追加するには、Hierarchy 内でそれらを右クリックし、**Light > Point / Spot Light** を選択します。

**5.  より均一でバランスのとれたライティングを部屋に得ることができる：**

- **Directional Light** では、**Intensity** と **Indirect Multiplier** の値を増やしてみてください。
- Lighting の設定で、**Indirect Intensity** の値を増やしてみてください。

**6.  ライティングの見え方をテストする：**

- 再度、Generate Lighting をクリックします。
- 時間があれば、**Lightmap Resolution** やその他の Light の設定値を上げて、最終的な状態での見え方を確 認してみましょう。
- **注意：**斑点のようなピクセル状の影が出る場合は、Lighting ウィンドウの **Compress Lightmaps** 設定をオフにします。

[Image: image]

これで大まかなライティングがシーンにベイクされ、ほぼ希望通りの状態になったはずです。

**関連リソース：**

- [Configuring Lightmaps](https://learn.unity.com/tutorial/configuring-lightmaps#)

ステップを完了としてマーク

## 4. 混合ライティングの追加

Q&A (0)

オブジェクトにリアルタイムで影を落としつつ、ベイクしたライトマップによるパフォーマンスの恩恵を受けたい場合は、「Mixed」ライティングを使用します。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  ベイクしたライトマップの上に、リアルタイムでシャドウを表示する：**

- **Directional Light**の **Mode** を、「Mixed」(「Baked」ではなく) に変更します。

**2.  新しい混合ライティングの効果を確認する：**

- **Lighting** ウィンドウで、**Generate Lighting** をクリックして、ライティングをリベイクします。
- この混合ライトが、動的オブジェクトのライティングと影 (シャドウ) にどのような影響を与えるかを確認してください。

[Image: image]

これで、動的オブジェクトにディレクショナルライトからのリアルタイムの影ができるはずです。

**関連リソース：**

- [Mixed Lighting](https://docs.unity3d.com/Manual/LightMode-Mixed.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)

ステップを完了としてマーク

## 5. ライトプローブの追加

Q&A (0)

シーン内のすべてのベイクしたライトから、より現実的なリアルタイムのライティングを得るためには、ライトプローブ (Light Probes) が必要です。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  新しい Light Probe Group を Room オブジェクトの子として追加する：**

- Hierarchy で、**Room_[style]** オブジェクトを右クリックし、**Light > Light Probe Group** の順に選択します。

**2.  ライトプローブを編集できるようにするには：**

- シーンビューの右上にある **3D Icons** 付き**Gizmos**が有効になっていることを確認します。
- Light Probe Group の Inspector にある**Edit Light Probes**ボタンをクリックします。

**3. 部屋の周りにあるライトプローブを複製して配置し直す：**

- **選択**ボックスをプローブの周りにドラッグして選択します。
- **Move** (移動) ツールを使って、プローブの位置を決めます。
- 選択したプローブを複製するには、**Ctrl/Cmd+D** を使用します。
- **注意：**Scene ビューの右上にある軸ギズモの下にある小さなアイコンをクリックして、アイソメトリックビューに切り替えると便利かもしれません。

**4.  ライトプローブを正しく配置するには：**

- ライティングの色や強度が急激に変化する場所には、必ずプローブを設置してください。
- プローブがオブジェクトの中に入っていないか確認してください。

**5.  ライトプローブの効果を見る：**

- Lighting ウィンドウで、ライティングを再生成し、動的オブジェクトのライティングを確認するテストを行います。

[Image: image]

これで、ライトプローブによって計算されたベイクしたライティングに基づいて、シーンにおおよその動的なライティングができるはずです。

**関連リソース：**

- [Light Probes](https://docs.unity3d.com/Manual/LightProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)
- [Light Probe Groups](https://docs.unity3d.com/Manual/class-LightProbeGroup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)
- [Configuring Light Probes](https://learn.unity.com/tutorial/configuring-light-probes-2019-3#)

ステップを完了としてマーク

## 6. ライトマップの最終調整

Q&A (0)

これでライティングの設定がほぼ完了したので、最終的に高解像度のライトマップを作成する準備が整いました。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  ターゲットとなるデバイスに合わせて、ライティングを最適化する：**

- ユーザーに使用されることを想定した方法でアプリをテストします（例：モバイルデバイスをターゲットにしている場合は、コンピューターに接続していないスタンドアロンのデバイスでテストします）。
- 目標とするフレームレートに達しているかどうかを確認します。
- 実際のデバイスでアプリをビルドして実行する方法については、チュートリアル「[VR Project Setup](https://learn.unity.com/tutorial/vr-project-setup)」のチュートリアルを参照してください。

**2.  複数の小さなライトマップファイルではなく、1 つのライトマップファイルを生成する：**

- **Max Lightmap Size** を 4096 にします。
- ライトマップファイルは、複数の小さなファイルではなく、1 つのファイルにすることをお勧めします。

**3.  斑点状の影が出たり、ピクセル状の影が出たりする場合は：**

- **Compress Lightmaps** チェックボックスをオフにします。

**4.  ライティングの全体的な外観に満足し、最終的なライトマップを生成する準備ができたら：**

- **Lighting** ウィンドウで、Lightmap Resolution を 20～80 の間に設定します。
- 必要に応じて、他のライティング設定（samples, bounces など）の調整を続けて、望ましい結果を得ることができます。

[Image: image]

これで、ライティングが思い通りになり、パフォーマンスも最適化されるはずです。

**関連リソース：**

- [Setting up Lighting in Unity](https://docs.unity3d.com/Manual/BestPracticeLightingPipelines.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)

ステップを完了としてマーク

## 7. まとめ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**注目のフィーチャー：**

- 複雑な高性能のライティング

**新しいコンセプトとスキル：**

- ベイクしたライティングとリアルタイムのライティング
- ライトマッピング
- ライトプローブ

**次のレッスン：**

- Publishing (公開)

ステップを完了としてマーク任意のステップ

## 8. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  新しいスカイボックスの追加 [Easy]** **(難易度：低)**

新しいスカイボックスを作成またはダウンロードして、シーンの外観を向上させる：

- Skyboxes について詳しくは[こちら](https://docs.unity3d.com/Manual/skyboxes-using.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)
- スカイボックスは、Unity アセットストアで Free アセットと検索するとダウンロードできます。
- Environment タブの Lighting ウィンドウからスカイボックスを追加します。
- 警告：高解像度のスカイボックスがあり、Environment タブでスカイボックスを Environment Lighting の Source に設定している場合、Lightmapping に非常に時間がかかることがあります。これを避けるために、Source を Gradient に変更することができます。

[Image: image][Image: image]

**2.  ライティングの調整を続ける [Medium]** **(難易度：中)** ****

シーンのライティングやライティング設定の微調整をし続けて、できるだけ美しく、パフォーマンスの高いシーンを作る：

- [Lighting ウィンドウ](https://docs.unity3d.com/2020.1/Documentation/Manual/lighting-window.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131) で値を調整し、どのような結果が得られるか試してみてください。
- Unity のライティングについてはこちら：

- [Intro to Lighting and Rendering](https://learn.unity.com/tutorial/introduction-to-lighting-and-rendering#)

[Image: image]

**3.  リフレクションプローブの探索 [Hard]** **(難易度：高)** ****

リフレクションプローブをシーンに追加することで、Metallic のオブジェクトからの反射をよりリアルにする：

- [Reflection Probes](https://docs.unity3d.com/Manual/class-ReflectionProbe.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131) のマニュアルと、[リフレクションプローブの使用](https://docs.unity3d.com/Manual/UsingReflectionProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949580131)のすべて
- おそらく、Material_Main を複製して新しい「Material_Main_Shiny」を作成し、そのマテリアルの metallic プロパティを増やし、そのマテリアルをシーン内の反射するべき光沢のあるオブジェクトに割り当てる必要があります。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
