# Banco de memórias — Nickolas

Site estático com uma galeria de fotografias pessoais.

## Fotografias

O site carrega as imagens como arquivos independentes em `assets/` e referencia os arquivos PNG originais, sem redimensionamento nem recompressão.

Para adicionar as fotografias, extraia o pacote do projeto e envie a pasta `assets/` completa para a raiz deste repositório. Não converta as imagens para WebP nem substitua os PNGs por versões menores.

## Publicar no GitHub Pages

1. Envie todos os arquivos do pacote para a raiz do repositório, mantendo a pasta `assets/`.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`, depois salve.

O endereço esperado será: https://nickebel.github.io/memories/
