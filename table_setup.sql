create table if not exists GraphqlDurations (
  id              char(36)                                    not null  default uuid(),
  created         datetime                                    not null  default current_timestamp(),
  operation       varchar(255)                                not null,
  operationType   enum('QUERY', 'MUTATION', 'SUBSCRIPTION')   not null,
  duration        decimal(6,4)                                not null,
  method          enum('AVG', 'MIN', 'MAX')                   not null
) engine InnoDB charset utf8;