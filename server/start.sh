echo "NODE_ENV=" $NODE_ENV
echo "Database URL=" $DATABASE_URL

if [ "$NODE_ENV" == "development" ]; then
    echo "Starting the server for development"
    npm run start:app:dev
else
    echo "Oops, there is no other enviroments"
fi