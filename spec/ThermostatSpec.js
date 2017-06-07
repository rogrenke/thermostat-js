describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('is initialized at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('allows the temperature to be increased by 1 degree', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  })

  it('allows the temperature to be decreased by 1 degree', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  })

  it('will not allow the temperatur to go below 10 degrees', function(){
    expect(function() {
      thermostat.decrease(11);
    }).toThrowError('That is too cold, brrrr!');
  });

  it('has power save mode switched on by default', function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('has capability to turn power saving mode off', function() {
    thermostat.switchPowerSaving();
    expect(thermostat.powerSaving).toEqual(false);
  });
});
