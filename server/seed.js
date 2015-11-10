if (Results.find().count()===0){
    Results.insert({
        responseCode: 200,
        status: "PASS",
        service: "PartnerAPI",
        path: "/auth/getCode",
        content: "",
        contentType: "string",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 400,
        status: "FAIL",
        service: "PartnerAPI",
        path: "/auth/getToken",
        content: "This is too much for me to handle",
        contentType: "string",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 403,
        status: "FAIL",
        service: "PartnerAPI",
        path: "/auth/getToken/ourFriend",
        content: "Bad auth",
        contentType: "string",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 200,
        status: "PASS",
        service: "InstitutionAPI",
        path: "/institution/getId",
        content: "",
        contentType: "string",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 500,
        status: "FAIL",
        service: "InstitutionAPI",
        path: "/institution/getDistrict",
        content: "{auth: false}",
        contentType: "json",
        createdAt: new Date()
    });
}