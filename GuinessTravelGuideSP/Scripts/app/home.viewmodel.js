var HomeModel = function () {
    
    this.locations = ko.observableArray();
    this.error = ko.observable();

    this.searchInput = ko.observable();

    var findUri = '/api/find/';

    this.ajaxHelper = function (uri, method, data) {
        this.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            this.error(errorThrown);
        });
    }.bind(this);

    this.findAllLocations = function (name) {
        this.ajaxHelper(findUri + name, 'GET').done(function (data) {
            console.log(data);
            //this.locations(data);
            ko.utils.arrayForEach(data, function (item) {
                this.locations.push(item);
            });
        });
    }.bind(this);

    this.searchLocation = function (formElement) {
        console.log(this.searchInput());
        findAllLocations(this.searchInput());

    }.bind(this);


    // Fetch the initial data.
    //findAllLocations();



};

ko.applyBindings(new HomeModel());

$(document).ready(function () {

    var  customTokenizer = function (datum) {
        var nameTokens = Bloodhound.tokenizers.whitespace(datum.name);
        var countryTokens = Bloodhound.tokenizers.whitespace(datum.country);

        return nameTokens.concat(countryTokens);
    }
    

    var findPlaces = new Bloodhound({
        datumTokenizer: customTokenizer,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '/Content/cities.json',
        remote: {
            url: '../data/films/queries/%QUERY.json',
            wildcard: '%QUERY'
        }
    });


    $('#custom-templates .typeahead').typeahead(null, {
        name: 'cities',
        value: 'name',
        source: findPlaces
    });

});
