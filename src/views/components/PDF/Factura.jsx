import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from '@react-pdf/renderer';
import { Table, TableWrapper, Row, Cell } from '@react-pdf/renderer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Descripci�n/Producto', 'Cantidad', 'Importe'],
      tableData: [
        ['L�pices HB', '1', '5.00$'],
      ],
      tableHead2: ['Total'],
      tableData2: [
        ['0.00$']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <Page>
        <View style={styles.view}>
          <View style={styles.container}>
            <View style={styles.containerb1}>
              <View style={styles.container_logo}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                  }} />
              </View>
              <View style={styles.container_infoge}>
                <Text style={styles.txt1}>GESTICK</Text>
                <Text style={styles.txt1}>gestick@gesticksa.com</Text>
                <Text style={styles.txt1}>91-1234-567</Text>
              </View>
              <View style={styles.container_infofac}>
                <Text style={styles.txt1}>FACTURA No. 1</Text>
                <Text style={styles.txt1}>Fecha: 03/01/2024</Text>
              </View>
            </View>


            <View style={styles.containerb2}>
              <View style={styles.container_infocli}>
                <Text style={styles.txt2}>Datos del cliente</Text>
                <Text style={styles.txt2}>Alejandro S�nchez Cano</Text>
              </View>
            </View>


            <View style={styles.containerb3}>
              <View style={styles.container_table}>
                <Table>
                  <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                  {
                    state.tableData.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {
                          rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
                          ))
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </View>
            </View>


            <View style={styles.containerb4}>
              <View style={styles.container_table2}>
                <Table>
                  <Row data={state.tableHead2} style={styles.head2} textStyle={styles.text} />
                  {
                    state.tableData2.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row2}>
                        {
                          rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
                          ))
                        }
                      </TableWrapper>
                    ))
                  }
                </Table>
              </View>
            </View>


            <View style={styles.containerb5}>
              <View style={styles.container_announce}>
                <Text>El pago se realizar� en un plazo de tres meses desde la emisi�n de esta factura, se realizar� mediante transferencia bancaria.</Text>
              </View>
            </View>

          </View>
        </View>
      </Page>

    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00000',
    flex: 1
  },
  container: {
    backgroundColor: '#F5F5F5',
    width: 800,
    height: 900,
    alignItems: 'center'
  },
  head: {
    height: 50,
    width: 700,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#9E9E9E',
    borderTopWidth: 1,
    height: 50,
    width: 700,
  },
  head2: {
    height: 50,
    width: 400,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#9E9E9E',
    borderTopWidth: 1,
    height: 50,
    width: 400,
  },
  text: {
    margin: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#222'
  },
  logo: {
    width: 100,
    height: 100,
  },
  containerb1: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
    height: 100,
    width: 700,
  },
  containerb2: {
    marginTop: 50,
    height: 100,
    width: 700,
    backgroundColor: '#F5F5F5',
  },
  containerb3: {
    marginTop: 30,
    marginBottom: 0,
    backgroundColor: '#F5F5F5',
    width: 700,
  },
  containerb4: {
    marginTop: 50,
    backgroundColor: '#F5F5F5',
    width: 700,
  },
  containerb5: {
    marginTop: 225,
    backgroundColor: '#F5F5F5',
    width: 700,
  },
  container_logo: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  container_infoge: {
    height: 100,
    width: 170,
  },
  container_infofac: {
    height: 100,
    marginLeft: 300
  },
  container_infocli: {
    height: 100,
    justifyContent: 'center',
  },
  container_announce: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_table: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_table2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});
