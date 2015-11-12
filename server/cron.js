//TODO This is just a hardcoded test, the endpoints entries will be refactored to remove code duplication
//eventually most of the calls will be moved to separate classes and some will be generated 
//from MongoDB entries, dinamically

function addApiKeyAuth(obj, partnerId, secretKey) {
    var pId = encodeURIComponent(partnerId);
    var secretKey = encodeURIComponent(secretKey);
    var method = obj['method'];
    var timeStamp = Math.floor(Date.now() / 1000);
    var url = decodeURIComponent(obj['url'].substring(obj['url'].indexOf("v1") - 1));
    var stringToSign = method + "\n" + timeStamp + "\n" + url;
    console.log("URL for sign in is :: " + stringToSign);
    var signature = CryptoJS.SHA256(secretKey + stringToSign);
    signature = CryptoJS.enc.Base64.stringify(signature);
    var headers = {};
    if (pId && pId.trim() != "") {
        var authorization = "KNO " + pId + ":" + signature
        headers["Authorization"] = authorization;
        console.log("added key " + authorization);
        headers["x-kno-date"] = timeStamp;
    }
    console.log(headers);
    return headers;
}

var INSTITUTION_URL = "http://ios.dev.kno.com/kno-institution-service/enterprise/organization/getSubOrganizations/1";
var PARTNER_API_URL_QA = "http://fe.qa.kno.com/partner-api-front-end";
var distributor_id = "DD000011";
var partner_key = "KEYDD11";
var secretKey = "knoDD54";

var createAccount = {
    name: 'CreateAccount',
    schedule: function(parser) {
        //Scheduling in human language, if we want to have the calls running each 30 minutes, we use:
        // return parser.text('every 30 minutes');
        //TODO remove hardcoding
        return parser.text('every 600 minutes');
    },
    job: function() {
        var account = {
            email: "testings@kno.com",
            partnerUserId: distributor_id,
            password: "123456",
            firstName: "Vasile",
            lastName: "Pop",
            university: "SJSU",
            yearInSchool: 3
        };
        var obj = {
            method: "POST",
            url: "/v1/account/create/sync/10"
        };
        HTTP.call(obj.post, PARTNER_API_URL_QA + obj.url, {
                timeout: 15000,
                data: account,
                headers: addApiKeyAuth(obj, partner_key, secretKey)
            },
            function(error, result) {
                console.log(result.headers);
                var headerType = result.headers['content-type'];
                var content = headerType == "application/json" ? result.data : result.content;
                var contentType = headerType == "application/json" ? "json" : "string";
                var status = result.statusCode == 200 ? "PASS" : "FAIL";
                Results.insert({
                    responseCode: result.statusCode,
                    status: status,
                    service: "PartnerAPI",
                    path: "partner-api-front-end/v1/account/create/sync/10",
                    content: content,
                    contentType: contentType,
                    createdAt: new Date()
                });
            })
    }
}

SyncedCron.add(createAccount);

SyncedCron.add({
    name: 'getSubOrganizations',
    schedule: function(parser) {
        //Scheduling in human language, if we want to have the calls running each 30 minutes, we use:
        // return parser.text('every 30 minutes');
        //TODO remove hardcoding
        return parser.text('every 600 minutes');
    },
    job: function() {
        HTTP.call("GET", INSTITUTION_URL, {
                timeout: 5000
            },
            function(error, result) {
                var headerType = result.headers['content-type'];
                var content = headerType == "application/json" ? result.data : result.content;
                var contentType = headerType == "application/json" ? "json" : "string";
                var status = result.statusCode == 200 ? "PASS" : "FAIL";
                Results.insert({
                    responseCode: result.statusCode,
                    status: status,
                    service: "InstitutionAPI",
                    path: "kno-institution-service/enterprise/organization/getSubOrganizations/1",
                    content: content,
                    contentType: contentType,
                    createdAt: new Date()
                });
            })
    }
});
SyncedCron.start();
