var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Thunderforest Outdoors',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LIMITESADMINISTRATVES_1 = new ol.format.GeoJSON();
var features_LIMITESADMINISTRATVES_1 = format_LIMITESADMINISTRATVES_1.readFeatures(json_LIMITESADMINISTRATVES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESADMINISTRATVES_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIMITESADMINISTRATVES_1.addFeatures(features_LIMITESADMINISTRATVES_1);var lyr_LIMITESADMINISTRATVES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESADMINISTRATVES_1, 
                style: style_LIMITESADMINISTRATVES_1,
                title: '<img src="styles/legend/LIMITESADMINISTRATVES_1.png" /> LIMITES ADMINISTRATVES'
            });var format_LIMITESREGIONALES_2 = new ol.format.GeoJSON();
var features_LIMITESREGIONALES_2 = format_LIMITESREGIONALES_2.readFeatures(json_LIMITESREGIONALES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESREGIONALES_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIMITESREGIONALES_2.addFeatures(features_LIMITESREGIONALES_2);var lyr_LIMITESREGIONALES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESREGIONALES_2, 
                style: style_LIMITESREGIONALES_2,
    title: 'LIMITES REGIONALES<br />\
    <img src="styles/legend/LIMITESREGIONALES_2_0.png" /> Louga<br />\
    <img src="styles/legend/LIMITESREGIONALES_2_1.png" /> Saint-Louis<br />\
    <img src="styles/legend/LIMITESREGIONALES_2_2.png" /> Thiès<br />'
        });var format_AGEMOYENNE_3 = new ol.format.GeoJSON();
var features_AGEMOYENNE_3 = format_AGEMOYENNE_3.readFeatures(json_AGEMOYENNE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGEMOYENNE_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AGEMOYENNE_3.addFeatures(features_AGEMOYENNE_3);var lyr_AGEMOYENNE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGEMOYENNE_3, 
                style: style_AGEMOYENNE_3,
    title: 'AGE MOYENNE<br />\
    <img src="styles/legend/AGEMOYENNE_3_0.png" /> < 20<br />\
    <img src="styles/legend/AGEMOYENNE_3_1.png" />  20.0 - 30.0 <br />\
    <img src="styles/legend/AGEMOYENNE_3_2.png" />  30.0 - 40.0 <br />\
    <img src="styles/legend/AGEMOYENNE_3_3.png" />  40.0 - 55.0 <br />\
    <img src="styles/legend/AGEMOYENNE_3_4.png" />  55.0 - 65.0 <br />\
    <img src="styles/legend/AGEMOYENNE_3_5.png" /> > 65<br />'
        });var format_GENREPREVALENT_4 = new ol.format.GeoJSON();
var features_GENREPREVALENT_4 = format_GENREPREVALENT_4.readFeatures(json_GENREPREVALENT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GENREPREVALENT_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GENREPREVALENT_4.addFeatures(features_GENREPREVALENT_4);var lyr_GENREPREVALENT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GENREPREVALENT_4, 
                style: style_GENREPREVALENT_4,
    title: 'GENRE PREVALENT<br />\
    <img src="styles/legend/GENREPREVALENT_4_0.png" /> PREVALENCE FEMMES<br />\
    <img src="styles/legend/GENREPREVALENT_4_1.png" /> PREVALENCE HOMMES<br />\
    <img src="styles/legend/GENREPREVALENT_4_2.png" /> n. F = N. H<br />'
        });var format_SECTEUR_5 = new ol.format.GeoJSON();
var features_SECTEUR_5 = format_SECTEUR_5.readFeatures(json_SECTEUR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTEUR_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SECTEUR_5.addFeatures(features_SECTEUR_5);var lyr_SECTEUR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECTEUR_5, 
                style: style_SECTEUR_5,
    title: 'SECTEUR<br />\
    <img src="styles/legend/SECTEUR_5_0.png" /> AGRICULTURE<br />\
    <img src="styles/legend/SECTEUR_5_1.png" /> TRASF./COMMERC.<br />\
    <img src="styles/legend/SECTEUR_5_2.png" /> ELEVAGE<br />\
    <img src="styles/legend/SECTEUR_5_3.png" /> MARAICHAGE<br />'
        });var format_DATECREATION_6 = new ol.format.GeoJSON();
