# Hooks

フックは fastify.addHook メソッドで登録され、アプリケーションやリクエスト/レスポンスのライフサイクルにおける特定のイベントをリスンすることができます。イベントがトリガーされる前にフックを登録する必要があり、そうしないとイベントが失われます。

フックを使用することで、Fastify のライフサイクルと直接対話することができます。リクエスト/リプライフックとアプリケーションフックがあります。