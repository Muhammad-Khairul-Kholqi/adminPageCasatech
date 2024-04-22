# Menggunakan base image Alpine
FROM node:alpine

# Menentukan direktori kerja
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam direktori kerja
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode sumber ke dalam direktori kerja
COPY . .

EXPOSE 3000

# Menjalankan aplikasi Express
CMD npm start