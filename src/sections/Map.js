// Components //
import Maps from '../components/maps/Maps';

const Map = () => {
    return (
        <section id="map" className="pd-4 pb-4">
            <Maps
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAGpG4zRYhsx5K3LFFhDF75fWDKiNYssGA"
                containerElement={<div style={{ height: '450px' }}></div>}
                mapElement={<div style={{ height: '100%' }}></div>}
                loadingElement={<p>Cargando...</p>}
                isMarkerShown
            />
        </section>
    );
};

export default Map;
