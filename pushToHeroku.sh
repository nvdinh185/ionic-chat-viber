#git init
git add .
git commit -am 'push to heroku'
#heroku git:remote -a dinh-chat-viber
git push heroku master
heroku open