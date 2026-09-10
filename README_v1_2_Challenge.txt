MoMA 1998 v1.2 Challenge α

テスト対戦モード「Legacy UB Tempo」を追加。

CPUデッキは2026-09-08 MTGO Legacy Challenge 32のDimir Tempo 60枚を基準。
CPUが自動で以下を判断します。
- Thoughtseize: MoMAの重要パーツを優先
- Wasteland: Tolarian Academyを最優先
- Daze: 序盤の呪文へ使用。プレイヤーは追加1マナを支払える
- Force of Will: Mind Over Matter / Time Spiral / Windfall / Stroke of Genius等を優先
- フェッチランド: Underground Seaへ簡略変換
- Ponder / Brainstorm / Mishra's Bauble / Flow State: 簡略ドロー処理
- Orcish Bowmasters / Nethergoyf / Moonshadow: 展開と自動攻撃
- Kaito: 簡略展開
- CPUのライフ・手札・ライブラリー・墓地・戦場を管理
- Time Spiral / Windfall / Stroke of GeniusはCPUの実ライブラリーに作用
- IntuitionではCPUが3枚からMoMA側に最も弱い1枚を自動選択

これはChallenge αです。完全なMTGルールエンジンではありません。
優先権/スタック、Ponder/Brainstormの完全処理、各クリーチャーの動的P/T、
Kaito全能力、サイドボード戦などは今後の拡張対象です。

従来の一人回しモードも選択可能です。
GitHub MOMAリポジトリrootへZIP内をすべて上書きしてください。
