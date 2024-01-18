angular.module("app")
    .controller("Controller", ["$cacheFactory", "$templateCache", "$cookies", function($cacheFactory, $templateCache, $cookies) {
        // NOT OK
        $cacheFactory.put("x", data1.password);
        $templateCache.put("x", data2.password);
        $cookies.put("x", data3.password);
        $cookies.putObject("x", data4.password);

        // OK
        $cookies.other("x", data5.password);
        other.put("x", data6.password);
        $cookies.put(data7.password, "x");
    }]);
