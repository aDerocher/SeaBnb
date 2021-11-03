// ========login to heroku
heroku login

// ======== maybe do this step? Not sure if necessary after initial creation
heroku git:remote -a <name-of-Heroku-app>

// ======== main can actually be any branch. you'll probably just want to push main though
git push heroku login-branch:main




// ======== to migrate and seed
heroku run npm run sequelize db:migrate
 - or -
heroku run npm run sequelize db:migrate:undo

// ======== to seed
heroku run npm run sequelize db:seed:all
 - or -
heroku run npm run sequelize db:seed:undo:all


============ other useful commands ========================
// if you see an application error:

    heroku logs
// to open connection logs:

    heroku logs --tail