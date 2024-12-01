var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__province_marrakech_safi_jointu_1 = new ol.format.GeoJSON();
var features__province_marrakech_safi_jointu_1 = format__province_marrakech_safi_jointu_1.readFeatures(json__province_marrakech_safi_jointu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__province_marrakech_safi_jointu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__province_marrakech_safi_jointu_1.addFeatures(features__province_marrakech_safi_jointu_1);
var lyr__province_marrakech_safi_jointu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__province_marrakech_safi_jointu_1, 
                style: style__province_marrakech_safi_jointu_1,
                popuplayertitle: "_province_marrakech_safi_jointu",
                interactive: true,
    title: '_province_marrakech_safi_jointu<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_0.png" /> province de youssoufia<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_1.png" /> province de Rehamna<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_2.png" /> province de chichaoua<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_3.png" /> province de Essaouia<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_4.png" /> province de El kelaa des Srgana<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_5.png" /> province de Al Haouz<br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_6.png" /> province de Safi <br />\
    <img src="styles/legend/_province_marrakech_safi_jointu_1_7.png" /> province de Marrakech<br />'
        });
var format_Limite_Maroc_2 = new ol.format.GeoJSON();
var features_Limite_Maroc_2 = format_Limite_Maroc_2.readFeatures(json_Limite_Maroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Maroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Maroc_2.addFeatures(features_Limite_Maroc_2);
var lyr_Limite_Maroc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Maroc_2, 
                style: style_Limite_Maroc_2,
                popuplayertitle: " Limite_Maroc",
                interactive: true,
                title: '<img src="styles/legend/Limite_Maroc_2.png" />  Limite_Maroc'
            });
var format_Chef_lieu_3 = new ol.format.GeoJSON();
var features_Chef_lieu_3 = format_Chef_lieu_3.readFeatures(json_Chef_lieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chef_lieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_lieu_3.addFeatures(features_Chef_lieu_3);
var lyr_Chef_lieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chef_lieu_3, 
                style: style_Chef_lieu_3,
                popuplayertitle: "Chef_lieu",
                interactive: true,
                title: 'Chef_lieu'
            });
var format_LimitepvllimiteMaroc_4 = new ol.format.GeoJSON();
var features_LimitepvllimiteMaroc_4 = format_LimitepvllimiteMaroc_4.readFeatures(json_LimitepvllimiteMaroc_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitepvllimiteMaroc_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitepvllimiteMaroc_4.addFeatures(features_LimitepvllimiteMaroc_4);
var lyr_LimitepvllimiteMaroc_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitepvllimiteMaroc_4, 
                style: style_LimitepvllimiteMaroc_4,
                popuplayertitle: "Limite pvl — limite Maroc",
                interactive: true,
                title: '<img src="styles/legend/LimitepvllimiteMaroc_4.png" /> Limite pvl — limite Maroc'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr__province_marrakech_safi_jointu_1.setVisible(true);lyr_Limite_Maroc_2.setVisible(true);lyr_Chef_lieu_3.setVisible(true);lyr_LimitepvllimiteMaroc_4.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr__province_marrakech_safi_jointu_1,lyr_Limite_Maroc_2,lyr_Chef_lieu_3,lyr_LimitepvllimiteMaroc_4];
lyr__province_marrakech_safi_jointu_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Area': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Area', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_lat': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_lat', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_long': 'Data_Devoir_Carte_Thematique (1) — Data_provinces_long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Limite_Maroc_2.set('fieldAliases', {'fid': 'fid', });
lyr_Chef_lieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_LimitepvllimiteMaroc_4.set('fieldAliases', {'fid': 'fid', });
lyr__province_marrakech_safi_jointu_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Code_Provi': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Population_2024': 'Range', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_lat': 'TextEdit', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_long': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_Limite_Maroc_2.set('fieldImages', {'fid': 'Hidden', });
lyr_Chef_lieu_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_LimitepvllimiteMaroc_4.set('fieldImages', {'fid': 'Hidden', });
lyr__province_marrakech_safi_jointu_1.set('fieldLabels', {'Code_Provi': 'no label', 'Nom_Provin': 'inline label - always visible', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Code_Provi': 'no label', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Nom_Provin': 'no label', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Area': 'no label', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Population_2024': 'inline label - always visible', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_Chef lieu': 'no label', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_lat': 'no label', 'Data_Devoir_Carte_Thematique (1) — Data_provinces_long': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Limite_Maroc_2.set('fieldLabels', {});
lyr_Chef_lieu_3.set('fieldLabels', {'Code_Provi': 'header label - visible with data', 'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', });
lyr_LimitepvllimiteMaroc_4.set('fieldLabels', {});
lyr_LimitepvllimiteMaroc_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});