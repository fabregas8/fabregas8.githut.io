var wms_layers = [];

var format_evodoula_0 = new ol.format.GeoJSON();
var features_evodoula_0 = format_evodoula_0.readFeatures(json_evodoula_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_evodoula_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_evodoula_0.addFeatures(features_evodoula_0);
var lyr_evodoula_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_evodoula_0, 
                style: style_evodoula_0,
                interactive: true,
                title: '<img src="styles/legend/evodoula_0.png" /> evodoula'
            });
var format_Courbedeniveau_1 = new ol.format.GeoJSON();
var features_Courbedeniveau_1 = format_Courbedeniveau_1.readFeatures(json_Courbedeniveau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau_1.addFeatures(features_Courbedeniveau_1);
var lyr_Courbedeniveau_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Courbedeniveau_1, 
                style: style_Courbedeniveau_1,
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau_1.png" /> Courbe de niveau'
            });
var format_Lieuxdits_2 = new ol.format.GeoJSON();
var features_Lieuxdits_2 = format_Lieuxdits_2.readFeatures(json_Lieuxdits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lieuxdits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lieuxdits_2.addFeatures(features_Lieuxdits_2);
var lyr_Lieuxdits_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lieuxdits_2, 
                style: style_Lieuxdits_2,
                interactive: true,
                title: '<img src="styles/legend/Lieuxdits_2.png" /> Lieux-dits'
            });

lyr_evodoula_0.setVisible(true);lyr_Courbedeniveau_1.setVisible(true);lyr_Lieuxdits_2.setVisible(true);
var layersList = [lyr_evodoula_0,lyr_Courbedeniveau_1,lyr_Lieuxdits_2];
lyr_evodoula_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'type_': 'type_', 'desc_type': 'desc_type', 'nom_arr': 'Nom arrondissement', 'nom_dep': 'Nom departement', 'nom_reg': 'Nom de la region', 'code_arr': 'code_arr', 'population': 'Population', 'sup_adm_ha': 'sup_adm_ha', 'sup_sig_ha': 'sup_sig_ha', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', 'globalid': 'globalid', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'wikipedia': 'wikipedia', });
lyr_Courbedeniveau_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Altitude', 'Shape_Leng': 'Shape_Leng', 'wikipedia': 'wikipedia', });
lyr_Lieuxdits_2.set('fieldAliases', {'type_': 'type_', 'desc_type': 'desc_type', 'nom_lieu': 'Nom des lieux', 'population': 'Population', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', 'objectid': 'objectid', 'globalid': 'globalid', 'wikipedia': 'wikipedia', });
lyr_evodoula_0.set('fieldImages', {'OBJECTID': 'Hidden', 'type_': 'Hidden', 'desc_type': 'Hidden', 'nom_arr': 'TextEdit', 'nom_dep': 'TextEdit', 'nom_reg': 'TextEdit', 'code_arr': 'Hidden', 'population': 'Hidden', 'sup_adm_ha': 'Hidden', 'sup_sig_ha': 'Hidden', 'last_edite': 'Hidden', 'last_edi_1': 'Hidden', 'created_us': 'Hidden', 'created_da': 'Hidden', 'globalid': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_Courbedeniveau_1.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'Contour': 'TextEdit', 'Shape_Leng': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_Lieuxdits_2.set('fieldImages', {'type_': 'Hidden', 'desc_type': 'Hidden', 'nom_lieu': 'TextEdit', 'population': 'Hidden', 'last_edite': 'Hidden', 'last_edi_1': 'Hidden', 'created_us': 'Hidden', 'created_da': 'Hidden', 'objectid': 'Hidden', 'globalid': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_evodoula_0.set('fieldLabels', {'nom_arr': 'no label', 'nom_dep': 'no label', 'nom_reg': 'no label', 'wikipedia': 'no label', });
lyr_Courbedeniveau_1.set('fieldLabels', {'Contour': 'no label', 'wikipedia': 'no label', });
lyr_Lieuxdits_2.set('fieldLabels', {'nom_lieu': 'no label', 'wikipedia': 'no label', });
lyr_Lieuxdits_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});