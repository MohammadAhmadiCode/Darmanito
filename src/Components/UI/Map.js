import React, { Component } from 'react'

// import NeshanMap from 'react-neshan-map-leaflet';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class  LocationMap extends Component {
    
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      
      render() {return (
        //   <NeshanMap
        //   options={{
        //       key: 'web.PPrZCZOfUsRDnQvy8H6YJrWoAaQV7UOI6yDRY70e',
        //       maptype: 'dreamy',
        //       poi: true,
        //       traffic: false,
        //       center: [35.715300, 51.419945],
        //       zoom: 13
        //   }}
        //   className={"map-Container"}
    
        //   onInit={(L, myMap) => {
        //       let marker = L.marker([35.715300, 51.419945])
        //       .addTo(myMap)
        //       .bindPopup('I am a popup.');
    
        //       myMap.on('click', function (e) {
        //       marker.setLatLng(e.latlng)
        //       });
    
        //       L.circle([35.715300, 51.419945], {
        //       color: 'blue',
        //       fillColor: 'blue',
        //       fillOpacity: 0.5,
        //       stroke: 'false',
        //       radius: 50
        //       }).addTo(myMap);
        //   }}
        //   />
        <div className='map-Container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 1 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      );}
  
}

export default LocationMap;


