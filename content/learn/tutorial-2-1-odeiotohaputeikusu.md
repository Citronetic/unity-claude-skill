[Image: image]

# 2.1 - オーディオとハプティクス

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 2.1 - オーディオとハプティクス]Summary

このレッスンでは、触覚と聴覚の刺激によってプロジェクトの没入感を高める方法を学びます。このレッスンが終わる頃には、ユーザーがオブジェクトにカーソルを合わせたり、掴んだりすると、触覚と聴覚のフィードバックが得られるようになります。また、シーン内に 3D 空間の環境音が登場します。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. Hover Enter / Select Enter での触覚フィードバックの追加

Q&A (0)

Hover Enter や Select Enter にハプティックを追加すると、プレイヤーの手に物理的なフィードバックを与えることができます。

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

**注意：**HTC Vive や Valve index などのデバイスでの開発に OpenXR プラグインを使用している場合、この機能が使えないことがあります。

**1.  2 つのコントローラーオブジェクトを同時に編集：**

- Hierarchy で、**XR Rig** > **Camera Offset**と展開します。
- Ctrl/Cmd + **RightHand Controller** と **LeftHand Controller** の両方を選択し、両方が選択された状態にします。

**2.  ハプティックイベントを探す：**

- **Controller**オブジェクトの XR Ray Interactor コンポーネントの下部にある **Haptic Events** (ハプティックイベント)****の折り畳みを展開します。

**3.  ユーザーがオブジェクトにカーソルを合わせると、微妙な触覚フィードバックが発生する：**

- **On Hover Entered** のチェックボックスをクリックして有効にします。
- **Intensity**を低めに設定 (例：0.1-0.5) します。
- **Duration** を非常に低い値に設定 (例：0.1 seconds) します。

**4.  ユーザーがオブジェクトを掴んだときのフィードバックをよりわかりやすくする：**

- **On Select Entered** のチェックボックスを選択します。
- **Intensity** と **Duration** の値を少し高めに設定 (例：0.25 秒) します。

[Image: image]

これで、オブジェクトの上にカーソルを置くとコントローラーが微妙に振動し、オブジェクトを選択すると若干振動が大きくなります。

ステップを完了としてマーク

## 2. Hover Enter か Select Enter でオーディオフィードバックを追加

Q&A (0)

触覚フィードバックが追加されたので、オーディオフィードバックでユーザー体験 (UX) を向上させることができます。

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

**注意：**HTC Vive や Valve index などのデバイスでの開発に OpenXR プラグインを使用している場合、この機能が使えないことがあります。

**1.  使用したいサウンドを選択：**

- **Course Library** > **Audio** > **FX**の順に選択して、hover または select イベントに使用する微妙な UI サウンドエフェクトを決定します。
- サウンドをプレビューするには、Inspector ウィンドウの下部から Preview パネルを上にドラッグする必要があるかもしれません。

**2.  このサウンドエフェクトを両方のコントローラーに適用する：**

- Hierarchy から、RightHand Controller と LeftHand Controller の両方のオブジェクトを選択します。
- XR Direct Interactor コンポーネントで、**Audio Events** の折り畳みを展開します。
- クリックすると、**On Select Entered**または **On Hover Entered** の設定が有効になります。
- そして、選択したサウンドエフェクトを割り当てます。

[Image: image]

これで、オブジェクトの上にカーソルを置いたとき、またはオブジェクトを選択したときに、効果音が聞こえるようになります。

ステップを完了としてマーク

## 3. 暖炉からの立体音響の追加

Q&A (0)

イベントのオーディオフィードバックに加えて、暖炉から発せられる 3D 空間オーディオをシーンに加えることで、没入感を高めることができます。

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

**1.  暖炉の炎に効果音をつける：**

- パーティクルオブジェクトに Audio Source コンポーネントを追加します。
- **AudioClip** プロパティについて、**Course Library > Audio > FX** フォルダーから SFX_Loop_Fire の効果音を割り当てます。

**2.  サウンドの自動再生やループ再生を行う：**

- Audio Source コンポーネントで、**Play on Awake**と**Loop**の設定が両方とも有効になっていることを確認します。

**3.  このコンポーネントを 3D サウンドとして設定する：**

- スライダーを右の**3D**設定までドラッグ (またはスライダを 1 にして) して、**Spatial Blend** プロパティを調整します。

**4.  暖炉の全体的なボリュームとボリュームのロールオフを編集する：**

- **Volume** プロパティを編集します。
- 3D Sound Settings の折り畳み部分を展開して、**Min Distance**と **Max Distance** の値を調整します。

[Image: image]

これで、暖炉がパチパチと音を立てるはずですが、その音は、シーン内でのあなたの位置や向きによって音量や左右のバランスが変化するはずです。

**関連リソース：**

