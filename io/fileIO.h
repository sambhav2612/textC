char *editorRowsToString(int *buflen) {
    int totlen = 0;
    int j;

    // add total length
    for (j = 0; j < E.numrows; ++j) {
        totlen += E.row[j].size + 1;
    }

    *buflen = totlen;

    char *buf = malloc(totlen);
    char *p = buf;

    for (j = 0; j < E.numrows; ++j) {
        memcpy(p, E.row[j].chars, E.row[j].size);
        p += E.row[j].size;
        *p = '\n';
        p++;
    }

    return buf;
}

void editorSave() {
    if (E.filename == NULL) {
        return;
    }

    int len;
    char *buf = editorRowsToString(&len);
    
    int fd = open(E.filename, O_RDWR | O_CREAT, 0644);
    ftruncate(fd, len);
    write(fd, buf, len);
    close(fd);
    free(buf);
}