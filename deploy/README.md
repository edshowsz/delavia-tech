# Container da Delavia

Na raiz do projeto:

```sh
docker compose -f compose.yml up -d --build
```

O build exporta o site estático e o Nginx serve os arquivos na porta 80 do
container `delavia-tech`. No servidor, acesse `http://127.0.0.1:3080`.
O container participa da rede externa `delavia-proxy`, que deve existir.
Um proxy nessa rede pode encaminhar requisições para `http://delavia-tech:80`.

```sh
docker compose -f compose.yml ps
curl -I http://127.0.0.1:3080/
```

Este serviço não altera o DNS nem a publicação via GitHub Pages. Para usar o
domínio público, configure o proxy HTTPS e aponte o DNS para este servidor.
