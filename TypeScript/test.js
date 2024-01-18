angular.module("app")
    .controller("InsecureController", ["$cacheFactory", "$templateCache", "$cookies", function($cacheFactory, $templateCache, $cookies) {
        // Insecure: Using plain text passwords without encryption
        $cacheFactory.put("x", data1.password);
        $templateCache.put("x", data2.password);
        $cookies.put("x", data3.password);
        $cookies.putObject("x", data4.password);

        // OK: Demonstrating other AngularJS functions
        $cookies.other("x", data5.password);
        other.put("x", data6.password);
        $cookies.put(data7.password, "x");
    }]);
