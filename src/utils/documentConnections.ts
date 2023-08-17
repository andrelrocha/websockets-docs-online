interface DataConnection {
    documentName: string;
    userName: string;
}

const documentConnections: DataConnection[] = []; 

function addConnection(dataConnection: DataConnection) {
    documentConnections.push(dataConnection);
}

function getUsersDocument(documentName: string) {
    return documentConnections
            .filter(connection => connection.documentName === documentName)
            .map(connection => connection.userName);
}

function removeConnection({ documentName, userName }: DataConnection) {
    const index = documentConnections
                    .findIndex(connection => connection.documentName === documentName && connection.userName === userName);

    if (index !== -1) {
        documentConnections.splice(index, 1);
    }
}

export { addConnection, getUsersDocument, removeConnection }