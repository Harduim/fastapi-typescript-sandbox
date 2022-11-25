npx openapi \
    --input http://localhost:3000/openapi.json \
    --output ./src/client  \
    --client axios \
    --indent 2 \
    --useOptions \
    --postfix 'API'
