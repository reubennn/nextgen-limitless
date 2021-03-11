# ---------- Base Image ----------
FROM node:15 AS base

# Create the Node.js server directory.
WORKDIR /nextgenlimitless

# ---------- Builder ----------
FROM base AS builder

COPY package*.json .babelrc ./

# Install npm package dependencies.
RUN npm install

COPY . .

# npm script to transpile code with Babel and create production build.
RUN npm run build:src
RUN npm run build:config
RUN npm run build:react-app

# Remove all development dependencies.
RUN npm prune --production

# ---------- Production Release ----------
FROM base AS release

# Copy the directories we need to run the production build.
COPY --from=builder /nextgenlimitless/node_modules ./node_modules
COPY --from=builder /nextgenlimitless/dist ./dist
COPY --from=builder /nextgenlimitless/config ./config
COPY --from=builder /nextgenlimitless/public ./public

# Run the Docker container as less-privileged `node` user.
USER node

# Run the production build Express server.
CMD ["node", "./dist/server.js"]
