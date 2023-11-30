var wms_layers = [];

var format_tatotod_0 = new ol.format.GeoJSON();
var features_tatotod_0 = format_tatotod_0.readFeatures(json_tatotod_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tatotod_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tatotod_0.addFeatures(features_tatotod_0);
var lyr_tatotod_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tatotod_0, 
                style: style_tatotod_0,
                interactive: true,
    title: 'tatotod<br />\
    <img src="styles/legend/tatotod_0_0.png" /> Bandara / Pelabuhan<br />\
    <img src="styles/legend/tatotod_0_1.png" /> Belukar<br />\
    <img src="styles/legend/tatotod_0_2.png" /> Belukar Rawa<br />\
    <img src="styles/legend/tatotod_0_3.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/tatotod_0_4.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/tatotod_0_5.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/tatotod_0_6.png" /> Pemukiman<br />\
    <img src="styles/legend/tatotod_0_7.png" /> Perkebunan<br />\
    <img src="styles/legend/tatotod_0_8.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/tatotod_0_9.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/tatotod_0_10.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/tatotod_0_11.png" /> Sawah<br />\
    <img src="styles/legend/tatotod_0_12.png" /> Tambak<br />\
    <img src="styles/legend/tatotod_0_13.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/tatotod_0_14.png" /> <br />'
        });
var format_GEOLGEOMETRIS_1 = new ol.format.GeoJSON();
var features_GEOLGEOMETRIS_1 = format_GEOLGEOMETRIS_1.readFeatures(json_GEOLGEOMETRIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLGEOMETRIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLGEOMETRIS_1.addFeatures(features_GEOLGEOMETRIS_1);
var lyr_GEOLGEOMETRIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLGEOMETRIS_1, 
                style: style_GEOLGEOMETRIS_1,
                interactive: true,
                title: '<img src="styles/legend/GEOLGEOMETRIS_1.png" /> GEOL GEOMETRIS'
            });
var format_GEOL_2 = new ol.format.GeoJSON();
var features_GEOL_2 = format_GEOL_2.readFeatures(json_GEOL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOL_2.addFeatures(features_GEOL_2);
var lyr_GEOL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOL_2, 
                style: style_GEOL_2,
                interactive: true,
    title: 'GEOL<br />\
    <img src="styles/legend/GEOL_2_0.png" /> Aliran Lava<br />\
    <img src="styles/legend/GEOL_2_1.png" /> Batuan gunungapi Lamasi<br />\
    <img src="styles/legend/GEOL_2_2.png" /> Batuan Gunungapi Talaya<br />\
    <img src="styles/legend/GEOL_2_3.png" /> Batuan Terobosan<br />\
    <img src="styles/legend/GEOL_2_4.png" /> Batugamping terumbu<br />\
    <img src="styles/legend/GEOL_2_5.png" /> Batupasir bersusunan Andesit<br />\
    <img src="styles/legend/GEOL_2_6.png" /> Endapan Kipas Aluvium<br />\
    <img src="styles/legend/GEOL_2_7.png" /> Endapan Permukaan Tak Bernama<br />\
    <img src="styles/legend/GEOL_2_8.png" /> Formasi Latimojong<br />\
    <img src="styles/legend/GEOL_2_9.png" /> Formasi Sekala<br />\
    <img src="styles/legend/GEOL_2_10.png" /> Formasi Tpraja<br />\
    <img src="styles/legend/GEOL_2_11.png" /> Konglomera<br />\
    <img src="styles/legend/GEOL_2_12.png" /> Lamprofir Tak bernama<br />\
    <img src="styles/legend/GEOL_2_13.png" /> Napal<br />\
    <img src="styles/legend/GEOL_2_14.png" /> Sedimen Tak Bernama<br />\
    <img src="styles/legend/GEOL_2_15.png" /> Serpih<br />\
    <img src="styles/legend/GEOL_2_16.png" /> Tufa<br />\
    <img src="styles/legend/GEOL_2_17.png" /> Tufa Barufu<br />\
    <img src="styles/legend/GEOL_2_18.png" /> <br />'
        });
var format_DASGEOMETRIS_3 = new ol.format.GeoJSON();
var features_DASGEOMETRIS_3 = format_DASGEOMETRIS_3.readFeatures(json_DASGEOMETRIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASGEOMETRIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASGEOMETRIS_3.addFeatures(features_DASGEOMETRIS_3);
var lyr_DASGEOMETRIS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DASGEOMETRIS_3, 
                style: style_DASGEOMETRIS_3,
                interactive: true,
                title: '<img src="styles/legend/DASGEOMETRIS_3.png" /> DAS GEOMETRIS'
            });
