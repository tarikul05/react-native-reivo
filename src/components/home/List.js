import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

class List extends Component{
    state = {
        admin:[],
        employee :[]
    }

    componentDidMount() {

        return fetch('https://gist.githubusercontent.com/tarikul05/0ab46210814c4213c08fdd871bd1eccb/raw/ec18460cc860430100b83589195ed3be69452e25/reivo-employee.json')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                admin: responseJson.admin,
                employee: responseJson.employee,
            }, function() {
              // In this block you can do something with new state.
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }


    render(){
        return(
            <View style = {styles.content}>
                <ScrollView>
                <Text style= {styles.heading}>
                    Admins
                </Text>
                {
                    this.state.admin.map((emp, index)=>(
                        <TouchableOpacity 
                        key = {emp.id}
                        name = {emp.name}
                        position = {emp.position}
                        style = {styles.incontent}
                        >
                        <Image source = {{ uri: emp.image }} style={styles.imageViewContainer} />
                        <Text style = {styles.text}>
                            {emp.name}
                        </Text>
                        </TouchableOpacity>
                    ))
                }

                <Text style= {styles.heading}>
                    Employee
                </Text>
                {
                    this.state.employee.map((emp, index)=>(
                        <TouchableOpacity 
                        key = {emp.id}
                        name = {emp.name}
                        position = {emp.position}
                        style = {styles.incontent}
                        >
                        <Image source = {{ uri: emp.image }} style={styles.imageViewContainer} />
                        <Text style = {styles.text}>
                            {emp.name}
                        </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            </View>

            
        )
    }
}
export default List;

const styles = StyleSheet.create({
    content:{
      padding: 10,
      marginTop: 15,
      backgroundColor: '#000000',
    },
    incontent:{
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
        flex:1,
        flexDirection: 'row'
      },
    heading: {
        fontSize:30,
        color: '#ffffff',
        backgroundColor:'#000000',
        alignItems: 'center',
        padding:10
    },
    text:{
        color: '#4f603c',
        width:'70%',

    },
    imageViewContainer: {
        width: 50,
        height: 50 ,
        margin: 10,
        borderRadius : 10
         
    },
})