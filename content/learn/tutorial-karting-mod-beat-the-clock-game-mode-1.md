[Image: image]

# Karting Mod：ゲームモードは「beat the clock」

Tutorial

foundational

+0XP

10 mins

3

(33)

Unity Technologies

[Image: Karting Mod：ゲームモードは「beat the clock」]Summary

この Mod では、ゲームモードをTime Limit モードに変更する方法を学びます。あなたは制限時間内に一定のラップ数を完了する必要があります！

Languages available:

日本語English日本語한국어日本語

## 1. 始める前に

Q&A (0)

この Microgame プロジェクトをまだお持ちではありませんか？  トップページのリンク先 「[Getting Started with Unity](https://learn.unity.com/course/5c59cf22edbc2a001f59aa5d)」をクリックして始めましょう。

始める前に、この Mod（その他も含）を完了するための特別なアセットが必要です。 すでに持っているか確認してみましょう！

- Microgame プロジェクトを開きます。
- Project ウィンドウの検索バーに「ML_Agents」と入力してください（注意：入力した後「Search」の隣にあるフィルタが「All」に設定されていることを再確認してください）。
- 「ML_Agents」フォルダが表示されたら、ステップ 2 から始めます。
- 表示されない場合は、まずここで「[Get the latest Microgame](https://learn.unity.com/tutorial/welcome-to-the-creative-challenges?courseId=5c59cf22edbc2a001f59aa5d#5c86d5d5edbc2a2d67a5e394)」というステップを踏む必要があります。
- 分かりましたか。さあ、始めましょう！

ステップを完了としてマーク

## 2. Time Limit ゲームモードに設定する

Q&A (0)

**Hierarchy** ウィンドウで「ObjectiveTimeLimit」の GameObject をクリックして、**Inspector** ウィンドウを見てください。

[Image: image]

この Mod では、Time Limit（制限時間）ゲームモードを使用します。Microgame では、Objective スクリプトがゲームモードのロジックを制御し、様々なゲームモードに合わせて設定することができます。Microgame では、Objective スクリプトがゲームモードのロジックを制御し、様々なゲームモードに合わせて設定することができます。

「Time Limit」ゲームモードは、**ObjectiveTimeLimit** gameObject 上の **ObjectiveReachTargets** コンポーネントによって制御されます。**Hierarchy** でそれをクリックして、**Inspector** ウィンドウを見ます。「Objective Reach Targets」の下で、ドロップダウン矢印が展開されていることを確認し、フィールドオプションを観察します。

[Image: image]

**Game Mode** パラメータを見つけて「Time Limit」に設定します。

[Image: image]

**他のフィールドの意味は：**

- **Target Name:**この目的の対象となるオブジェクトの表示名
- **Title:**目的の名前
- **Description:**目的についての詳細
- **Is Optional:**プレイヤーが勝つためには、この目的を達成しなければならないかどうか。
- **DelayVisible**: オブジェクトが表示されるまでに遅らせる秒数

[Image: image]

- **Is Timed**: 目的の時間を計るかどうか。タイマーが切れたら負け。
- **Total Time In Secs**: タイマー開始時の設定時間
- **Display Message**: 目的の開始時に表示するメッセージ
- **Must Collect All Pickups**: true の場合、プレイヤーはすべてのピックアップを収集する必要があり、そうでない場合は **Pickups To Complete Objective**で設定された値を収集する必要があります。
- **Pickups To Complete Objective**: **Must Collect All Pickups** が False の場合、これは必要なピックアップの値です。
- **Notification Pickups Remaining**: ピックアップの残り時間がこの値になったら、ピックアップ残量通知の送信を開始します。

ステップを完了としてマーク

## 3. ボーナス時間を与えるチェックポイントとしてスタントジャンプを追加する

Q&A (0)

1. スロープを設置してチェックポイントを移動させて、プレイヤーがジャンプして通過するようにしましょう。

2. シーンをきれいに保つために、親 GameObject を作成して、その下に ramps を置いておきます。

3. **Hierarchy** 内で右クリックして **Create Empty** をクリックします。また、左上の「Create」ボタンをクリックします。これで空の GameObject が作成され、シーンに追加されます。

[Image: image]

4. 右クリックして「Rename」を選択し、**Ramps** という名前にします。

[Image: image]

5.  歯車のアイコンを選択して「Reset」を選択すると、全軸で (0,0,0) にリセットされます。

[Image: image]

6. それでは、シーンにランプ（傾斜路）を追加してみましょう。**Project** **View**で、Assets > Karting > Prefabs > Props > StuntJump の順に移動します。

[Image: image]

「StuntJump」プレハブを **Hierarchy** にドラッグして、新しい「Ramps」GameObject の上に置いてください。新しいランプは「Ramps」親オブジェクトの子になり、オブジェクトの管理が簡単になりました。

[Image: image]

7. ゲームモードを完成させるために、プレイヤーがランプを越えて運転したいので、ここで新しいランプの **Checkpoint** を追加する必要があります。

8. **Project View**で、*Assets >  Karting > Prefabs > Props > Checkpoint の順に移動します。*

[Image: image]

9. 「Checkpoint」プレハブを「StuntJump」の**Hierarchy** にドラッグして、新しい「Checkpoint」が対象のランプの子になるようにします。Drag the “Checkpoint**”**prefab into the **Hierarchy** into the “StuntJump” so that the new “Checkpoint” is a child of the ramp that it is for.

[Image: image]

10. 「Checkpoint」は、その親である「StuntJump」のトランスフォームなる*プロパティ*を継承するようになり、「StuntJump」を移動すると、その「Checkpoint」も移動することになります。これにより、後でトラック全体にランプを設定するときに時間を節約できます。

11. 新しい「Checkpoint」は、「Ramp」の周りに便利に配置されていますが、うまく機能するためには、サイズや位置を調整する必要があります。

12. 「Checkpoint」を選択し、**Scene ビュー**にマウスを合わせ、**F** キーを押してフレーム選択します。

[Image: image]

13. まず、「Checkpoint」は、トラック全体ではなく、**StuntJump**だけにしたいので、もっと小さくしましょう。縮小してみましょう。スケールツールを選択します（または R キーを押す）。

[Image: image]

14. **Scene ビュー**のスケール軸の中央にある白いキューブのハンドルをクリックしたままにします。「Checkpoint」が以前の半分以下の大きさになり、ランプの幅くらいになるまでクリックしてマウスを下にドラッグします。

[Image: image]

または、**Hierarchy**で「Checkpoint」を選択し、 **Inspector**の「Transform」でスケールを 0.4 に変更することで、**Inspector** で「Checkpoint」のスケールを設定することもできます。必ず、X、Y、Z のすべての軸のスケールを変更してください。

[Image: image]

15. さて、「Checkpoint」を適切な位置に移動させて、ランプが終了し、その最も広い点がランプの上部になるようにします。

16.  **Move Tool**を選択し（または**W**キーを押す）、青い矢印をクリックしたままにして、Z  軸の「Checkpoint」を移動します。次に、緑の矢印をクリックしたままにして、Y 軸の「Checkpoint」を移動させ、その中心がランプの終端より上になるようにします。

[Image: image]

17. いいですね！これで最初の「StuntJump」と「Checkpoint」の準備ができたので、もう少しトラックに追加してみましょう。

18. すでに設定した「StuntJump」を複製して、さらにいくつかのランプを追加します。複製するには、**Hierarchy** で選択し、右クリックして「Duplicate」をクリックします。または、それを選択してショートカット **Ctrl-D (Windows)/Cmd-D (Mac)**を押します。**これを、シーン内に少なくとも 3 回の StuntJumps ができるようになるまで行います。**

[Image: image]

19. 先ほど新たに追加した「StuntJumps」はすべて最初のものと全く同じ位置にあるので、トラックの周りに配置する必要があります。

[Image: image]

20. **Hierarchy** で「StuntJump」を選択します。**Scene ビュー**をクリックして、**F** キーを押してフレーム選択します。

[Image: image]

21.  **Hierarchy** で「StuntJump」が選択されている状態で、ツールバーの **Move Tool**を選択します（またはW キーを押す）。

[Image: image]

22. 青矢印と赤矢印のハンドルをドラッグして「StuntJump」を X - Z 平面内で移動させます。Y 軸で移動させる必要はありません。

[Image: image]

23. 「StuntJump」を回転させて、トラックに正しく位置を合わせる必要があるかもしれません。 **Hierarchy** で「StuntJump」が選択されている状態で、ツールバーの **Rotate（回転） Tool**を選択します（または  **W** キーを押す）。

24. 緑の回転ハンドルで「StuntJump」を Y 軸周りに回転させ、カートが走行する正しい方向を向くようにします。

ステップを完了としてマーク

## 4. フープを飛び越えたときにボーナスタイムを獲得

Q&A (0)

ランプの角度を設定してみましょう。今は全てのランプが同じ角度で 20 度に設定されています

1. **Hierarchy**の中で変更したい「StuntJump」を選択し、その中の「Ramp」を選択し、**F** キーを押してフレーム選択します。

[Image: image]

2. **Transform**コンポーネントの「Ramp」の Rotation（回転）設定をご覧ください。今は [20, 180, 0] に設定されています。ランプの角度を設定する一番簡単な方法は、回転の X 値を変更するだけです。値を 40 に設定します。

[Image: image]

もう一つの方法は、**Rotate**ツールを使って **Scene ビュー**自体のランプの角度を変えることです。

3. 急な傾斜に合わせて「Checkpoint」の位置を調整してみましょう。「Checkpoint」を選択し、**Scene ビュー**の上にカーソルを置き、**F**キーを押してフレーム選択します。

[Image: image]

4. **W**を押して **Move ツール**を選択し、チェックポイントをランプに合わせて移動します。

[Image: image]

5. ここで、各「Checkpoint」を完了するとタイマーに追加される時間を調整してみましょう。**Hierarchy** で「Checkpoint」を選択し、**Inspector**で「**Pickup Object**」の設定を見てみましょう。

6. プレイヤーに多くの時間を与えるために、**Time Gained** を 5 から 10 に変更します。

[Image: image]

よくできました！これでシーンの設定が完了し、準備が整いました。変更を保存することを忘れないでください（Windows ではCtrl-S、Mac では Cmd-S）。

ステップを完了としてマーク

## 5. お祝いの Visual Effects（VFX）を追加しよう

Q&A (0)

チェックポイントをクリアした時に、お祝いの紙吹雪のパーティクルを追加してみましょう。

1. **Project ビュー**で、Assets > Karting > Prefabs > VFX > CheckpointConfetti の順に移動します。

[Image: image]

2. 変更したい **Hierarchy**の「Checkpoint」を選択します。各「Checkpoint」には、**Inspector** に「Spawn Prefab On Pickup」というフィールドがあります。

[Image: image]

3. 「CheckpointConfetti」プレハブを**Inspector** ウィンドウの **Spawn Prefab On Pickup**フィールドにドラッグします。

[Image: image]

4. **Destroy Spawn Prefab**を 5 秒に設定します。プレイヤーがチェックポイントに到達すると、「CheckpointConfetti」プレハブをスポーンし、5 秒後に破壊します。

[Image: image]

また、設定の右側にある丸ボタンをクリックしてフィールドを設定することもできます。

5. ポップアップした**Select GameObject** ウィンドウで、上部の**Assets**タブをクリックして、プロジェクト内のすべてのアセットを検索し、上の検索フィールドに「CheckpointParticles」と入力します。1 つの結果が返ってくるはずです。それをダブルクリックして設定します。

6.**Play**（再生） をクリックしてゲームを試してみて、新しい VFX をチェックしましょう！

[Image: image]

また、複数のチェックポイントを選択して一気に変更することで、すべてのチェックポイントに VFX を割り当てることができます。

7. **再生**モードを終了し、変更内容を保存します（Windows の場合は Ctrl-S、Mac の場合は Cmd-S）。

ステップを完了としてマーク

## 6. ボーナスポイント

Q&A (0)

カートの速度と加速度を上げてみてください。

そして、**Added Gravity** のパラメータを変更してみてください。**Added Gravity** を小さくすると重力が小さくなって落下が遅くなり、Added Gravity****を大きくすると落下が速くなります。

ステップを完了としてマーク

## 7. 参加して共有する

Q&A (0)

**Connect に参加して、あなたの仕事や経験を共有しましょう。**

Unity Connect の [Karting Creators Group](https://connect.unity.com/g/karting-creators?utm_source=learn&utm_medium=text&utm_campaign=connect_global_onboarding_2019-03-Karting-Creators&utm_content=---all) に参加しましたか？まだの方はチェックしてみてください。このグループは、これらの Mod に行き詰ったときや、他の Unity クリエイターとあなたの作品を共有するのに良い場所です。また、Unity のエキスパートがこのグループをチェックして、お手伝いやインスピレーションを提供いたします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
