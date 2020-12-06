INSERT INTO GraphqlDurations
    ( operation, operationType, duration, method )
    VALUES 
	('SearchPatients', 'query', 0.038232603780821925, 'AVG'), 
	('SearchPatients', 'query', 0.283102407, 'MAX'), 
	('SearchPatients', 'query', 0.030418564, 'MIN'), 
	('onCaseEvent', 'subscription', 29.297187731500003, 'AVG'), 
	('onCaseEvent', 'subscription', 87.068694843, 'MAX'), 
	('onCaseEvent', 'subscription', 1.036246691, 'MIN'), 
	('onDigitalConsultationEvent', 'subscription', 29.296015267625002, 'AVG'), 
	('onDigitalConsultationEvent', 'subscription', 87.067924051, 'MAX'), 
	('onDigitalConsultationEvent', 'subscription', 1.0330507309999999, 'MIN'), 
	('GetExporterTemplates', 'query', 0.750366427, 'AVG'), 
	('GetExporterTemplates', 'query', 0.750366427, 'MAX'), 
	('GetExporterTemplates', 'query', 0.750366427, 'MIN'), 
	('GetExporterObjects', 'query', 1.342834366, 'AVG'), 
	('GetExporterObjects', 'query', 1.342834366, 'MAX'), 
	('GetExporterObjects', 'query', 1.342834366, 'MIN'), 
	('GetStatistics', 'query', 1.369814347, 'AVG'), 
	('GetStatistics', 'query', 1.369814347, 'MAX'), 
	('GetStatistics', 'query', 1.369814347, 'MIN'), 
	('onExportFinished', 'subscription', 3.594862628, 'AVG'), 
	('onExportFinished', 'subscription', 3.594862628, 'MAX'), 
	('onExportFinished', 'subscription', 3.594862628, 'MIN'), 
	('GetFormOptions', 'query', 0.06081537216666666, 'AVG'), 
	('GetFormOptions', 'query', 0.086117641, 'MAX'), 
	('GetFormOptions', 'query', 0.037511101, 'MIN'), 
	('Institute', 'query', 0.1368696754, 'AVG'), 
	('Institute', 'query', 0.147797583, 'MAX'), 
	('Institute', 'query', 0.107967637, 'MIN'), 
	('Patient', 'query', 0.1902697677777778, 'AVG'), 
	('Patient', 'query', 0.392234878, 'MAX'), 
	('Patient', 'query', 0.054857501, 'MIN'), 
	('Timeline', 'query', 0.26304676274999994, 'AVG'), 
	('Timeline', 'query', 0.791169802, 'MAX'), 
	('Timeline', 'query', 0.073078882, 'MIN'), 
	('Scores', 'query', 0.3496531722, 'AVG'), 
	('Scores', 'query', 0.84927949, 'MAX'), 
	('Scores', 'query', 0.070727576, 'MIN'), 
	('CaseOverview', 'query', 0.4167447054, 'AVG'), 
	('CaseOverview', 'query', 0.879117405, 'MAX'), 
	('CaseOverview', 'query', 0.114138533, 'MIN'), 
	('DigitalConsultation', 'query', 0.8257044498333332, 'AVG'), 
	('DigitalConsultation', 'query', 2.126055731, 'MAX'), 
	('DigitalConsultation', 'query', 0.067444276, 'MIN'), 
	('onPatientEvent', 'subscription', 15.305543917, 'AVG'), 
	('onPatientEvent', 'subscription', 56.849588238, 'MAX'), 
	('onPatientEvent', 'subscription', 0.921173806, 'MIN'), 
	('onMeChange', 'subscription', 25.628975045333334, 'AVG'), 
	('onMeChange', 'subscription', 56.849443525, 'MAX'), 
	('onMeChange', 'subscription', 9.614538384, 'MIN'), 
	('DashboardMeta', 'query', 0.135770482, 'AVG'), 
	('DashboardMeta', 'query', 0.156736053, 'MAX'), 
	('DashboardMeta', 'query', 0.106909975, 'MIN'), 
	('DashboardCases', 'query', 0.24447291766666668, 'AVG'), 
	('DashboardCases', 'query', 0.301450932, 'MAX'), 
	('DashboardCases', 'query', 0.207103021, 'MIN'), 
	('DashboardDigitalConsultations', 'query', 0.5839336336666666, 'AVG'), 
	('DashboardDigitalConsultations', 'query', 0.66521876, 'MAX'), 
	('DashboardDigitalConsultations', 'query', 0.510050492, 'MIN'), 
	('Documentation', 'query', 0.269271702, 'AVG'), 
	('Documentation', 'query', 0.282112847, 'MAX'), 
	('Documentation', 'query', 0.252003516, 'MIN'), 
	('GetFormOptionsById', 'query', 0.042929259, 'AVG'), 
	('GetFormOptionsById', 'query', 0.042929259, 'MAX'), 
	('GetFormOptionsById', 'query', 0.042929259, 'MIN'), 
	('updatePatient', 'mutation', 0.052046554, 'AVG'), 
	('updatePatient', 'mutation', 0.052046554, 'MAX'), 
	('updatePatient', 'mutation', 0.052046554, 'MIN'), 
	('SearchCases', 'query', 0.038974493802919716, 'AVG'), 
	('SearchCases', 'query', 0.28113461, 'MAX'), 
	('SearchCases', 'query', 0.028725192, 'MIN'), 
	('UserList', 'query', 0.083995492, 'AVG'), 
	('UserList', 'query', 0.115506339, 'MAX'), 
	('UserList', 'query', 0.046203322, 'MIN'), 
	('getPermissionsGroups', 'query', 0.06434748675, 'AVG'), 
	('getPermissionsGroups', 'query', 0.123301005, 'MAX'), 
	('getPermissionsGroups', 'query', 0.040937753, 'MIN'), 
	('getRoles', 'query', 0.13265196740000001, 'AVG'), 
	('getRoles', 'query', 0.163833908, 'MAX'), 
	('getRoles', 'query', 0.09240796, 'MIN'), 
	('Devices', 'query', 0.093185585, 'AVG'), 
	('Devices', 'query', 0.140355973, 'MAX'), 
	('Devices', 'query', 0.046015197, 'MIN'), 
	('ConnectorState', 'query', 0.033103777, 'AVG'), 
	('ConnectorState', 'query', 0.033103777, 'MAX'), 
	('ConnectorState', 'query', 0.033103777, 'MIN'), 
	('stopListeningForConnectorClients', 'mutation', 0.0494812, 'AVG'), 
	('stopListeningForConnectorClients', 'mutation', 0.0494812, 'MAX'), 
	('stopListeningForConnectorClients', 'mutation', 0.0494812, 'MIN'), 
	('User', 'query', 0.087595817, 'AVG'), 
	('User', 'query', 0.087595817, 'MAX'), 
	('User', 'query', 0.087595817, 'MIN'), 
	('createCase', 'mutation', 0.234085999, 'AVG'), 
	('createCase', 'mutation', 0.234085999, 'MAX'), 
	('createCase', 'mutation', 0.234085999, 'MIN'), 
	('createDocumentation', 'mutation', 0.176981475, 'AVG'), 
	('createDocumentation', 'mutation', 0.176981475, 'MAX'), 
	('createDocumentation', 'mutation', 0.176981475, 'MIN'), 
	('updateDocumentation', 'mutation', 0.14152410260869566, 'AVG'), 
	('updateDocumentation', 'mutation', 0.186219304, 'MAX'), 
	('updateDocumentation', 'mutation', 0.127107535, 'MIN'), 
	('createDigitalConsultation', 'mutation', 0.34083233, 'AVG'), 
	('createDigitalConsultation', 'mutation', 0.34083233, 'MAX'), 
	('createDigitalConsultation', 'mutation', 0.34083233, 'MIN')