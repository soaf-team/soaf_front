# Step 1: Specify the base image
FROM node:18.12.0

# Step 2: Install yarn
RUN npm install -g yarn

# Step 3: Set the working directory inside the container
WORKDIR /app

# Step 4: Copy package.json and yarn.lock files to the container
COPY package*.json yarn.lock ./

# Step 5: Install dependencies
RUN yarn install --frozen-lockfile

# Debug: List the contents of the working directory after installing dependencies
RUN ls -la /app

# Step 6: Copy the rest of the application code to the container
COPY . .

# Debug: List the contents of the working directory after copying the code
RUN ls -la /app

# Step 7: Ensure that all workspaces are installed correctly
RUN yarn workspaces focus --all

# Debug: List the contents of the working directory after focusing workspaces
RUN ls -la /app

# Step 8: Build the project
RUN yarn build:soaf

# Step 9: Expose the application port (default is 4173 for Vite preview)
EXPOSE 4173

# Step 10: Specify the command to start the application
CMD ["yarn", "start:soaf"]
