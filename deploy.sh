#!/bin/bash

echo '[+] COMPILANDO APP'
echo ''

npm run build

echo ''
echo '[~] REALIZANDO CAMBIOS NECESARIOS'

mv dist tienda

echo ''
echo '[-] BORRANDO ARCHIVOS REMOTOS'

ssh root@arub4.ddns.net 'rm -rf /usr/share/nginx/html/pages/tienda/*'

echo ''
echo '[+] SUBIENDO DATOS AL SERVIDOR'

scp -r tienda root@arub4.ddns.net:/usr/share/nginx/html/pages/

echo ''
echo '[-] BORRANDO ARCHVOS LOCALES...'

rm -rf tienda

echo ''
echo ''
echo '[******] TODO LISTO'