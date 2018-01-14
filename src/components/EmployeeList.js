import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>
                    Test
                    </Text>
            </View>
        );
    }
}

export default connect(null, {})(EmployeeList);
