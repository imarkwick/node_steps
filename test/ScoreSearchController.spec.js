describe('ScoreSearchController', function() {
	beforeEach(module('ScoreSearch'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('ScoreSearchController', {
			$scope: scope
		});
	}));

	it('should ininitialise with an empty search result and term', function() {
		expect(scope.searchResult).toBeUndefined();
		expect(scope.searchTerm).toBeUndefined();	
	});
});