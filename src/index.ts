import App from './app'

console.log('Connecting to server.....')


App.listen(App.get('port'), () => 

    console.log('Running the application on the port: ' + App.get('port'))

)