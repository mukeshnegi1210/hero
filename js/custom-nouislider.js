var sliderFormat = document.getElementById('emiAmountSlider');
var sliderFormat2 = document.getElementById('emiInterestRateSlider');
var sliderFormat3 = document.getElementById('emiDurationSlider');
// sliderFormat.style.margin = '0 auto 160px';

noUiSlider.create(sliderFormat, {
    range: {
        'min': 100000,
        'max': 2000000
    },
    snap: false,
    start: 500000,
    step: 100,
    connect: [true, false],
    behaviour: 'tap-drag',
    format: {
        to: function (value) {
            return value;
        },
        from: function (value) {
            return value.replace(',-', '');
        }
    }
});


var inputFormat = document.getElementById('emiAmountTxt');
sliderFormat.noUiSlider.on('update', function (values, handle) {
    inputFormat.value =  Math.round(values[handle]);
});

inputFormat.addEventListener('change', function () {
    sliderFormat.noUiSlider.set(this.value);
});


// Range slider for slide 4

noUiSlider.create(sliderFormat2, {
    range: {
        'min': 5,
        'max': 15
    },
    snap: false,
    start: 7.5,
    step: 0.1,
    connect: [true, false],
    behaviour: 'tap-drag',
    format: {
        to: function (value) {
            return value;
        },
        from: function (value) {
            return value.replace(',-', '');
        }
    }
});



var inputFormat2 = document.getElementById('emiInterestRateTxt');

sliderFormat2.noUiSlider.on('update', function (values, handle) {
    inputFormat2.value =  values[handle];
});

inputFormat2.addEventListener('change', function () {
    sliderFormat2.noUiSlider.set(this.value);
});


// Range slider for slide 4

noUiSlider.create(sliderFormat3, {
    range: {
        'min': 12,
        'max': 60
    },
    snap: false,
    start: 23,
    step: 1,
    connect: [true, false],
    behaviour: 'tap-drag',
    format: {
        to: function (value) {
            return value;
        },
        from: function (value) {
            return value.replace(',-', '');
        }
    }
});



var inputFormat3 = document.getElementById('emiDurationTxt');

sliderFormat3.noUiSlider.on('update', function (values, handle) {
    inputFormat3.value =  Math.round(values[handle]);
});

inputFormat3.addEventListener('change', function () {
    sliderFormat3.noUiSlider.set(this.value);
});
