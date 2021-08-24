# Content-Type Parser

ネイティブでは、Fastify は'application/json'と'text/plain'のコンテンツタイプのみをサポートしています。  
デフォルトの charset は utf-8 です。異なるコンテンツタイプをサポートする必要がある場合は、addContentTypeParser API を使用できます。  
デフォルトの JSON やプレーンテキストのパーサーは、変更や削除が可能です。

注：Content-Type ヘッダーで独自のコンテンツタイプを指定した場合、UTF-8 はデフォルトではありません。  
text/html; charset=utf-8 のように、必ず UTF-8 を含めるようにしてください。

他の API と同様、addContentTypeParser は宣言されたスコープにカプセル化されています。  
つまり、ルート・スコープで宣言した場合はどこでも利用できますが、プラグインの中で宣言した場合は、そのスコープとその子でしか利用できません。

Fastify は、解析されたリクエストペイロードを、request.body でアクセスできる Fastify リクエストオブジェクトに自動的に追加します。
