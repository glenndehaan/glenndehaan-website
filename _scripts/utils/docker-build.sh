#!/bin/bash

# Navigate back to the root dir
cd ../..

# Make production build
npm run build

# Build the custom docker container
docker build -t glenndehaan/glenndehaan-website .
