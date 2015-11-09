var INSTITUTION_URL="http://ios.dev.kno.com/kno-institution-service/enterprise/organization/getSubOrganizations/1";
for (i = 0; i < 2; i++) {
    console.log("Counter " + i);
    SyncedCron.add({
        name: 'API test' + i,
        schedule: function(parser) {
            // parser is a later.parse object
            return parser.text('every 10 minutes');
        },
        job: function() {
            HTTP.call("GET", INSTITUTION_URL, {},
                function(error, result) {
                    if (!error) {
                        console.log(result.statusCode);
                    };
                    if (error) {
                        console.log(error);
                    }
                })
        }
    });
}
SyncedCron.start();