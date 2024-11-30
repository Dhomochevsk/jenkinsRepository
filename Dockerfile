# Usa una imagen base de nginx
FROM nginx:alpine

# Copia los archivos estáticos al directorio de nginx
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Expone el puerto 80 para acceder a los archivos
EXPOSE 80
