(function () {
    'use strict';

    angular.module('app').controller('PalindromeController', palindromeCtrl);

    palindromeCtrl.$inject = ['$scope', '$http', '$timeout'];

    function palindromeCtrl($scope, $http, $timeout) {
        var vm = $scope;

        vm.verifyPalindrome = verifyPalindrome;

        activate();

        function activate() {
            vm.input = '';
            vm.isPalindrome = false;
            vm.verified = false;
        }

        function verifyPalindrome() {
            vm.verified = false;

            if (!vm.input || !vm.input.length) {
                alert('Entrada não informada.');
                return;
            }

            $timeout(function () {
                vm.verified = true;
                $http.post('/verify-palindrome', { payload: vm.input })
                    .then(
                        function (response) {
                            vm.isPalindrome = true;
                        }, function (error) {
                            vm.isPalindrome = false;
                        });
            }, 400);

        }

    }


})();
