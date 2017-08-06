angular.module('qls')
    .controller('appController', ['$rootScope', '$scope', 'ngMeta', '$http', function ($rootScope, $scope, ngMeta, $http) {
        $rootScope.enquiryState = false;
        $scope.coursesList = [
            "Select a course",
            "ITIL Foundation",
            "ITIL Service Strategy",
            "ITIL Service Design",
            "ITIL Service Transition",
            "ITIL Service Operation",
            "ITIL Continual Service Improvement",
            "ITIL Service, Offering and Agreement (SOA)",
            "ITIL Planning, Protection and Optimization (PPO)",
            "ITIL Release, Control and Validation (RCV)",
            "ITIL Operational, Support and Analysis (OSA)",
            "ITIL®  Managing Across The Lifecycle",
            "CAPM",
            "PMP",
            "ACP",
            "Prince2 Foundation",
            "Prince2 Practitioner",
            "Prince2 Agile",
            "Scrum Master",
            "Managing Successful Programs",
            "Six Sigma Yellow Belt",
            "Six Sigma Green Belt",
            "Six Sigma Black Belt",
            "COBIT 5 Foundation",
            "TOGAF 9.1 Level  1 & Level 2"
        ]
        $scope.siteContact = {
            fullname: '',
            email: '',
            mobile: '',
            courseInterested: '',
            message: ''
        }
        $scope.siteContactSubmit = "Submit";
        $scope.contactSubmit = function () {
            $http.post('endpoints/send-mail.php', $scope.siteContact).success(function (res) {
                if (res == 'ok') {
                    $scope.siteContactSubmit = 'Message sent sucessfully';
                }
            }).error(function (err) {
                console.error(err)
            })
        }

        $scope.enquiryToggle = function () {
            $rootScope.enquiryState = $rootScope.enquiryState ? false : true;
        }
    }])