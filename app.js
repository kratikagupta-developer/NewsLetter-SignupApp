const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname))
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/sign.html")
})
app.post('/', function(req, res) {


    var data = {
        members: [{
                email_address: req.body.inputEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: req.body.FirstName,
                    LNAME: req.body.LastName
                }
            }

        ]
    }
    var jsondata = JSON.stringify(data)
    var option = {
        url: "https://us3.api.mailchimp.com/3.0/lists/f3eedb132c",
        method: "POST",
        headers: {
            "Authorization": "Katz208 5222f7be97559304f15aaef3dfb2f2f6-us3"
        },
        body: jsondata,


    };
    request(option, function(error, response, body) {
        if (error) {
            res.sendFile(__dirname + '/failure.html')
        } else if (response.statusCode == 200) {
            res.sendFile(__dirname + '/success.html')

        } else {
            res.sendFile(__dirname + '/failure.html')
        }
    });



})
app.listen(process.env.PORT || 3000, function(req, res) {
    console.log('Server started')
    console.log(__dirname)

})


// 5222f7be97559304f15aaef3dfb2f2f6-us3
// f3eedb132c