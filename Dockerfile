# Stage 1
# Build docker image of react app
FROM node:16-alpine as react_build 
WORKDIR /app
COPY . /app/ 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm run build

# Stage 2
# Copy the react app build above in nginx
FROM nginx:1.22.1-alpine
COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
