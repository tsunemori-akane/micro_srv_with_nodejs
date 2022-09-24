# specify base image
FROM node:alpine

# set the working directory to 'app' in the container.
# All following commands will be issued relatived to this dir 
WORKDIR /app
# Copy over only the package.json file
COPY package.json ./
#RUN npm config set registry https://registry.npmmirror.com
# RUN npm install --only=prod
RUN npm install
# copy over all of our remaining source code
COPY ./ ./
# set the command to run when the container starts up
CMD ["npm", "start"]