var features_DATECREATION_6 = format_DATECREATION_6.readFeatures(json_DATECREATION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATECREATION_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DATECREATION_6.addFeatures(features_DATECREATION_6);var lyr_DATECREATION_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATECREATION_6, 
                style: style_DATECREATION_6,
    title: 'DATE CREATION<br />\
    <img src="styles/legend/DATECREATION_6_0.png" />  1965 - 1985<br />\
    <img src="styles/legend/DATECREATION_6_1.png" /> 1985 - 1995<br />\
    <img src="styles/legend/DATECREATION_6_2.png" /> 1995 - 2005<br />\
    <img src="styles/legend/DATECREATION_6_3.png" /> 2005 - 2010<br />\
    <img src="styles/legend/DATECREATION_6_4.png" /> 2010 - 2015<br />\
    <img src="styles/legend/DATECREATION_6_5.png" /> 2016<br />\
    <img src="styles/legend/DATECREATION_6_6.png" /> 2017<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_LIMITESADMINISTRATVES_1.setVisible(true);lyr_LIMITESREGIONALES_2.setVisible(true);lyr_AGEMOYENNE_3.setVisible(true);lyr_GENREPREVALENT_4.setVisible(true);lyr_SECTEUR_5.setVisible(true);lyr_DATECREATION_6.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_LIMITESADMINISTRATVES_1,lyr_LIMITESREGIONALES_2,lyr_AGEMOYENNE_3,lyr_GENREPREVALENT_4,lyr_SECTEUR_5,lyr_DATECREATION_6];
lyr_LIMITESADMINISTRATVES_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'ID_4': 'ID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'orig_ogc_f': 'orig_ogc_f', });
lyr_LIMITESREGIONALES_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'orig_ogc_f': 'orig_ogc_f', });
lyr_AGEMOYENNE_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'COMMUNE': 'COMMUNE', 'LOCALITE': 'LOCALITE', 'CODE_MER': 'CODE_MER', 'NOME_MER': 'NOME_MER', 'FORMALISAT': 'FORMALISAT', 'FORME_JUR': 'FORME_JUR', 'PERSONNE_C': 'REPRESENTANT', 'CONTACT': 'CONTACT', 'SECTEUR': 'SECTEUR', 'BILAN': 'BILAN', 'DATE_CREAT': 'DATE_CREAT', 'N_FEMME_EM': 'N. FEMMES', 'N_HOMMES_E': 'N. HOMMES', 'AGE_MO': 'AGE MOYENNE', 'GENRE_PREV': 'GENRE_PREV', 'geocoded': 'geocoded', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'LAT/LONG', 'path': 'path', 'AGE_M_REAL': 'AGE_M_REAL', 'SECTEUR_lO': 'SECTEUR_lO', });
lyr_GENREPREVALENT_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'COMMUNE': 'COMMUNE', 'LOCALITE': 'LOCALITE', 'CODE_MER': 'CODE_MER', 'NOME_MER': 'NOME_MER', 'FORMALISAT': 'FORMALISAT', 'FORME_JUR': 'FORME_JUR', 'PERSONNE_C': 'REPRESENTANT', 'CONTACT': 'CONTACT', 'SECTEUR': 'SECTEUR', 'BILAN': 'BILAN', 'DATE_CREAT': 'DATE_CREAT', 'N_FEMME_EM': 'N. FEMMES', 'N_HOMMES_E': 'N. HOMMES', 'AGE_MO': 'AGE MOYENNE', 'GENRE_PREV': 'GENRE_PREV', 'geocoded': 'geocoded', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'LAT/LONG', 'path': 'path', 'AGE_M_REAL': 'AGE_M_REAL', 'SECTEUR_lO': 'SECTEUR_lO', });
lyr_SECTEUR_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'COMMUNE': 'COMMUNE', 'LOCALITE': 'LOCALITE', 'CODE_MER': 'CODE_MER', 'NOME_MER': 'NOME_MER', 'FORMALISAT': 'FORMALISAT', 'FORME_JUR': 'FORME_JUR', 'PERSONNE_C': 'REPRESENTANT', 'CONTACT': 'CONTACT', 'SECTEUR': 'SECTEUR', 'BILAN': 'BILAN', 'DATE_CREAT': 'DATE_CREAT', 'N_FEMME_EM': 'N. FEMMES', 'N_HOMMES_E': 'N. HOMMES', 'AGE_MO': 'AGE MOYENNE', 'geocoded': 'geocoded', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'LAT/LONG', 'path': 'path', 'GENRE PREV': 'GENRE PREV', });
lyr_DATECREATION_6.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'COMMUNE': 'COMMUNE', 'LOCALITE': 'LOCALITE', 'CODE_MER': 'CODE_MER', 'NOME_MER': 'NOME_MER', 'FORMALISAT': 'FORMALISAT', 'FORME_JUR': 'FORME_JUR', 'PERSONNE_C': 'REPRESENTANT', 'CONTACT': 'CONTACT', 'SECTEUR': 'SECTEUR', 'BILAN': 'BILAN', 'DATE_CREAT': 'DATE_CREAT', 'N_FEMME_EM': 'N. FEMMES', 'N_HOMMES_E': 'N. HOMMES', 'AGE_MO': 'AGE MOYENNE', 'GENRE_PREV': 'GENRE_PREV', 'geocoded': 'geocoded', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'LAT/LONG', 'path': 'path', 'AGE_M_REAL': 'AGE_M_REAL', 'SECTEUR_lO': 'SECTEUR_lO', 'date_C_R': 'date_C_R', });
lyr_LIMITESADMINISTRATVES_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'ID_2': 'Hidden', 'NAME_2': 'Hidden', 'ID_3': 'Hidden', 'NAME_3': 'Hidden', 'ID_4': 'Hidden', 'NAME_4': 'Hidden', 'VARNAME_4': 'Hidden', 'TYPE_4': 'Hidden', 'ENGTYPE_4': 'Hidden', 'orig_ogc_f': 'Hidden', });
lyr_LIMITESREGIONALES_2.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', 'orig_ogc_f': 'Hidden', });
lyr_AGEMOYENNE_3.set('fieldImages', {'fid': 'Hidden', 'COUNTRY': 'Hidden', 'COMMUNE': 'TextEdit', 'LOCALITE': 'TextEdit', 'CODE_MER': 'TextEdit', 'NOME_MER': 'TextEdit', 'FORMALISAT': 'TextEdit', 'FORME_JUR': 'TextEdit', 'PERSONNE_C': 'TextEdit', 'CONTACT': 'TextEdit', 'SECTEUR': 'TextEdit', 'BILAN': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'N_FEMME_EM': 'TextEdit', 'N_HOMMES_E': 'TextEdit', 'AGE_MO': 'TextEdit', 'GENRE_PREV': 'TextEdit', 'geocoded': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'TextEdit', 'path': 'Hidden', 'AGE_M_REAL': 'Hidden', 'SECTEUR_lO': 'Hidden', });
lyr_GENREPREVALENT_4.set('fieldImages', {'fid': 'Hidden', 'COUNTRY': 'Hidden', 'COMMUNE': 'TextEdit', 'LOCALITE': 'TextEdit', 'CODE_MER': 'TextEdit', 'NOME_MER': 'TextEdit', 'FORMALISAT': 'TextEdit', 'FORME_JUR': 'TextEdit', 'PERSONNE_C': 'TextEdit', 'CONTACT': 'TextEdit', 'SECTEUR': 'TextEdit', 'BILAN': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'N_FEMME_EM': 'TextEdit', 'N_HOMMES_E': 'TextEdit', 'AGE_MO': 'TextEdit', 'GENRE_PREV': 'TextEdit', 'geocoded': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'TextEdit', 'path': 'Hidden', 'AGE_M_REAL': 'Hidden', 'SECTEUR_lO': 'Hidden', });
lyr_SECTEUR_5.set('fieldImages', {'fid': 'Hidden', 'COUNTRY': 'Hidden', 'COMMUNE': 'TextEdit', 'LOCALITE': 'TextEdit', 'CODE_MER': 'TextEdit', 'NOME_MER': 'TextEdit', 'FORMALISAT': 'TextEdit', 'FORME_JUR': 'TextEdit', 'PERSONNE_C': 'TextEdit', 'CONTACT': 'TextEdit', 'SECTEUR': 'TextEdit', 'BILAN': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'N_FEMME_EM': 'TextEdit', 'N_HOMMES_E': 'TextEdit', 'AGE_MO': 'TextEdit', 'geocoded': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'TextEdit', 'path': 'Hidden', 'GENRE PREV': 'TextEdit', });
lyr_DATECREATION_6.set('fieldImages', {'fid': 'Hidden', 'COUNTRY': 'Hidden', 'COMMUNE': 'TextEdit', 'LOCALITE': 'TextEdit', 'CODE_MER': 'TextEdit', 'NOME_MER': 'TextEdit', 'FORMALISAT': 'TextEdit', 'FORME_JUR': 'TextEdit', 'PERSONNE_C': 'TextEdit', 'CONTACT': 'TextEdit', 'SECTEUR': 'TextEdit', 'BILAN': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'N_FEMME_EM': 'TextEdit', 'N_HOMMES_E': 'TextEdit', 'AGE_MO': 'TextEdit', 'GENRE_PREV': 'TextEdit', 'geocoded': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'TextEdit', 'path': 'Hidden', 'AGE_M_REAL': 'Hidden', 'SECTEUR_lO': 'Hidden', 'date_C_R': 'Hidden', });
lyr_LIMITESADMINISTRATVES_1.set('fieldLabels', {});
lyr_LIMITESREGIONALES_2.set('fieldLabels', {});
lyr_AGEMOYENNE_3.set('fieldLabels', {'COMMUNE': 'inline label', 'LOCALITE': 'inline label', 'CODE_MER': 'inline label', 'NOME_MER': 'inline label', 'FORMALISAT': 'inline label', 'FORME_JUR': 'inline label', 'PERSONNE_C': 'inline label', 'CONTACT': 'inline label', 'SECTEUR': 'inline label', 'BILAN': 'inline label', 'DATE_CREAT': 'inline label', 'N_FEMME_EM': 'inline label', 'N_HOMMES_E': 'inline label', 'AGE_MO': 'inline label', 'GENRE_PREV': 'inline label', 'latlong': 'inline label', });
lyr_GENREPREVALENT_4.set('fieldLabels', {'COMMUNE': 'inline label', 'LOCALITE': 'inline label', 'CODE_MER': 'inline label', 'NOME_MER': 'inline label', 'FORMALISAT': 'inline label', 'FORME_JUR': 'inline label', 'PERSONNE_C': 'inline label', 'CONTACT': 'inline label', 'SECTEUR': 'inline label', 'BILAN': 'inline label', 'DATE_CREAT': 'inline label', 'N_FEMME_EM': 'inline label', 'N_HOMMES_E': 'inline label', 'AGE_MO': 'inline label', 'GENRE_PREV': 'inline label', 'latlong': 'inline label', });
lyr_SECTEUR_5.set('fieldLabels', {'COMMUNE': 'inline label', 'LOCALITE': 'inline label', 'CODE_MER': 'inline label', 'NOME_MER': 'inline label', 'FORMALISAT': 'inline label', 'FORME_JUR': 'inline label', 'PERSONNE_C': 'inline label', 'CONTACT': 'inline label', 'SECTEUR': 'inline label', 'BILAN': 'inline label', 'DATE_CREAT': 'inline label', 'N_FEMME_EM': 'inline label', 'N_HOMMES_E': 'inline label', 'AGE_MO': 'inline label', 'latlong': 'inline label', 'GENRE PREV': 'no label', });
lyr_DATECREATION_6.set('fieldLabels', {'COMMUNE': 'inline label', 'LOCALITE': 'inline label', 'CODE_MER': 'inline label', 'NOME_MER': 'inline label', 'FORMALISAT': 'inline label', 'FORME_JUR': 'inline label', 'PERSONNE_C': 'inline label', 'CONTACT': 'inline label', 'SECTEUR': 'inline label', 'BILAN': 'inline label', 'DATE_CREAT': 'inline label', 'N_FEMME_EM': 'inline label', 'N_HOMMES_E': 'inline label', 'AGE_MO': 'inline label', 'GENRE_PREV': 'inline label', 'latlong': 'inline label', });
lyr_DATECREATION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});