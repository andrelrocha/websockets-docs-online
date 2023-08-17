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

export { addConnection, getUsersDocument }