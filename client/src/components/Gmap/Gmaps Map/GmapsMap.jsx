import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'


export default class GmapMap extends Component {
    constructor(props){
        super(props)
        
    }

    state = {
        lat:40.416628,
        lng:-3.703810,
    }

    static defaultProps = {
        center: {
            lat:40.416628,
            lng:-3.703810,
        },
        zoom: 16
    };

    handleDrag(e){
        console.log(e)
     
    }
    render() {
        const handleApiLoaded = (map, maps) => {
          };
        return (
            <div style={{ height: '200px', width: '100%', zIndex:0}}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAN0mEFC4qZuRccTd0vgrFsddCVbVzLx1o" }}
                    defaultCenter={this.props.pos && this.props.pos}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
                    
                    <Marker
                    lat={this.props.pos.coordinates}
                    lng={this.props.pos.coordinates}
                    draggable={true}/>
            
                </GoogleMapReact>
            </div>
        )
    }
}