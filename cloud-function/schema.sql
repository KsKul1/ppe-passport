CREATE TABLE records (
    kind Utf8 NOT NULL,
    key Utf8 NOT NULL,
    payload Utf8 NOT NULL,
    revision Int64 NOT NULL,
    PRIMARY KEY (kind, key)
);
