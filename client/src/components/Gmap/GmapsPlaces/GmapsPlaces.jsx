import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import PlacesDiv from './GmapsPlacesStyle';

export default class GmapsPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '', coords: "" };
    }

    handleChange = address => {
        this.setState({ address });
       
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({ ...this.state, coords: latLng, address:address }))
            .then((e)=>{
                this.props.getData(this.state)
            })
            .catch(error => console.error('Error', error));
    };


    render() {

        return (
            <div>
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={this.searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="input-wrapper">
                        <input
                            {...getInputProps({
                                placeholder: 'Busca la ciudad ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            </div>
        );
    }
}