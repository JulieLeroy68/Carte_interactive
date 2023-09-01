var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ContourPNRVN_2 = new ol.format.GeoJSON();
var features_ContourPNRVN_2 = format_ContourPNRVN_2.readFeatures(json_ContourPNRVN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourPNRVN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourPNRVN_2.addFeatures(features_ContourPNRVN_2);
var lyr_ContourPNRVN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourPNRVN_2, 
                style: style_ContourPNRVN_2,
                interactive: false,
                title: '<img src="styles/legend/ContourPNRVN_2.png" /> Contour PNRVN'
            });
var format_Gosites_3 = new ol.format.GeoJSON();
var features_Gosites_3 = format_Gosites_3.readFeatures(json_Gosites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gosites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gosites_3.addFeatures(features_Gosites_3);
var lyr_Gosites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gosites_3, 
                style: style_Gosites_3,
                interactive: false,
                title: '<img src="styles/legend/Gosites_3.png" /> Géosites'
            });
var format_Gositestudis_4 = new ol.format.GeoJSON();
var features_Gositestudis_4 = format_Gositestudis_4.readFeatures(json_Gositestudis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gositestudis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gositestudis_4.addFeatures(features_Gositestudis_4);
var lyr_Gositestudis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gositestudis_4, 
                style: style_Gositestudis_4,
                interactive: true,
                title: '<img src="styles/legend/Gositestudis_4.png" /> Géosites étudiés'
            });

lyr_BDOrthoIGN_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_ContourPNRVN_2.setVisible(true);lyr_Gosites_3.setVisible(true);lyr_Gositestudis_4.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,lyr_ESRIWorldTopo_1,lyr_ContourPNRVN_2,lyr_Gosites_3,lyr_Gositestudis_4];
lyr_ContourPNRVN_2.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'insee_2': 'insee_2', 'nom_2': 'nom_2', 'wikipedia_': 'wikipedia_', 'surf_ha_2': 'surf_ha_2', 'insee_3': 'insee_3', 'nom_3': 'nom_3', 'wikipedi_1': 'wikipedi_1', 'surf_ha_3': 'surf_ha_3', 'insee_2_2': 'insee_2_2', 'nom_2_2': 'nom_2_2', 'wikipedi_2': 'wikipedi_2', 'surf_ha_2_': 'surf_ha_2_', });
lyr_Gosites_3.set('fieldAliases', {'field_1': 'field_1', 'Nom du sit': 'Nom du sit', 'Coordonnee': 'Coordonnee', 'field_4': 'field_4', 'Commune': 'Commune', 'Descriptio': 'Descriptio', 'Indiquatio': 'Indiquatio', 'Degradatio': 'Degradatio', 'Valeur geo': 'Valeur geo', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', });
lyr_Gositestudis_4.set('fieldAliases', {'Nom du sit': 'Nom du sit', 'Commune': 'Commune', 'Descriptio': 'Descriptio', 'Indication': 'Indication', 'Degradatio': 'Degradatio', 'Valeur gé': 'Valeur gé', 'Image': 'Image', });
lyr_ContourPNRVN_2.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'insee_2': 'TextEdit', 'nom_2': 'TextEdit', 'wikipedia_': 'TextEdit', 'surf_ha_2': 'TextEdit', 'insee_3': 'TextEdit', 'nom_3': 'TextEdit', 'wikipedi_1': 'TextEdit', 'surf_ha_3': 'TextEdit', 'insee_2_2': 'TextEdit', 'nom_2_2': 'TextEdit', 'wikipedi_2': 'TextEdit', 'surf_ha_2_': 'TextEdit', });
lyr_Gosites_3.set('fieldImages', {'field_1': 'TextEdit', 'Nom du sit': 'TextEdit', 'Coordonnee': 'TextEdit', 'field_4': 'TextEdit', 'Commune': 'TextEdit', 'Descriptio': 'TextEdit', 'Indiquatio': 'TextEdit', 'Degradatio': 'TextEdit', 'Valeur geo': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', });
lyr_Gositestudis_4.set('fieldImages', {'Nom du sit': 'TextEdit', 'Commune': 'TextEdit', 'Descriptio': 'TextEdit', 'Indication': 'TextEdit', 'Degradatio': 'TextEdit', 'Valeur gé': '', 'Image': 'ExternalResource', });
lyr_ContourPNRVN_2.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'insee_2': 'no label', 'nom_2': 'no label', 'wikipedia_': 'no label', 'surf_ha_2': 'no label', 'insee_3': 'no label', 'nom_3': 'no label', 'wikipedi_1': 'no label', 'surf_ha_3': 'no label', 'insee_2_2': 'no label', 'nom_2_2': 'no label', 'wikipedi_2': 'no label', 'surf_ha_2_': 'no label', });
lyr_Gosites_3.set('fieldLabels', {'field_1': 'no label', 'Nom du sit': 'no label', 'Coordonnee': 'no label', 'field_4': 'no label', 'Commune': 'no label', 'Descriptio': 'no label', 'Indiquatio': 'no label', 'Degradatio': 'no label', 'Valeur geo': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', });
lyr_Gositestudis_4.set('fieldLabels', {'Nom du sit': 'no label', 'Commune': 'no label', 'Descriptio': 'inline label', 'Indication': 'inline label', 'Degradatio': 'inline label', 'Valeur gé': 'inline label', 'Image': 'no label', });
lyr_Gositestudis_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});