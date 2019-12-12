var size = 0;
var placement = 'point';
function categories_SECTEUR_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'A':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(63,165,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(43,225,70,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'C/T':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.2 + size, points: 5,
            radius2: 3.1, stroke: new ol.style.Stroke({color: 'rgba(22,182,226,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,221,241,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'E':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(121,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,66,66,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'M':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.2 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(36,162,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(25,152,53,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_SECTEUR_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("SECTEUR");
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
    
var style = categories_SECTEUR_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
