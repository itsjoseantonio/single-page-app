import { useState, useEffect } from 'react';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';

// Firebase //
import { db } from '../../config/firebase.settings';

const Map = (props) => {
    const [locations, setLocation] = useState(null);

    const getLatLong = async () => {
        db.collection('tasks').onSnapshot((querySnapshot) => {
            const locations = [];
            querySnapshot.forEach((doc) => {
                locations.push({ ...doc.data() });
            });
            setLocation(locations);
        });
    };

    useEffect(() => {
        getLatLong();
    }, []);

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: -12.1450214, lng: -76.9906137 }}
        >
            {props.isMarkerShown &&
                locations &&
                locations.map(({ lat, long }, i) => (
                    <Marker key={i} position={{ lat: lat, lng: long }}>
                        <InfoWindow
                            position={{
                                lat: lat,
                                lng: long,
                            }}
                        >
                            <div>
                                <p style={{ marginBottom: '0px' }}>
                                    Lat: {lat}
                                </p>
                                <p style={{ marginBottom: '0px' }}>
                                    Long: {long}
                                </p>
                            </div>
                        </InfoWindow>
                    </Marker>
                ))}
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(Map));
