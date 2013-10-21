'use strict';

describe('Service: Serviceproviders', function () {

  // load the service's module
  beforeEach(module('SharesdkApp'));

  // instantiate service
  var Serviceproviders;
  beforeEach(inject(function (_Serviceproviders_) {
    Serviceproviders = _Serviceproviders_;
  }));

  it('should do something', function () {
    expect(!!Serviceproviders).toBe(true);
  });

});
