'use strict';

describe('FanTeam.version module', function() {
  beforeEach(module('FanTeam.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