var format_contour300_4 = new ol.format.GeoJSON();
var features_contour300_4 = format_contour300_4.readFeatures(json_contour300_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contour300_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contour300_4.addFeatures(features_contour300_4);
var lyr_contour300_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contour300_4, 
                style: style_contour300_4,
                interactive: true,
    title: 'contour 300<br />\
    <img src="styles/legend/contour300_4_0.png" /> 0<br />\
    <img src="styles/legend/contour300_4_1.png" /> 300,000000000000000<br />\
    <img src="styles/legend/contour300_4_2.png" /> 600,000000000000000<br />\
    <img src="styles/legend/contour300_4_3.png" /> 900,000000000000000<br />\
    <img src="styles/legend/contour300_4_4.png" /> 1200,000000000000000<br />\
    <img src="styles/legend/contour300_4_5.png" /> 1500,000000000000000<br />\
    <img src="styles/legend/contour300_4_6.png" /> 1800,000000000000000<br />\
    <img src="styles/legend/contour300_4_7.png" /> 2100,000000000000000<br />\
    <img src="styles/legend/contour300_4_8.png" /> 2400,000000000000000<br />\
    <img src="styles/legend/contour300_4_9.png" /> 2700,000000000000000<br />\
    <img src="styles/legend/contour300_4_10.png" /> 3000,000000000000000<br />\
    <img src="styles/legend/contour300_4_11.png" /> 3300,000000000000000<br />\
    <img src="styles/legend/contour300_4_12.png" /> <br />'
        });
var format_Clipped_5 = new ol.format.GeoJSON();
var features_Clipped_5 = format_Clipped_5.readFeatures(json_Clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_5.addFeatures(features_Clipped_5);
var lyr_Clipped_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_5, 
                style: style_Clipped_5,
                interactive: true,
                title: '<img src="styles/legend/Clipped_5.png" /> Clipped'
            });

lyr_tatotod_0.setVisible(true);lyr_GEOLGEOMETRIS_1.setVisible(true);lyr_GEOL_2.setVisible(true);lyr_DASGEOMETRIS_3.setVisible(true);lyr_contour300_4.setVisible(true);lyr_Clipped_5.setVisible(true);
var layersList = [lyr_tatotod_0,lyr_GEOLGEOMETRIS_1,lyr_GEOL_2,lyr_DASGEOMETRIS_3,lyr_contour300_4,lyr_Clipped_5];
lyr_tatotod_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', 'layer': 'layer', 'path': 'path', });
lyr_GEOLGEOMETRIS_1.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GEOL_2.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DASGEOMETRIS_3.set('fieldAliases', {'fid': 'fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_contour300_4.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Clipped_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_tatotod_0.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GEOLGEOMETRIS_1.set('fieldImages', {'SYMBOLS': '', 'NM_LEMBAR': '', 'NO_LEMBAR': '', 'PROJECT': '', 'NAME': '', 'FORMATION': '', 'CLASS_LITH': '', 'T_CLASS_EN': '', 'B_CLASS_EN': '', 'DESCRIP1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_GEOL_2.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NM_LEMBAR': 'TextEdit', 'NO_LEMBAR': 'Range', 'PROJECT': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'CLASS_LITH': 'TextEdit', 'T_CLASS_EN': 'TextEdit', 'B_CLASS_EN': 'TextEdit', 'DESCRIP1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DASGEOMETRIS_3.set('fieldImages', {'fid': '', 'objectid_1': '', 'objectid': '', 'kode_prov': '', 'nama_das': '', 'luas_ha': '', 'kel_m': '', 'prioritas_': '', 'kd_tematik': '', 'kd_region': '', 'kd_lintas': '', 'kd_das': '', 'wil_kerja': '', 'kd_urutdas': '', 'globalid': '', 'st_area_sh': '', 'st_length_': '', 'st_area(sh': '', 'st_length(': '', });
lyr_contour300_4.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Clipped_5.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_tatotod_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GEOLGEOMETRIS_1.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'no label', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GEOL_2.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'no label', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DASGEOMETRIS_3.set('fieldLabels', {'fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_contour300_4.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_Clipped_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Clipped_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});