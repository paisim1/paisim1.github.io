var size = 0;
var placement = 'point';
function categories_LIMITESREGIONALES_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Louga':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,68,68,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(241,229,58,0.0509803921569)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Saint-Louis':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,68,68,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(58,223,241,0.0509803921569)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Thiès':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,68,68,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(68,214,92,0.0509803921569)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_LIMITESREGIONALES_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_NAME_1");
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
    
var style = categories_LIMITESREGIONALES_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