- [オーディオソース](https://docs.unity3d.com/Manual/class-AudioSource.html)の設定

ステップを完了としてマーク

## 4. リバーブゾーンの追加

Q&A (0)

VR で臨場感を維持するためには、オーディオが現実世界と同じように動作することが特に重要です。これには、さまざまな種類の部屋で音がどのように反響するかということも含まれます。

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

**1.  Room オブジェクトの子として、新しい Audio Reverb Zone を追加する：**

- Hierarchy 内で、**Room_[style]**オブジェクトを右クリックします。
- **Audio** > **Audio Reverb Zone**とクリックします。

**2.  リバーブゾーンが部屋全体に広がっていることを確認する：**

- Audio Reverb Zone コンポーネントで、**Min Distance**プロパティが少なくとも部屋の幅 (10) に設定されていることを確認します。

**3.  部屋に合わせてリバーブゾーンを作る：**

- **Reverb Presets**ドロップダウンを使って、さまざまなスタイルのリバーブを試すことができます。
- お部屋に合わせて設定 (Room または Living Room) を選びます。

[Image: image]

これで部屋にリバーブゾーンが設定され、3D サウンドがよりリアルになったはずです。

**関連リソース：**

- [Audio Reverb Zones](https://docs.unity3d.com/Manual/class-AudioReverbZone.html)

ステップを完了としてマーク任意のステップ

## 5. スペイシャライザーのプラグインを試す [任意］

Q&A (0)

Unity に内蔵されている 3D サウンドは、プレイヤーとの距離や向きによって左右の耳の音量が変化しますが、これに加えて、よりリアルなサウンドを実現するためのスペーシャライザープラグインをインストールすることができます。

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

**1.  プラグインをダウンロードしてインポート：**

- 下記のリンクから、お使いのプラットフォームに適した Spatializer Plugin をダウンロードしてください。
- このパッケージをプロジェクトにインポートします。

**2.  プラグインを有効にする：**

- **Edit** > **Project Settings**とクリックします。
- 左側のパネルから **Audio** セクションを選択します。
- **Spatializer Plugin**の横にあるドロップダウンでプラグインを選択します。

**3.  プラグインを炎のパーティクルに実装する：**

- お使いの機器に応じた手順で、立体音響を実装します。

[Image: image]

これで、ユーザーの Head Related Transfer Function (HRTF) を考慮した、よりリアルなサウンドのオーディオがシーンに登場するはずです。

**関連リソース：**

- [Unity Audio Spatializer](https://docs.unity3d.com/Manual/VRAudioSpatializer.html)
- [Oculus Spatializer Download](https://developer.oculus.com/downloads/package/oculus-spatializer-unity/)

- [Oculus 3D Audio Spatialization Guide](https://developer.oculus.com/learn/audio-intro-spatialization/)
- [Oculus Spatializer Features](https://developer.oculus.com/documentation/unity/audio-spatializer-features/?locale=en_US)
- [Apply Spatialization in Unity](https://developer.oculus.com/documentation/unity/audio-osp-unity-spatialize/)
- [Microsoft HRTF Spatializer Download](https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/spatial-sound-in-unity)
(UWP と Windows 10 を搭載した PC に対応)

ステップを完了としてマーク

## 6. まとめ

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

- コントローラーの触覚フィードバック
- コントローラーのオーディオフィードバック
- 暖炉から聞こえる臨場感あふれる 3D オーディオ

**新しいコンセプトとスキル：**

- 没入感を高めるためのハプティクスとオーディオの重要性
- 3D オーディオと 2D オーディオ
- リバーブゾーン (Reverb zones)
- 頭部伝達関数 (HRTF) による立体音響

**技術的スキル：**

- Audio イベントと Haptic イベント

ステップを完了としてマーク任意のステップ

## 7. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.   スピーカーの追加 [Easy] (難易度：低)**

音楽を再生するスピーカーを部屋に設置したり、実際に回転するレコードプレーヤーを追加する：

- Course Library > Prefabs > Objects > Speakers の順に移動し、フォルダーからスピーカーを探します。
- 音楽オプションは、**Course Library > Audio > Music** フォルダーから探すことができます。
- その他の追加 - Record Player を使用する場合は、レコードが回転する皿を回転させる簡単なスクリプトが必要です。

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

**2.  リアルな跳ね返り音の追加 [Medium] [Requires programming] (難易度：中)** (プログラミング必要)

ボールに跳ねる音をつけて、床に落ちるたびにバウンドする音が聞こえるようにします：

- 新しい効果音をダウンロードしてインポートします。
- 暖炉と同じように、ボールに 3D オーディオソースを追加します。
- 地面にぶつかったときに音を鳴らすには、OnCollisionEnter 関数や PlayOneShot メソッドを使うとよいでしょう。
- その他の追加 - ボールの移動速度に応じて音量が変化するようにしたい場合は、rigidbody.velocity.magnitude を使ってみてください。

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

## Complete this Tutorial

すべてのステップを完了としてマーク
