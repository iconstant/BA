if (exec forever stop app.js && exec forever start app.js); then
        echo "restarting the server..."
else
        echo "starting..." && (exec forever start app.js)
fi
