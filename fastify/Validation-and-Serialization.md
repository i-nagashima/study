# Validation and Serialization

Fastify はスキーマベースのアプローチを採用しています。必須ではないにしても、JSON Schema を使ってルートを検証し、出力をシリアライズすることをお勧めします。内部的には、Fastify はスキーマを高いパフォーマンスの関数にコンパイルします。
