[Image: image]

# 3.2 - 最適化

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 3.2 - 最適化]Summary

このレッスンでは、VR の主要なパフォーマンス指標（fps, polycount, draw calls）のそれぞれについて、また、これらの指標を確実に最適化する方法について学びます。このレッスンを終える頃には、あなたのアプリのパフォーマンスがより最適化されていることでしょう。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. 現在の fps を把握する

Q&A (0)

コードの最適化を始める前に、パフォーマンスの目標と、アプリがその目標を満たしているかどうかを評価する方法を確認しておきましょう。

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

**1.   デバイスの 1 秒あたりの目標フレーム数を決める (FPS)：**

- 以下のリンクを参考に、目標とする FPS を書き出してみてください。

**2.  お使いのデバイスで動作している fps（1 秒あたりのフレーム数）を決める：**

- **Course Library** > **Prefabs** > **Testing**の順に選択して、**FPS Overlay UI** を Hierarchy にドラッグします。
- **Render Camera** プロパティに **Main Camera** を割り当てます。
- アプリケーションを実行すると、FPS が表示されます。
- **注意：**Unity エディターでアプリを実行している場合、これは FPS の正確な予測ではありません。

**3.  Unity Stats ウィンドウで FPS を表示：**

- **Game View** の右上にある **Stats**ウィンドウを有効にし、FPS の数値を確認します。

**4.  Unity プロファイラーを探索する：**

- Play ボタンをクリックします。
- トップメニューバーから **Window > Analysis > Profiler**の順に選択します。
- Profiler ウィンドウの赤い円形の録画ボタンをクリックします。

**5.  モバイルヘッドセットで動作する true のフレーム/秒をテストする：**

- コンピューターに接続されていない状態で、デバイス上でアプリを構築して実行します。

[Image: image][Image: image]

これで、お使いのデバイスのターゲットとする指標がどこにあるのか、また、お使いのデバイスの秒間フレーム数がどこにあるのかがわかったはずです。

**関連リソース：**

- 目標とするパフォーマンス指標

