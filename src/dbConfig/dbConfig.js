import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect( process.env.MONGO_URI );
        const connection = mongoose.connection;

        connection.on( 'connected', () => {
            console.log( 'Database Connected' )
        } )

        connection.on( 'error', ( err ) => {
            console.log( 'Database Connection problem, please check that MongoDB is running correctly', + err );
            process.exit()
        } )
    } catch ( error ) {
        console.log( error );
    }
}