var Twit = require('twit')
var T = new Twit({
    consumer_key:         '	delOh7er1LShJvaSMuMKRsg2d',
    consumer_secret:      'JAfcbs4Kkjryz6l3vVVS9WcXYcgt30lJ980PGjY9K2TyzpZ0Aq    ',
    access_token:         '	878518917462802433-W4uBu8Okuohmu1aT15hrIjIiUUydEQd',
    access_token_secret:  '2uv464WuwnR2jfsQjXkpPoiLqfQ9F9EVimuQY01yqGfAr    ',
})

let retweet = function() {
    let params = {
        q: '#developer, #jobs',
        result_type: 'mixed',
        lang: 'en'
    }
    Twitter.get('search/tweets', params, function(err, data) {
        // if there is no error
        if (!err) {
           // loop through the first 4 returned tweets
          for (let i = 0; i < 4; i++) {
            // iterate through those first four defining a rtId that is equal to the value of each of those tweets' ids
          let rtId = data.statuses[i].id_str;
            // the post action
          Twitter.post('statuses/retweet/:id', {
            // setting the id equal to the rtId variable
            id: rtId
            // log response and log error
          }, function(err, response) {
            if (response) {
              console.log('Successfully retweeted');
            }
            if (err) {
              console.log(err);
            }
          });
        }
      }
        else {
            // catch all log if the search could not be executed
          console.log('Could not search tweets.');
        }
    });
}
retweet();
setInterval(retweet, 600000);

