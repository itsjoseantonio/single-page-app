const getLocation = (values, setValues) => {
    if (!navigator.geolocation) {
        console.log('Not supported');
    } else {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setValues({
                    ...values,
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            },
            (error) => {
                console.log('Denied', error);
            }
        );
    }
};

export { getLocation };