- [HTC Vive performance targets](https://hub.vive.com/storage/app/doc/en-us/MobileVRperformancechecklist.html#:~:text=The%20target%20framerate%20for%20Vive,as%20Desktop%20PCs%20and%20Laptops.)
- [Oculus performance targets](https://developer.oculus.com/documentation/unity/unity-perf/)
- Unity のツールについて

- [Stats window](https://docs.unity3d.com/Manual/RenderingStatistics.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Frame debugger](https://docs.unity3d.com/Manual/FrameDebugger.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Profiler](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

ステップを完了としてマーク

## 2. ドローコールを最小限に抑える

Q&A (0)

単一フレームをレンダリングするために、Unity はオブジェクトの「バッチ」で画面にものを「描画」します。Unity が画面に何かを「描画」するためにエンジンを「呼び出す」たびに、「ドローコール、draw call」と呼ばれます。ドローコールを最小限に抑えることができれば、パフォーマンスを向上させることができます。

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

**1.  デバイスの目標とするドローコールを決定する (batches、バッチ)：**

- プラットフォームのウェブサイトで、目標とする「Draw Call」指標を確認してください。

**2.  シーン内のドローコールの数を確認する：**

- Game Stats ウィンドウを開き、「Batches」（ドローコールのバッチング）の値を探します。

**3.  バッチングやドローコールがフレームレートにどのような影響を与えるかを視覚化する：**

- トップメニューから **Window > Analysis > Frame Debugger** の順に選択します。
- **Enable**をクリックします。
- Frame Debugger ウィンドウの左/右の矢印を使い、Game ビューで見ると、1 フレームが順番に作られていく様子がわかります。

**4.  「Batching」が有効になっていることを確認する：**

- Project ウィンドウで「UniversalRenderPipelineAsset」を探して選択します。
- **Advanced** セクションで、**SRP Batcher**と **Dynamic Batching** を有効にします。
- **注意：**SRP とは Scriptable Render Pipeline の略です。

**5.  動かないオブジェクトを「Static」とマークすることで、バッチングを改善する：**

- Hierarchy が整理され、すべての静的オブジェクトが簡単に選択できるようになっていることを確認してください。
- すべての静的オブジェクト（ランプやシャンデリアなどのライティングオブジェクトを含む）を選択します。
- Inspector の上部にある **Static** チェックボックスを選択します。
- プロンプトが表示されたら「**Yes, change children**」を選択します。
- **Play**をクリックしたときの Batches への影響に注目してください。

**6.  Batches の数がまだ非常に多い（175以上）場合：**

- 鏡 (mirror) オブジェクトをシーンから削除することを検討します。
- 虫眼鏡やポラロイドカメラなど、別のカメラオブジェクトを使用するものを追加した場合は、シーンから削除することを検討してください。

[Image: image]

これで、マテリアルを共有しているオブジェクトをバッチングすることで、ドローコールの回数を減らすことができたはずです。

**関連リソース：**

- [Draw call batching](https://docs.unity3d.com/Manual/DrawCallBatching.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

ステップを完了としてマーク

## 3. ポリカウントの最小化

Q&A (0)

最もわかりやすいパフォーマンス指標は、ポリ（ポリゴン）数です。ポリカウントは、多くの場合、三角形を数える「Tris」や、頂点を数える「Verts」で計算されます。

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

**1.  デバイスの目標ポリカウントを決める (三角形)：**

- プラットフォームのウェブサイトを参照して、目標とする「triangle (三角形)」指標を見つけてください。

**2.  シーン内の三角形の数を求める：**

- Game Stats ウィンドウを開き、「tris」（三角形）の値を探します。

**3.  三角形をより明確にイメージする：**

- **Scene** ビューの左上から、「Shaded」ビューから **Wireframe**ビューに変更します。

**4.  個々のオブジェクトの三角形の数を決定する：**

- オブジェクトを選択します。
- その Mesh Filter コンポーネントで、その Mesh をクリックします。
- Project ウィンドウでその Mesh を選択すると、Inspector に三角形の数が表示されます。
- **注意：**1,000 tris 以下はかなりの「ローポリ」です。

**5.  フレーム内にあるオブジェクトが何かによって、三角形がどのように変化するかを確認する：**

- XR Rig を回転させながら Stats ウィンドウを監視します。

**6.  Tris の推奨目標値に達していない場合：**

- 目標値に達するまで、ポリゴン数の多いアセットを削除したり、交換したりします。
- また、鏡をシーンから外してみるのもいいでしょう。

[Image: image][Image: image]

これで、Tris の目標値を達成し、Tris の予算をどこに使っているかを把握することができるはずです。

**関連リソース：**

- [Occlusion culling](https://docs.unity3d.com/Manual/OcclusionCulling.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

ステップを完了としてマーク

## 4. テクスチャの最適化

Q&A (0)

Unity が行うドローコールの評価に加えて、シーンで使用されるテクスチャのサイズを考慮することも重要です。

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

**1.  テクスチャ設定の影響をよりよく分析するために、シーンに絵画を追加する：**

- **Course Library > Prefabs > Art**から、シーンの壁に Art を追加します。

**2.  シーン内のオブジェクトのマテリアルにアクセスする：**

- 絵画の Mesh Renderer コンポーネントで、インスペクタの下部にある**Material**セクションを展開します。

**3.  マテリアルに使用されているテクスチャアトラスを探す：**

- マテリアルの**Surface Inputs**の折りたたみ部分から、**Base Map** の隣のサムネイルをクリックして、Project ウィンドウにテクスチャを配置します。
- このテクスチャーをクリックすると、そのテクスチャーの**Import Settings** が表示されます。

**4.  テクスチャの設定を試してみる：**

- テクスチャの設定の下部にある **Max Size**、**Resize Algorithm**、**Format**、**Compression** の各プロパティを調整します。
- **Apply**をクリックすると、各設定がシーンのビジュアルに与える影響を確認できます。
- 違いが確認できたら、元の設定に戻します。

**5.  「mip map」を有効にする：遠くから見たテクスチャの解像度を自動的に下げることができる：**

- Project ウィンドウで、InteriorColorSwatch テクスチャを探して選択します。
- Inspector で、**Advanced**の折りたたみ部分を展開し、**Generate Mip Maps** を選択します。
- **Apply** をクリックします。これにより、遠くにあるオブジェクトに低品質のテクスチャが生成され、適用されます。

**6.  「Anisotropic Filtering」を有効にすると、浅い角度で見たときのテクスチャのビジュアルが向上する：**

- Project ウィンドウで、**WoodFloor_Texture**を探して選択します。
- Inspector で、**Aniso Level** のスライダーをドラッグして大きくします。
- **Apply** をクリックします。これにより、Anisotropic Filtering が増加し、浅い角度で見たときのテクスチャのビジュアルが改善されます。

[Image: image]

これで、パフォーマンスやビジュアルクオリティのためにテクスチャを最適化するための設定がわかったはずです。

**関連リソース：**

- [Importing Textures](https://docs.unity3d.com/Manual/ImportingTextures.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Texture import settings (and mip maps](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064))
- [Anisotropic Filtering](https://docs.unity3d.com/ScriptReference/Texture-anisoLevel.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

ステップを完了としてマーク

## 5. パーティクルとポストプロセスの最適化

Q&A (0)

また、パーティクルやポストプロセスもパフォーマンスに影響を与えます。これらが秒間フレーム数にどのような影響を与えるかを調べ、プロジェクトでパフォーマンスの問題が発生していないかを確認します。

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

**1.  パーティクルのシェーダーを最適化し、ダイナミックライトに反応しないようにする：**

- Particle_Fire オブジェクトを選択します。
- Inspector の下部にある **Shader**プロパティのドロップダウンを探します。
- パーティクルが **Universal Render Pipeline > Particles > Unlit**シェーダーを使用していることを確認してください。

**2.  ポストプロセスを試す：**

- **Main Camera** オブジェクトの Camera コンポーネントで、**Post-processing**設定を有効にします。
- Volume コンポーネントを追加します。
- **New**ボタンをクリックして、新しい Post-Processing プロファイルを作成します。
- そして、**Add Override** ボタンをクリックして、新しいエフェクトを有効にすることで、実験を行うことができます。
- **警告：**ポストプロセスエフェクトで何かを加える場合は、色の調整を行うとよいでしょう。レンズの歪みやモーションブラーはサイバー酔いになりますので、使用しないでください。

[Image: image][Image: image]

これで、アプリに適したパーティクルとポストプロセスができたはずです。

**関連リソース：**

- [Choosing shaders in URP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/shaders-in-universalrp.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Post-processing in the Universal Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Screen space processing](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

ステップを完了としてマーク

## 6. アンチエイリアスの有効化

Q&A (0)

3D オブジェクトの一部のエッジがギザギザに見えることにお気づきでしょうか。これでは、VR での没入感が損なわれてしまいます。このギザギザのエッジをアンチエイリアスで滑らかにすることができます。

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

**1. レンダーパイプライン設定にアクセスする：**

- Project ウィンドウで「UniversalRenderPipelineAsset」を検索し、選択すると Inspector にそのプロパティが表示されます。

**2.  URP（Universal Render Pipeline）アセットでアンチエイリアスを有効にする：**

- **Quality**の折りたたみの部分で、**Anti-Aliasing** の設定を Disabled から**4x**に変更します。

**3.  メインカメラに追加でアンチエイリアスを使いたい場合：**

- **Main Camera**オブジェクトの Camera コンポーネントで、**Rendering** の折りたたみを展開します。
- **Anti-Aliasing** の設定を「Fast Approximate Anti-Aliasing (FXAA)」に変更します。
- 効果を確認するには、**Post-Processing**設定が有効になっている必要があります。
- **注意：**これは FPS に大きな影響を与える可能性があります。

**4.  鏡にアンチエイリアスを適用する：**

- プロジェクト内の「Mirror_Texture」を探します。
- **Anti-Aliasing** のプロパティを「なし」から「4 サンプル」に変更します。

[Image: image][Image: image]

メインカメラとミラーのエッジが、以前よりもずっと滑らかになっているはずです。

**関連リソース：**

- [Anti-Aliasing](https://docs.unity3d.com/Packages/com.unity.postprocessing@2.3/manual/Anti-aliasing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

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

- フレームレートを高めに設定

**新しいコンセプトとスキル：**

- VR の目標の指標
- ポリカウント (Polycount)
- ドローコール (Draw calls)
- テクスチャとマテリアルの最適化
- パーティクルと FX の最適化
- アンチエイリアス

**次のレッスン：**

- ライティング (Lighting)

ステップを完了としてマーク任意のステップ

## 8. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  VR の最適化について [Medium]** **(難易度：中)**

VR の最適化技術と戦略については以下をご覧ください。なお、最適化の大部分を占めるのは Lighting であり、これについては次のレッスンで取り上げる予定です。

- [Seven Stages of Optimization for Mobile VR](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Optimizing your VR/AR Experiences](https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences)
- [Optimizing VR Apps](https://learn.unity.com/tutorial/unit-9-optimizing-vr-apps)
- [VR Best Practices](https://learn.unity.com/tutorial/vr-best-practice)
- [Optimizing Graphics Performance](https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)

**2.  リサーチプラットフォーム専用ツール [Hard](難易度：高)**

お使いのプラットフォームによっては、デバイスのパフォーマンスを監視するための特定のツールが用意されている場合があります。

- 別途アプリケーションのダウンロードが必要な場合は、公式ストアからのダウンロードではなく、デバイスに「sideload」する必要があるかもしれません（例：SideQuest for Oculus の使用）。
- 例えば：

- Oculus - [OVR Metrics Tool](https://developer.oculus.com/documentation/tools/tools-ovrmetricstool/)
- HTC Vive - [Android Systrace](https://hub.vive.com/storage/app/doc/en-us/PerformanceProfiling.html)
- Valve / SteamVR - [Frame Timing Tool](https://www.google.com/search?q=SteamVR+Frame+Timing+Tool&oq=SteamVR+Frame+Timing+Tool&aqs=chrome..69i57j33i10i160.211j0j7&sourceid=chrome&ie=UTF-8)

**3.  Unity Profiler の概要  [Expert]**

Unity Profiler ウィンドウをより使いやすくしましょう。

- [Unity Profiler Window マニュアル](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Optimization guide using the Profiler](https://docs.unity3d.com/Manual/BestPracticeUnderstandingPerformanceInUnity.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949548064)
- [Diagnosing performance issues](https://learn.unity.com/tutorial/diagnosing-performance-problems#5c7f8528edbc2a002053b597)

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
