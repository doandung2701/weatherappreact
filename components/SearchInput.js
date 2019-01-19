import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleChangeText = (newLocation) => {
        this.setState({
            text: newLocation
        })
    }
    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;
        if (!text) return;
        onSubmit(text);
        this.setState({ text: '' })
    }
    render() {
        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                    value={text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 300,
    },
    textInput: {
        flex: 1,
        color: 'white'
    }
})

export default SearchInput;
SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
SearchInput.defaultProps = {
    placeholder: '',
};