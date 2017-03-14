

  suite('Custom Automation Tests for a simple px-slider', function() {
    test('Check assigned value of simple px-slider', function(done){
      var sliderEl = fixture('px_slider_simple'),
          sliderValue = sliderEl.value,
          displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
          sliderScale = sliderEl.scale;
      assert.equal(sliderValue, '10');
      assert.equal(displayValue, '10');
      assert.equal(sliderScale, 'linear');
      done();
    });
  });
  suite('Custom Automation Tests for a complex px-slider', function() {
    test('Check assigned value of complex px-slider', function(done){
      var sliderEl = fixture('px_slider_complex'),
          sliderValue = sliderEl.value,
          displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
          sliderScale = sliderEl.scale;
      assert.equal(sliderValue, '10.00');
      assert.equal(displayValue, '10.00');
      assert.equal(sliderScale, 'linear');
      done();
    });
  });
  suite('Custom Automation Tests for a multi-handle (range) px-slider', function() {
    test('Check assigned values of range px-slider', function(done){
      var sliderEl = fixture('px_slider_range'),
      sliderStartValue = sliderEl.value,
      displayStartValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
      sliderEndValue = sliderEl.endValue,
      displayEndValue = Polymer.dom(sliderEl.root).querySelector('#inputEnd').value;
      assert.equal(sliderStartValue, '10');
      assert.equal(displayStartValue, '10');
      assert.equal(sliderEndValue, '20');
      assert.equal(displayEndValue, '20');
      done();
    });
  });
  suite('Custom Automation Tests for a disabled px-slider', function() {
    test('Check assigned value of px-slider', function(done){
      var sliderEl = fixture('px_slider_disabled'),
          sliderValue = sliderEl.value;
      assert.equal(sliderValue, '10');
      done();
    });
    test('Test that input field is disabled', function(done){
      var sliderEl = fixture('px_slider_disabled'),
          sliderStartField = Polymer.dom(sliderEl.root).querySelector('#inputStart');
      assert.isTrue(sliderStartField.disabled);
      done();
    });
  });
  suite('Custom Automation Tests for a multi-handle (range) px-slider with negative range', function() {
    test('Check assigned values of range px-slider', function(done){
      var sliderEl = fixture('px_slider_range_neg'),
          sliderStartValue = sliderEl.value,
          displayStartValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value,
          sliderEndValue = sliderEl.endValue,
          displayEndValue = Polymer.dom(sliderEl.root).querySelector('#inputEnd').value;
      assert.equal(sliderStartValue, '-30');
      assert.equal(displayStartValue, '-30');
      assert.equal(sliderEndValue, '20');
      assert.equal(displayEndValue, '20');
      done();
    });
  });
  suite('Custom Automation Tests for a logarithmic px-slider', function() {
    test('Check assigned values of log px-slider', function(done){
      var sliderEl = fixture('px_slider_logarithmic'),
          sliderValue = sliderEl.value,
          sliderScale = sliderEl.scale,
          displayValue = Polymer.dom(sliderEl.root).querySelector('#inputStart').value;
      assert.equal(sliderValue, '10');
      assert.equal(displayValue, '10');
      assert.equal(sliderScale, 'logarithmic');
      done();
    });
  });
