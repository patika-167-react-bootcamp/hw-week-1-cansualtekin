const folders = [
    {
        id: 5,
        name: 'Klasör 1',
        files: [
            { id: 17, name: 'profil.jpg' },
            { id: 18, name: 'manzara.jpg' },
        ],
    },
    {
        id: 6,
        name: 'Klasör 2',
        files: [
            { id: 21, name: 'foto.png' },
            { id: 22, name: 'dosya.xls' },
        ],
    },
    {
        id: 7,
        name: 'Klasör 3',
    },
]

// Move method 

function move(arr, oldId, newId) {
    const foundFileId = folders.find(element => element.id);
    if (newId >= arr.length) {
        var k = newId - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(newId, 0, arr.splice(oldId, 1)[0]);
    return arr;
};


// Copy method

function copy(fileId, folderId) {
    const root = 0
    folders.find(x => x.id === folderId).files
    folders.find(x => x.id === folderId).files = []
    const newFolder = folders.find(x => x.id === folderId).files
    for (const i = 0; i < folders.length; i++) {
        newFile = folders[i].files.find(x => x.id === fileId)
        if (newFile) {
            root += 1
            if (!newFolder.find(x => x.id === fileId)) {
                newFolder.push(newFile)
            }
        }
    }
}

// Remove method

function remove(id) {

    const findFolder = folders.find((findFolder) => findFolder.files && findFolder.files.find((file) => file.id === id))
    const copyIndex = findFolder.files.findIndex((f) => f.id === id)
    findFolder.files.splice(copyIndex, 1);
    console.log(folders.map((f) => f.files));
    return(findFolder)   

}


// Remove folder method

function removeFolder(folderId) {
    folders.find(x => x.id === folderId)
    folders.splice(folders.indexOf(folders.find(x => x.id === folderId)), 1)
}

// ParentFolderOf method

function parentFolderOf(id) {
    const file = folders.find(folder => {
        return folder.files.find(file => file.id === id)
    })
   
}



// console.log(move(18, 6));
// console.log(copy(18, 7));
// console.log(remove(17));
// console.log(removeFolder(5));
// console.log(parentFolderOf(18));