suite('Tests for a simple px-slider', function() {
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
suite('Tests for a complex px-slider', function() {
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
suite('Tests for a multi-handle (range) px-slider', function() {
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
suite('Tests for a disabled px-slider', function() {
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
suite('Tests for a multi-handle (range) px-slider with negative range', function() {
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
suite('Tests for a logarithmic px-slider', function() {
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
suite('Tests for a min/max labels', function() {
  test('Check min label displayed', function(){
    var sliderEl = fixture('px_slider_labels'),
        minLabel = Polymer.dom(sliderEl.root).querySelector('#minLabel');
    assert.isNotNull(minLabel, '#minLabel should be defined');
    assert.equal(minLabel.textContent, '1', '#minLabel value should be "1"');
    assert.equal(minLabel.textContent, sliderEl.min, '#minLabel value should be same as "min" property of slider element');
  });
  test('Check max label displayed', function(){
    var sliderEl = fixture('px_slider_labels'),
        maxLabel = Polymer.dom(sliderEl.root).querySelector('#maxLabel');
    assert.isNotNull(maxLabel, '#maxLabel should be defined');
    assert.equal(maxLabel.textContent, '100', '#maxLabel value should be "100"');
    assert.equal(maxLabel.textContent, sliderEl.max, '#maxLabel value should be same as "min" property of slider element');
  });
  test('Check updated min property alters displayed min label', function(){
    var sliderEl = fixture('px_slider_labels'),
        minLabel = Polymer.dom(sliderEl.root).querySelector('#minLabel');

    assert.equal(minLabel.textContent, '1', '#minLabel value should be "1"');
    sliderEl.min = 2;
    assert.equal(minLabel.textContent, '2', '#minLabel value should be "2"');
    assert.equal(minLabel.textContent, sliderEl.min, '#minLabel value should be same as "min" property of slider element');
  });
  test('Check updated max property alters displayed max label', function(){
    var sliderEl = fixture('px_slider_labels'),
        maxLabel = Polymer.dom(sliderEl.root).querySelector('#maxLabel');

    assert.equal(maxLabel.textContent, '100', '#maxLabel value should be "100"');
    sliderEl.max = 200;
    assert.equal(maxLabel.textContent, '200', '#maxLabel value should be "200"');
    assert.equal(maxLabel.textContent, sliderEl.max, '#maxLabel value should be same as "min" property of slider element');
  });
  test('Check updated removing "show-labels" property remove labels from slider', function(){
    var sliderEl = fixture('px_slider_labels'),
        maxLabel = Polymer.dom(sliderEl.root).querySelector('#maxLabel'),
        minLabel = Polymer.dom(sliderEl.root).querySelector('#minLabel');

    assert.equal(minLabel.textContent, '1', '#minLabel value should be "1"');
    assert.equal(maxLabel.textContent, '100', '#maxLabel value should be "100"');
    sliderEl.showLabels = false;
    assert.equal(minLabel.textContent, '', '#minLabel value should be empty string');
    assert.equal(maxLabel.textContent, '', '#maxLabel value should be empty string');

  });
});
