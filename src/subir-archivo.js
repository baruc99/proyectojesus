const Url    = 'http://10.1.16.223:8080/uploadFilePredial/webresources/upload';

// ArchivoSubir :: File
const subirArchivo = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append('file', archivoSubir );

    try { 
        
        const resp = await fetch( Url, {
            method: 'POST',
            body: formData
        });

        console.log( resp );

        // if ( resp.ok ) {
        //     const Resp = await resp.json();
        //     // return cloudResp.secure_url; 
        // } else {
        //     throw await resp.json();
        // }

    } catch( err ) {
        throw err;
    }

}