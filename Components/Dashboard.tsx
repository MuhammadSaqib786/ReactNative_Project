import { FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

function Dashboard() {
  const employeeData = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Software Engineer',
      department: 'Engineering',
    },
    {
      id: 2,
      name: 'Bob Smith',
      position: 'Product Manager',
      department: 'Product',
    },
    {
      id: 3,
      name: 'Carol Lee',
      position: 'UX Designer',
      department: 'Design',
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'QA Engineer',
      department: 'Quality Assurance',
    },
    {
      id: 5,
      name: 'Eve Martin',
      position: 'DevOps Engineer',
      department: 'Operations',
    },
    {
      id: 6,
      name: 'Frank Turner',
      position: 'Data Scientist',
      department: 'Data Analytics',
    },
    {
      id: 7,
      name: 'Grace Liu',
      position: 'HR Manager',
      department: 'Human Resources',
    },
    {
      id: 8,
      name: 'Hassan Ahmed',
      position: 'Marketing Specialist',
      department: 'Marketing',
    },
    {
      id: 9,
      name: 'Isabel Wright',
      position: 'Business Analyst',
      department: 'Business Intelligence',
    },
    {
      id: 10,
      name: 'Jack Wilson',
      position: 'IT Support Engineer',
      department: 'Technical Support',
    },
  ];
  const EmployeeCard = ({ employee }: any) => {
    return (
      <View style={styles.firstCard}>
        <Image
          source={require('../assets/girl.jpeg')}
          style={styles.imgStyle}
        ></Image>
        <Text style={styles.textStyle}>{employee.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      
      <FlatList 
      data={employeeData}
      renderItem={({item}) => <EmployeeCard employee={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9A4FF',
    paddingTop: 100,
    flex: 1
  },
  firstCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textStyle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
});
export default Dashboard;
