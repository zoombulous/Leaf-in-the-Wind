# Running Docker locally

Requirements:
- working directory contains Dockerfile
- Docker is installed

```bash
# build image
docker build .

# run image
docker run -p 3000:3000 -it $(docker images -a --format "{{.ID}}" | head -1)

# access app on localhost:3000
```


# Deploying to Heroku

Requirements:
- working directory contains Dockerfile
- Docker is installed
- Heroku CLI is installed
- Heroku app <your-app> exists

## #1 Build locally

More traffic, fewer Heroku resources

```bash
# login with your credentials
heroku login
heroku container:login

# build image and push to heroku registry
heroku container:push web -a <your-app>

# publish the pushed image
heroku container:release web -a <your-app>

# access app
heroku open -a <your-app>
```


## #2 Build remotely

Less traffic, more Heroku resources

```bash
heroku login

# do this once to add heroku remote to git
heroku git:remote -a <your-app>

# push changes and initiate remote build
git push heroku master

# access app
heroku open -a <your-app>
```
