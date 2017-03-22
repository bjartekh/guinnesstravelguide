var HomeModel = function () {
    var self = this;
    self.locations = ko.observableArray();
    self.error = ko.observable();

    self.newSearch = {
        Location : ko.observable()
    }

    var findUri = '/api/find/';

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function findAllLocations(name) {
        ajaxHelper(findUri+name, 'GET').done(function (data) {
            self.locations(data);
        });
    }

    self.searchLocation = function (formElement) {
        var location = self.newSearch.Location;
        console.log(location);
        findAllLocations(location);

    }


    // Fetch the initial data.
    //findAllLocations();



};

ko.applyBindings(HomeModel);