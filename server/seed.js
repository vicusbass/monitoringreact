if (Results.find().count()===0){
    Results.insert({
        responseCode: 200,
        status: "PASS",
        service: "PartnerAPI",
        path: "/auth/getCode",
        errorMessage: "",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 400,
        status: "FAIL",
        service: "PartnerAPI",
        path: "/auth/getToken",
        errorMessage: "This is too much for me to handle",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 403,
        status: "FAIL",
        service: "PartnerAPI",
        path: "/auth/getToken/ourFriend",
        errorMessage: "Bad auth",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 200,
        status: "PASS",
        service: "InstitutionAPI",
        path: "/institution/getId",
        errorMessage: "",
        createdAt: new Date()
    });
    Results.insert({
        responseCode: 500,
        status: "FAIL",
        service: "InstitutionAPI",
        path: "/institution/getDistrict",
        errorMessage: "{auth: false}",
        createdAt: new Date()
    });
}