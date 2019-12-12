var size = 0;
var placement = 'point';

var style_AGEMOYENNE_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_AGE_M_REAL");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.000000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.8 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 20.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.8 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 30.000000 && value <= 40.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 40.000000 && value <= 55.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.4 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 55.000000 && value <= 65.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 13.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 65.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 16.0 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,248,22,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,112,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
