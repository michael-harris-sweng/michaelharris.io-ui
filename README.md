# michael-harris-sweng / michaelharris.io

## Overview
Professional portfolio, digital resume, and personal website.

### Tech Stack
#### MENS
MongoDB - Data Store
ExpressJS - REST Framework
NodeJS - Server RTE
Svelte - Client Framework

#### Server
The server will run on NodeJS, using ExpressJS as a REST framework, and TypeScript as the development language, transpiled into JavaScript at build-time.
Along with being a modern standard for writing servers, I have not used this stack before, and is a great learning opportunity for me.
It will pull data from MongoDB, starting with a portfolio of projects, including images which could one day be hosted in AWS S3, rather than as blobs in Mongo.
Videos could also be hosted in S3 and linked to via direct URL or cloudfront CDN.
Eventually a photography portfolio will be added, to showcase my personal photography done as a hobby.

#### Client
The client will be written in TypeScript as well, for simple developer experience and shared typings. It will be transpiled into JavaScript at build-time.
Svelte will be used for the high-level of developer experience it provides as a modern client framework, and for the learning opportunity as I have not used it personally.
