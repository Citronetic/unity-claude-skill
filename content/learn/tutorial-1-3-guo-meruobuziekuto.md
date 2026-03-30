[Image: image]

# 1.3 - 掴めるオブジェクト

Tutorial

Beginner

+10XP

90 mins

0

(9)

Unity Technologies

[Image: 1.3 - 掴めるオブジェクト]Summary

このレッスンでは、VR での基本的な掴む動作によるインタラクティブ性のために、オブジェクトを設定する方法を学びます。このレッスンを終える頃には、ユーザーはシーン内のオブジェクトを拾って投げられるようになります。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. 手のモデルの選択

Q&A (0)

単純な球体を使うだけでなく、VR でユーザーの手を表現するモデルを選ぶことができます。

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

**1.  手のモデルの選択オプションを見る：**

- Project ウィンドウで、**Course Library > Prefabs > VR > Hands** の順に開き、どの **VR_Hand** オプションを選択するかを決定します。

**2.  左手にモデルを割り当てる：**

- Hierarchy で、**XR Rig > Camera Offset > LeftHand Controller** の順に選択します。
- XR Controller コンポーネントの **Model プレハブ**プロパティに、お好みの手のプレハブをドラッグアンドドロップして割り当てます。

**3.  右手にモデルを割り当てる：**

- Hierarchy で、**XR Rig > Camera Offset > RightHand Controller** の順に選択します。****
- 上記と同じ手順を繰り返して、右手用のプレハブを割り当てます。

[Image: image]

アプリをテストすると、灰色の球体の代わりに、選択した手のモデルが表示されるはずです。

ステップを完了としてマーク

## 2.  掴めるオブジェクトの追加

Q&A (0)

VR の手が見えるようになったので、手で掴むためのオブジェクトを追加してみましょう。

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

**1.  シーンにボールを追加する：**

- **Course Library** > **Prefabs** > **Objects** > **Sports**の順に進みます。
- ボールを室内のアクセス可能な場所にドラッグします。

**2.  ボールを掴めるようにする：**

- XR Grab Interactable コンポーネントをボールに追加します。
- **注意：**これにより、ボールオブジェクトにも Rigidbody コンポーネントが自動的に追加されます。

**3.   掴むオブジェクトをテストする：**

- **XR Rig**の位置を、掴むボールオブジェクトのあるテーブルの前に再配置します。
- アプリケーションを実行します。
- レイをオブジェクトに向けて Grip ボタンを押すと、オブジェクトを掴むテストができます。

**4.  オブジェクトが正しいスケールであることを確認：**

- Hierarchy で、**3D Object > Cube** でオブジェクトを新規に作成し、名前を「Measuring Stick」に変更します。
- Google を使ってボールの正しい公式直径を調べ、見つけた寸法をメートルに換算してください。
- Measuring Stick の Transform コンポーネントで、X と Z のスケールを 0.01 に、Y のスケールを計算した長さに設定します。
- Measuring Stick をボールの横に置き、サイズが正確であることを確認します。サイズが合わない場合は、Scale ツールを使って修正します。

[Image: image]

これで、Grip ボタンでボールを拾うことができるようになり、Grip ボタンを離すとボールを投げることができます。

**注意：**XR デバイスのシミュレーターを使用している場合は、X または Y でコントローラーを切り替え、マウスの中ボタンを押しながら回転させてオブジェクトを指すようにし、G を押し続けるとオブジェクトを掴んで保持することができます。

ステップを完了としてマーク

## 3. 手を隠してアンカーコントロールを無効にする

Q&A (0)

現在、手のモデルは持っているオブジェクトと重なっており、そのオブジェクトの手の中での位置をコントローラーで変更することができます。これは、シーンとのインタラクションには最適ではありません。

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

**1.  ユーザーが左のジョイスティックでオブジェクトを動かさないようにする：**

- Hierarchy で、**XR Rig > Camera Offset > LeftHand Controller** オブジェクトを選択します。
- XR Ray Interactor コンポーネントで、**Anchor Control**の設定を無効にします。

**2.  オブジェクトを掴むと手のモデルが消えるようにする：**

- XR Ray Interactor コンポーネントで**Hide Controller on Select**の設定を有効にします。

**3.  これらの変更を右のコントローラーに適用する：**

- 上記の手順を **RightHand**コントローラーオブジェクトで繰り返します。

[Image: image]

オブジェクトを手に取ると手が消え、ジョイスティックでオブジェクトを動かしたり回転させたりすることができなくなります。

ステップを完了としてマーク

## 4. 投げやすさをさらに追求

Q&A (0)

オブジェクトを掴むことはできますが、その動作には細かな点で調整が必要です。

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

**1.  ボールが弾むようにする：**

- **Ball** オブジェクトの Sphere Collider コンポーネントで、**Material**プロパティを探します。
- 丸いボタンをクリックすると、用意された Physics Materials の中から 1 つが割り当てられます。

**2.  落としたオブジェクトが床を突き抜けるのを防ぐ：**

- Ball オブジェクトの Rigidbody コンポーネントで、**Collision Detection** の設定を **Continuous Dynamic**にします。

**3.  手に持った状態でボールのリジッドボディの物理挙動を可能にする：**

- XR Grab Interactable コンポーネントで、**Movement Type**が**Kinematic**に設定されていることを確認します。

**4.  オブジェクトの動きをスムーズにする：**

