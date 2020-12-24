import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default function Schedule() {
    this.state = {
        tableHead: ['', 'Head1', 'Head2', 'Head3'],
        tableTitle: ['Title1', 'Title2', 'Title3', 'Title4'],
        tableData: [
          ['work', 'lesson', 'lesson'],
          ['work', 'lesson', 'lesson'],
          ['work', 'lesson', 'lesson'],
          ['work', 'lesson', 'lesson']
        ]
      }

    return (
        <View style={globalStyles.container}>
            <Text>Schedule</Text>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
});