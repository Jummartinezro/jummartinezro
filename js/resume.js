/**
 * Created by juanmanuelmartinezromero on 22/09/15.
 */
(function () {
    var resumeApp = angular.module("resumeApp", []);
    var resumeData = {
        name: "Juan Martínez"
    };

    resumeApp.controller("resumeCtrl", function () {
        this.resumeData = resumeData;
    });
})();