- XR Grab Interactable コンポーネントで、**Smooth Position**と **Smooth Rotation** プロパティを有効にします。

[Image: image][Image: image][Image: image]

これで、ボールは床から落ちずに跳ね、手でスムーズに動くようになります。

ステップを完了としてマーク

## 5. ハンドル付きオブジェクトの追加

Q&A (0)

これまでに、中心で保持され、向きが重要ではないボールオブジェクトを追加しました。今度は、非常に特定の位置と方向で掴めるオブジェクトを追加してみましょう。

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

**1.  スポーツ用のラケットやパドル、バットなどをシーンに加える：**

- **Course Library** > **Prefabs** > **Sports**の順に進みます。
- スポーツ用具の 1 つをボールの隣の面にドラッグします。

**2.  新しいオブジェクトを掴めるようにする：**

- 新しいオブジェクトを選択し、XR Grab Interactable コンポーネントを追加します。
- XR Grabbable コンポーネントで、**Smooth Position** 設定と **Smooth Rotation**プロパティの両方を有効にして、ジッターを減らします。
- Rigidbody コンポーネント（自動的に追加された）の **Collision Detection**オプションで、**Continuous Dynamic** を選択して、床を突き抜けないようにします。

**3.  オブジェクトの特定のアタッチポイントを作る：**

- Hierarchy で、オブジェクトを右クリックし、**Empty**の子オブジェクトを作成します。
- この空のオブジェクトの名前を「Attach」に変更します。
- 新しいオブジェクトを掴んだときの手のモデルの位置や向きに合わせて、Attach オブジェクトの位置や回転を変更します。

**4.  アタッチポイントをスポーツ用具に割り当てる：**

- Hierarchy で、親のスポーツオブジェクトを再選択します。
- XR Grab Interactable コンポーネントで、**Attach Transform**プロパティを探します。
- 新しい Attach オブジェクトをドラッグアンドドロップして、Attach Transform プロパティに割り当てます。

[Image: image]

これで、ハンドルでスポーツ用具オブジェクトを掴み、ボールを打つことができるようになりました。

ステップを完了としてマーク

## 6. ヒエラルキーの整理

Q&A (0)

ヒエラルキー (Hierarchy) に多くのオブジェクトを入れる前に、オブジェクトの整理整頓をしておくと良いでしょう。

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

**1.  Hierarchy 内で整理整頓するオブジェクトをまとめる：**

- Hierarchy 内で、「XR」、「LIGHTING」、「STATIC」、「DYNAMIC」という名前の空のゲームオブジェクトを新規に作成します。
- すべての位置を 0、0、0 にリセットします。

**2.  オブジェクトをカテゴリー別に整理する：**

- Hierarchy からオブジェクトを Organizer オブジェクトにドラッグします。このテクニックの利点は、ヒエラルキーをきれいに保つことができることです。
- あるいは、これらの Organizer オブジェクトの配下にオブジェクトをドラッグします。この方法の利点は、オブジェクトに簡単にアクセスできることです。

[Image: image]

Hierarchy はカテゴリー別に整理され、より使いやすくなっているはずです。

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

**注目の*フィーチャー*** **：**

- 手のモデル
- 容易に掴めるボール
- アタッチポイントを使用した掴めるツール
- 整理されたヒエラルキー

**新しいコンセプト＆スキル**

- Unity の世界と実世界のスケール感
- 掴めるオブジェクトのプロパティ
- 衝突検出モード
(離散的か連続型かつ動的)
- オブジェクトの動きのタイプ
(kinematic (キネマティック)、instantaneous (瞬間的)、velocity-tracking (速度追跡))

**次のレッスン：**

- Sockets (ソケット)

ステップを完了としてマーク任意のステップ

## 8. 追加のアクティビティ（任意）

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ、[Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  オブジェクトで部屋を飾る [Easy] (難易度：低)**

まだ完全には機能していなくても、楽しい装飾や掴めるオブジェクトをシーンに加えることで、よりインタラクティブな感じにしてみませんか。

- Course Library > Prefabs > Objects と進み Object フォルダーをざっと見て、アイデアを考えてみよう。

[Image: image]

**2.  掴める相互作用可能なプロパティを試す [Easy] (難易度：低)**

新しい掴めるオブジェクトをシーンに追加し、XR Grab Interactable コンポーネントにある様々なプロパティを試してみよう：

- 動作のタイプ ：Kinematic、Instantaneous、Velocity Tracking
- Smooth Position/Rotation Amount と Tighten Position
- Throw on Detach プロパティ

**3.  虫眼鏡の追加 [Difficult] (難易度：高)**

オブジェクトを拾って拡大して見ることができる機能的な虫眼鏡をシーンに加えてみよう：

- 鏡の仕組みと同じように、Camera Render Texture を使うことができます。
- レイ (Ray) が邪魔になっても気にする必要はありません。レイのオン/オフを切り替えられるようになれば解決します。

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

**4.  さっと開けるノートを追加 [Expert]  (エキスパート向け)**

掴むと表紙が前後に揺れて開くノートを追加：

- ヒント：Notebook_Cover には、**Connected Body** プロパティがノートブックの Rigidbody に設定された [Hinge Joint](https://docs.unity3d.com/Manual/class-HingeJoint.html?ampDeviceId=e422383a-a29d-466f-a5b7-7edb991f2efd&ampSessionId=1774844981984&ampTimestamp=1774931381988) が必要です。
- 欲を言えば、ノートに文字を入れてみてください。

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
