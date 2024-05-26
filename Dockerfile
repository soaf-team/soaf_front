# Step 1: Specify the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the project
RUN yarn build:soaf

# Step 7: Expose the application port (default is 4173 for Vite preview)
EXPOSE 4173

# Step 8: Specify the command to start the application
CMD ["yarn", "start:soaf"]
