#!/bin/bash

# Navigate back to the root dir
cd ../..

# Make production build
npm run build

# Run the docker service
docker-compose up
