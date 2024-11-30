FROM node:14

# Copiar el proyecto
WORKDIR /app
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto en el que la app escuchará
EXPOSE 8080

# Comando para ejecutar la app
CMD ["npm", "start"]
