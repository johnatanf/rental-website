import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "../css/style.css"

const MAPBOX_TOKEN = "pk.eyJ1Ijoiam9obmF0YW5mIiwiYSI6ImNrbnIza2wxNjBwYjkycG56NHVzODc0YnUifQ.Hk4PvqiIaMXCDhB0eep5cw"

const Map = () => {
    const mapContainerRef = useRef(null)

    const [, setMap] = useState(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [115.26, -8.51], // Ubud, Bali
            zoom: 15,
        })

        new mapboxgl.Marker()
            .setLngLat([115.26, -8.51])
            .addTo(map);

        map.addControl(new mapboxgl.NavigationControl(), "top-right")

        setMap(map)

        return () => map.remove()
    }, [])

    return <div ref={mapContainerRef} className="map" />
}

export default Map