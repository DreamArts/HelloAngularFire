
# Hello Firebase
## ブラウザにて
- Googleアカウントでログイン
- Firebaseを利用開始
  - https://firebase.google.com/?hl=ja
- プロジェクトを作成
  - プロジェクト名：HelloAngularFire、国：日本
  - https://console.firebase.google.com/
- Realtime Databaseのルールを設定
- ログイン方法の設定
  - googleを有効に
## ターミナルにてプロジェクトを作成
- firebase login
- firebase init
## サンプルをデプロイ
- サンプルHTMLをコピーして、Firebaseのキーを設定
  - cp ../index.html public/
- firebase deploy

# Hello Angular
- HelloAngularFire直下にAngular用のプロジェクトを作成
  - ng new AngularChat --style=scss
  - cd AngularChat
  - ng serve
- ブラウザで動作確認
  - http://localhost:4200
- ビルドとデプロイ
  - ng build
  - cp -r dist/ ../Firebase/public/
  - cd ../Firebase
  - firebase deploy
- ブラウザで動作確認

# AngularFireの導入
- HelloAngularFire/AngularChatのディレクトリにて
- npm install firebase angularfire2 --save
  - https://github.com/angular/angularfire2
- firebaseConfig.jsを作成し、FirebaseのAPIキーをセット。
  - jsでエラーになる場合は、src/tsconfig.app.jsonのcompilerOptionsに下記をセット
  - "allowJs": true
- ログイン処理を記載
  - ng generate component login
  - ng generate service login
- timelineとtimeline-inputを追加
  - ng generate component timeline
  - ng generate component timeline-input
- routerを追加
  - app.modules.tsにRouterModuleなどをセット
  - app.component.htmlに「<router-outlet></router-outlet>」をセット